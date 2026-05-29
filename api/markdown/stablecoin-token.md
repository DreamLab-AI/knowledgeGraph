- ### Definition
  - A token designed to maintain stable value by pegging to external assets like fiat currencies, commodities, or using algorithmic mechanisms.

- ### Semantic Classification
  - owl-class:: blockchain:StablecoinToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  A Stablecoin Token requires an underlying **Blockchain** infrastructure and **Smart Contract** logic for issuance, collateral management, and redemption mechanics. It enables **Transaction** settlement in decentralised protocols and **Interoperability** across DeFi ecosystems. The token uses **Tokenomics** design principles and **Price Oracle** feeds to maintain its peg through on-chain collateralisation or algorithmic supply adjustments. It contrasts with **Inflationary Token** (expanding-supply incentive tokens) and **Deflationary Token** (burn-driven value-accrual tokens). Related concepts include **Token Economics**, **Digital Currency**, **Central Bank Digital Currency** (the government-issued analogue), **Cryptocurrency** (the broader category), and **ERC20 Token** (the dominant implementation standard).

- ### Content
  Stablecoins occupy a pivotal role in the cryptocurrency ecosystem by providing the price stability that volatile crypto-assets lack, making them suitable as a medium of exchange and unit of account within DeFi protocols. The design space divides into three primary architectures distinguished by their collateralisation model.

  Fiat-collateralised stablecoins (e.g. USDC, USDT, BUSD) maintain 1:1 reserves of fiat currency or short-term government securities held by a regulated custodian. Users trust the issuer to maintain full reserves and provide on-demand redemption. Regulatory scrutiny focuses on reserve attestation, with jurisdictions including the EU (MiCA regulation), New York (BitLicense), and Singapore (Payment Services Act) requiring periodic audits. The centralisation introduces single-point-of-failure risk—USDC briefly depegged in March 2023 when $3.3 billion of its reserves were trapped in the failing Silicon Valley Bank.

  Crypto-collateralised stablecoins (e.g. DAI from MakerDAO) use over-collateralisation enforced by smart contracts: borrowers deposit more than $1 of crypto assets (typically ETH) as collateral to mint $1 of stablecoin, with automated liquidation triggered if the collateral ratio drops below a minimum threshold. This architecture is decentralised and transparent but capital-inefficient and vulnerable to collateral price cascades.

  Algorithmic stablecoins attempt to maintain the peg through programmatic supply expansion (minting) and contraction (burning) driven by market signals or dual-token seigniorage models. The catastrophic collapse of Terra/LUNA in May 2022, which destroyed approximately $40 billion in value within days, exposed the fundamental fragility of unbacked algorithmic mechanisms under reflexive selling pressure, prompting widespread regulatory proposals to restrict or ban purely algorithmic designs.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z