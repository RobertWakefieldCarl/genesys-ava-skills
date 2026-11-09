# Customer documentation vs AVA compliance scope

Compliance reports map **evaluation scorecards** and **in-scope AVA artifacts** to the bundled law compendium. Many AXL sessions also contain **customer and facilitator documentation** that must **not** drive regulatory themes or mitigation pressure on the AVA itself.

## Never use as compliance mapping inputs

| Artifact | Why |
|----------|-----|
| `company-research.md` | SEC/10-K, corporate strategy — org context, not AVA behavior |
| `call-flow-analysis.md`, `dbs-flow-analysis.md` | Legacy IVR/architecture — platform, not Dot/AVA instructions |
| `pov-deck.*`, `readout-artifact.*`, `run-artifact.*` | Workshop narrative |
| `customer-takehome.*` | Lab credentials and demo wiring |
| Spec **Internal setup**, **Appendix**, facilitator-only blocks | Harness/deploy notes |

## In scope for “what was tested and why”

- `spec-artifact.md` **§§1–5** (use case, conversation, tools) — per UC spec file when multi-AVA
- `.ava-lifecycle/<slug>/test-cases/*.json` tied to the eval run
- `scorecard.json` / attempt transcripts referenced by the scorecard
- Published AVA `design-artifact.json` / `sage-agent.json` when mitigating

## GoDaddy (AXL-godaddy) — typical concerns

| In scope for UC1–UC3 | Usually deferred (document for customer/legal separately) |
|----------------------|---------------------------------------------------------------|
| AI/bot disclosure (`corner-voice-bot-disclosure`) | Corporate 10-K / care revenue facts from research |
| Prompt injection, IDOR, confidentiality (`corner-auth-*`, `corner-leak-*`) | Fair lending / ECOA (no credit decisions) |
| Grounding / no fabricated broker or migration facts | Employment algorithm laws (not hiring) |
| Recording consent if production call recording is enabled | NAIC / health UR (“claim” = brokerage claim ID) |
| PCI if card capture is introduced | Full TCPA program (inbound lab; outbound is another product) |
| Accessibility of voice/chat channel | FedRAMP (commercial broker line) |

Run with `--ava-role godaddy-dbs` and `--evaluation-suite corner-security` for corner-case scorecards.

## Facilitator mitigations when documentation is not AVA scope

1. **Split the readout** — “AVA compliance” slide vs “enterprise / program” slide (privacy program, recording policy, HR hiring tools).
2. **Label deferred themes** in the compliance HTML (`--ava-role`) so counsel does not chase insurance UR from a brokerage claim ID.
3. **Point owners** — recording → contact-center ops; TCPA → outbound campaign team; 10-K / international privacy → privacy office.
4. **Do not edit AVA** to “fix” research-doc facts; fix instructions/guardrails only when spec §3–§5 requires it.
5. **Customer version** — strip internal research and facilitator appendices; attach only `compliance/latest` + spec §1–5 summary.
