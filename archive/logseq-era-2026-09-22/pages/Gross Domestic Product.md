public:: true

# Gross Domestic Product

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gross-domestic-product",
  "@type": "Page",
  "title": "Gross Domestic Product",
  "vc:slug": "gross-domestic-product",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gross-domestic-product",
  "@type": "Class",
  "label": "Gross Domestic Product",
  "definition": "Gross domestic product (GDP) is the total monetary value of all final goods and services produced within a country's borders over a given period. It is the principal aggregate measure of economic activity, computed via the production, income, or expenditure approaches, and is reported in nominal and real (inflation-adjusted) terms. GDP underpins growth measurement, fiscal and monetary policy, and cross-country comparison.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:macroeconomics",
      "label": "Macroeconomics"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:national-income",
        "label": "National Income"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      },
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      },
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fiscal-policy",
        "label": "Fiscal Policy"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:national-income",
        "label": "National Income"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:balance-of-payments",
        "label": "Balance of Payments"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:national-income",
        "label": "National Income"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Gross Domestic Product]] is the total market value of all final goods and services produced within a country in a period.
  - It is the headline aggregate of [[Macroeconomics]] and the basis for measuring [[Economic Growth]].
  - It is reported in nominal and real terms, the latter adjusted for [[Inflation]].
- ### Overview
  - GDP can be computed three equivalent ways: summing value added in production, summing factor incomes, or summing final expenditure (C + I + G + net exports).
  - Real GDP strips out price changes so that growth reflects genuine increases in output rather than [[Inflation]].
  - It is the central indicator policymakers track when setting [[Fiscal Policy]] and [[Monetary Policy]].
- ### Key aspects
  - Coverage of final output produced within national borders.
  - Production, income, and expenditure approaches yielding the same total.
  - Nominal versus real (inflation-adjusted) measurement.
  - Per-capita and growth-rate derivations for comparison.
- ### Mechanisms
  - Aggregating value added across all producing sectors.
  - Deflating with price indices to obtain real output.
  - Reconciling with [[National Income]] accounting identities.
  - Periodic revision as source statistics improve.
- ### Applications
  - Quantifying and benchmarking [[Economic Growth]] over time and across countries.
  - Guiding [[Fiscal Policy]] and [[Monetary Policy]] decisions.
  - Sizing debt, deficits, and spending as shares of output.
  - Serving as a denominator for productivity and welfare comparisons.
- ### Relationships
  - uses:: [[National Income]]
  - relatedTo:: [[Macroeconomics]]
  - relatedTo:: [[Economic Growth]]
  - relatedTo:: [[Inflation]]
  - partOf:: [[Macroeconomics]]
  - supports:: [[Fiscal Policy]]
  - supports:: [[Monetary Policy]]
  - enables:: [[Economic Growth]]
  - dependsOn:: [[National Income]]
  - requires:: [[Inflation]]
  - contrastsWith:: [[Balance of Payments]]
  - standardizedBy:: [[National Income]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
