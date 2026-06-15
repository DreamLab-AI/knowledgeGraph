public:: true

# Concentrated Liquidity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:concentrated-liquidity",
  "@type": "Page",
  "vc:slug": "concentrated-liquidity",
  "title": "Concentrated Liquidity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:concentrated-liquidity",
  "@type": "Class",
  "label": "Concentrated Liquidity",
  "definition": "Concentrated liquidity is a capital efficiency mechanism for automated market makers (AMMs) in which liquidity providers deposit assets within user-specified price ranges rather than uniformly across the full price curve from zero to infinity. Within an active price range, the capital deployed behaves equivalently to a much larger position in a constant-product AMM, dramatically increasing fee revenue per unit of capital while simultaneously reducing the price impact of trades of a given size. This design was pioneered by Uniswap v3 and has since been widely adopted across decentralised exchanges.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:liquidity-provision",
      "label": "Liquidity Provision"
    }
  ],
  "relations": {
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
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Active Liquidity Management"
      },
      {
        "@id": "urn:ngm:class:capital-efficiency",
        "label": "Capital Efficiency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      },
      {
        "@id": "urn:ngm:class:fee-tier",
        "label": "Fee Tier"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:liquidity-position",
        "label": "Liquidity Position"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:constant-product-amm",
        "label": "Constant-Product AMM"
      },
      {
        "@id": "urn:ngm:class:order-book-exchange",
        "label": "Order Book Exchange"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:impermanent-loss",
        "label": "Impermanent Loss"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:uniswap",
        "label": "Uniswap"
      },
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:protocol-owned-liquidity",
        "label": "Protocol-Owned Liquidity"
      },
      {
        "@id": "urn:ngm:class:perpetual-futures",
        "label": "Perpetual Futures"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:financial-derivatives",
        "label": "Financial Derivatives"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:range-order-liquidity",
      "label": "Range Order Liquidity"
    },
    {
      "@id": "urn:ngm:class:tick-based-liquidity",
      "label": "Tick-Based Liquidity"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Concentrated Liquidity]] is a capital efficiency mechanism within [[Automated Market Maker]] protocols that allows [[Liquidity Provision]] within bounded price ranges encoded in [[Smart Contract]] logic, enabling [[Decentralized Exchange]] platforms to offer tighter spreads and higher fee yields than traditional full-range AMMs.

- ### Relationships
  - Concentrated liquidity is a specific refinement of [[Liquidity Provision]] that operates through a [[Liquidity Pool]] managed by a [[Smart Contract]] on a [[Decentralized Exchange]]. The [[Automated Market Maker]] formula is applied only within a provider-specified price tick range, making each unit of capital far more effective within that range. [[Uniswap]] v3 introduced and popularised this model, and it has become a cornerstone of the broader [[DeFi]] ecosystem, enabling more sophisticated [[Yield Farming]] strategies and more expressive [[Token Economics]] models for protocol-owned liquidity programmes.

- ### Content
  - Prior to Uniswap v3 (launched May 2021), most AMMs including Uniswap v1 and v2 distributed liquidity uniformly across all prices from zero to infinity using the constant-product formula x·y = k. This meant that for any realistic trading range — say a stablecoin pair fluctuating between 0.99 and 1.01 USD — the vast majority of deposited capital sat idle outside the relevant price band, earning no fees. Capital efficiency was therefore very low, typically in the single-digit percentages relative to what a limit-order book exchange would achieve at the same depth.

  - Uniswap v3's concentrated liquidity model subdivides the price curve into discrete ticks (granular price levels spaced logarithmically) and allows each liquidity position to be active only between a lower and upper tick boundary defined by the provider. When the market price is within a position's range, the liquidity behaves as if deployed in a virtual constant-product pool of much greater depth. Providers can approximate limit orders, replicate classic AMM behaviour by spanning zero to infinity, or target specific stablecoin peg ranges to maximise fee capture. Each position is represented as a unique non-fungible token (NFT), replacing the fungible LP tokens of earlier AMM designs.

  - The capital efficiency gains are substantial: at the time of launch, Uniswap estimated that a stablecoin provider concentrating liquidity in a ±0.1% range around the peg could achieve up to 4,000× the capital efficiency of a v2 position. This brought on-chain liquidity depth competitive with centralised exchange order books for the first time. The design also introduced multiple fee tiers (0.01%, 0.05%, 0.3%, 1%), enabling different pools for stable pairs, correlated assets, and exotic pairs to be priced appropriately for their volatility and liquidity dynamics.

  - Concentrated liquidity has become the dominant AMM architecture in DeFi through 2024-2025. Curve v2, Balancer v2, PancakeSwap v3, and dozens of other protocols have adopted or adapted the tick-based model. Active liquidity management — using algorithmic rebalancing agents or specialised protocols such as Arrakis Finance and Gamma Strategies to auto-compound fees and rerange positions as prices move — has emerged as a significant sub-sector addressing the impermanent loss challenge inherent when price exits a provider's chosen range and liquidity becomes single-asset. Concentrated liquidity has also influenced perpetual futures protocols and options AMMs, demonstrating how the underlying price-range abstraction generalises across derivative product types.

