public:: true

# Consumer Price Index

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:consumer-price-index",
  "@type": "Page",
  "title": "Consumer Price Index",
  "vc:slug": "consumer-price-index",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:consumer-price-index",
  "@type": "Class",
  "label": "Consumer Price Index",
  "definition": "The Consumer Price Index (CPI) is a statistical measure that tracks the average change over time in the prices paid by households for a representative basket of consumer goods and services. It is the principal indicator used to quantify inflation, adjust wages and benefits, and inform monetary policy. The index is computed by weighting price observations according to typical household expenditure patterns and rebasing them against a reference period.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:macroeconomics",
      "label": "Macroeconomics"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:price-stability",
        "label": "Price Stability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:inflation-targeting",
        "label": "Inflation Targeting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:fiscal-policy",
        "label": "Fiscal Policy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      },
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      },
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:price-stability",
        "label": "Price Stability"
      },
      {
        "@id": "urn:ngm:class:inflation-targeting",
        "label": "Inflation Targeting"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
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
  - The Consumer Price Index (CPI) is a statistical measure that tracks the average change over time in the prices paid by households for a representative basket of consumer goods and services. It is the principal indicator used to quantify inflation, adjust wages and benefits, and inform monetary policy. The index is computed by weighting price observations according to typical household expenditure patterns and rebasing them against a reference period.
  - Related: [[Inflation]] [[Macroeconomics]] [[Statistics]] [[Monetary Policy]]
- ### Overview
  - CPI is constructed from periodic price surveys across retail outlets and service providers, with each item weighted by its share of household spending. National statistics agencies publish CPI on a regular cadence, and the headline figure is widely reported as the rate of inflation.
- ### Mechanisms
  - A fixed or chained basket of goods and services representing typical consumption
  - Expenditure weights derived from household budget surveys
  - Price collection across geographic regions and outlet types
  - Periodic rebasing to a reference period to maintain comparability
  - Variants such as core CPI that exclude volatile food and energy prices
- ### Applications
  - Indexation of wages, pensions and social benefits to preserve purchasing power
  - Setting and assessing central bank inflation targets
  - Deflating nominal economic aggregates to derive real values
  - Escalation clauses in long-term contracts and leases
- ### Relationships
  - subClassOf:: [[Macroeconomics]]
  - uses:: [[Statistics]]
  - uses:: [[Price Stability]]
  - implements:: [[Inflation Targeting]]
  - supports:: [[Monetary Policy]]
  - supports:: [[Fiscal Policy]]
  - requires:: [[Statistics]]
  - relatedTo:: [[Inflation]]
  - relatedTo:: [[Economics]]
  - relatedTo:: [[Economic Growth]]
  - relatedTo:: [[Central Bank]]
  - partOf:: [[Macroeconomics]]
  - bridgesTo:: [[Price Stability]]
  - bridgesTo:: [[Inflation Targeting]]
  - contrastsWith:: [[Economic Growth]]
  - enables:: [[Central Bank]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
