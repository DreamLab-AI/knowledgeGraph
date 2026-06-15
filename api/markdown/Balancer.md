public:: true

# Balancer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:balancer",
  "@type": "Page",
  "vc:slug": "balancer",
  "title": "Balancer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:balancer",
  "@type": "Class",
  "label": "Balancer",
  "definition": "Balancer is a decentralised automated market maker (AMM) protocol on Ethereum and compatible EVM chains that generalises the constant-product AMM model to support weighted multi-asset pools, where pool weights can be set arbitrarily (e.g., 80/20 or 60/20/20 distributions) rather than the 50/50 split of Uniswap. It functions simultaneously as a self-rebalancing portfolio manager, a liquidity provider, and a price sensor.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:evm", "label": "EVM"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:weighted-pool", "label": "Weighted Pool"},
      {"@id": "urn:ngm:class:stableswap-invariant", "label": "StableSwap Invariant"},
      {"@id": "urn:ngm:class:vote-escrowed-token", "label": "Vote-Escrowed Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:asset-liquidity", "label": "Asset Liquidity"},
      {"@id": "urn:ngm:class:on-chain-portfolio-management", "label": "On-Chain Portfolio Management"},
      {"@id": "urn:ngm:class:yield-bearing-liquidity", "label": "Yield-Bearing Liquidity"},
      {"@id": "urn:ngm:class:decentralized-exchange", "label": "Decentralized Exchange"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:vault", "label": "Vault"},
      {"@id": "urn:ngm:class:boosted-pool", "label": "Boosted Pool"},
      {"@id": "urn:ngm:class:managed-pool", "label": "Managed Pool"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:arbitrage", "label": "Arbitrage"},
      {"@id": "urn:ngm:class:liquidity-provider", "label": "Liquidity Provider"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:lp-token", "label": "LP Token"},
      {"@id": "urn:ngm:class:concentrated-liquidity", "label": "Concentrated Liquidity"},
      {"@id": "urn:ngm:class:curve-finance", "label": "Curve Finance"},
      {"@id": "urn:ngm:class:uniswap", "label": "Uniswap"},
      {"@id": "urn:ngm:class:liquid-staking-token", "label": "Liquid Staking Token"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:constant-product-amm", "label": "Constant-Product AMM"},
      {"@id": "urn:ngm:class:order-book-exchange", "label": "Order Book Exchange"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:finance", "label": "Finance"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:balancer-protocol", "label": "Balancer Protocol"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Balancer is a programmable [[Automated Market Maker]] protocol that allows [[Liquidity Pool]]s to contain up to eight assets in arbitrary proportions. This generalisation of the standard 50/50 AMM model means a pool can be configured as 80% ETH / 20% BAL — passively rebalancing when traders arbitrage the pool back toward target weights, effectively providing portfolio management services to liquidity providers. Balancer pools thus act as both on-chain index funds and decentralised exchange venues.

- ### Relationships
  - Balancer extends the [[Automated Market Maker]] concept to multi-asset and custom-weight pools, enabling richer [[Asset Liquidity]] provision than binary pools. It relies on [[EVM]] smart contracts and [[Liquidity Pool]] mechanics inherited from Uniswap-like designs. The BAL [[Governance Token]] gives holders control over protocol parameters including pool whitelisting and fee configuration. Liquidity providers receive [[LP Token]]s representing their pool share. [[Concentrated Liquidity]] features, introduced in Balancer v2, allow capital efficiency improvements similar to Uniswap v3.

- ### Content
  - Balancer was developed by Fernando Martinelli and Mike McDonald and launched its v1 mainnet in March 2020. The core insight — that Uniswap's constant-product formula is a special case of a generalised constant weighted geometric mean — enabled multi-token pools with tunable weights. Balancer Labs raised $3m in a seed round in 2020 and $5m in a Series A in 2021, distributing governance via the BAL token launched in June 2020.

  - The v2 architecture, launched in 2021, separated pool logic from asset management by introducing a single centralised Vault that holds all pool assets, dramatically reducing gas costs for multi-hop trades. Pool types were abstracted into a plugin model: Weighted Pools (the original generalised AMM), Stable Pools (optimised for like-priced assets via the StableSwap invariant), Boosted Pools (integrating yield-bearing assets such as Aave aTokens), and Managed Pools for actively managed on-chain funds.

  - Balancer's ecosystem is notable for its composability — Boosted Pools allow idle liquidity to earn yield on Aave or Euler whilst still being available for trades, creating capital efficiency that simple AMMs cannot achieve. Protocols such as Aura Finance build veBAL meta-governance layers on top of Balancer's vote-escrowed token model, mirroring the Curve Wars dynamic and routing BAL emissions toward strategic pools.

  - Through 2024–2025, Balancer v3 introduced a simplified vault-with-hooks model to make custom pool logic more accessible to developers. The protocol expanded to multiple EVM chains including Polygon, Arbitrum, Optimism, and Gnosis Chain. Competition from concentrated liquidity AMMs pushed Balancer to focus on its differentiated value: composable stable pools powering liquid staking token (LST) pairs and on-chain portfolio management primitives that single-asset AMMs cannot replicate.

