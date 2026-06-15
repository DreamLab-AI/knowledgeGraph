public:: true

# Yield Aggregator
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:yield-aggregator",
  "@type": "Page",
  "title": "Yield Aggregator",
  "vc:slug": "yield-aggregator",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:yield-aggregator",
  "@type": "Class",
  "label": "Yield Aggregator",
  "definition": "A yield aggregator is a decentralised-finance protocol that automatically routes deposited assets across multiple yield-bearing strategies — such as lending markets, liquidity pools, and staking — to maximise returns while compounding rewards on the user's behalf. By pooling capital and automating strategy selection, reward harvesting, and reinvestment, aggregators reduce gas costs and operational complexity for individual depositors. Modern aggregators frequently expose tokenised vault shares conforming to standards such as ERC-4626, making positions composable with the wider DeFi ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:yield-optimisation",
        "label": "Yield Optimisation"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vault",
        "label": "Vault"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-4626",
        "label": "ERC-4626"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:defi",
        "label": "DeFi"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:liquidity-mining",
        "label": "Liquidity Mining"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:composability",
        "label": "Composability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:total-value-locked",
        "label": "Total Value Locked"
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
  - Yield Aggregator is a key concept in the blockchain domain. Related concepts include [[Decentralised Finance]] [[Yield Farming]] [[ERC-4626]] [[Liquidity Pool]].
  - A yield aggregator is a decentralised-finance protocol that automatically routes deposited assets across multiple yield-bearing strategies — such as lending markets, liquidity pools, and staking — to maximise returns while compounding rewards on the user's behalf. By pooling capital and automating strategy selection, reward harvesting, and reinvestment, aggregators reduce gas costs and operational complexity for individual depositors. Modern aggregators frequently expose tokenised vault shares conforming to standards such as ERC-4626, making positions composable with the wider DeFi ecosystem.
- ### Overview
  - Yield Aggregator sits within the broader category of [[Decentralised Finance]], which it specialises.
  - It connects to a network of 15 related classes across the knowledge graph, anchoring edges that previously pointed to an undefined node.
- ### Key aspects
  - hasPart: [[Vault]]
  - hasPart: [[Liquidity Pool]]
  - uses: [[Smart Contract]]
  - uses: [[Automated Market Maker]]
  - uses: [[Lending Protocol]]
  - uses: [[Staking]]
  - implements: [[ERC-4626]]
- ### Mechanisms
  - Yield Aggregator operates through its constituent parts and dependencies, integrating with adjacent systems to deliver its function within blockchain.
  - Depends on [[Liquidity Mining]] for correct operation.
- ### Applications
  - Applied to advance [[Yield Optimisation]].
  - Applied to advance [[Yield Farming]].
  - Applied to advance [[Composability]].
- ### Relationships
  - subClassOf:: [[Decentralised Finance]]
  - enables:: [[Yield Optimisation]]
  - enables:: [[Yield Farming]]
  - hasPart:: [[Vault]]
  - hasPart:: [[Liquidity Pool]]
  - uses:: [[Smart Contract]]
  - uses:: [[Automated Market Maker]]
  - uses:: [[Lending Protocol]]
  - uses:: [[Staking]]
  - implements:: [[ERC-4626]]
  - partOf:: [[Decentralised Finance]]
  - partOf:: [[DeFi]]
  - dependsOn:: [[Liquidity Mining]]
  - supports:: [[Composability]]
  - relatedTo:: [[Governance Token]]
  - relatedTo:: [[Total Value Locked]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
