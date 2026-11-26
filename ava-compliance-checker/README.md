# ava-compliance-checker

**Monorepo copy:** [genesys-ava-skills/ava-compliance-checker](https://github.com/RobertWakefieldCarl/genesys-ava-skills/tree/main/ava-compliance-checker) (v1.11.0).

Maps **AVA `scorecard.json`** results to themes from **one** bundled document — *AI and Virtual Agent Laws, Court Cases and Compliance Standards* (v1.11) — and writes **compliance-report.html** (+ **.pdf** with Puppeteer). See **`references/skill-overview.html`** (or `.md`) for full coverage and switches.

**Disclaimer:** Genesys does not provide legal or compliance advice. Reports surface possible AVA-related themes for discussion only; customers must rely on their own qualified counsel for applicability and obligations.

**Install:** extract the release zip and run `install.ps1` (Windows) or `install.sh` (macOS/Linux) from the extracted `ava-compliance-checker` folder — default target `~/.cursor/skills/ava-compliance-checker/`. Use `-All` / `--all` to copy into every detected IDE base under your profile.

**Package (maintainers):** from the skill folder run `powershell -File scripts/package.ps1` — produces **`dist/ava-compliance-checker-<version>.zip`** with a printed SHA256 (see `MANIFEST.json` for file list).

## Quick command

```bash
node scripts/generate-compliance-report.js --scorecard "path/to/scorecard.json" --commercial --customer AXL-pitstop5
```

Compliance artifacts default to **`axl-sessions/AXL-<customer>/compliance/<run-id>/`** (HTML, PDF, scorecard snapshots, reference MD copy, `compliance-run.json`). Resolve the session with `--session-dir`, `--lifecycle-dir`, `--customer`, or agent_id lookup. Use `--out-dir` only to override. Reports include **What was tested and why** (auto-loads `spec-artifact.md` from the session folder).

**Market vertical** (recommended first): `--market-vertical <id>` from `data/ava-market-verticals.json` — sets sector and optional `--ava-role`. If inference is weak, the agent should ask the customer for vertical before legal conclusions.

**Sector profiles:** `--commercial` (default), `--government`, `--healthcare`, `--financial`, `--insurance` — or `--sector <name>`. Legacy: `--deployment us-government` → government.

**Geographic scope:** `--regions us,emea` or `--all-regions`. Agent should ask (multi-select) when `needsUserRegions` is printed — see `references/geographic-scope.md`.

**Verification (after fixes + retest):** `--baseline-scorecard`, optional `--mitigations` → `compliance-verification-report.html`.

**Mitigation outcome (after AVA publish + retest):** add `--mitigation-report` → `compliance-mitigation-outcome-report.html`. See `examples/mitigations.example.json`.

See **SKILL.md** for assess-only default, sector inference, and one-by-one mitigation workflow.
