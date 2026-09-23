
A Synthetic Asset is a tokenised financial instrument on a blockchain whose value tracks an underlying reference asset, such as a fiat currency, commodity, equity, or index, without requiring direct ownership or custody of that asset. Synthetic assets derive their price through collateralisation and price oracles rather than through a one-to-one backing of the underlying, distinguishing them from wrapped tokens. Protocols such as Synthetix mint synthetic exposures (synths) backed by over-collateralised pools, allowing on-chain trading of real-world price feeds. They enable permissionless access to traditional markets but carry oracle, liquidation, and collateral-risk dependencies.

- ### Overview
  - Synthetic assets emerged to bring exposure to off-chain markets — currencies, commodities, equities and indices — into permissionless on-chain trading. Rather than custodying the underlying, a synth is minted against on-chain collateral and its price is anchored to an external feed.
  - The defining contrast is with wrapped tokens: a wrapped token is a one-to-one claim on a locked underlying asset, whereas a synthetic asset is a collateral-backed derivative that merely mirrors price without any direct redemption of the reference asset.
  - Synthetix popularised the pooled-collateral model, in which stakers of the protocol token jointly back all synths and absorb the aggregate debt of the system, earning fees in return for taking on price risk.

- ### Mechanisms
  - Collateralisation: synths are typically over-collateralised, with stakers locking value well above the minted synthetic exposure to absorb volatility and protect solvency.
  - Price oracles: each synth references an external price feed; the integrity and latency of these oracles directly determines the fidelity and manipulation-resistance of the synthetic.
  - Mint and burn: users create synthetic exposure by minting against collateral and unwind it by burning, with the smart contract enforcing collateral ratios and liquidation thresholds.
  - Debt pools: in pooled designs, all minters share a common debt obligation denominated in the system's reference unit, distributing market risk across participants.

- ### Applications
  - On-chain trading of forex pairs, commodities such as gold, and equity indices without a centralised broker.
  - Hedging crypto-native portfolios against fiat or commodity price movements.
  - Composable derivatives building blocks for DeFi protocols offering perpetuals and structured products.

- ### Provenance

