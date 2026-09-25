Asset tokenisation is the process of representing ownership, revenue rights, or access rights in a real-world or digital asset as a cryptographically secured blockchain token governed by a smart contract. The token encodes legally binding claims — to real estate, private equity, bonds, commodities, or intellectual property — while embedding compliance logic such as KYC whitelisting and transfer restrictions directly on-chain. Tokenisation enables fractional ownership, continuous secondary trading, and automated settlement without traditional intermediaries, sitting at the convergence of securities regulation, distributed ledger infrastructure, and programmable finance.

### Overview

- Asset tokenisation converts the economic rights in an underlying asset into a digital token that can be issued, transferred, and redeemed on a public or permissioned blockchain. The token is not merely a pointer to the asset — it is the instrument of claim, backed by a legal structure (commonly a [[Special Purpose Vehicle]]) that holds the real-world asset and passes economic entitlements (dividends, rental income, redemption rights) to token holders.
- Why it matters:
  - Illiquid asset classes (real estate, private credit, infrastructure) constitute the majority of global investable wealth but are inaccessible to most investors due to high minimum ticket sizes and long lock-up periods.
  - Tokenisation allows those assets to be subdivided, traded continuously on a [[Decentralised Exchange]] or regulated alternative trading system, and settled programmatically.
  - Automated compliance logic embedded in [[Smart Contracts]] can enforce investor eligibility rules without manual transfer-agent intervention, reducing settlement risk and cost.
  - [[Decentralised Finance]] protocols can use tokenised real-world assets as collateral, unlocking liquidity without asset disposal.
- The key insight is that a [[Digital Asset|digital asset]] backed by a legal claim is fundamentally different from a purely speculative cryptocurrency — it carries enforceable rights in an off-chain asset and is therefore subject to securities law.

### Key Components

- **Legal Layer**
  - A [[Special Purpose Vehicle]] (SPV) or trust typically holds the underlying asset. Token holders have contractual or statutory rights against the SPV — economic rights (income, proceeds), voting rights, or redemption rights — defined in a subscription agreement or operating document compliant with the relevant securities jurisdiction.
  - The choice of SPV jurisdiction (Delaware LLC, Cayman exempted company, Luxembourg RAIF) determines investor protections, tax treatment, and regulatory requirements.
  - Tokens are classified as [[Traditional Securities|securities]] in most jurisdictions, triggering prospectus requirements (EU Prospectus Regulation, US Securities Act) or exemptions (Reg D, Reg S, EU DLT Pilot Regime).
- **Technical Layer**
  - Fungible security tokens use standards such as ERC-1400 (Polymath) and ERC-3643 (T-REX) — both built on ERC-20 — which add role-based transfer controllers, partition support, and on-chain [[Know Your Customer|KYC]] whitelisting.
  - Unique assets (individual properties, artworks) use [[Non-Fungible Token]] standards (ERC-721, ERC-1155) to represent indivisible claims.
  - On-chain oracles (e.g. [[Chainlink]]) are used to feed asset valuations, reference rates, and income distributions into the smart contract, bridging the on-chain token to off-chain economic reality.
  - Layer-2 scaling solutions and permissioned chains (Polygon, Hyperledger Fabric, Corda) address throughput and privacy requirements of institutional issuers.
- **Market Infrastructure Layer**
  - Issuance platforms (Securitize, tZERO, Tokeny) provide white-label tooling for cap-table management, investor onboarding with [[Digital Identity]] verification, and regulatory reporting.
  - Regulated custodians must hold the private keys controlling tokenised securities on behalf of institutional clients, satisfying safekeeping obligations.
  - Secondary markets require either an Alternative Trading System (ATS) licence in the US, a Multilateral Trading Facility (MTF) licence in the EU, or equivalent; pure DEX trading of security tokens is generally not permitted.
  - Delivery-versus-payment (DvP) settlement integrates tokenised assets with cash-leg settlement, often using [[Central Bank Digital Currency|CBDCs]] or regulated [[Stablecoin|stablecoins]] as the cash leg.

### Mechanisms

- **Issuance**: the SPV engages an issuance platform; a [[Smart Contracts|smart contract]] is deployed on-chain encoding the token parameters (supply cap, transferability rules, investor whitelist controller, income distribution schedule). Investor [[Know Your Customer|KYC/AML]] is completed off-chain by a regulated verifier; only approved wallet addresses are added to the whitelist.
- **Primary distribution**: tokens are sold to investors (institutional or, under exemptions, retail) with proceeds flowing to the SPV. Transfer restrictions prevent immediate resale if lock-up periods apply.
- **Secondary trading**: after lock-up, tokens trade on approved venues. [[Decentralised Exchange|DEX]] protocols with built-in compliance gates (permissioned AMMs) are emerging alongside centralised ATS venues.
- **Income distribution**: the smart contract distributes income (rent, bond coupon, dividend) proportionally to all token holders automatically — no transfer-agent processing required. [[Programmable Money|Programmable cash]] (CBDC or stablecoin) is credited to wallets in the same transaction.
- **Redemption or liquidation**: on maturity or sale of the underlying asset, the SPV distributes net proceeds to token holders and burns the tokens.

### Applications / Use Cases

- **Real estate**: fractional ownership of commercial and residential property portfolios. HSBC, JPMorgan, and BNY Mellon have participated in tokenised real estate pilots enabling retail investor access to institutional-grade property.
- **Private equity and venture capital**: fund units tokenised to provide secondary liquidity for LP positions that would otherwise be locked up for 10+ years.
- **Fixed-income instruments**: tokenised bonds issued on public blockchains — the European Investment Bank issued a digital bond on Ethereum; the BIS Innovation Hub has published DvP settlement blueprints.
- **Commodities**: gold, carbon credits, and agricultural commodities tokenised to enable fractional holding and programmable delivery. [[Chainlink]] price oracles connect physical-market prices to token contracts.
- **Intellectual property and royalties**: music royalties, patent income streams, and licensing revenue tokenised so creators and investors can trade future income without disposing of the underlying IP.
- **Infrastructure and energy**: toll roads, solar farms, and battery storage projects tokenised to allow public investment in long-duration assets previously restricted to sovereign wealth funds.
- **Trade finance**: receivables and letters of credit tokenised on platforms like Contour (built on Corda) to reduce fraud risk and speed settlement across supply chain participants.

### Standards & Context

- **ERC-1400 / ST-20 (Polymath)**: early security token standard introducing partitioning, forced transfers, and issuance/redemption controllers on Ethereum.
- **ERC-3643 (T-REX)**: Token for Regulated EXchanges, widely adopted in European institutional pilots; separates identity registry from token contract and enables compliance rule composition.
- **ERC-3525 (Semi-Fungible Token)**: supports financial instruments with value slots, combining fungible (amount) and non-fungible (slot/series) attributes — useful for structured notes and bond tranches.
- **EU DLT Pilot Regime (Regulation EU 2022/858)**: allows regulated market operators and CSDs to operate DLT-based trading and settlement systems under a temporary sandbox, directly enabling tokenised security trading in the EU.
- **MiCA (Markets in Crypto-Assets Regulation)**: governs crypto-asset service providers in the EU; security tokens remain outside MiCA scope and under existing MiFID II / Prospectus Regulation, but MiCA provides a regulatory framework for [[Stablecoin|asset-referenced tokens]] used as the cash leg.
- **FATF Travel Rule (Recommendation 16)**: requires virtual-asset service providers to pass beneficiary/originator information alongside transfers above threshold; issuance platforms must implement solutions (e.g. TRP, TRISA) for tokenised security transfers.
- **ISO 24165 (DTIF)**: Digital Token Identifier standard assigns unique identifiers to tokens, supporting reference data and regulatory reporting.
- **BIS Innovation Hub projects**: Project Helvetia, Project Jura, and Project Dunbar have demonstrated tokenised security settlement using wholesale [[Central Bank Digital Currency|CBDCs]], providing design blueprints for central bank–endorsed tokenised asset infrastructure.
- **IOSCO Policy Recommendations (2023)**: the [[International Organisation of Securities Commissions]] issued recommendations urging regulators to apply existing securities law to tokenised instruments and to address cross-border regulatory gaps.

### Risks and Limitations

- **Legal Uncertainty** — on-chain token ownership may not equal off-chain legal title in all jurisdictions; binding legal structures (SPVs, trusts) add complexity
- **Smart Contract Risk** — bugs or exploits in token contract code can lead to irreversible asset loss; formal verification is recommended
- **Oracle Risk** — manipulation of price feeds used by token contracts can trigger incorrect liquidations or distributions
- **Liquidity Risk** — despite theoretical liquidity benefits, secondary markets for many tokenised assets remain thin
- **Custody Counterparty Risk** — the off-chain custodian holding the underlying asset remains a single point of failure
- **Regulatory Risk** — classification of a token as a security triggers extensive compliance obligations that vary by jurisdiction
- **Interoperability Fragmentation** — proliferation of incompatible token standards and blockchain networks limits composability

### Current Landscape (2026)

- On-chain real-world-asset value (excluding stablecoins) reached roughly $33.5B on the canonical rwa.xyz tracker by July 2026, about 4x its early-2025 level, though tokenised US Treasuries and cash-equivalents account for around 80% of that total, exposing heavy concentration in a single asset class.
- BlackRock's BUIDL fund (launched March 2024 on Ethereum via Securitize, now multichain across Aptos, Arbitrum, Avalanche, Optimism, Polygon and more) grew past $1.7B and by mid-2026 was cited above $2.5B AUM, and has become the reference collateral asset for protocols such as Sky/MakerDAO, Spark, Ondo (OUSG) and Frax.
- The US settled the legal question: the SEC's Division of Corporation Finance issued its first formal statement (28 January 2026) that a security's technological format does not change its legal character, followed by FINRA approval of the first broker-dealer custody of tokenised securities with atomic settlement, plus the GENIUS Act stablecoin framework enacted July 2025.
- DTCC/DTC, custodian to over $114T of traditional securities, received a three-year SEC no-action letter in December 2025 and began limited production trades of tokenised Russell 1000 equities, major ETFs and Treasuries in July 2026, with a broader service launch targeted for October 2026.
- In the EU, MiCA moved into its "zero tolerance" enforcement phase across all 27 member states, with the grandfathering period for pre-existing crypto-asset service providers expiring on 1 July 2026 (non-compliance risking fines up to 15% of annual turnover); over 500 CASPs had been authorised by early 2026.
- The sector converged on a neutral token standard, ERC-7943, alongside the established permissioned ERC-3643 (T-REX), improving interoperability for compliant tokenised securities.
- Cross-institution settlement matured: in May 2026 Ondo Finance, JPMorgan's Kinexys, Mastercard and Ripple completed the first live cross-border, cross-bank redemption of tokenised US Treasuries on the XRP Ledger, while the BIS-led Project Agorá tested atomic wholesale settlement with seven central banks and 40+ institutions.
- Open challenges as of 2026 remain: extreme concentration in Treasury proxies, thin secondary-market and DeFi liquidity (only ~$2.5B actively deployed as collateral), fragmentation across chains and trackers with divergent value methodologies ($24-36B range), and slow expansion into equities, private credit and real estate.

### References

- 1. Stobox (2026). The State of RWA Tokenization — 2026 Mid-Year Report. https://www.stobox.io/reports/state-of-rwa-2026
- 2. Orochi Network (2026). Real-World Asset Tokenization News: Launches, Regulation, and What to Watch. https://orochi.network/blog/real-world-asset-tokenization-news
- 3. CleanSky (2026). Real-World Asset Tokenization in 2026: From Treasuries to Real Estate. https://cleansky.io/blog/rwa-tokenization-2026/
- 4. Yellow.com Research (2026). RWA Tokenization Tripled But 80% Of Value Sits In Just One Asset Class. https://yellow.com/research/rwa-tokenization-concentration-treasury-dominance-2026
- 5. Spark Money Research (2026). Real-World Asset Tokenization: Can Bitcoin Compete in the $30B+ Market. https://www.spark.money/research/rwa-tokenization-bitcoin-blockchain

### Provenance

