public:: true

# Twap Oracle

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:twap-oracle",
  "@type": "Page",
  "title": "Twap Oracle",
  "vc:slug": "twap-oracle",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:twap-oracle",
  "@type": "Class",
  "label": "Twap Oracle",
  "definition": "A TWAP oracle is a price oracle that reports the time-weighted average price of an asset over a chosen window rather than its instantaneous spot price. By accumulating price-time observations and dividing by elapsed time, it produces a smoothed figure that is expensive to manipulate within a single block or short interval. TWAP oracles are widely deployed by on-chain automated market makers to supply manipulation-resistant price feeds to lending, derivatives, and liquidation systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:price-oracle",
      "label": "Price Oracle"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:on-chain-data",
        "label": "On-Chain Data"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:on-chain-data",
        "label": "On-Chain Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:dex",
        "label": "DEX"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:on-chain-data",
        "label": "On-Chain Data"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:chainlink",
        "label": "Chainlink"
      },
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      },
      {
        "@id": "urn:ngm:class:uniswap",
        "label": "Uniswap"
      },
      {
        "@id": "urn:ngm:class:arbitrage",
        "label": "Arbitrage"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
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
  - A TWAP oracle is a kind of [[Price Oracle]] supplying manipulation-resistant feeds to [[Decentralized Finance]].
  - It derives prices from [[Automated Market Maker]] reserves and [[Liquidity Pool]] state via [[On-Chain Data]].
  - It is exposed through [[Smart Contract]] interfaces and relates to [[Uniswap]], [[DEX]], and [[Arbitrage]].
- ### Overview
  - A TWAP oracle resists manipulation because moving the average meaningfully requires sustaining a distorted price across many blocks, which arbitrageurs counteract and which incurs large capital cost.
  - It is typically computed from a cumulative price accumulator stored by an automated market maker, sampled at the start and end of the averaging window.
  - The choice of window length trades responsiveness for robustness: longer windows resist manipulation but lag genuine price moves.
- ### Mechanisms
  - Cumulative price accumulator that records price multiplied by elapsed time each block.
  - Window-based sampling: difference of two accumulator readings divided by the time delta.
  - Manipulation resistance derived from the capital cost of sustaining off-market prices.
  - Integration with smart contracts that consume the averaged price for collateral valuation.
- ### Applications
  - Collateral valuation and liquidation thresholds in DeFi lending protocols.
  - Settlement and mark pricing for on-chain derivatives.
  - Reference pricing for automated market makers and decentralised exchanges resistant to flash-loan attacks.
- ### Relationships
  - hasPart:: [[Liquidity Pool]]
  - hasPart:: [[On-Chain Data]]
  - partOf:: [[Price Oracle]]
  - requires:: [[Automated Market Maker]]
  - requires:: [[On-Chain Data]]
  - enables:: [[Decentralized Finance]]
  - enables:: [[Decentralized Finance]]
  - uses:: [[Automated Market Maker]]
  - uses:: [[Liquidity Pool]]
  - uses:: [[Smart Contract]]
  - supports:: [[Decentralized Finance]]
  - supports:: [[DEX]]
  - dependsOn:: [[On-Chain Data]]
  - contrastsWith:: [[Chainlink]]
  - contrastsWith:: [[Oracle]]
  - relatedTo:: [[Price Oracle]]
  - relatedTo:: [[Uniswap]]
  - relatedTo:: [[Arbitrage]]
  - bridgesTo:: [[Automated Market Maker]]
  - subClassOf:: [[Price Oracle]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
