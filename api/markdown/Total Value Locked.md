public:: true

# Total Value Locked

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:total-value-locked",
  "@type": "Page",
  "title": "Total Value Locked",
  "vc:slug": "total-value-locked",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:total-value-locked",
  "@type": "Class",
  "label": "Total Value Locked",
  "definition": "Total Value Locked (TVL) is a metric that aggregates the market value of all assets deposited in a decentralised finance protocol or across an ecosystem at a given time. It serves as a proxy for adoption, liquidity depth and the economic weight of a protocol's smart contracts. Because it is denominated in volatile assets, TVL can shift with both deposit flows and underlying price movements, so it is interpreted alongside other indicators.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scenario-analysis",
        "label": "Scenario Analysis"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compound",
        "label": "Compound"
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
  - Total Value Locked (TVL) is a metric that aggregates the market value of all assets deposited in a decentralised finance protocol or across an ecosystem at a given time.
  - It serves as a proxy for adoption, liquidity depth and the economic weight of a protocol's smart contracts.
  - Because it is denominated in volatile assets, TVL can shift with both deposit flows and underlying price movements, so it is interpreted alongside other indicators.
  - Related core concepts: [[Blockchain]] [[Liquidity Pool]] [[Yield Farming]] [[Decentralized Exchange]]
- ### Overview
  - TVL sums the value of assets locked in lending pools, DEX liquidity, staking and vaults.
  - It is widely used to rank protocols and gauge ecosystem health, despite its sensitivity to price swings.
  - Double-counting and reflexive token valuations are common pitfalls in naive TVL figures.
- ### Key aspects
  - Aggregation across pools, vaults and staking contracts.
  - Denomination effects from volatile underlying assets.
  - Risk of double-counting rehypothecated or wrapped assets.
  - Use as a comparative and trend indicator rather than an absolute valuation.
- ### Applications
  - Protocol analytics dashboards and league tables.
  - Liquidity and risk assessment for DeFi participants.
  - Ecosystem growth tracking and capital-flow analysis.
- ### Relationships
  - relatedTo:: [[Liquidity Pool]]
  - relatedTo:: [[Yield Farming]]
  - relatedTo:: [[Decentralized Exchange]]
  - relatedTo:: [[Staking]]
  - partOf:: [[Blockchain]]
  - uses:: [[Smart Contract]]
  - supports:: [[Decision Making]]
  - requires:: [[Smart Contract]]
  - bridgesTo:: [[Finance]]
  - enables:: [[Scenario Analysis]]
  - contrastsWith:: [[Compound]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
