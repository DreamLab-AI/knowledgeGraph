- ### Definition
  - A [[Synthetic Asset]] is a tokenised instrument whose value tracks an underlying reference asset via [[Price Oracle]] feeds and collateral, distinct from a [[Wrapped Token]], and is the core primitive minted by protocols such as [[Synthetix]] within [[Decentralized Finance (DeFi)]] using a [[Smart Contract]] backed [[Peg Mechanism]].

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

- ### Relationships
  - contrastsWith:: [[Wrapped Token]]
  - contrastsWith:: [[Stablecoin]]
  - enables:: [[Derivatives Trading]]
  - enables:: [[Decentralized Finance (DeFi)]]
  - enables:: [[Decentralized Exchange]]
  - hasPart:: [[Peg Mechanism]]
  - hasPart:: [[Mint-Burn Mechanism]]
  - dependsOn:: [[Price Oracle]]
  - dependsOn:: [[Oracle]]
  - uses:: [[Smart Contract]]
  - uses:: [[Liquidity Pool]]
  - requires:: [[Liquidity Pool]]
  - implements:: [[DeFi Protocol]]
  - relatedTo:: [[Synthetix]]
  - relatedTo:: [[Algorithmic Stablecoin]]
  - supports:: [[Hedging]]
  - supports:: [[Risk Management]]
  - bridgesTo:: [[Finance]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation