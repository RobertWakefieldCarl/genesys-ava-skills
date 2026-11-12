---
name: ava-compliance-checker
description: >-
  Assess a published Genesys Cloud AVA against a bundled laws-and-compliance compendium, map
  ava-evaluate scorecard results to regulatory themes and remediation, and produce HTML and PDF
  reports. Sector profiles (commercial, government, healthcare) scope which laws apply. Optional
  mitigation workflow with retest and mitigation-outcome report. Use after evaluation or for counsel/risk readouts.
  Does not replace ava-corner-cases.
disable-model-invocation: true
metadata:
  version: 1.5.0
  reference_document: assets/AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md
---

# AVA compliance checker

Turn **AVA evaluation output** (`scorecard.json` from **[ava-evaluate](../ava-evaluate/SKILL.md)**) into a **structured compliance report** (HTML + PDF) grounded **only** in the bundled research file:

`<SkillDir>/assets/AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md`

(*AI and Virtual Agent Laws, Court Cases and Compliance Standards*, **v1.5 November 2026** — §3.11 IRS 1075 / regulated data; v1.4 penalty tables, §1.10 worldwide, Part 3 §§3.9–3.10 ISO/SOC and government / FedRAMP).

Mapping uses **`<SkillDir>/data/evidence-map.json`** (Parts 1–3). Do not import external compliance corpora unless the user replaces the bundled MD.

**This is not legal advice.** Reports must repeat that counsel should confirm applicability.

## Install / redistribute

Shipped as **`ava-compliance-checker-<version>.zip`** under **`dist/`** (`MANIFEST.json`, `README.md`). Rebuild with `scripts/package.ps1`.

## Relationship to ava-corner-cases

- **ava-corner-cases** — authors `corner-*` scenarios from security guidelines.
- **ava-compliance-checker** — ingests **any** `scorecard.json` and maps results to the laws/cases/standards compendium.

## Prerequisites

- **`scorecard.json`** from ava-evaluate (`.ava-lifecycle/<slug>/eval-runs/<run-id>/scorecard.json`).
- **Node.js** on the path.
- **PDF:** optional **`puppeteer`** in `<SkillDir>`; otherwise print HTML to PDF.

---

## Workflow (agent)

### Default behavior

**By default, run Phase 1 only** — produce the assessment artifact (`compliance-report.html` / PDF). **Do not** edit the AVA until the user opts into mitigation.

After Phase 1, **ask** whether they want the skill to help **mitigate** issues found in the report.

---

### Phase 0 — Sector profile (commercial | government | healthcare)

Controls in `evidence-map.json` can be tagged **`sectors`**: `government`-only (FedRAMP §3.10), `healthcare`-only (HIPAA-heavy row), or universal (no tag = all).

| Flag | When to use |
|------|-------------|
| **`--commercial`** (default) | Private sector — excludes government-only and healthcare-only control rows. |
| **`--government`** | US state/federal — commercial baseline **plus** FedRAMP, OMB, CJIS, IRS 1075, DoD IL/CMMC. |
| **`--healthcare`** | Payers/providers — commercial baseline **plus** HIPAA/CMS/Section 1557/UR themes. |

Also: **`--sector commercial|government|healthcare`**. Legacy **`--deployment us-government`** → `government`.

**If the user did not pass a sector flag:**

1. Infer from AVA artifacts (`--ava-design`, lifecycle `sage-agent.json` / `design-artifact.json`, `spec-artifact.md`, AXL spec).
2. If inference is **low confidence** or **ambiguous**, use **AskQuestion** to let the user pick **Commercial**, **Government**, or **Healthcare** before you present compliance conclusions.

The generator prints a JSON line `avaComplianceChecker: sector_inference` when it needs user confirmation.

### Evaluation suite and AVA role (false-positive control)

Corner-case and empathy scorecards often contain words that **do not** mean the AVA is a lender, insurer, or hiring tool (e.g. brokerage **claim**, Salesforce **record**, **account**).

| Switch | Purpose |
|--------|---------|
| **`--evaluation-suite corner-security`** | Only controls tagged for security/corner eval (auto-detected when all `testCaseId`s start with `corner-`). |
| **`--evaluation-suite functional`** | Full product/workflow theme set. |
| **`--ava-role godaddy-dbs`** | GoDaddy Domain Broker UC1–UC3: defers fair lending, employment, insurance UR, PHI, TCPA unless `--include-out-of-scope-themes`. |

Read **`references/customer-documentation-scope.md`** — do **not** map `company-research.md`, POV deck, call-flow analysis, or take-home HTML to AVA compliance.

**GoDaddy example:**

```bash
node scripts/generate-compliance-report.js ^
  --scorecard "...\.ava-lifecycle\axl-web-services-broker-routing\eval-runs\...\scorecard.json" ^
  --session-dir "C:\...\axl-sessions\AXL-godaddy" ^
  --commercial ^
  --ava-role godaddy-dbs
```

Reports add **§ AVA scope and evaluation context** listing deferred themes and out-of-scope customer docs.

---

### Phase 1 — Assess and report (only artifact)

1. Resolve `<SkillDir>` and the AVA **`.ava-lifecycle/<slug>/`** (from the scorecard path or `--lifecycle-dir`).
2. Resolve the AXL workshop folder **`axl-sessions/AXL-<customer>/`** (`--session-dir`, `--customer`, path inference, or **agent_id** search across session folders).
3. Locate the user's `scorecard.json` (usually under `.ava-lifecycle/<slug>/eval-runs/...`).
4. Resolve sector (Phase 0).
5. **Default artifact root (required for AXL AVAs):** store everything under the session folder, not the lifecycle tree:

   | Artifact | Path |
   |----------|------|
   | Assessment / verification / mitigation HTML+PDF | `axl-sessions/AXL-<customer>/compliance/<run-id>/` |
   | Facilitator “latest” pointer | `axl-sessions/AXL-<customer>/compliance/latest/` |
   | Scorecard snapshot, baseline, mitigations copy, bundled MD snapshot | same `<run-id>/` folder |
   | Run manifest | `compliance-run.json` in `<run-id>/` |
   | Rolling mitigations log | `axl-sessions/AXL-<customer>/compliance/mitigations-applied.json` |

   If the generator cannot resolve a session folder, it prints `needsSessionDir: true` — ask the user for `axl-sessions/AXL-<customer>` before treating the run as complete.

6. Run (omit `--out-dir` unless the user needs a one-off path):

   ```bash
   node "<SkillDir>/scripts/generate-compliance-report.js" ^
     --scorecard "C:\path\to\.ava-lifecycle\<slug>\eval-runs\...\scorecard.json" ^
     --session-dir "axl-sessions/AXL-<customer>" ^
     --lifecycle-dir ".ava-lifecycle/<slug>" ^
     --healthcare
   ```

7. **Present** pass/fail counts, top themes, **sector profile**, unmapped scenarios, and the **axl-sessions** paths from `artifact_root` JSON. **Stop here** unless the user wants mitigation.

---

### Phase 2 — Offer mitigation (explicit consent)

1. **Ask:** “Should I mitigate issues found in the compliance report?” (yes / no).
2. If **no**, stop.
3. If **yes**, **Ask:** fix **all** failing themes in one pass, or **one-by-one**?
   - **All:** prioritize by recurrence in the report and mitigation catalog; apply via **ava-design** / **ava-build**.
   - **One-by-one:** use **AskQuestion** (or numbered list) so the user selects which themes or scenario IDs to fix **this round**; do not change unrelated areas.
4. Record edits in **`axl-sessions/AXL-<customer>/compliance/mitigations-applied.json`** (see `examples/mitigations.example.json`): instructions, guardrails, tools, disclosures, hand-offs, test cases — aligned with remediation bullets and bundled MD sections. The generator also copies mitigations into each compliance `<run-id>/` folder when you pass `--mitigations`.

---

### Phase 3 — Retest and publish

1. Re-run **ava-evaluate** on the same (or expanded) suite.
2. **Publish** a new AVA version via **ava-build** when the user is ready.
3. Keep the **baseline** scorecard path from Phase 1 for comparison.

---

### Phase 4 — Mitigation outcome report

After retest **and** AVA version update, generate the **mitigation outcome** report (not only the assessment):

```bash
node "<SkillDir>/scripts/generate-compliance-report.js" ^
  --scorecard "C:\path\to\eval-runs\eval-run-retest\scorecard.json" ^
  --baseline-scorecard "C:\path\to\eval-runs\eval-run-baseline\scorecard.json" ^
  --mitigations "C:\path\to\mitigations-applied.json" ^
  --government ^
  --mitigation-report ^
  --out-dir "C:\path\to\output-dir"
```

Outputs:

| File | When |
|------|------|
| `compliance-report.html` | Phase 1 assessment only |
| `compliance-verification-report.html` | Retest with baseline and/or mitigations JSON (no `--mitigation-report`) |
| `compliance-mitigation-outcome-report.html` | Phase 4: **`--mitigation-report`** after publish + retest |

Deliver HTML/PDF: **Mitigations applied**, **Before / after**, retest details, **Mitigation catalog**, updated agent **version** in metadata.

---

## What the report contains

| Section | Content |
|--------|---------|
| Executive summary | Pass/fail/review, themes, **sector profile**, unmapped count |
| What was tested and why | Spec + test-case purpose when available |
| Mitigations applied | From `--mitigations` JSON *(verification / outcome)* |
| Before / after | Baseline vs retest per `testCaseId` |
| Test-by-test results | Collapsible scenarios + matched law/case themes |
| Mitigation catalog | Deduplicated remediation steps plus **`possible_fines`** exposure bullets (from compendium v1.4 penalty tables) per matched theme |

## Customizing the map

Edit **`data/evidence-map.json`**: keywords, `sectors`, `possible_fines`, citations — **only** from the bundled MD penalty tables (Parts 1–3).

## Files

| Path | Role |
|------|------|
| `assets/AI_and_Virtual_Agent_Laws_Cases_and_Compliance_Standards.md` | Sole legal/compatibility source (v1.4) |
| `data/evidence-map.json` | Keyword → control → remediation |
| `examples/mitigations.example.json` | Sample mitigations file |
| `scripts/generate-compliance-report.js` | HTML/PDF builder |
