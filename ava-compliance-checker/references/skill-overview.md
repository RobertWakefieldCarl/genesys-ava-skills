# ava-compliance-checker — overview

## What it does

**ava-compliance-checker** turns a published Genesys Cloud **Agentic Virtual Agent (AVA)** evaluation artifact — `scorecard.json` from **ava-evaluate** — into a **customer-ready compliance assessment** (HTML + optional PDF). It does **not** replace **ava-corner-cases** (which authors security scenarios) or **ava-evaluate** (which runs them).

The generator:

1. Loads scenario pass/fail text from the scorecard.
2. Matches keywords and failure patterns to **control themes** in `data/evidence-map.json`.
3. Cites **only** the bundled research compendium (`assets/AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md`, currently **v1.8**).
4. Writes artifacts under `axl-sessions/AXL-<customer>/compliance/<run-id>/` (scorecard snapshot, MD copy, `compliance-run.json`, reports).

**Not legal advice.** Reports include a Genesys disclaimer; counsel must confirm applicability.

## What it covers

The compendium spans **US federal, state, and local law**, **EU/UK/worldwide** entries, **AI SMS/email worldwide (v1.8 §1.11)**, **court cases** (§§2.12–2.17), and **organizational standards** (PCI, HIPAA, FedRAMP, OWASP §3.12, ADA §3.13, messaging §3.14, IRS 1075 §3.11, etc.).

The evidence map groups scorecard signals into themes such as:

| Theme (control id) | Typical sources |
|--------------------|-----------------|
| Transparency / bot disclosure | BOT Act, EU AI Act Art. 50, AB 1609 |
| Accuracy / no fabrication | Part 2 §2.1 (Moffatt), FTC §5 |
| Recording / privacy / biometrics | CIPA, BIPA, state privacy |
| **PCI / payments** (`payments-pci-scope`) | Part 3 §3.1 — **financial sector** |
| **Fair lending / credit** (`financial-fair-lending`) | ECOA/FCRA — **financial sector** |
| **GLBA / NYDFS** (`financial-banking-safeguards`) | Part 3 §3.3, §3.11.4 — **financial sector** |
| **Insurance / NAIC / UR** (`insurance-naic`) | Part 3 §3.3 — **insurance sector** (also health payer with `--healthcare`) |
| HIPAA / PHI | **healthcare sector** |
| FedRAMP / OMB / CJIS / IRS | **government sector** |
| OWASP LLM + Agentic 2026 | Part 3 §3.12 |
| ADA / WCAG | Part 3 §3.13 |
| SMS / email / TCPA (`telecom-tcpa-messaging`) | Part 1 §1.11, §3.14, §1.4 |
| Accessibility, GDPR, minors, employment, content provenance | Cross-sector (commercial baseline) |

**Sector profiles** narrow which control **rows** are active (see switches below).

## Workflow (skill default)

1. **Assess only** — run the generator; present the report; stop unless the user opts in.
2. **Optional mitigation** — edit AVA via ava-design / ava-build; log fixes in `mitigations-applied.json`.
3. **Retest** — ava-evaluate again; **verification** or **mitigation outcome** report with baseline comparison.

Always resolve **market vertical** (what business the AVA serves) before final legal readouts when inference is weak.

## CLI switches

### Required

| Switch | Purpose |
|--------|---------|
| `--scorecard <path>` | Post-eval `scorecard.json` |

### Sector / vertical (scope which laws apply)

| Switch | Profile |
|--------|---------|
| `--commercial` | Default cross-industry private sector; **excludes** government-, healthcare-, financial-, and insurance-only rows |
| `--government` | Commercial baseline **+** FedRAMP, OMB, CJIS, IRS 1075, DoD/CMMC |
| `--healthcare` | Commercial baseline **+** HIPAA, CMS, Section 1557, UR |
| `--financial` | Commercial baseline **+** PCI, ECOA/FCRA, GLBA/NYDFS |
| `--insurance` | Commercial baseline **+** NAIC AI governance, insurer UR / claims |
| `--sector <name>` | Same values as above |
| `--market-vertical <id>` | Sets sector (+ optional `--ava-role`); see `data/ava-market-verticals.json` |

Legacy: `--deployment us-government` → `government`.

### AXL artifact paths

| Switch | Purpose |
|--------|---------|
| `--session-dir` | `axl-sessions/AXL-<customer>` (preferred) |
| `--lifecycle-dir` | `.ava-lifecycle/<slug>` |
| `--customer` | AXL folder name hint |
| `--out-dir` | Override output (rare) |

### False positives / eval context

| Switch | Purpose |
|--------|---------|
| `--evaluation-suite functional\|corner-security\|empathy` | Filter controls by eval type (auto-detect from `corner-*` IDs) |
| `--ava-role <id>` | e.g. `godaddy-dbs` — defer lending/employment/insurance UR themes |
| `--include-out-of-scope-themes` | Keep role-deferred themes in the report |

### Mitigation / retest

| Switch | Purpose |
|--------|---------|
| `--baseline-scorecard <path>` | Prior run for before/after |
| `--mitigations <path>` | JSON of fixes applied |
| `--mitigation-report` | `compliance-mitigation-outcome-report.html` after publish + retest |

### Other

| Switch | Purpose |
|--------|---------|
| `--ava-design <path>` | Infer sector / vertical from design artifacts |
| `--spec`, `--test-cases-dir` | Enrich “what was tested and why” |
| `--themes-from all\|failures` | Map all scenarios or failures only |
| `--no-pdf` | HTML only (no Puppeteer) |
| `--output-html <file>` | Custom HTML filename |

Stdout JSON hints: `needsUserMarketVertical`, `needsUserSector`, `artifact_root`, `sector_inference`.

## Example commands

```bash
# Financial services AVA
node scripts/generate-compliance-report.js ^
  --scorecard ".ava-lifecycle\my-ava\eval-runs\...\scorecard.json" ^
  --session-dir "axl-sessions/AXL-acme-bank" ^
  --financial

# P&C insurance
node scripts/generate-compliance-report.js ^
  --scorecard "...\scorecard.json" ^
  --market-vertical insurance-pc

# GoDaddy domain brokerage (corner security)
node scripts/generate-compliance-report.js ^
  --scorecard "...\scorecard.json" ^
  --market-vertical domain-brokerage ^
  --evaluation-suite corner-security
```

## Key files

| Path | Role |
|------|------|
| `assets/AI_and_Virtual_Agent_Laws_*.md` | Sole legal corpus |
| `data/evidence-map.json` | Keywords → controls → remediation / fines |
| `data/ava-market-verticals.json` | Vertical → sector |
| `data/ava-role-profiles.json` | Role-based theme deferrals |
| `scripts/generate-compliance-report.js` | Report builder |

Rebuild zip: `scripts/package.ps1` → `dist/ava-compliance-checker-<version>.zip`.