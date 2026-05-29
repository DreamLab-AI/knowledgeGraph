- ### Definition
  - Uniswap is a decentralised exchange (DEX) protocol deployed on Ethereum that enables permissionless, non-custodial token swaps through an Automated Market Maker (AMM) mechanism. Rather than maintaining an order book, it uses liquidity pools governed by the constant-product invariant (x × y = k), where liquidity providers deposit token pairs and earn fees proportional to their pool share. Successive protocol versions have introduced concentrated liquidity (v3) and multi-hop routing, making Uniswap a foundational primitive of decentralised finance.

- ### Semantic Classification
  - owl-class:: uniswap:Uniswap
  - owl-role:: Concept

- ### Relationships
  - uses [[Automated Market Maker]]
  - uses [[Smart Contract]]
  - hasPart [[Liquidity Pool]]
  - enables [[Decentralised Finance]]
  - enables [[Yield Farming]]
  - dependsOn [[Token Economics]]

- ### Content
  - Uniswap operates entirely through smart contracts on the Ethereum Virtual Machine (EVM), requiring no central intermediary or account registration. Its core invariant — the product of token reserves remaining constant — ensures that any trade shifts the price along a bonding curve, creating automatic price discovery. Liquidity providers (LPs) deposit equal-value amounts of two tokens into a pool and receive LP tokens representing their share; fees collected from swaps (typically 0.3 % per swap in v2) are distributed pro-rata to LPs on withdrawal.
  - Version 3 introduced concentrated liquidity, allowing LPs to specify price ranges within which their capital is deployed, dramatically improving capital efficiency for stablecoins and correlated assets. The protocol also supports multi-hop swaps through a router contract, so any ERC-20 token pair can be traded even without a direct pool, provided a path of intermediate pools exists.
  - Governance of the protocol is managed by UNI token holders, who can vote on fee tiers, new pool parameters, and treasury allocations via on-chain governance. Because Uniswap pools are permissionless, any token can be listed without approval, though this also introduces risks of low-liquidity or fraudulent tokens. The protocol has been widely forked across EVM-compatible chains and stands as a reference implementation for DEX design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z