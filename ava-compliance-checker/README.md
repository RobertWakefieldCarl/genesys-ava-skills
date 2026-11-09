# ava-compliance-checker

Maps **AVA `scorecard.json`** results to themes from **one** bundled document — *AI and Virtual Agent Laws, Court Cases and Compliance Standards* (v1.4) — and writes **compliance-report.html** (+ **.pdf** with Puppeteer).

**Install:** extract the release zip and run `install.ps1` (Windows) or `install.sh` (macOS/Linux) from the extracted `ava-compliance-checker` folder — default target `~/.cursor/skills/ava-compliance-checker/`. Use `-All` / `--all` to copy into every detected IDE base under your profile.

**Package (maintainers):** from the skill folder run `powershell -File scripts/package.ps1` — produces **`dist/ava-compliance-checker-<version>.zip`** with a printed SHA256 (see `MANIFEST.json` for file list).

## Quick command

```bash
node scripts/generate-compliance-report.js --scorecard "path/to/scorecard.json" --commercial --customer AXL-pitstop5
```

Compliance artifacts default to **`axl-sessions/AXL-<customer>/compliance/<run-id>/`** (HTML, PDF, scorecard snapshots, reference MD copy, `compliance-run.json`). Resolve the session with `--session-dir`, `--lifecycle-dir`, `--customer`, or agent_id lookup. Use `--out-dir` only to override. Reports include **What was tested and why** (auto-loads `spec-artifact.md` from the session folder).

**Sector profiles** (pick one): `--commercial` (default), `--government`, `--healthcare` — or `--sector <name>`. Legacy: `--deployment us-government` → government. FedRAMP §3.10 rows apply only under **government**; HIPAA-heavy row under **healthcare**.

**Verification (after fixes + retest):** `--baseline-scorecard`, optional `--mitigations` → `compliance-verification-report.html`.

**Mitigation outcome (after AVA publish + retest):** add `--mitigation-report` → `compliance-mitigation-outcome-report.html`. See `examples/mitigations.example.json`.

See **SKILL.md** for assess-only default, sector inference, and one-by-one mitigation workflow.
