- ### Definition
  - The Decentralised Finance Domain classifies concepts for financial services that operate through smart contracts on public ledgers without a central intermediary. It covers protocols for trading, lending, derivatives, and asset management, together with the composability that lets them interoperate. As a subject classification under the Blockchain Domain, it scopes the on-ledger financial primitives rather than the underlying tokens or the regulation that may apply.

- ### Semantic Classification
  - owl-class:: defi:DecentralisedFinanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Payment Systems Domain]], [[Mechanism Design Domain]], [[Risk Management Domain]]
  - has-part:: [[Automated Market Maker]], [[Lending Protocol]], [[Stablecoin]], [[Decentralised Exchange]], [[Yield Aggregator]]
  - requires:: [[Smart Contract]], [[Digital Asset Domain]], [[Price Oracle]]
  - enables:: [[Permissionless Lending]], [[Automated Liquidity Provision]], [[Composable Financial Products]]

- ### Content
  - The Decentralised Finance Domain catalogues financial functions implemented as openly callable smart contracts. Automated market makers price and settle trades against pooled liquidity, lending protocols match suppliers and borrowers through over-collateralised positions, and stablecoins provide a stable unit within these systems. Because contracts expose standard interfaces, products compose freely, so the output of one protocol becomes the input to another.
  - Composability is the defining property and the principal source of risk. A position may depend on a price oracle, a lending market, and a liquidity pool simultaneously, so a fault or manipulation in any component can cascade. Mechanism design choices such as fee curves, collateral factors, and liquidation rules determine whether incentives keep the system solvent under stress.
  - Beneath the Blockchain Domain, decentralised finance consumes digital assets and payment rails while feeding into risk management and regulation. The DeFi Domain entry is a short alias that bridges to this fuller treatment. Keeping financial primitives distinct from the assets they move and the rules that constrain them lets the ontology model novel protocols without reclassifying their tokens.

- ### Provenance
  - sources:: [[FATF Virtual Asset Guidance]]
  - migration-date:: 2026-05-29T00:00:00Z