public:: true

# Price Stability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:price-stability",
  "@type": "Page",
  "title": "Price Stability",
  "vc:slug": "price-stability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:price-stability",
  "@type": "Class",
  "label": "Price Stability",
  "definition": "Price stability is a macroeconomic condition in which the general level of prices for goods and services remains broadly constant over time, with inflation low, stable and predictable. It is the primary mandate of most central banks because it preserves the purchasing power of money, anchors expectations and supports sustainable economic growth. Central banks pursue price stability through monetary policy tools that influence interest rates, money supply and inflation expectations.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:finance",
      "label": "Finance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:monetary-policy-implementation",
        "label": "Monetary Policy Implementation"
      },
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:purchasing-power",
        "label": "Purchasing Power"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:inflation-targeting",
        "label": "Inflation Targeting"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:inflation-targeting",
        "label": "Inflation Targeting"
      },
      {
        "@id": "urn:ngm:class:quantitative-easing",
        "label": "Quantitative Easing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:interest-rate",
        "label": "Interest Rate"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      },
      {
        "@id": "urn:ngm:class:consumer-price-index",
        "label": "Consumer Price Index"
      },
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The core objective of a [[Central Bank]]
  - Achieved via [[Inflation Targeting]]
  - Preserves [[Purchasing Power]]
  - Measured against the [[Consumer Price Index]]
- ### Overview
  - Price stability does not mean zero inflation but a low, stable rate consistent with a well-functioning economy.
  - Stable prices reduce uncertainty, lower risk premia and improve the allocation of resources.
  - Central banks define explicit targets and adjust policy instruments to keep inflation near them.
- ### Key aspects
  - Low, stable and predictable inflation
  - Anchoring of inflation expectations
  - Symmetric tolerance around a target rate
  - Avoidance of deflationary spirals
  - Credibility and central bank independence
- ### Applications
  - Inflation-targeting monetary policy frameworks
  - Wage and contract indexation decisions
  - Long-term investment and savings planning
  - Sovereign and corporate debt sustainability
- ### Relationships
  - enables:: [[Monetary Policy Implementation]]
  - enables:: [[Economic Growth]]
  - supports:: [[Monetary Policy]]
  - supports:: [[Purchasing Power]]
  - supports:: [[Financial Stability]]
  - dependsOn:: [[Central Bank]]
  - dependsOn:: [[Inflation Targeting]]
  - requires:: [[Inflation Targeting]]
  - requires:: [[Quantitative Easing]]
  - uses:: [[Interest Rate]]
  - relatedTo:: [[Inflation]]
  - relatedTo:: [[Consumer Price Index]]
  - relatedTo:: [[Macroeconomics]]
  - contrastsWith:: [[Inflation]]
- ### Provenance
  - updated:: 2026-06-15
