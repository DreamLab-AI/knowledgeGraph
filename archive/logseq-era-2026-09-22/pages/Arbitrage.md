public:: true

# Arbitrage

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:arbitrage",
  "@type": "Page",
  "title": "Arbitrage",
  "vc:slug": "arbitrage",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arbitrage",
  "@type": "Class",
  "label": "Arbitrage",
  "definition": "Arbitrage is the practice of simultaneously buying and selling an asset across different markets or instruments to profit from a price discrepancy with minimal directional risk. In decentralised finance it is a central economic force that aligns token prices across exchanges and liquidity pools, often executed by automated bots exploiting transient inefficiencies. Arbitrage activity drives price discovery and improves market efficiency, but is closely tied to phenomena such as miner/maximal extractable value and impermanent loss.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:market-efficiency",
      "label": "Market Efficiency"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      },
      {
        "@id": "urn:ngm:class:market-efficiency",
        "label": "Market Efficiency"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:flash-loan",
        "label": "Flash Loan"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:dex",
        "label": "DEX"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:digital-asset-trading",
        "label": "Digital Asset Trading"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mev",
        "label": "MEV"
      },
      {
        "@id": "urn:ngm:class:impermanent-loss",
        "label": "Impermanent Loss"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
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
  - Arbitrage is the practice of simultaneously buying and selling an asset across different markets or instruments to profit from a price discrepancy with minimal directional risk. In decentralised finance it is a central economic force that aligns token prices across exchanges and liquidity pools, often executed by automated bots exploiting transient inefficiencies. Arbitrage activity drives price discovery and improves market efficiency, but is closely tied to phenomena such as miner/maximal extractable value and impermanent loss.
  - Related concepts: [[Market Efficiency]] [[Price Discovery]] [[Liquidity]] [[Decentralized Finance]] [[MEV]]
- ### Overview
  - Arbitrage exploits price differences for the same or equivalent asset across venues to capture near-risk-free profit.
  - In decentralised markets, automated agents continuously scan exchanges and pools for exploitable spreads.
  - By closing these gaps, arbitrage keeps prices consistent and improves overall market quality.
- ### Mechanisms
  - Cross-exchange arbitrage buys low on one venue and sells high on another simultaneously.
  - Triangular arbitrage cycles through three trading pairs to capture relative mispricing.
  - [[Flash Loan]] mechanisms allow capital-free atomic arbitrage within a single transaction.
  - Competition for arbitrage opportunities is a primary driver of [[MEV]] on blockchains.
- ### Applications
  - Aligning token prices across [[Decentralized Exchange]] and [[DEX]] liquidity pools.
  - Strengthening [[Price Discovery]] and [[Market Efficiency]] in [[Decentralized Finance]].
  - Stabilising stablecoin pegs and derivative pricing.
  - Informing [[Risk Management]] and [[Liquidity]] provision strategies.
- ### Relationships
  - subClassOf:: [[Market Efficiency]]
  - enables:: [[Price Discovery]]
  - enables:: [[Market Efficiency]]
  - enables:: [[Liquidity]]
  - requires:: [[Liquidity]]
  - requires:: [[Order Book]]
  - uses:: [[Flash Loan]]
  - uses:: [[Decentralized Exchange]]
  - uses:: [[DEX]]
  - supports:: [[Decentralized Finance]]
  - supports:: [[Digital Asset Trading]]
  - relatedTo:: [[MEV]]
  - relatedTo:: [[Impermanent Loss]]
  - relatedTo:: [[Yield Farming]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Risk Management]]
  - dependsOn:: [[Price Discovery]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
