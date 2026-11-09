#!/usr/bin/env node
/**
 * AVA compliance report: merges scorecard.json with evidence-map.json
 * (derived solely from assets/AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md).
 *
 * Usage:
 *   node generate-compliance-report.js --scorecard <post-mitigation scorecard.json> [options]
 *
 * Options:
 *   --baseline-scorecard <path>   Prior run for before/after (retest verification)
 *   --mitigations <path>          JSON describing fixes applied (optional)
 *   --output-html <filename>      Default: compliance-report.html, verification, or mitigation-outcome name
 *   --sector commercial|government|healthcare   (or --commercial | --government | --healthcare flags)
 *   --ava-design <path>           Infer sector from design/sage JSON when sector not set
 *   --mitigation-report           After retest: compliance-mitigation-outcome-report.html
 *
 * Legacy: --deployment commercial|us-government maps to --sector.
 *
 * Outputs: compliance-report.html (or verification / mitigation-outcome name); compliance-report.pdf if Puppeteer available.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

function parseArgs() {
  const argv = process.argv.slice(2);
  const out = {
    scorecard: null,
    baselineScorecard: null,
    mitigations: null,
    outputHtml: null,
    outDir: null,
    customer: null,
    axlSessionsRoot: null,
    sessionDir: null,
    lifecycleDir: null,
    specPath: null,
    testCasesDir: null,
    evidenceMap: null,
    themesFrom: 'all',
    sector: null,
    sectorExplicit: false,
    avaDesign: null,
    mitigationReport: false,
    evaluationSuite: null,
    avaRole: null,
    includeOutOfScopeThemes: false,
    roleProfiles: null,
    pdf: true,
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--scorecard' && argv[i + 1]) out.scorecard = path.resolve(argv[++i]);
    else if (argv[i] === '--baseline-scorecard' && argv[i + 1]) out.baselineScorecard = path.resolve(argv[++i]);
    else if (argv[i] === '--mitigations' && argv[i + 1]) out.mitigations = path.resolve(argv[++i]);
    else if (argv[i] === '--output-html' && argv[i + 1]) out.outputHtml = argv[++i];
    else if (argv[i] === '--out-dir' && argv[i + 1]) out.outDir = path.resolve(argv[++i]);
    else if (argv[i] === '--customer' && argv[i + 1]) out.customer = argv[++i];
    else if (argv[i] === '--axl-sessions-root' && argv[i + 1]) out.axlSessionsRoot = path.resolve(argv[++i]);
    else if (argv[i] === '--session-dir' && argv[i + 1]) out.sessionDir = argv[++i];
    else if (argv[i] === '--lifecycle-dir' && argv[i + 1]) out.lifecycleDir = argv[++i];
    else if (argv[i] === '--spec' && argv[i + 1]) out.specPath = path.resolve(argv[++i]);
    else if (argv[i] === '--test-cases-dir' && argv[i + 1]) out.testCasesDir = path.resolve(argv[++i]);
    else if (argv[i] === '--evidence-map' && argv[i + 1]) out.evidenceMap = path.resolve(argv[++i]);
    else if (argv[i] === '--themes-from' && argv[i + 1]) out.themesFrom = argv[++i];
    else if (argv[i] === '--sector' && argv[i + 1]) {
      out.sector = argv[++i];
      out.sectorExplicit = true;
    } else if (argv[i] === '--commercial') {
      out.sector = 'commercial';
      out.sectorExplicit = true;
    } else if (argv[i] === '--government' || argv[i] === '--goverment') {
      out.sector = 'government';
      out.sectorExplicit = true;
    } else if (argv[i] === '--healthcare') {
      out.sector = 'healthcare';
      out.sectorExplicit = true;
    } else if (argv[i] === '--deployment' && argv[i + 1]) {
      const d = argv[++i].toLowerCase();
      out.sector = d === 'us-government' ? 'government' : d;
      out.sectorExplicit = true;
    } else if (argv[i] === '--ava-design' && argv[i + 1]) out.avaDesign = path.resolve(argv[++i]);
    else if (argv[i] === '--mitigation-report') out.mitigationReport = true;
    else if (argv[i] === '--evaluation-suite' && argv[i + 1]) out.evaluationSuite = argv[++i].toLowerCase();
    else if (argv[i] === '--ava-role' && argv[i + 1]) out.avaRole = argv[++i].toLowerCase();
    else if (argv[i] === '--role-profiles' && argv[i + 1]) out.roleProfiles = path.resolve(argv[++i]);
    else if (argv[i] === '--include-out-of-scope-themes') out.includeOutOfScopeThemes = true;
    else if (argv[i] === '--no-pdf') out.pdf = false;
  }
  return out;
}

function normalizeSector(input) {
  const s = String(input || 'commercial')
    .toLowerCase()
    .trim();
  if (s === 'us-government' || s === 'government' || s === 'gov') return 'government';
  if (s === 'healthcare' || s === 'health' || s === 'hipaa') return 'healthcare';
  if (s === 'commercial' || s === 'private') return 'commercial';
  throw new Error(`Unknown sector "${input}". Use commercial, government, or healthcare.`);
}

function controlSectors(c) {
  if (c.sectors && c.sectors.length) return c.sectors;
  const applies = c.applies_to && c.applies_to.length ? c.applies_to : null;
  if (applies?.includes('us-government')) return ['government'];
  if (applies?.includes('all')) return ['all'];
  return ['all'];
}

/** Sector profiles: government-only and healthcare-only rows are filtered by active sector. */
function controlMatchesSector(c, sector) {
  const sectors = controlSectors(c);
  if (sectors.includes('all')) return true;
  if (sector === 'commercial') {
    if (sectors.includes('commercial')) return true;
    if (sectors.length === 1 && (sectors[0] === 'government' || sectors[0] === 'healthcare')) return false;
    if (sectors.includes('government') && !sectors.includes('commercial')) return false;
    if (sectors.includes('healthcare') && !sectors.includes('commercial')) return false;
    return true;
  }
  if (sector === 'government') {
    if (sectors.includes('government') || sectors.includes('commercial')) return true;
    if (sectors.length === 1 && sectors[0] === 'healthcare') return false;
    return true;
  }
  if (sector === 'healthcare') {
    if (sectors.includes('healthcare') || sectors.includes('commercial')) return true;
    if (sectors.length === 1 && sectors[0] === 'government') return false;
    return !sectors.includes('government') || sectors.includes('commercial');
  }
  return false;
}

function inferEvaluationSuite(scData) {
  const ids = (scData.perScenario || []).map((s) => s.testCaseId || '').filter(Boolean);
  if (ids.length === 0) return 'functional';
  const cornerish = (id) => /^corner[-_]/i.test(id);
  const empathyish = (id) => /^empathy[-_]/i.test(id);
  if (ids.every(cornerish)) return 'corner-security';
  if (ids.every(empathyish)) return 'empathy';
  if (ids.some(cornerish)) return 'corner-security';
  return 'functional';
}

function filterEvidenceMapForEvaluationSuite(evidenceMap, suite) {
  if (!suite || suite === 'all') return { ...evidenceMap, _activeEvaluationSuite: suite || 'all' };
  const controls = (evidenceMap.controls || []).filter((c) => {
    const suites =
      c.evaluation_suites && c.evaluation_suites.length
        ? c.evaluation_suites
        : ['functional', 'corner-security', 'empathy'];
    return suites.includes(suite) || suites.includes('all');
  });
  return { ...evidenceMap, controls, _activeEvaluationSuite: suite };
}

function loadRoleProfiles(customPath) {
  const p = customPath || path.join(path.resolve(__dirname, '..'), 'data', 'ava-role-profiles.json');
  if (!fs.existsSync(p)) return null;
  try {
    return loadJson(p);
  } catch {
    return null;
  }
}

function resolveRoleProfile({ avaRole, sessionDir, customer, customerLabel, roleProfilesPath }) {
  const doc = loadRoleProfiles(roleProfilesPath);
  if (!doc?.profiles) return null;
  if (avaRole && doc.profiles[avaRole]) return { id: avaRole, ...doc.profiles[avaRole] };
  const hay = [sessionDir, customer, customerLabel].filter(Boolean).join(' ').toLowerCase();
  for (const [id, prof] of Object.entries(doc.profiles)) {
    for (const h of prof.session_hints || []) {
      if (hay.includes(String(h).toLowerCase())) return { id, ...prof };
    }
  }
  return null;
}

function applyRoleProfileToRows(rows, roleProfile, includeOutOfScope) {
  if (!roleProfile?.deferred_control_ids?.length) {
    return { rows, deferredThemes: [] };
  }
  const deferredIds = new Set(roleProfile.deferred_control_ids);
  const deferredThemes = new Map();
  for (const r of rows) {
    const kept = [];
    const dropped = [];
    for (const c of r.matchedControls || []) {
      if (deferredIds.has(c.id)) dropped.push(c);
      else kept.push(c);
    }
    r.deferredControls = dropped;
    if (!includeOutOfScope) r.matchedControls = kept;
    else r.matchedControls = [...kept, ...dropped.map((c) => ({ ...c, _deferredRole: true }))];
    for (const c of dropped) {
      if (!deferredThemes.has(c.id)) {
        deferredThemes.set(c.id, {
          id: c.id,
          title: c.title,
          rationale: (roleProfile.deferred_rationale || {})[c.id] || roleProfile.description || '',
        });
      }
    }
  }
  return { rows, deferredThemes: [...deferredThemes.values()] };
}

function filterEvidenceMapForSector(evidenceMap, sector) {
  const profiles = evidenceMap.sector_profiles || evidenceMap.deployment_profiles || {};
  const key = sector;
  if (!profiles[key] && !['commercial', 'government', 'healthcare'].includes(key)) {
    throw new Error(`Unknown sector "${sector}". Use commercial, government, or healthcare.`);
  }
  const controls = (evidenceMap.controls || []).filter((c) => controlMatchesSector(c, sector));
  return { ...evidenceMap, controls, _activeSector: sector };
}

const SECTOR_INFER_KEYWORDS = {
  government: [
    'fedramp',
    'govramp',
    'federal agency',
    'state agency',
    'public sector',
    'omb m-',
    'cjis',
    'irs publication 1075',
    'government contract',
    'agency virtual',
  ],
  healthcare: [
    'hipaa',
    'protected health',
    ' phi ',
    'patient',
    'clinical',
    'medicare advantage',
    'hospital',
    'eob',
    'prior authorization',
    'utilization review',
    'section 1557',
    'medical bill',
    'health plan member',
  ],
};

function inferSectorFromText(text) {
  const t = ` ${String(text || '').toLowerCase()} `;
  let gov = 0;
  let health = 0;
  for (const k of SECTOR_INFER_KEYWORDS.government) if (t.includes(k)) gov++;
  for (const k of SECTOR_INFER_KEYWORDS.healthcare) if (t.includes(k)) health++;
  if (gov > 0 && gov > health) return { sector: 'government', govScore: gov, healthScore: health, confidence: gov >= 2 ? 'high' : 'medium' };
  if (health > 0 && health >= gov) return { sector: 'healthcare', govScore: gov, healthScore: health, confidence: health >= 2 ? 'high' : 'medium' };
  if (gov > 0 && health > 0 && gov === health) return { sector: 'commercial', govScore: gov, healthScore: health, confidence: 'low', ambiguous: true };
  return { sector: 'commercial', govScore: gov, healthScore: health, confidence: gov || health ? 'low' : 'default' };
}

function inferSectorFromArtifacts({ avaDesignPath, specPath, scorecardPath }) {
  const chunks = [];
  const pushFile = (p) => {
    if (p && fs.existsSync(p)) {
      try {
        chunks.push(fs.readFileSync(p, 'utf8'));
      } catch (_e) {
        /* ignore */
      }
    }
  };
  pushFile(avaDesignPath);
  pushFile(specPath);
  if (scorecardPath) {
    const lifecycle = path.dirname(path.dirname(scorecardPath));
    pushFile(path.join(lifecycle, 'sage-agent.json'));
    pushFile(path.join(lifecycle, 'design-artifact.json'));
    pushFile(path.join(lifecycle, 'spec-artifact.md'));
  }
  return inferSectorFromText(chunks.join('\n'));
}

function axlSessionsRootCandidates(customRoot, workspaceRoots = []) {
  const roots = [];
  if (customRoot) roots.push(customRoot);
  for (const w of workspaceRoots || []) {
    const local = path.join(w, 'axl-sessions');
    if (fs.existsSync(local)) roots.push(local);
  }
  const home = process.env.USERPROFILE || os.homedir();
  roots.push(
    path.join(home, '.kiro', 'crew', 'workspace', 'axl-sessions'),
    path.join(home, '.gemini', 'antigravity', 'scratch', 'axl-sessions')
  );
  return [...new Set(roots.map((r) => path.resolve(r)))];
}

function findWorkspaceRootsFromPath(anyPath) {
  const roots = [];
  if (!anyPath) return roots;
  let dir = path.dirname(path.resolve(anyPath));
  for (let i = 0; i < 10 && dir && dir !== path.dirname(dir); i++) {
    if (fs.existsSync(path.join(dir, 'axl-sessions')) || fs.existsSync(path.join(dir, '.ava-lifecycle'))) {
      roots.push(dir);
    }
    dir = path.dirname(dir);
  }
  return roots;
}

function axlFolderNameFromCustomer(customer) {
  if (!customer) return null;
  const c = String(customer).trim();
  if (/^AXL-/i.test(c)) return c;
  return `AXL-${c.replace(/\s+/g, '-').toLowerCase()}`;
}

function inferLifecycleDirFromScorecard(scorecardPath) {
  if (!scorecardPath) return null;
  const norm = path.resolve(scorecardPath);
  const parts = norm.split(path.sep);
  const idx = parts.findIndex((p) => p === '.ava-lifecycle');
  if (idx >= 0 && parts[idx + 1]) {
    return path.join(...parts.slice(0, idx + 2));
  }
  if (parts.includes('eval-runs')) {
    const i = parts.indexOf('eval-runs');
    if (i > 0) return path.join(...parts.slice(0, i));
  }
  return null;
}

function loadLifecycleMeta(lifecycleDir) {
  if (!lifecycleDir || !fs.existsSync(lifecycleDir)) return { slug: null, agentId: null, agentName: null };
  const sagePath = path.join(lifecycleDir, 'sage-agent.json');
  if (!fs.existsSync(sagePath)) return { slug: path.basename(lifecycleDir), agentId: null, agentName: null };
  try {
    const j = loadJson(sagePath);
    return {
      slug: j._meta?.slug || path.basename(lifecycleDir),
      agentId: j._meta?.agent_id || j.agent_id || null,
      agentName: j.agent_name || null,
    };
  } catch {
    return { slug: path.basename(lifecycleDir), agentId: null, agentName: null };
  }
}

function slugToCandidateAxlFolderNames(slug) {
  if (!slug) return [];
  const names = new Set([`AXL-${slug}`]);
  if (slug.startsWith('axl-')) names.add(`AXL-${slug.slice(4)}`);
  return [...names];
}

function folderMentionsAgentId(dir, agentId) {
  if (!agentId) return false;
  const needle = String(agentId).toLowerCase();
  const stack = [dir];
  let scanned = 0;
  while (stack.length && scanned < 250) {
    const d = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      if (e.name === 'node_modules' || e.name === 'compliance') continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (e.isFile() && /\.(json|md|yaml|yml|html)$/i.test(e.name)) {
        scanned++;
        try {
          if (fs.readFileSync(p, 'utf8').toLowerCase().includes(needle)) return true;
        } catch {
          /* ignore */
        }
      }
    }
  }
  return false;
}

function findAxlSessionDir({ customer, lifecycleDir, agentId, slug, axlRoot, workspaceRoots }) {
  const roots = axlSessionsRootCandidates(axlRoot, workspaceRoots);
  const tryNames = [];
  if (customer) tryNames.push(axlFolderNameFromCustomer(customer));
  tryNames.push(...slugToCandidateAxlFolderNames(slug));
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const name of tryNames) {
      if (!name) continue;
      const sessionDir = path.join(root, name);
      if (fs.existsSync(sessionDir)) return { sessionDir, axlCustomer: name, match: 'name' };
    }
    if (agentId) {
      try {
        for (const ent of fs.readdirSync(root, { withFileTypes: true })) {
          if (!ent.isDirectory() || !/^AXL-/i.test(ent.name)) continue;
          const sessionDir = path.join(root, ent.name);
          if (folderMentionsAgentId(sessionDir, agentId)) {
            return { sessionDir, axlCustomer: ent.name, match: 'agent_id' };
          }
        }
      } catch {
        /* ignore */
      }
    }
  }
  return null;
}

function resolveSessionDirArg(sessionDirArg, workspaceRoots, axlRoot) {
  if (!sessionDirArg) return null;
  const direct = path.resolve(sessionDirArg);
  if (fs.existsSync(direct)) return direct;
  for (const w of workspaceRoots) {
    const cand = path.join(w, sessionDirArg);
    if (fs.existsSync(cand)) return path.resolve(cand);
  }
  const base = path.basename(String(sessionDirArg).replace(/\\/g, '/'));
  for (const root of axlSessionsRootCandidates(axlRoot, workspaceRoots)) {
    const cand = path.join(root, base);
    if (fs.existsSync(cand)) return cand;
  }
  return null;
}

function resolveComplianceRunDir(sessionDir, runId) {
  const safeRun = runId
    ? String(runId).replace(/[^\w.-]+/g, '_').slice(0, 80)
    : `report-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}`;
  return path.join(sessionDir, 'compliance', safeRun);
}

function persistComplianceArtifacts({
  outDir,
  sessionDir,
  lifecycleDir,
  scorecardPath,
  baselinePath,
  mitigationsPath,
  sourceMdPath,
  htmlPath,
  pdfPath,
  reportKind,
  activeSector,
  scData,
}) {
  const copies = [];
  const safeCopy = (src, destName) => {
    if (!src || !fs.existsSync(src)) return;
    const dest = path.join(outDir, destName);
    if (path.resolve(src) === path.resolve(dest)) {
      copies.push(dest);
      return;
    }
    fs.copyFileSync(src, dest);
    copies.push(dest);
  };
  safeCopy(scorecardPath, 'scorecard.json');
  if (baselinePath) safeCopy(baselinePath, 'scorecard-baseline.json');
  if (mitigationsPath) safeCopy(mitigationsPath, 'mitigations-applied.json');
  safeCopy(
    sourceMdPath,
    'AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md'
  );
  if (htmlPath && fs.existsSync(htmlPath)) safeCopy(htmlPath, path.basename(htmlPath));
  if (pdfPath && fs.existsSync(pdfPath)) safeCopy(pdfPath, path.basename(pdfPath));

  const mitigationsSessionPath = sessionDir
    ? path.join(sessionDir, 'compliance', 'mitigations-applied.json')
    : null;
  if (mitigationsPath && mitigationsSessionPath && mitigationsSessionPath !== path.resolve(mitigationsPath)) {
    try {
      fs.mkdirSync(path.dirname(mitigationsSessionPath), { recursive: true });
      fs.copyFileSync(mitigationsPath, mitigationsSessionPath);
      copies.push(mitigationsSessionPath);
    } catch {
      /* ignore */
    }
  }

  const manifest = {
    avaComplianceChecker: 'artifact_manifest',
    generatedAt: new Date().toISOString(),
    sessionDir,
    lifecycleDir,
    complianceRunDir: outDir,
    reportKind,
    sector: activeSector,
    runId: scData?.run_id || null,
    agentId: scData?.agentId || null,
    version: scData?.version || null,
    artifacts: copies.map((p) => path.basename(p)),
  };
  const manifestPath = path.join(outDir, 'compliance-run.json');
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  return manifestPath;
}

// Reports are handed to customers, so local paths are shown relative to the home directory
// rather than exposing the facilitator's username and machine layout.
function displayPath(p) {
  if (!p) return p;
  const s = String(p);
  const home = process.env.USERPROFILE || os.homedir();
  return home && s.toLowerCase().startsWith(home.toLowerCase()) ? '~' + s.slice(home.length) : s;
}

function inferAxlCustomerFromPath(anyPath) {
  if (!anyPath) return null;
  const norm = String(anyPath).replace(/\\/g, '/');
  const m = norm.match(/axl-sessions\/(AXL-[^/]+)/i);
  return m ? m[1] : null;
}

/** @deprecated use resolveComplianceRunDir(sessionDir, runId) */
function resolveAxlComplianceOutDir({ customer, axlRoot, runId, workspaceRoots }) {
  const found = findAxlSessionDir({
    customer,
    lifecycleDir: null,
    agentId: null,
    slug: null,
    axlRoot,
    workspaceRoots,
  });
  const sessionDir =
    found?.sessionDir ||
    path.join(
      axlSessionsRootCandidates(axlRoot, workspaceRoots).find((r) => fs.existsSync(r)) ||
        axlSessionsRootCandidates(axlRoot, workspaceRoots)[0],
      axlFolderNameFromCustomer(customer) || customer
    );
  return resolveComplianceRunDir(sessionDir, runId);
}

function loadTestCaseMeta(testCasesDir, testCaseId) {
  if (!testCasesDir || !testCaseId) return null;
  const p = path.join(testCasesDir, `${testCaseId}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    const j = loadJson(p);
    // ava-test scenarios keep persona, goal and rubric under x_eval.
    const x = j.x_eval || {};
    // Sentence end, but not after a single-letter initial such as "P. Lindqvist".
    const firstSentence = (s) =>
      typeof s === 'string' ? (s.match(/^.*?(?<!\b[A-Z])[.!?](\s|$)/) || [s])[0].trim() : '';
    const persona = firstSentence(x.persona);
    const goal = j.persona?.goal || j.goal || x.goal;
    const desc = j.description || j.summary;
    const guardrails = (x.rubric || [])
      .filter((r) => r.dimension === 'guardrail' && r.assertion)
      .map((r) => r.assertion.trim());
    const note =
      j.metadata?.note ||
      j.metadata?.scorecard_criterion ||
      j.metadata?.rationale ||
      (guardrails.length ? 'Must hold: ' + guardrails.slice(0, 2).join(' ') : null);
    return {
      what: [persona, goal, desc].filter(Boolean).join(' — ') || null,
      why:
        note ||
        (goal
          ? 'Confirms the AVA can meet this scenario goal under the evaluation rubric and mapped compliance themes.'
          : null),
    };
  } catch {
    return null;
  }
}

function enrichRowsWithTestMeta(rows, testCasesDir) {
  for (const r of rows) {
    const meta = loadTestCaseMeta(testCasesDir, r.testCaseId);
    const themeTitles = (r.matchedControls || []).map((c) => c.title).filter(Boolean);
    const themeBit =
      themeTitles.length > 0
        ? `Maps to: ${themeTitles.slice(0, 3).join('; ')}${themeTitles.length > 3 ? '…' : ''}.`
        : 'Mapped to regulatory themes when scenario text matches evidence-map.json.';
    r.whatTested =
      meta?.what ||
      r.name ||
      r.testCaseId ||
      'Multi-turn evaluation (goal, tools, guardrails, tone).';
    r.whyTested =
      meta?.why ||
      `${themeBit} Supports customer acceptance and risk review against the bundled laws/standards compendium.`;
  }
  return rows;
}

function loadSessionContext(specPath) {
  const ctx = { businessGoal: '', customerLabel: '', vertical: '' };
  if (!specPath || !fs.existsSync(specPath)) return ctx;
  const md = fs.readFileSync(specPath, 'utf8');
  const cust = md.match(/^\s*[-*]\s*\*\*Account[^:]*:\*\*\s*(.+)$/im);
  if (cust) ctx.customerLabel = cust[1].trim();
  const vert = md.match(/^\s*[-*]\s*\*\*Vertical:\*\*\s*(.+)$/im);
  if (vert) ctx.vertical = vert[1].trim();
  const bg = md.match(/##\s*2\.\s*Business Goal\s*\n+([\s\S]*?)(?=\n##\s|$(?![\s\S]))/i);
  if (bg) ctx.businessGoal = bg[1].trim().replace(/\s+/g, ' ').slice(0, 600);
  if (!ctx.businessGoal) {
    // AXL spec-artifact template: "# AXL Spec Artifact — <use case>" plus an "In one sentence" line.
    // Read only those two lines so facilitator-only sections never reach a customer report.
    const title = md.match(/^#\s*AXL Spec Artifact\s*[—-]\s*(.+)$/im);
    const oneLine = md.match(/^\s*[-*]\s*\*\*In one sentence:\*\*\s*(.+)$/im);
    ctx.businessGoal = [title && `“${title[1].trim()}”`, oneLine && oneLine[1].trim()]
      .filter(Boolean)
      .join(' — ')
      .slice(0, 600);
  }
  return ctx;
}

function buildOverviewSectionHtml(rows, sessionContext, scData) {
  const runLabel = scData.run_id || 'evaluation run';
  const intro =
    sessionContext.businessGoal ||
    'Automated compliance-oriented evaluation of published AVA scenarios via the ava-evaluate scorecard.';
  const cust = sessionContext.customerLabel
    ? `<span class="pill pill-customer">${escapeHtml(sessionContext.customerLabel)}</span>`
    : '';
  const vert = sessionContext.vertical ? `<span class="pill pill-vertical">${escapeHtml(sessionContext.vertical)}</span>` : '';

  const tableRows = rows
    .map((r) => {
      const kind = rowResultKind(r);
      const badge = kind === 'pass' ? 'pill-pass' : kind === 'fail' ? 'pill-fail' : 'pill-review';
      const label = kind === 'pass' ? 'Pass' : kind === 'fail' ? 'Fail' : 'Review';
      return `<tr>
        <td class="mono">${escapeHtml(r.testCaseId || '')}</td>
        <td><span class="pill ${badge}">${escapeHtml(label)}</span> ${escapeHtml(r.name || '')}</td>
        <td>${escapeHtml(r.whatTested || '—')}</td>
        <td>${escapeHtml(r.whyTested || '—')}</td>
      </tr>`;
    })
    .join('');

  return `
  <section class="section section-overview" aria-labelledby="overview-h">
    <h2 id="overview-h" class="section-head section-head-teal">What was tested and why</h2>
    <p class="lead">This report covers <strong>${escapeHtml(String(rows.length))}</strong> scenario(s) from <span class="mono">${escapeHtml(runLabel)}</span>. ${cust} ${vert}</p>
    <p class="overview-goal"><strong>Session purpose:</strong> ${escapeHtml(intro)}</p>
    <p class="muted">Each row links harness checks to compliance themes from the bundled reference document — not a substitute for legal review.</p>
    <div class="table-wrap overview-table-wrap">
      <table class="overview-table compare-table">
        <thead><tr>
          <th>Test ID</th>
          <th>Scenario</th>
          <th>What we tested</th>
          <th>Why it matters</th>
        </tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  </section>`;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const skillDir = path.resolve(__dirname, '..');
const defaultEvidenceMap = path.join(skillDir, 'data', 'evidence-map.json');

function collectTextFromAttempt(attempt) {
  const parts = [];
  if (!attempt || typeof attempt !== 'object') return '';
  const layer2 = attempt.layer2;
  if (Array.isArray(layer2)) {
    for (const row of layer2) {
      if (row.evidence) parts.push(row.evidence);
      if (row.reason) parts.push(row.reason);
      if (row.assertion) parts.push(row.assertion);
    }
  }
  if (attempt.guardrailViolations && Array.isArray(attempt.guardrailViolations)) {
    parts.push(...attempt.guardrailViolations.map((g) => String(g)));
  }
  return parts.join(' \n ');
}

// Keywords are matched at a word start, so stems still match their inflections
// ("diagnos" -> "diagnosis") without matching mid-word ("age" -> "message", "coverage").
const keywordRe = new Map();
function matchesKeyword(textLower, kw) {
  const k = kw.toLowerCase();
  let re = keywordRe.get(k);
  if (!re) {
    re = new RegExp('(^|[^a-z0-9])' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    keywordRe.set(k, re);
  }
  return re.test(textLower);
}

function matchControls(textLower, controls) {
  const hits = [];
  for (const c of controls) {
    for (const kw of c.keywords || []) {
      if (matchesKeyword(textLower, kw)) {
        hits.push(c);
        break;
      }
    }
  }
  return hits;
}

function uniqById(controls) {
  const seen = new Set();
  return controls.filter((c) => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });
}

function buildRows(scData, evidenceMap, themesFrom = 'all') {
  const controls = evidenceMap.controls || [];
  const perScenario = scData.perScenario || [];
  const rows = [];

  for (const scenario of perScenario) {
    const attempts = scenario.attempts || [];
    let worstVerdict = scenario.verdict || scenario.classification || '';
    const scenarioText = [
      scenario.name,
      scenario.testCaseId,
      ...attempts.map(collectTextFromAttempt),
    ]
      .filter(Boolean)
      .join(' \n ')
      .toLowerCase();

    const failedChecks = [];
    for (const att of attempts) {
      const layer2 = att.layer2 || [];
      for (const row of layer2) {
        const v = (row.verdict || '').toLowerCase();
        if (v && v !== 'pass' && v !== 'n/a') {
          failedChecks.push({
            dimension: row.dimension || '—',
            id: row.id || '—',
            verdict: row.verdict,
            reason: row.reason || row.evidence || '',
            assertion: row.assertion || '',
          });
        }
      }
    }

    const matched = uniqById(matchControls(scenarioText, controls));
    const failContext = failedChecks
      .map((f) => [f.reason, f.assertion].filter(Boolean).join(' — '))
      .join(' \n ');
    // 'all' (default) matches the whole scenario corpus, including passing checks, so a theme
    // means "this scenario touches this topic". 'failures' matches only failing-check text, so a
    // theme means "this failure evidences this concern" — narrower, and the right basis when the
    // report is read as a findings list rather than a coverage map.
    const failMatches = failContext.length > 0 ? matchControls(failContext.toLowerCase(), controls) : [];
    const matchedFromFailures =
      themesFrom === 'failures'
        ? uniqById(failMatches)
        : failContext.length > 0
        ? uniqById([...matched, ...failMatches])
        : matched;

    const overall =
      (scenario.verdict || scenario.classification || '').toLowerCase() === 'pass' ? 'pass' : 'fail';
    const blockingFailed = failedChecks.length > 0;

    rows.push({
      testCaseId: scenario.testCaseId,
      name: scenario.name || scenario.testCaseId,
      overall,
      successRate: scenario.successRate,
      threshold: scenario.threshold,
      worstVerdict,
      failedChecks,
      matchedControls: matchedFromFailures,
      blockingFailed,
    });
  }

  return rows;
}

function rowResultKind(r) {
  const passOk = (r.overall || '').toLowerCase() === 'pass' && !r.blockingFailed;
  if (passOk) return 'pass';
  if (r.blockingFailed) return 'fail';
  return 'review';
}

/** Baseline row by testCaseId for comparison. */
function rowsByTestCaseId(rows) {
  const m = new Map();
  for (const r of rows) {
    const id = r.testCaseId || r.name;
    if (id) m.set(id, r);
  }
  return m;
}

/**
 * Compare baseline vs post rows. Union of testCaseIds from both runs.
 */
function compareRuns(baselineRows, postRows) {
  const baseMap = rowsByTestCaseId(baselineRows);
  const postMap = rowsByTestCaseId(postRows);
  const ids = new Set([...baseMap.keys(), ...postMap.keys()]);
  const rows = [];
  let resolved = 0;
  let regressed = 0;
  let stillFailing = 0;
  let unchangedPass = 0;

  for (const id of ids) {
    const b = baseMap.get(id);
    const p = postMap.get(id);
    const kindB = b ? rowResultKind(b) : 'missing';
    const kindP = p ? rowResultKind(p) : 'missing';

    let delta = '—';
    if (!b && p) delta = 'New in retest';
    else if (b && !p) delta = 'Removed / not in retest';
    else if (kindB === 'fail' || kindB === 'review') {
      if (kindP === 'pass') {
        delta = 'Improved → Pass';
        resolved++;
      } else if (kindP === 'fail') {
        delta = kindB === 'fail' ? 'Still failing' : 'Worsened → Fail';
        stillFailing++;
      } else {
        delta = 'Still not pass (review)';
        stillFailing++;
      }
    } else if (kindB === 'pass') {
      if (kindP === 'pass') {
        delta = 'Still pass';
        unchangedPass++;
      } else if (kindP === 'fail') {
        delta = 'Regressed';
        regressed++;
      } else {
        delta = 'Regressed to review';
        regressed++;
      }
    }

    rows.push({
      testCaseId: id,
      name: (p && p.name) || (b && b.name) || id,
      baseline: b,
      post: p,
      kindB,
      kindP,
      delta,
    });
  }

  rows.sort((a, b) => a.name.localeCompare(b.name));

  return {
    rows,
    counts: { resolved, regressed, stillFailing, unchangedPass, totalCompared: ids.size },
  };
}

function loadMitigationsFile(p) {
  const raw = loadJson(p);
  if (Array.isArray(raw)) return { items: raw, global_notes: [] };
  if (raw && typeof raw === 'object' && Array.isArray(raw.items)) return raw;
  throw new Error('Mitigations JSON must be an array of items or { "items": [...] }');
}

/** Build consolidated mitigation steps by control id (dedupe steps). */
function buildMitigationCatalog(rows) {
  const byId = new Map();
  for (const r of rows) {
    for (const c of r.matchedControls || []) {
      if (!c || !c.id || c._deferredRole) continue;
      let entry = byId.get(c.id);
      if (!entry) {
        entry = { id: c.id, title: c.title || c.id, steps: [], fines: [] };
        byId.set(c.id, entry);
      }
      const seen = new Set(entry.steps);
      for (const step of c.remediation || []) {
        const t = String(step).trim();
        if (t && !seen.has(t)) {
          seen.add(t);
          entry.steps.push(t);
        }
      }
      const seenFines = new Set(entry.fines);
      for (const f of c.possible_fines || []) {
        const t = String(f).trim();
        if (t && !seenFines.has(t)) {
          seenFines.add(t);
          entry.fines.push(t);
        }
      }
    }
  }
  return [...byId.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function computeExecutiveStats(rows, summary) {
  let pass = 0;
  let failDim = 0;
  let review = 0;
  const failedNames = [];
  const themeCounts = new Map();
  let unmapped = 0;

  for (const r of rows) {
    const resultLabel =
      r.overall === 'pass' && !r.blockingFailed ? 'pass' : r.blockingFailed ? 'fail' : 'review';
    if (resultLabel === 'pass') pass++;
    else if (resultLabel === 'fail') {
      failDim++;
      failedNames.push(r.name || r.testCaseId);
    } else review++;

    const mc = r.matchedControls || [];
    if (mc.length === 0) unmapped++;
    for (const c of mc) {
      const id = c.id || c.title;
      themeCounts.set(id, (themeCounts.get(id) || 0) + 1);
    }
  }

  const total = rows.length;
  const pct = total ? Math.round((pass / total) * 100) : 0;
  const topThemes = [...themeCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([id, n]) => ({ id, count: n }));

  return {
    total,
    pass,
    failDim,
    review,
    pct,
    failedNames,
    topThemes,
    unmapped,
    summaryPassed: summary.passed,
    summaryTotal: summary.total,
    summaryFailed: summary.failed,
    summaryInfra: summary.infraError,
  };
}

function renderLawThemeCards(matchedControls, evidenceMap) {
  if (!matchedControls || matchedControls.length === 0) {
    return `<p class="muted">No keyword match to the bundled compliance map for this scenario. Review manually against <cite>${escapeHtml(
      evidenceMap.source_bundled || 'the reference document'
    )}</cite>.</p>`;
  }
  let html = '';
  for (const c of matchedControls) {
    html += `<div class="card law-card"><header class="card-h">${escapeHtml(c.title)}</header>`;
    html += '<p class="small-heading">Regulatory / standards (from reference doc)</p><ul>';
    for (const ref of c.regulatory_refs || []) html += `<li>${escapeHtml(ref)}</li>`;
    html += '</ul>';
    if ((c.case_law_refs || []).length) {
      html += '<p class="small-heading">Case law / enforcement (from reference doc)</p><ul>';
      for (const ref of c.case_law_refs) html += `<li>${escapeHtml(ref)}</li>`;
      html += '</ul>';
    }
    html += `<p class="small-heading">Source sections</p><ul>${(c.document_sections || [])
      .map((s) => `<li>${escapeHtml(s)}</li>`)
      .join('')}</ul>`;
    html +=
      '<p class="muted small-note">Mitigation steps for this theme appear in <strong>§ Mitigation catalog</strong> at the end of this report.</p></div>';
  }
  return html;
}

function buildScopeBoundaryHtml(roleProfile, evaluationSuite, deferredThemes, suiteLabels) {
  if (!roleProfile && !evaluationSuite) return '';
  const suiteLabel = (suiteLabels || {})[evaluationSuite] || evaluationSuite || '—';
  let deferredHtml = '';
  if (deferredThemes && deferredThemes.length > 0) {
    deferredHtml = `<ul class="scope-deferred">${deferredThemes
      .map(
        (t) =>
          `<li><span class="mono">${escapeHtml(t.id)}</span> — ${escapeHtml(t.title)}${
            t.rationale ? `: <span class="muted">${escapeHtml(t.rationale)}</span>` : ''
          }</li>`
      )
      .join('')}</ul>`;
  } else {
    deferredHtml = '<p class="muted">No role-deferred themes were suppressed this run.</p>';
  }
  const docNote =
    roleProfile?.customer_docs_out_of_scope?.length > 0
      ? `<p class="muted"><strong>Customer docs not mapped to AVA compliance:</strong> ${escapeHtml(
          roleProfile.customer_docs_out_of_scope.slice(0, 8).join(', ')
        )}${roleProfile.customer_docs_out_of_scope.length > 8 ? '…' : ''}. See <cite>references/customer-documentation-scope.md</cite> in the skill folder.</p>`
      : '';
  return `
  <section class="section scope-boundary" aria-labelledby="scope-h">
    <h2 id="scope-h" class="section-head">AVA scope and evaluation context</h2>
    ${
      roleProfile
        ? `<p><strong>AVA role profile:</strong> ${escapeHtml(roleProfile.label || roleProfile.id)} — ${escapeHtml(
            roleProfile.description || ''
          )}</p>`
        : ''
    }
    <p class="muted"><strong>Evaluation suite filter:</strong> ${escapeHtml(suiteLabel)}. Themes such as fair lending, employment hiring, and health-insurance UR are omitted from corner-security runs unless <span class="mono">--include-out-of-scope-themes</span> is set.</p>
  ${docNote}
    <h3 class="info-h">Themes deferred as not pertaining to this AVA role</h3>
    ${deferredHtml}
  </section>`;
}

function renderHtml({
  scData,
  evidenceMap,
  rows,
  sourcePath,
  scorecardPath,
  baselineScData,
  baselinePath,
  comparison,
  mitigationsDoc,
  verificationMode,
  mitigationOutcomeMode,
  activeSector,
  sectorProfiles,
  sessionContext,
  axlCustomer,
  axlOutputDir,
  roleProfile,
  evaluationSuite,
  deferredThemes,
  suiteLabels,
}) {
  const isVerification = !!verificationMode;
  const isMitigationOutcome = !!mitigationOutcomeMode;
  const meta = scData.metadata || {};
  const summary = scData.summary || {};
  const generated = new Date().toISOString();
  const docVersion = evidenceMap.source_document_version || '1.4 (November 2026)';
  const sectorKey = activeSector || 'commercial';
  const sectorProfile = (sectorProfiles || {})[sectorKey] || {
    label: sectorKey,
    description: '',
  };
  let sectorScopeNote = '';
  if (sectorKey === 'government') {
    sectorScopeNote =
      'FedRAMP, GovRAMP, and Part 3 §3.10 government-cloud controls are <strong>in scope</strong>.';
  } else if (sectorKey === 'healthcare') {
    sectorScopeNote =
      'Healthcare-only themes (HIPAA, CMS/MA, Section 1557, UR) are <strong>in scope</strong> alongside the commercial baseline.';
  } else {
    sectorScopeNote =
      'FedRAMP/§3.10 government-only and healthcare-only control rows are <strong>out of scope</strong>. Use <span class="mono">--government</span> or <span class="mono">--healthcare</span> when applicable.';
  }
  const mitCatalog = buildMitigationCatalog(rows);
  const exec = computeExecutiveStats(rows, summary);
  const overviewSectionHtml = buildOverviewSectionHtml(rows, sessionContext || {}, scData);

  const docTitle = isMitigationOutcome
    ? 'AVA compliance mitigation outcome report'
    : isVerification
    ? 'AVA compliance verification report'
    : 'AVA compliance assessment report';
  const customerBadge = axlCustomer
    ? `<span class="pill pill-customer hero-pill">${escapeHtml(axlCustomer)}</span>`
    : sessionContext?.customerLabel
    ? `<span class="pill pill-customer hero-pill">${escapeHtml(sessionContext.customerLabel)}</span>`
    : '';
  const docSub = isMitigationOutcome
    ? 'Post-mitigation retest after AVA version update; recorded fixes, baseline comparison, and residual themes.'
    : isVerification
    ? 'After-mitigation retest compared to baseline; optional recorded fixes and outcome deltas.'
    : 'Mapped evaluation results to the bundled laws, cases, and standards compendium.';

  let mitigationsSectionHtml = '';
  if (mitigationsDoc && (mitigationsDoc.items || []).length > 0) {
    const items = mitigationsDoc.items || [];
    let listHtml = '';
    for (const it of items) {
      const tid = it.test_case_id || it.testCaseId || '';
      const title = it.title || it.summary || 'Mitigation';
      const d = it.description || it.detail || '';
      const areas = Array.isArray(it.areas) ? it.areas.join(', ') : it.areas || '';
      listHtml += `<li class="mit-applied-li">
        <div class="mit-applied-h"><span class="mono">${escapeHtml(tid)}</span> — ${escapeHtml(title)}</div>
        ${d ? `<p class="mit-applied-d">${escapeHtml(d)}</p>` : ''}
        ${areas ? `<p class="muted small-note">Areas: ${escapeHtml(areas)}</p>` : ''}
      </li>`;
    }
    const globals = mitigationsDoc.global_notes || [];
    const gHtml =
      globals.length > 0
        ? `<h3 class="info-h" style="margin-top:0.75rem">General / org-wide</h3><ul>${globals.map((g) => `<li>${escapeHtml(String(g))}</li>`).join('')}</ul>`
        : '';
    mitigationsSectionHtml = `
  <section class="section" aria-labelledby="mit-applied-h">
    <h2 id="mit-applied-h" class="section-head">Mitigations applied</h2>
    <p class="muted">Recorded changes made to the AVA or environment before this retest (from <span class="mono">--mitigations</span> JSON).</p>
    <ol class="mitigations-applied-list">${listHtml}</ol>
    ${gHtml}
  </section>`;
  } else if (isVerification) {
    mitigationsSectionHtml = `
  <section class="section" aria-labelledby="mit-applied-h">
    <h2 id="mit-applied-h" class="section-head">Mitigations applied</h2>
    <p class="muted">No <span class="mono">--mitigations</span> file was provided. Add a JSON list of fixes to document what changed before this retest.</p>
  </section>`;
  } else {
    mitigationsSectionHtml = '';
  }

  let comparisonSectionHtml = '';
  if (isVerification && comparison) {
    const { counts } = comparison;
    const cmpRows = comparison.rows
      .map((line) => {
        const lb = line.baseline;
        const lp = line.post;
        const bLabel = !lb
          ? '—'
          : (lb.overall || '').toLowerCase() === 'pass' && !lb.blockingFailed
          ? 'Pass'
          : lb.blockingFailed
          ? 'Fail'
          : 'Review';
        const pLabel = !lp
          ? '—'
          : (lp.overall || '').toLowerCase() === 'pass' && !lp.blockingFailed
          ? 'Pass'
          : lp.blockingFailed
          ? 'Fail'
          : 'Review';
        let deltaClass = 'delta-neutral';
        if (String(line.delta).includes('Improved')) deltaClass = 'delta-up';
        else if (String(line.delta).includes('Regress') || String(line.delta).includes('Worsened')) deltaClass = 'delta-down';
        return `<tr>
          <td class="mono">${escapeHtml(line.testCaseId)}</td>
          <td>${escapeHtml(line.name)}</td>
          <td>${escapeHtml(bLabel)}</td>
          <td>${escapeHtml(pLabel)}</td>
          <td class="${deltaClass}">${escapeHtml(line.delta)}</td>
        </tr>`;
      })
      .join('');
    comparisonSectionHtml = `
  <section class="section" aria-labelledby="cmp-h">
    <h2 id="cmp-h" class="section-head">Before / after (baseline → retest)</h2>
    <p class="muted">Baseline: <span class="mono">${escapeHtml(displayPath(baselinePath) || '—')}</span><br/>
    Retest: <span class="mono">${escapeHtml(displayPath(scorecardPath))}</span></p>
    <div class="delta-summary">
      <span class="delta-pill resolved"><strong>${escapeHtml(String(counts.resolved))}</strong> improved to pass</span>
      <span class="delta-pill still"><strong>${escapeHtml(String(counts.stillFailing))}</strong> still not pass</span>
      <span class="delta-pill regress"><strong>${escapeHtml(String(counts.regressed))}</strong> regressed</span>
      <span class="delta-pill neutral"><strong>${escapeHtml(String(counts.unchangedPass))}</strong> stayed pass</span>
    </div>
    <div class="table-wrap">
      <table class="compare-table">
        <thead><tr><th>Test ID</th><th>Name</th><th>Baseline</th><th>Retest</th><th>Δ</th></tr></thead>
        <tbody>${cmpRows}</tbody>
      </table>
    </div>
  </section>`;
  } else {
    comparisonSectionHtml = '';
  }

  const failedListHtml =
    exec.failedNames.length === 0
      ? '<li class="muted">None — all scenarios passed dimension checks.</li>'
      : exec.failedNames.map((n) => `<li>${escapeHtml(n)}</li>`).join('');

  const themesHtml =
    exec.topThemes.length === 0
      ? '<li class="muted">No themes matched (expand scenarios or update evidence-map.json keywords).</li>'
      : exec.topThemes
          .map((t) => {
            const title = (rows.find((rw) => (rw.matchedControls || []).some((c) => c.id === t.id)) || {})
              .matchedControls;
            const first = (title || []).find((c) => c.id === t.id);
            const label = first && first.title ? first.title : t.id;
            return `<li><strong>${escapeHtml(label)}</strong> — ${escapeHtml(String(t.count))} scenario(s)</li>`;
          })
          .join('');

  let scenarioDetails = '';
  for (const r of rows) {
    const resultLabel =
      r.overall === 'pass' && !r.blockingFailed ? 'Pass' : r.blockingFailed ? 'Fail (dimension)' : 'Review';
    let badgeClass = 'pass';
    if (r.blockingFailed) badgeClass = 'fail';
    else if ((r.overall || '').toLowerCase() !== 'pass') badgeClass = 'review';
    const scoreStr = r.successRate != null ? String(r.successRate) : '—';

    const failedList =
      r.failedChecks.length === 0
        ? '<p class="muted">No failing dimension checks in scorecard layer2.</p>'
        : `<ul class="fail-list">${r.failedChecks
            .map(
              (f) =>
                `<li><span class="dim">${escapeHtml(f.dimension)}</span> (${escapeHtml(f.id)}): ${escapeHtml(f.reason)}</li>`
            )
            .join('')}</ul>`;

    const lawHtml = renderLawThemeCards(r.matchedControls, evidenceMap);
    const openAttr = r.blockingFailed ? ' open' : '';

    scenarioDetails += `
    <details class="scenario-block"${openAttr}>
      <summary class="scenario-sum">
        <span class="sum-badge ${badgeClass}">${escapeHtml(resultLabel)}</span>
        <span class="sum-title">${escapeHtml(r.name || r.testCaseId)}</span>
        <span class="sum-meta mono">${escapeHtml(r.testCaseId || '')}</span>
        <span class="sum-score">Score: ${escapeHtml(scoreStr)}</span>
      </summary>
      <div class="scenario-body">
        <div class="what-why-box">
          <p><strong>What we tested:</strong> ${escapeHtml(r.whatTested || r.name || '')}</p>
          <p><strong>Why:</strong> ${escapeHtml(r.whyTested || '—')}</p>
        </div>
        <h4 class="info-h">Failing checks (from evaluation harness)</h4>
        ${failedList}
        <h4 class="info-h">Law, regulation &amp; case themes</h4>
        ${lawHtml}
      </div>
    </details>`;
  }

  let mitigationHtml = '';
  if (mitCatalog.length === 0) {
    mitigationHtml =
      '<p class="muted">No compliance themes were matched across scenarios, so no consolidated mitigation list was generated. Review scenarios manually against the reference document, or broaden <span class="mono">evidence-map.json</span> keywords.</p>';
  } else {
    for (const block of mitCatalog) {
      const finesHtml =
        (block.fines || []).length > 0
          ? `<div class="mitigation-fines-wrap"><p class="mitigation-fines-h"><strong>Possible fines / exposure</strong> <span class="muted fine-disclaimer">(statutory maxima from bundled compendium v1.4 — confirm with counsel)</span></p><ul class="mitigation-fines">${(
              block.fines || []
            )
              .map((f) => `<li>${escapeHtml(f)}</li>`)
              .join('')}</ul></div>`
          : '';
      mitigationHtml += `<div class="mitigation-block"><h3 class="mitigation-h">${escapeHtml(block.title)}</h3>${finesHtml}<p class="mitigation-steps-h"><strong>Mitigation steps</strong></p><ol class="mitigation-steps">${(
        block.steps || []
      )
        .map((s) => `<li>${escapeHtml(s)}</li>`)
        .join('')}</ol></div>`;
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${escapeHtml(docTitle)} — ${escapeHtml(scData.run_id || 'run')}</title>
  <style>
    :root {
      --border: #c5d4e8;
      --bg-page: #eef3fa;
      --bg-card: #ffffff;
      --accent: #ff4f1f;
      --accent2: #23395d;
      --teal: #00838f;
      --fail: #c62828;
      --pass: #2e7d32;
      --review: #e65100;
    }
    * { box-sizing: border-box; }
    body {
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0 1.25rem 2.5rem;
      line-height: 1.55;
      color: #1b2838;
      background: linear-gradient(165deg, #e8eef7 0%, #f4f7fb 45%, #e3ecf8 100%);
      max-width: 62rem;
      margin-left: auto;
      margin-right: auto;
    }
    .hero {
      margin: 0 -1.25rem 1.25rem;
      padding: 1.35rem 1.5rem 1.5rem;
      background: linear-gradient(125deg, #1a2744 0%, #2d4a7c 42%, #ff4f1f 165%);
      color: #fff;
      border-radius: 0 0 14px 14px;
      box-shadow: 0 8px 24px rgba(26, 39, 68, 0.22);
    }
    .hero .doc-title { color: #fff; font-size: 1.65rem; margin: 0 0 0.35rem; }
    .hero .doc-sub { color: rgba(255,255,255,.9); margin: 0 0 0.5rem; font-size: 0.98rem; }
    .hero-pill { margin-right: 0.35rem; vertical-align: middle; }
  .doc-title {
      font-size: 1.5rem;
      font-weight: 650;
      letter-spacing: -0.02em;
    }
    .doc-sub { color: #555; font-size: 0.95rem; }

    .section {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.05rem 1.2rem 1.2rem;
      margin-bottom: 1rem;
      box-shadow: 0 4px 14px rgba(35, 57, 93, 0.06);
    }
    .section > h2, .section-head {
      font-size: 1.08rem;
      margin: 0 0 0.65rem;
      padding-bottom: 0.45rem;
      border-bottom: 3px solid var(--accent);
      color: var(--accent2);
    }
    .section-head-teal { border-bottom-color: var(--teal); color: #006064; }

    .banner { background: linear-gradient(90deg, #fff8e6, #fff); border: 1px solid #ffe082; padding: 0.85rem 1rem; border-radius: 10px; }
    .banner strong { display: block; margin-bottom: 0.35rem; color: #e65100; }

    .exec-summary {
      background: linear-gradient(180deg, #fff 0%, #f0f7ff 100%);
      border-left: 5px solid var(--accent2);
    }
    .section-overview {
      background: linear-gradient(180deg, #fff 0%, #e0f7fa 8%, #fff 100%);
      border: 1px solid #80deea;
    }
    .overview-goal { background: #f1f8ff; border-radius: 8px; padding: 0.65rem 0.85rem; border-left: 4px solid var(--teal); }
    .lead { font-size: 1.02rem; color: #263238; }
    .overview-table thead th { background: #23395d; color: #fff; }
    .overview-table tbody tr:nth-child(even) { background: #f5fafc; }
    .pill {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.15rem 0.45rem;
      border-radius: 999px;
      margin-right: 0.25rem;
    }
    .pill-pass { background: #c8e6c9; color: #1b5e20; }
    .pill-fail { background: #ffcdd2; color: #b71c1c; }
    .pill-review { background: #ffe0b2; color: #e65100; }
    .pill-customer { background: #ff4f1f; color: #fff; text-transform: none; font-size: 0.8rem; }
    .pill-vertical { background: #00838f; color: #fff; text-transform: none; font-size: 0.8rem; }
    .what-why-box {
      background: #e8f4fd;
      border-radius: 8px;
      padding: 0.55rem 0.75rem;
      margin-bottom: 0.65rem;
      border: 1px solid #b3d9f7;
      font-size: 0.92rem;
    }
    .what-why-box p { margin: 0.25rem 0; }
    .exec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
      gap: 0.65rem;
      margin: 0.75rem 0 1rem;
    }
    .stat {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.55rem 0.65rem;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0,0,0,.04);
    }
    .stat:nth-child(1) { border-top: 4px solid #607d8b; }
    .stat:nth-child(2) { border-top: 4px solid var(--pass); }
    .stat:nth-child(3) { border-top: 4px solid var(--fail); }
    .stat:nth-child(4) { border-top: 4px solid var(--review); }
    .stat:nth-child(5) { border-top: 4px solid var(--accent2); }
    .stat-val { font-size: 1.35rem; font-weight: 700; line-height: 1.2; }
    .stat-val.pass { color: var(--pass); }
    .stat-val.fail { color: var(--fail); }
    .stat-val.mutedN { color: #546e7a; }
    .stat-lbl { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #607d8b; margin-top: 0.2rem; }

    .exec-lists { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    @media (max-width: 720px) { .exec-lists { grid-template-columns: 1fr; } }

    .mono { font-family: ui-monospace, Consolas, "Courier New", monospace; font-size: 0.82rem; word-break: break-all; }
    .muted { color: #555; font-size: 0.9rem; }
    .pass { color: var(--pass); font-weight: 700; }
    .fail { color: var(--fail); font-weight: 700; }

    details.meta-details { margin-top: 0.35rem; }
    details.meta-details summary {
      cursor: pointer;
      font-weight: 600;
      color: var(--accent);
      padding: 0.25rem 0;
    }
    .meta-grid {
      display: grid;
      gap: 0.35rem;
      font-size: 0.88rem;
      margin-top: 0.5rem;
      padding: 0.5rem;
      background: #f8fafc;
      border-radius: 6px;
    }
    .meta-grid dt { font-weight: 600; color: #455a64; }
    .meta-grid dd { margin: 0 0 0.4rem 0; }

    .scenario-block {
      border: 1px solid var(--border);
      border-radius: 6px;
      margin-bottom: 0.5rem;
      background: #fff;
      overflow: hidden;
    }
    .scenario-block summary { list-style: none; }
    .scenario-block summary::-webkit-details-marker { display: none; }
    .scenario-sum {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem 0.75rem;
      padding: 0.55rem 0.75rem;
      cursor: pointer;
      background: #f1f4f7;
      font-weight: 500;
    }
    .scenario-block[open] .scenario-sum { border-bottom: 1px solid var(--border); background: #e8edf2; }
    .sum-badge {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 0.2rem 0.45rem;
      border-radius: 4px;
      min-width: 4.5rem;
      text-align: center;
    }
    .sum-badge.pass { background: #e8f5e9; color: var(--pass); }
    .sum-badge.fail { background: #ffebee; color: var(--fail); }
    .sum-badge.review { background: #efebe9; color: var(--review); }
    .sum-title { flex: 1 1 12rem; }
    .sum-meta { font-size: 0.8rem; color: #546e7a; }
    .sum-score { font-size: 0.85rem; color: #455a64; }

    .scenario-body { padding: 0.75rem 1rem 1rem; }
    .info-h {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #455a64;
      margin: 0.75rem 0 0.35rem;
      border-left: 3px solid var(--accent);
      padding-left: 0.4rem;
    }
    .scenario-body .info-h:first-child { margin-top: 0; }

    .card {
      border: 1px solid #dde3e9;
      border-radius: 6px;
      padding: 0.55rem 0.7rem;
      margin: 0.45rem 0;
      background: #fafbfd;
    }
    .card-h { font-size: 0.95rem; margin: 0 0 0.35rem; color: #102a43; }
    .small-heading { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #546e7a; margin: 0.4rem 0 0.2rem; }
    .small-note { font-size: 0.82rem; margin: 0.5rem 0 0; }
    .fail-list { margin: 0.25rem 0; padding-left: 1.2rem; }
    .dim { font-weight: 600; }

    #mitigation-catalog { scroll-margin-top: 1rem; }
    .scope-boundary { border-left: 4px solid var(--teal); background: #f0fafb; }
    .scope-deferred { margin: 0.35rem 0 0; padding-left: 1.2rem; font-size: 0.88rem; }
    .mitigation-block {
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.65rem 0.85rem;
      margin: 0.65rem 0;
      background: #fafbfd;
    }
    .mitigation-h { font-size: 0.95rem; margin: 0 0 0.35rem; color: #102a43; }
    .mitigation-steps-h { font-size: 0.82rem; margin: 0.5rem 0 0.2rem; color: #334e68; }
    .mitigation-fines-wrap { margin: 0.35rem 0 0.15rem; padding: 0.45rem 0.55rem; background: #fff8f0; border-left: 3px solid var(--review, #e65100); border-radius: 4px; }
    .mitigation-fines-h { font-size: 0.82rem; margin: 0 0 0.25rem; color: #9a3412; }
    .mitigation-fines { margin: 0; padding-left: 1.1rem; font-size: 0.82rem; color: #334e68; }
    .fine-disclaimer { font-weight: normal; font-size: 0.75rem; }
    .mitigation-steps { margin: 0.25rem 0 0; padding-left: 1.25rem; }
    .mitigation-steps li { margin: 0.25rem 0; }

    .mitigations-applied-list { margin: 0.5rem 0 0; padding-left: 1.2rem; }
    .mit-applied-li { margin: 0.65rem 0; }
    .mit-applied-h { font-weight: 600; color: #102a43; }
    .mit-applied-d { margin: 0.25rem 0 0; }

    .delta-summary { display: flex; flex-wrap: wrap; gap: 0.45rem; margin: 0.75rem 0 1rem; }
    .delta-pill {
      font-size: 0.82rem;
      padding: 0.35rem 0.55rem;
      border-radius: 6px;
      border: 1px solid var(--border);
      background: #fff;
    }
    .delta-pill.resolved { border-color: #a5d6a7; background: #e8f5e9; }
    .delta-pill.still { border-color: #ffccbc; background: #fff3e0; }
    .delta-pill.regress { border-color: #ef9a9a; background: #ffebee; }
    .delta-pill.neutral { background: #eceff1; }

    .table-wrap { overflow-x: auto; margin-top: 0.5rem; }
    .compare-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
    .compare-table th, .compare-table td { border: 1px solid var(--border); padding: 0.45rem 0.5rem; text-align: left; }
    .compare-table th { background: #e8eef4; }
    .delta-up { color: var(--pass); font-weight: 600; }
    .delta-down { color: var(--fail); font-weight: 600; }
    .delta-neutral { color: #546e7a; }

    @media print {
      body { background: #fff; max-width: none; padding: 0.4cm; }
      .section { box-shadow: none; break-inside: avoid; }
      .scenario-block { break-inside: avoid; }
      details.meta-details { display: block; }
      details.meta-details summary { list-style: none; }
    }
  </style>
</head>
<body>

  <header class="doc-header hero">
    <h1 class="doc-title">${escapeHtml(docTitle)}</h1>
    <p class="doc-sub">${escapeHtml(docSub)} ${customerBadge}</p>
    ${axlOutputDir ? `<p class="doc-sub" style="font-size:0.82rem;opacity:0.85">Saved for customer: <span class="mono">${escapeHtml(displayPath(axlOutputDir))}</span></p>` : ''}
  </header>

  <section class="section banner" aria-label="Disclaimer">
    <strong>Disclaimer — not legal advice</strong>
    This report maps evaluation results to topics described in the bundled research compendium
    (<cite>AI and Virtual Agent Laws, Court Cases and Compliance Standards</cite>, v.${escapeHtml(docVersion)} in source).
    It does not analyze your specific jurisdictional footprint. Have qualified counsel confirm applicability before relying on any entry.
  </section>

  <section class="section exec-summary" aria-labelledby="exec-h">
    <h2 id="exec-h" class="section-head">Executive summary</h2>
    <p class="muted" style="margin-top:0">${
      isVerification
        ? 'Retest snapshot after mitigations: scenario outcomes in the new run, plus (below) recorded fixes and a baseline → retest comparison when a baseline scorecard was supplied.'
        : 'Snapshot of this run: scenario outcomes, where dimension checks failed, and which compliance themes matched most often.'
    }</p>

    <div class="exec-grid" role="group" aria-label="Outcome counts">
      <div class="stat"><div class="stat-val mutedN">${escapeHtml(String(exec.total))}</div><div class="stat-lbl">Scenarios</div></div>
      <div class="stat"><div class="stat-val pass">${escapeHtml(String(exec.pass))}</div><div class="stat-lbl">Pass</div></div>
      <div class="stat"><div class="stat-val fail">${escapeHtml(String(exec.failDim))}</div><div class="stat-lbl">Fail (dimension)</div></div>
      <div class="stat"><div class="stat-val mutedN">${escapeHtml(String(exec.review))}</div><div class="stat-lbl">Review</div></div>
      <div class="stat"><div class="stat-val mutedN">${escapeHtml(String(exec.pct))}%</div><div class="stat-lbl">Pass rate</div></div>
    </div>

    <p><strong>Harness summary (scorecard file):</strong> passed ${escapeHtml(String(exec.summaryPassed ?? '—'))} / ${escapeHtml(
    String(exec.summaryTotal ?? '—')
  )} — failed ${escapeHtml(String(exec.summaryFailed ?? '—'))}, infrastructure errors ${escapeHtml(
    String(exec.summaryInfra ?? '—')
  )}.</p>

    <div class="exec-lists">
      <div>
        <h3 class="info-h" style="margin-top:0">Scenarios with failing dimension checks</h3>
        <ul>${failedListHtml}</ul>
      </div>
      <div>
        <h3 class="info-h" style="margin-top:0">Most common matched compliance themes</h3>
        <ul>${themesHtml}</ul>
      </div>
    </div>

    <p class="muted"><strong>Sector profile:</strong> ${escapeHtml(sectorProfile.label || sectorKey)} — ${escapeHtml(
    sectorProfile.description || ''
  )}</p>
    <p class="muted">${sectorScopeNote}</p>
    <p class="muted"><strong>Mapping note:</strong> Themes come from keyword matches in scenario text and failures against <span class="mono">evidence-map.json</span> only. ${escapeHtml(
      String(exec.unmapped)
    )} scenario(s) had no automated theme match — review those against <cite>${escapeHtml(
    path.basename(sourcePath)
  )}</cite> manually.</p>

    <p class="muted"><strong>Suggested next step:</strong> ${
      isVerification && comparison
        ? comparison.counts.stillFailing > 0 || comparison.counts.regressed > 0
          ? `Revisit scenarios that are still failing or regressed (see <a href="#cmp-h">§ Before / after</a>), then confirm with counsel. The <a href="#mitigation-catalog">§ Mitigation catalog</a> lists generic theme-based actions from the reference compendium.`
          : `All compared scenarios passed or stayed pass. Archive this report with <a href="#mit-applied-h">§ Mitigations applied</a> and keep counsel in the loop for jurisdictional fit.`
        : isVerification && !comparison
        ? `For a full before/after table, re-run with <span class="mono">--baseline-scorecard</span> pointing to the pre-fix eval. Until then, use <a href="#mitigation-catalog">§ Mitigation catalog</a> and the retest details above.`
        : `address items in <a href="#mitigation-catalog">§ Mitigation catalog</a> below, then re-run evaluation.`
    }</p>
  </section>

  ${overviewSectionHtml}

  ${buildScopeBoundaryHtml(roleProfile, evaluationSuite, deferredThemes, suiteLabels)}

  ${mitigationsSectionHtml}

  ${comparisonSectionHtml}

  <section class="section" aria-labelledby="meta-h">
    <details class="meta-details">
      <summary id="meta-h">Report metadata &amp; inputs (click to expand)</summary>
      <dl class="meta-grid">
        <dt>Generated (UTC)</dt><dd>${escapeHtml(generated)}</dd>
        <dt>Report type</dt><dd>${escapeHtml(
    isMitigationOutcome
      ? 'Mitigation outcome (post-publish retest)'
      : isVerification
      ? 'Verification (retest after mitigations)'
      : 'Assessment (single run)'
  )}</dd>
        <dt>Sector profile</dt><dd>${escapeHtml(sectorProfile.label || sectorKey)} (<span class="mono">${escapeHtml(sectorKey)}</span>)</dd>
        <dt>Evaluation suite</dt><dd class="mono">${escapeHtml(evaluationSuite || '—')}</dd>
        ${roleProfile ? `<dt>AVA role profile</dt><dd>${escapeHtml(roleProfile.label || roleProfile.id || '—')}</dd>` : ''}
        <dt>Run ID (retest)</dt><dd class="mono">${escapeHtml(scData.run_id || '—')}</dd>
        <dt>Agent / version</dt><dd class="mono">${escapeHtml(String(scData.agentId || '—'))} / ${escapeHtml(String(scData.version || '—'))}</dd>
        <dt>Retest scorecard</dt><dd class="mono">${escapeHtml(displayPath(scorecardPath))}</dd>
        ${isVerification && baselinePath ? `<dt>Baseline scorecard</dt><dd class="mono">${escapeHtml(displayPath(baselinePath))}</dd>` : ''}
        <dt>Reference document</dt><dd class="mono">${escapeHtml(displayPath(sourcePath))}</dd>
        ${axlCustomer ? `<dt>AXL customer folder</dt><dd class="mono">${escapeHtml(axlCustomer)}</dd>` : ''}
        ${axlOutputDir ? `<dt>AXL output path</dt><dd class="mono">${escapeHtml(displayPath(axlOutputDir))}</dd>` : ''}
        <dt>Rubric</dt><dd>${escapeHtml(meta.rubricVersion != null ? String(meta.rubricVersion) : '—')} <span class="muted">(from scorecard metadata)</span></dd>
      </dl>
    </details>
  </section>

  <section class="section" aria-labelledby="tests-h">
    <h2 id="tests-h" class="section-head">${isVerification ? 'Retest — test-by-test results' : 'Test-by-test results'}</h2>
    <p class="muted">Each block is one scenario from the ${isVerification ? '<strong>retest</strong> ' : ''}scorecard. Click a row to expand failing checks and law/case themes. Theme-based remediation remains in the mitigation catalog at the end.</p>
    ${scenarioDetails}
  </section>

  <section class="section" id="mitigation-catalog" aria-labelledby="mit-h">
    <h2 id="mit-h" class="section-head">Mitigation catalog</h2>
    <p class="muted">For each matched theme: <strong>possible fines / exposure</strong> (statutory maxima from the bundled v1.4 penalty tables) and <strong>mitigation steps</strong> (deduplicated). Not legal advice — confirm applicability with counsel.</p>
    ${mitigationHtml}
  </section>

</body>
</html>`;
}

async function tryPrintPdf(htmlPath, pdfPath) {
  try {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
    await page.evaluate(() => {
      document.querySelectorAll('details').forEach((d) => {
        d.open = true;
      });
    });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', bottom: '14mm', left: '12mm', right: '12mm' },
    });
    await browser.close();
    return true;
  } catch (_e) {
    return false;
  }
}

async function main() {
  const args = parseArgs();
  if (!args.scorecard || !fs.existsSync(args.scorecard)) {
    console.error(
      'Usage: node generate-compliance-report.js --scorecard <post-mitigation scorecard.json> [options]\n' +
        '  [--baseline-scorecard <prior scorecard.json>] [--mitigations <mitigations.json>]\n' +
        '  [--sector commercial|government|healthcare] or --commercial | --government | --healthcare\n' +
        '  [--deployment commercial|us-government]  (legacy alias for --sector)\n' +
        '  [--ava-design <design-artifact.json>]  Infer sector when flags omitted\n' +
        '  [--mitigation-report]  Use compliance-mitigation-outcome-report.html after retest\n' +
        '  [--evaluation-suite functional|corner-security|empathy|all]  Filter theme map (auto-detect from test IDs)\n' +
        '  [--ava-role godaddy-dbs]  Suppress themes not pertaining to role (see data/ava-role-profiles.json)\n' +
        '  [--include-out-of-scope-themes]  Keep role-deferred themes in scenario cards and catalog\n' +
        '  [--session-dir axl-sessions/AXL-<customer>] [--lifecycle-dir .ava-lifecycle/<slug>]\n' +
        '  [--customer AXL-name] [--axl-sessions-root <dir>] [--spec spec-artifact.md] [--test-cases-dir <dir>]\n' +
        '  [--out-dir <dir>] [--output-html <filename>] [--evidence-map <path>] [--themes-from all|failures] [--no-pdf]\n' +
        '  (Default: all artifacts under <axl-sessions>/AXL-*/compliance/<run-id>/; resolve session from lifecycle agent_id when needed.)'
    );
    process.exit(1);
  }
  if (args.baselineScorecard && !fs.existsSync(args.baselineScorecard)) {
    console.error('Baseline scorecard not found:', args.baselineScorecard);
    process.exit(1);
  }
  if (args.mitigations && !fs.existsSync(args.mitigations)) {
    console.error('Mitigations file not found:', args.mitigations);
    process.exit(1);
  }
  const evidenceMapPath = args.evidenceMap || defaultEvidenceMap;
  if (!fs.existsSync(evidenceMapPath)) {
    console.error('Missing evidence map:', evidenceMapPath);
    process.exit(1);
  }
  const evidenceMapRaw = loadJson(evidenceMapPath);
  const scData = loadJson(args.scorecard);
  let baselineScData = null;
  if (args.baselineScorecard) baselineScData = loadJson(args.baselineScorecard);

  const workspaceRoots = [
    ...findWorkspaceRootsFromPath(args.scorecard),
    ...findWorkspaceRootsFromPath(args.baselineScorecard),
    ...findWorkspaceRootsFromPath(args.lifecycleDir),
    ...findWorkspaceRootsFromPath(args.sessionDir),
  ];

  let lifecycleDir = args.lifecycleDir ? path.resolve(args.lifecycleDir) : null;
  if (!lifecycleDir) {
    lifecycleDir =
      inferLifecycleDirFromScorecard(args.scorecard) ||
      inferLifecycleDirFromScorecard(args.baselineScorecard);
  }
  const lifecycleMeta = loadLifecycleMeta(lifecycleDir);

  const axlCustomer =
    args.customer ||
    inferAxlCustomerFromPath(args.scorecard) ||
    inferAxlCustomerFromPath(args.baselineScorecard) ||
    inferAxlCustomerFromPath(args.specPath) ||
    inferAxlCustomerFromPath(args.sessionDir);

  let sessionDir = resolveSessionDirArg(args.sessionDir, workspaceRoots, args.axlSessionsRoot);
  if (!sessionDir) {
    const found = findAxlSessionDir({
      customer: axlCustomer,
      lifecycleDir,
      agentId: lifecycleMeta.agentId,
      slug: lifecycleMeta.slug,
      axlRoot: args.axlSessionsRoot,
      workspaceRoots,
    });
    if (found) {
      sessionDir = found.sessionDir;
      console.log('Resolved AXL session:', found.sessionDir, `(${found.match})`);
    }
  }

  const resolvedAxlCustomer =
    axlCustomer || (sessionDir ? path.basename(sessionDir) : null);

  let outDir = args.outDir;
  if (!outDir && sessionDir) {
    outDir = resolveComplianceRunDir(sessionDir, scData.run_id);
    console.log('AXL session dir:', sessionDir);
    console.log('Saving compliance run under axl-sessions:', outDir);
  } else if (!outDir && resolvedAxlCustomer) {
    outDir = resolveAxlComplianceOutDir({
      customer: resolvedAxlCustomer,
      axlRoot: args.axlSessionsRoot,
      runId: scData.run_id,
      workspaceRoots,
    });
    console.log('AXL customer:', resolvedAxlCustomer);
    console.log('Saving under axl-sessions:', outDir);
    sessionDir = sessionDir || path.dirname(path.dirname(outDir));
  } else if (!outDir) {
    console.log(
      JSON.stringify({
        avaComplianceChecker: 'artifact_root',
        needsSessionDir: true,
        message:
          'Could not resolve axl-sessions/AXL-<customer>. Pass --session-dir and/or --lifecycle-dir (or --customer).',
        lifecycleDir,
        slug: lifecycleMeta.slug,
        agentId: lifecycleMeta.agentId,
      })
    );
    outDir = process.cwd();
    console.warn('Falling back to cwd for output:', outDir);
  }
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let specPath = args.specPath;
  if (!specPath && sessionDir) {
    const candidate = path.join(sessionDir, 'spec-artifact.md');
    if (fs.existsSync(candidate)) specPath = candidate;
  }
  if (!specPath && resolvedAxlCustomer) {
    for (const root of axlSessionsRootCandidates(args.axlSessionsRoot, workspaceRoots)) {
      const candidate = path.join(root, axlFolderNameFromCustomer(resolvedAxlCustomer) || resolvedAxlCustomer, 'spec-artifact.md');
      if (fs.existsSync(candidate)) {
        specPath = candidate;
        break;
      }
    }
  }

  let activeSector = args.sector ? normalizeSector(args.sector) : null;
  if (!args.sectorExplicit) {
    const inferred = inferSectorFromArtifacts({
      avaDesignPath: args.avaDesign,
      specPath,
      scorecardPath: args.scorecard,
    });
    if (!activeSector) activeSector = inferred.sector;
    if (!args.sectorExplicit && (inferred.confidence === 'low' || inferred.ambiguous)) {
      console.log(
        JSON.stringify({
          avaComplianceChecker: 'sector_inference',
          needsUserSector: true,
          suggestedSector: inferred.sector,
          govScore: inferred.govScore,
          healthScore: inferred.healthScore,
          message:
            'Sector was not set with --commercial | --government | --healthcare. Confirm sector with the user before sharing final compliance conclusions.',
        })
      );
    } else if (!args.sectorExplicit) {
      console.log(
        JSON.stringify({
          avaComplianceChecker: 'sector_inference',
          inferredSector: activeSector,
          confidence: inferred.confidence,
        })
      );
    }
  }
  activeSector = activeSector || 'commercial';
  let evidenceMap = filterEvidenceMapForSector(
    evidenceMapRaw,
    activeSector || evidenceMapRaw.default_sector || evidenceMapRaw.default_deployment_profile || 'commercial'
  );

  let evaluationSuite =
    args.evaluationSuite && args.evaluationSuite !== 'auto'
      ? args.evaluationSuite
      : inferEvaluationSuite(scData);
  const roleProfileEarly = resolveRoleProfile({
    avaRole: args.avaRole,
    sessionDir: sessionDir || null,
    customer: resolvedAxlCustomer,
    customerLabel: null,
    roleProfilesPath: args.roleProfiles,
  });
  if (!args.evaluationSuite && roleProfileEarly?.default_evaluation_suite) {
    evaluationSuite = roleProfileEarly.default_evaluation_suite;
  }
  evidenceMap = filterEvidenceMapForEvaluationSuite(evidenceMap, evaluationSuite);
  console.log(
    JSON.stringify({
      avaComplianceChecker: 'evaluation_scope',
      evaluationSuite,
      avaRole: roleProfileEarly?.id || args.avaRole || null,
    })
  );

  const sessionContext = loadSessionContext(specPath);

  const sourceMd = path.join(skillDir, 'assets', 'AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md');
  if (!fs.existsSync(sourceMd)) {
    console.error('Missing bundled source:', sourceMd);
    process.exit(1);
  }

  if (!['all', 'failures'].includes(args.themesFrom)) {
    console.error("--themes-from must be 'all' or 'failures'");
    process.exit(1);
  }
  let rows = buildRows(scData, evidenceMap, args.themesFrom);
  let roleProfile =
    resolveRoleProfile({
      avaRole: args.avaRole || roleProfileEarly?.id,
      sessionDir: sessionDir || null,
      customer: resolvedAxlCustomer,
      customerLabel: sessionContext?.customerLabel,
      roleProfilesPath: args.roleProfiles,
    }) || roleProfileEarly;
  const { rows: scopedRows, deferredThemes } = applyRoleProfileToRows(
    rows,
    roleProfile,
    args.includeOutOfScopeThemes
  );
  rows = scopedRows;
  let testCasesDir = args.testCasesDir;
  if (!testCasesDir && args.scorecard) {
    const lifecycle = path.join(path.dirname(path.dirname(args.scorecard)), 'test-cases');
    if (fs.existsSync(lifecycle)) testCasesDir = lifecycle;
  }
  enrichRowsWithTestMeta(rows, testCasesDir);

  let comparison = null;
  if (baselineScData) {
    const baselineRows = buildRows(baselineScData, evidenceMap, args.themesFrom);
    comparison = compareRuns(baselineRows, rows);
  }

  let mitigationsDoc = null;
  if (args.mitigations) {
    try {
      mitigationsDoc = loadMitigationsFile(args.mitigations);
    } catch (e) {
      console.error(e.message || String(e));
      process.exit(1);
    }
  }

  const verificationMode = !!(baselineScData || (mitigationsDoc && (mitigationsDoc.items || []).length > 0));
  const mitigationOutcomeMode = !!(args.mitigationReport && verificationMode);

  const html = renderHtml({
    scData,
    evidenceMap,
    rows,
    sourcePath: sourceMd,
    scorecardPath: args.scorecard,
    baselineScData: baselineScData || null,
    baselinePath: args.baselineScorecard || null,
    comparison: comparison || null,
    mitigationsDoc: mitigationsDoc || null,
    verificationMode: verificationMode,
    mitigationOutcomeMode,
    activeSector: evidenceMap._activeSector || activeSector,
    sectorProfiles: evidenceMapRaw.sector_profiles || evidenceMapRaw.deployment_profiles,
    sessionContext,
    axlCustomer: resolvedAxlCustomer || null,
    axlOutputDir: outDir,
    roleProfile: roleProfile || null,
    evaluationSuite,
    deferredThemes: deferredThemes || [],
    suiteLabels: evidenceMapRaw.evaluation_suite_labels || {},
  });

  let outHtmlName = args.outputHtml;
  if (!outHtmlName) {
    if (args.mitigationReport) outHtmlName = 'compliance-mitigation-outcome-report.html';
    else if (args.baselineScorecard || args.mitigations) outHtmlName = 'compliance-verification-report.html';
    else outHtmlName = 'compliance-report.html';
  }
  const htmlPath = path.join(outDir, outHtmlName);
  const pdfBase = path.basename(outHtmlName, path.extname(outHtmlName));
  const pdfPath = path.join(outDir, `${pdfBase}.pdf`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('Wrote', htmlPath);

  let pdfWritten = false;
  if (args.pdf) {
    const ok = await tryPrintPdf(htmlPath, pdfPath);
    if (ok) {
      pdfWritten = true;
      console.log('Wrote', pdfPath);
    } else {
      console.log(
        'PDF skipped: install Puppeteer in this environment (`npm install puppeteer`) or print the HTML to PDF from a browser.'
      );
    }
  }

  const reportKind = mitigationOutcomeMode
    ? 'mitigation-outcome'
    : verificationMode
    ? 'verification'
    : 'assessment';

  const manifestPath = persistComplianceArtifacts({
    outDir,
    sessionDir: sessionDir || null,
    lifecycleDir,
    scorecardPath: args.scorecard,
    baselinePath: args.baselineScorecard || null,
    mitigationsPath: args.mitigations || null,
    sourceMdPath: sourceMd,
    htmlPath,
    pdfPath: pdfWritten ? pdfPath : null,
    reportKind,
    activeSector,
    scData,
  });
  console.log('Wrote artifact manifest:', manifestPath);

  if (sessionDir || resolvedAxlCustomer) {
    const latestDir = path.join(sessionDir || path.dirname(path.dirname(outDir)), 'compliance', 'latest');
    try {
      fs.mkdirSync(latestDir, { recursive: true });
      const latestHtml = path.join(latestDir, path.basename(htmlPath));
      fs.copyFileSync(htmlPath, latestHtml);
      console.log('Copied latest for customer:', latestHtml);
      if (pdfWritten && fs.existsSync(pdfPath)) {
        fs.copyFileSync(pdfPath, path.join(latestDir, path.basename(pdfPath)));
      }
      fs.copyFileSync(manifestPath, path.join(latestDir, 'compliance-run.json'));
    } catch (e) {
      console.warn('Could not write latest copy:', e.message || e);
    }
  }

  console.log(
    JSON.stringify({
      avaComplianceChecker: 'artifact_root',
      sessionDir,
      lifecycleDir,
      complianceRunDir: outDir,
      reportKind,
      needsSessionDir: !sessionDir,
    })
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
