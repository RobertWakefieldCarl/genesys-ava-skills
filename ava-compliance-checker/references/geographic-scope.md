# Geographic scope (compliance run)

Before you present legal conclusions, confirm **where the AVA’s customers and channels operate**. The generator can filter `evidence-map.json` control rows by region.

## Ask the facilitator (multi-select)

When stdout shows `needsUserRegions: true`, use **AskQuestion** with **allow_multiple: true**:

| Option ID | Label |
|-----------|--------|
| `us` | United States |
| `north-america` | North America (US, Canada, Mexico) |
| `latam` | Latin America & Caribbean |
| `emea` | EMEA (EU, UK, Middle East, Africa) |
| `apac` | Asia-Pacific |
| `all` | All regions (no filter) |

Example prompt:

> “Which geographic scope should this compliance pass use? Select all that apply: US, North America, LATAM, EMEA, APAC, or All.”

If the customer only serves one country, pick the narrowest fit. If unsure, ask — do not assume US-only for a global brand.

## CLI

```bash
node scripts/generate-compliance-report.js --scorecard path/to/scorecard.json --regions us,emea
```

```bash
node scripts/generate-compliance-report.js --scorecard path/to/scorecard.json --all-regions
```

Universal themes (e.g. OWASP, PCI baseline, disclosure) stay in scope even when regions are narrowed.

Definitions: `data/compliance-regions.json`.