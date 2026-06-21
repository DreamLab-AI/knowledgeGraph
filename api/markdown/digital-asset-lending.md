- ### Definition
  - Financial services enabling cryptocurrency holders to lend their digital assets to borrowers through centralized platforms or decentralized protocols, earning interest yields while providing liquidity for trading, leverage, and other financial activities secured by collateralized positions.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalAssetLending
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[DeFi Services]]
  - requires:: [[Collateral Management]], [[Smart Contracts]], [[Liquidation Systems]]
  - enables:: [[Yield Generation]], [[Leverage Trading]], [[Liquidity Provision]]

- ### Content

  - ## Technical Details
  - **Lending Models**:
		- Over-collateralized loans: Typical 150-200% collateral ratio
		- Under-collateralized/unsecured: Credit scoring or reputation-based
		- Flash loans: Single-block uncollateralized borrowing
		- Peer-to-peer: Direct lender-borrower matching
  - **Major Protocols**:
		- Aave V3: Multi-chain lending across 15+ EVM chains; TVL exceeded $57B in early 2026; V4 upgrade with modular hub-and-spoke design in progress
		- Compound V3: Conservative single-base-asset markets; TVL ~$2.7B (2026)
		- Sky (formerly MakerDAO, rebranded September 2024): USDS stablecoin (successor to DAI) generation; combined USDS+DAI supply ~$13.4B as of 2026
		- JustLend: TRON ecosystem lending
  - **Risk Parameters**:
		- Liquidation thresholds and penalties
		- Interest rate models (utilization-based)
		- Bad debt handling mechanisms
		- Oracle price feed dependencies
  - **Market Dynamics**: TVL fluctuations with market conditions, regulatory uncertainty affecting CeFi lenders
  - ## Applications
  - Passive income generation
  - Trading leverage and margin
  - Stablecoin minting
  - Arbitrage financing
  - Corporate working capital

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z