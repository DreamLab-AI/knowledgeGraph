public:: true

# Capital Efficiency

```json
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:capital-efficiency", "@type": "Page", "title": "Capital Efficiency", "vc:slug": "capital-efficiency", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:capital-efficiency",
  "@type": "Class",
  "label": "Capital Efficiency",
  "definition": "Capital efficiency is the degree to which deployed capital is put to productive use to generate returns or provide a service, maximising output per unit of locked or committed funds. In decentralised finance it describes designs such as concentrated liquidity and over-collateralisation tuning that let liquidity providers and protocols achieve more depth or yield from less capital. Higher capital efficiency reduces idle assets and lowers the cost of providing liquidity and credit.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:market-maker",
        "label": "Market Maker"
      },
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:collateral",
        "label": "Collateral"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:collateral",
        "label": "Collateral"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
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
  - Capital efficiency is the degree to which deployed capital is put to productive use to generate returns or provide a service, maximising output per unit of locked or committed funds. In decentralised finance it describes designs such as concentrated liquidity and over-collateralisation tuning that let liquidity providers and protocols achieve more depth or yield from less capital. Higher capital efficiency reduces idle assets and lowers the cost of providing liquidity and credit.
  - Related concepts: [[Decentralised Finance]], [[Liquidity]], [[Liquidity Pool]], [[Market Maker]], [[Trade Execution]], [[Collateral]]
- ### Overview
  - Capital efficiency is a defining design goal of modern decentralised-finance protocols. Concentrated-liquidity automated market makers, isolated lending markets and dynamic collateral models all seek to extract more useful liquidity and yield from each unit of capital, at the cost of added complexity and risk.
- ### Key aspects
  - Concentrating liquidity within active price ranges
  - Collateralisation ratios that balance safety and utilisation
  - Yield generation per unit of locked value
  - The trade-off between efficiency and risk exposure
- ### Applications
  - Concentrated-liquidity automated market makers
  - Lending-protocol collateral optimisation
  - Yield-strategy and vault design
  - Treasury and balance-sheet management
- ### Relationships
  - subClassOf:: [[Decentralised Finance]]
  - partOf:: [[Decentralised Finance]]
  - enables:: [[Liquidity]]
  - enables:: [[Liquidity Pool]]
  - supports:: [[Market Maker]]
  - supports:: [[Trade Execution]]
  - requires:: [[Liquidity]]
  - requires:: [[Collateral]]
  - uses:: [[Decentralized Exchange]]
  - dependsOn:: [[Liquidity Pool]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[Liquidity]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[Collateral]]
  - contrastsWith:: [[Risk Management]]
  - bridgesTo:: [[Market Microstructure]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
