public:: true

# Slippage

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:slippage", "@type": "Page", "title": "Slippage", "vc:slug": "slippage", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:slippage",
  "@type": "Class",
  "label": "Slippage",
  "definition": "Slippage is the difference between the expected price of a trade and the price at which it actually executes, arising from price movement and limited liquidity between order submission and settlement. On automated-market-maker decentralised exchanges slippage is a direct function of trade size relative to pool depth, and traders set a slippage tolerance to bound acceptable execution price. Excessive slippage can be exploited through front-running and other maximal-extractable-value strategies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-exchange",
      "label": "Decentralized Exchange"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mev",
        "label": "MEV"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:market-maker",
        "label": "Market Maker"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      },
      {
        "@id": "urn:ngm:class:mev",
        "label": "MEV"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
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
  - Slippage is the difference between the expected price of a trade and the price at which it actually executes, arising from price movement and limited liquidity between order submission and settlement. On automated-market-maker decentralised exchanges slippage is a direct function of trade size relative to pool depth, and traders set a slippage tolerance to bound acceptable execution price. Excessive slippage can be exploited through front-running and other maximal-extractable-value strategies.
  - Related concepts: [[Decentralized Exchange]], [[Trade Execution]], [[Liquidity]], [[Liquidity Pool]], [[MEV]], [[Order Book]]
- ### Overview
  - Slippage is a core trading concern that becomes especially visible on decentralised exchanges, where automated-market-maker curves make the price impact of a swap mechanically predictable. Traders manage it with slippage-tolerance settings, routing across pools, and splitting large orders.
- ### Mechanisms
  - Price impact from moving along an automated-market-maker bonding curve
  - Slippage tolerance as a user-set bound that reverts the swap if exceeded
  - Liquidity depth as the primary determinant of realised slippage
  - Sandwich and front-running attacks that deliberately widen slippage
- ### Applications
  - Configuring swap tolerance on decentralised exchanges
  - Routing large orders to minimise price impact
  - Modelling execution cost in trading strategies
  - Designing maximal-extractable-value protections
- ### Relationships
  - subClassOf:: [[Decentralized Exchange]]
  - partOf:: [[Trade Execution]]
  - dependsOn:: [[Liquidity]]
  - dependsOn:: [[Liquidity Pool]]
  - requires:: [[Trade Execution]]
  - enables:: [[MEV]]
  - uses:: [[Order Book]]
  - supports:: [[Market Maker]]
  - relatedTo:: [[Decentralized Exchange]]
  - relatedTo:: [[Liquidity]]
  - relatedTo:: [[Trade Execution]]
  - relatedTo:: [[MEV]]
  - contrastsWith:: [[Liquidity]]
  - bridgesTo:: [[Market Microstructure]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
