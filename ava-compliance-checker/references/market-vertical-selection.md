# Market vertical → compliance scope

Compliance themes depend on **what the AVA does** and **which market** it serves, not on facilitator research docs or legacy IVR write-ups.

## Pick a vertical before you present legal conclusions

1. Read **spec §1–5** and the AVA role (routing, billing, clinical, agency, outbound, etc.).
2. Map to a **market vertical** below (sets **sector** and optional **`--ava-role`**).
3. If two verticals fit equally, **ask the facilitator or customer** — do not default silently.

| Vertical ID (`--market-vertical`) | Sector | Typical laws emphasized |
|-----------------------------------|--------|-------------------------|
| `general-commercial` | commercial | Disclosure, privacy, security, accessibility |
| `financial-services` | commercial | ECOA/FCRA, PCI, GLBA |
| `insurance-health` | healthcare | HIPAA, CMS, NAIC, UR |
| `insurance-pc` | commercial | NAIC, consumer protection |
| `healthcare-provider` | healthcare | HIPAA, Section 1557 |
| `government-public` | government | FedRAMP, OMB, CJIS, IRS 1075 (§3.11) |
| `telecom-outbound` | commercial | TCPA, STIR/SHAKEN |
| `domain-brokerage` | commercial | + `godaddy-dbs` role profile |
| `retail-ecommerce` | commercial | BOT laws, CCPA-style privacy |
| `education` | commercial | COPPA, companion-chat (minors) |

## Agent question (when unsure)

Use **AskQuestion** with the vertical labels above, or ask in voice on a call:

> “Which market vertical should we use for this compliance pass — for example general commercial, financial services, healthcare payer/provider, government, telecom outbound, or domain brokerage?”

Generator stdout may include `needsUserMarketVertical: true` when inference is weak.

## CLI

```bash
node scripts/generate-compliance-report.js \
  --scorecard path/to/scorecard.json \
  --market-vertical financial-services
```

Vertical implies sector unless you also pass `--commercial` | `--government` | `--healthcare` explicitly (explicit sector wins).
