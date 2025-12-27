- ### OntologyBlock
  id:: automated-market-maker-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9786
	- source-domain:: mv
	- preferred-term:: Automated Market Maker
	- status:: active
	- definition:: Automated Market Maker (AMM) is a decentralized exchange protocol that uses algorithmic pricing mechanisms and liquidity pools instead of traditional order books, enabling permissionless token swaps where prices adjust automatically based on supply and demand within smart contract-managed reserves.
	- owl:class:: mv:AutomatedMarketMaker
	- belongsToDomain:: [[metaverse]]
	- is-subclass-of:: [[DeFi Protocol]]
	- enables:: [[Permissionless Trading]], [[Liquidity Provision]], [[Token Swaps]]
	- requires:: [[Liquidity Pools]], [[Smart Contracts]], [[Pricing Algorithms]]
	- #### Relationships
	  id:: automated-market-maker-relationships
	  collapsed:: true

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
