public:: true

# Token Swapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:token-swapping",
  "@type": "Page",
  "vc:slug": "token-swapping",
  "title": "Token Swapping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-swapping",
  "@type": "Class",
  "label": "Token Swapping",
  "definition": "Token swapping is the on-chain exchange of one cryptocurrency or digital token for another without an intermediary custodian, executed atomically within a single transaction through smart contracts. The mechanism is implemented via automated market makers (AMMs), which price assets algorithmically using constant-function market-making formulas against liquidity pools, or via atomic swap protocols using hash time-locked contracts (HTLCs) that enable trustless cross-chain exchanges. Token swapping is the primary interaction primitive of decentralised exchanges and a building block for complex DeFi strategies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-exchange-dex", "label": "Decentralized Exchange (DEX)"},
      {"@id": "urn:ngm:class:permissionless-trading", "label": "Permissionless Trading"},
      {"@id": "urn:ngm:class:uniswap", "label": "Uniswap"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"},
      {"@id": "urn:ngm:class:de-fi", "label": "DeFi"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Token Swapping]] is the atomic, non-custodial exchange of one on-chain token for another, executed through [[Smart Contract]] logic that interfaces with [[Liquidity Pool]] reserves maintained by [[Automated Market Maker]] protocols, forming the core transaction primitive of [[Decentralized Exchange (DEX)]] infrastructure and enabling [[Permissionless Trading]] without order-book intermediaries.

- ### Relationships
  - [[Token Swapping]] is mechanically executed by [[Automated Market Maker]] protocols against [[Liquidity Pool]] reserves, with [[Uniswap]] being the canonical implementation. [[Atomic Swap]] protocols extend the concept trustlessly across chains using hash time-locked contracts. The action is the foundational building block of [[Permissionless Trading]] and, in composable sequences, enables [[Yield Farming]] strategies where tokens are swapped into positions in liquidity protocols. [[DeFi]] as an ecosystem is largely constituted by token swap primitives combined with lending and derivatives protocols within [[Decentralized Exchange (DEX)]] infrastructure.

- ### Content
  - Token swapping on centralised exchanges preceded decentralised implementations — exchanges like Bitfinex and Coinbase have provided token trading since 2013. However, centralised swaps require account registration, custody of funds by the exchange, and trust in the operator, properties that conflict with the self-custody ethos of cryptocurrency. Early DEX experiments like EtherDelta (2016) used on-chain order books, which proved gas-expensive and illiquid. The breakthrough came with Hayden Adams' implementation of the Uniswap v1 protocol in November 2018, directly applying Vitalik Buterin's 2016 blog post on on-chain AMMs to produce a simple, elegant on-chain swap mechanism with two contract calls.

  - The technical execution of an AMM swap proceeds as follows: a user calls the swap function on a pool contract specifying an input token amount and minimum output amount (slippage tolerance). The pool calculates the output using its pricing formula (x*y=k for constant-product AMMs, or the concentrated liquidity formula for Uniswap v3 ticks), deducts a fee from the input, and transfers output tokens to the user while crediting the input tokens to the pool. The entire operation is atomic — either the whole swap succeeds or the transaction reverts — eliminating counterparty risk. Price impact increases with trade size relative to pool depth; for large trades, DEX aggregators (1inch, Paraswap) split orders across multiple pools to minimise total slippage.

  - Token swapping has commercial and social significance beyond speculation: it provides liquidity for newly issued tokens that could not afford centralised exchange listing fees; enables treasury management for DAOs that must swap governance tokens for stablecoins to fund operations; facilitates programmatic rebalancing of decentralised lending vaults; and powers arbitrage bots that maintain price consistency across DeFi protocols. Flash swaps (borrowing tokens from a pool, using them within a single transaction, and returning them without pre-existing capital) enable zero-capital arbitrage strategies and have been both used productively and exploited in protocol attacks.

  - By 2024-2025, token swapping has evolved significantly from simple constant-product AMMs. Uniswap v4's hooks mechanism allows custom logic to be attached to pool lifecycle events, enabling novel fee structures, on-chain limit orders, and dynamic liquidity management. Intent-based architectures (CoW Protocol, UniswapX) shift execution to off-chain solvers that compete to fill swap intents at the best price, often achieving better outcomes than direct AMM interactions by routing through coincidence-of-wants matching. Cross-chain token swapping through LayerZero, Wormhole, and similar bridging protocols has increased, though bridge security remains a significant attack surface following high-profile exploits totalling billions in losses.

