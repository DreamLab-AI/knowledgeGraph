iri:: http://narrativegoldmine.com/spatial-computing#AutomatedMarketMaker
uri:: urn:visionclaw:concept:spatial-computing:automated-market-maker
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:automated-market-maker
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Automated Market Maker
content-hash:: sha256-12-654930fa0730
legacy-term-id:: MV-9786
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - Automated Market Maker (AMM) is a decentralized exchange protocol that uses algorithmic pricing mechanisms and liquidity pools instead of traditional order books, enabling permissionless token swaps where prices adjust automatically based on supply and demand within smart contract-managed reserves.

- ### Semantic Classification
  - owl-class:: spatial-computing:AutomatedMarketMaker
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Blockchain]] (bc)
  - is-subclass-of:: [[DeFi Protocol]]
  - requires:: [[Liquidity Pools]], [[Smart Contracts]], [[Pricing Algorithms]]
  - enables:: [[Permissionless Trading]], [[Liquidity Provision]], [[Token Swaps]]

- ### Content

  ### Technical Details
  Key components include:
  - **Constant Product Formula**: x * y = k pricing mechanism where token quantities maintain constant product
  - **Liquidity Pools**: Smart contracts holding paired token reserves deposited by liquidity providers
  - **LP Tokens**: Receipts representing liquidity provider shares and earning trading fees
  - **Slippage**: Price impact from large trades relative to pool size

  ### Major Protocols
  Uniswap (Ethereum), SushiSwap, Curve Finance (stablecoins), PancakeSwap (BNB Chain), and Balancer (weighted pools).

  ### Advantages and Risks
  Advantages include 24/7 liquidity, permissionless access, and decentralization. Risks include impermanent loss for LPs, smart contract vulnerabilities, and slippage on large trades.

  ### Metaverse Applications
  AMMs enable trading of virtual land tokens, in-game assets, and metaverse project governance tokens.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
