public:: true

# Impermanent Loss
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:impermanent-loss",
  "@type": "Page",
  "vc:slug": "impermanent-loss",
  "title": "Impermanent Loss",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:impermanent-loss",
  "@type": "Class",
  "label": "Impermanent Loss",
  "definition": "Impermanent loss is the opportunity cost incurred by a liquidity provider in an automated market maker (AMM) when the price ratio of deposited assets diverges from the ratio at deposit time, causing the provider's pool share to be worth less than simply holding the assets would have been. The loss is 'impermanent' because it reverses if prices return to the original ratio, but becomes realised upon withdrawal.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:amm-algorithm", "label": "AMM Algorithm"},
      {"@id": "urn:ngm:class:decentralized-finance", "label": "Decentralized Finance"},
      {"@id": "urn:ngm:class:defi-yield", "label": "DeFi Yield"},
      {"@id": "urn:ngm:class:token-pair", "label": "Token Pair"},
      {"@id": "urn:ngm:class:price-oracle", "label": "Price Oracle"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:liquidity-mining", "label": "Liquidity Mining"},
      {"@id": "urn:ngm:class:hold-strategy", "label": "Hold Strategy"},
      {"@id": "urn:ngm:class:order-book-exchange", "label": "Order Book Exchange"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:constant-product-formula", "label": "Constant Product Formula"},
      {"@id": "urn:ngm:class:price-ratio", "label": "Price Ratio"},
      {"@id": "urn:ngm:class:asset-volatility", "label": "Asset Volatility"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:divergence-loss", "label": "Divergence Loss"},
      {"@id": "urn:ngm:class:realised-loss", "label": "Realised Loss"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:liquidity-provider-risk", "label": "Liquidity Provider Risk"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:il-hedging-strategy", "label": "IL Hedging Strategy"},
      {"@id": "urn:ngm:class:concentrated-liquidity", "label": "Concentrated Liquidity"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:pool-rebalancing", "label": "Pool Rebalancing"},
      {"@id": "urn:ngm:class:arbitrage", "label": "Arbitrage"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:short-volatility-position", "label": "Short Volatility Position"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:il-protection", "label": "IL Protection"},
      {"@id": "urn:ngm:class:dynamic-fee-amm", "label": "Dynamic Fee AMM"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:options-pricing", "label": "Options Pricing"},
      {"@id": "urn:ngm:class:market-making-risk", "label": "Market Making Risk"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:divergence-loss", "label": "Divergence Loss"},
    {"@id": "urn:ngm:class:amm-opportunity-cost", "label": "AMM Opportunity Cost"}
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
  - [[Impermanent Loss]] is the divergence loss suffered by [[Liquidity Provision]] depositors in an [[Automated Market Maker]] when relative asset prices shift after deposit, arising directly from the rebalancing mechanics of the [[Constant Product Formula]] that governs most [[Liquidity Pool]] systems.

- ### Relationships
  - Impermanent Loss is an intrinsic property of [[Automated Market Maker]] and [[Liquidity Pool]] designs using the [[AMM Algorithm]] (especially [[Constant Product Formula]]), is offset in practice by trading fee revenue and [[Liquidity Mining]] incentives, and is a primary risk factor that practitioners must quantify before providing liquidity.

- ### Content
  - Impermanent loss was first described informally in the Uniswap community in 2019, shortly after Uniswap v1's launch. The term was popularised through blog posts by Pintail ("Uniswap: A Good Deal for Liquidity Providers?", November 2019) and later formalised mathematically. It became a critical concept as the DeFi ecosystem expanded through 2020–2021, with billions in liquidity locked in AMM pools and providers discovering that fee revenue did not always compensate for price divergence losses.
  - In a constant-product AMM (x*y = k), the pool automatically rebalances when prices move by buying the depreciating asset and selling the appreciating one. This rebalancing means that when a liquidity provider withdraws, they receive more of the asset that fell in price and less of the one that rose. The impermanent loss formula is: IL = 2*sqrt(r)/(1+r) - 1, where r is the price ratio change. A 2x price move produces approximately 5.7% impermanent loss; a 5x move produces 25.5% loss. The loss is "impermanent" only in the sense that price reversion to the original ratio eliminates it; in practice, for volatile asset pairs, the loss is often permanent upon withdrawal.
  - Understanding impermanent loss is essential for rational liquidity provision decisions. Providers must compare expected fee revenue against expected impermanent loss given anticipated price volatility. For stable-stable pairs (e.g. USDC/DAI), impermanent loss is negligible, making stablecoin AMMs highly attractive to liquidity providers. For volatile pairs, providers effectively write a short-volatility position, similar to options selling. Concentrated liquidity AMMs (Uniswap v3) amplify both fee earnings and impermanent loss within a specified price range, intensifying this trade-off.
  - As of 2024–2025, research and protocol design have produced several mechanisms to mitigate impermanent loss. Dynamic fee AMMs (Uniswap v4 hooks, Maverick Protocol) adjust fees based on volatility to better compensate providers. Geometric mean market makers (Balancer) and correlated asset AMMs (Curve v2) have lower inherent IL for specific asset types. Single-sided liquidity provision (Bancor v3's IL protection, Maverick's boosted pools) attempts to eliminate or insure against IL. Despite these innovations, impermanent loss remains the central risk disclosure for AMM liquidity providers and a key input to DeFi yield calculations.

