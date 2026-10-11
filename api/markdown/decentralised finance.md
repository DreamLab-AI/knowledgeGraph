Decentralised Finance (DeFi) encompasses financial services and instruments—including lending, borrowing, trading, derivatives, and yield generation—implemented as permissionless, non-custodial smart contracts on public blockchains, eliminating the need for traditional financial intermediaries such as banks, brokers, clearinghouses, and custodians. Protocol logic is encoded directly in on-chain code that executes deterministically and transparently, allowing any party with an internet connection to inspect the rules governing their assets. DeFi protocols achieve composability by adhering to shared token standards and interacting through standardised interfaces, enabling complex multi-step financial strategies assembled from interoperable building blocks. The sector operates without central points of control, exposing users to smart-contract risk, oracle manipulation, and governance attacks in place of traditional counterparty risk.

### Overview

- DeFi emerged from the observation that the core functions of finance—custody, exchange, credit, derivatives, insurance—are fundamentally information-processing tasks that can be expressed as deterministic programs. The Ethereum network, with its Turing-complete [[Smart Contract]] environment introduced in 2015, became the primary substrate for early DeFi experimentation. The sector experienced a period of rapid protocol proliferation from 2020 onward, establishing core primitives that have since been deployed on competing and complementary chains including [[Layer 2 Scaling]] networks and alternative Layer 1s.
- DeFi is significant because it offers permissionless access to financial services globally: anyone with a [[Cryptographic Wallet]] and internet connection can interact with a lending protocol or [[Decentralised Exchange]] without identity checks, credit history requirements, or geographic restrictions. This property underpins arguments about [[Financial Inclusion]] in jurisdictions where conventional banking access is limited.
- The sector is also a proving ground for open-source financial protocol design. All contract code, transaction history, and current state are publicly readable, enabling independent security audits and economic research at a scale impractical in opaque traditional systems.

### Key Components

#### Automated Market Makers

- [[Automated Market Maker]] (AMM) protocols replace centralised order books with on-chain [[Liquidity Pool]] smart contracts. Liquidity providers deposit paired assets; the pool's pricing function—most commonly the constant-product formula x·y = k popularised by [[Uniswap]]—determines swap rates. Fees accrue to liquidity providers proportional to their share of the pool.
- AMMs enable permissionless market creation for any ERC-20 token pair without requiring a counterparty to place an opposing order, though they expose liquidity providers to impermanent loss when token prices diverge.

#### Decentralised Exchanges

- [[Decentralised Exchange]] (DEX) platforms facilitate peer-to-contract token swaps directly from users' wallets. AMM-based DEXes (Uniswap, Curve, Balancer) dominate spot trading; order-book DEXes (dYdX, Serum) serve derivatives and perpetual futures. DEX aggregators route orders across multiple pools to minimise slippage.

#### Lending Protocols

- [[Lending Protocol]] platforms such as Aave and Compound allow users to supply assets to earn interest or borrow against over-collateralised deposits. Interest rates are set algorithmically based on utilisation ratios. Liquidation mechanisms—executed by incentivised bots—automatically seize and sell collateral when a position's health factor falls below a defined threshold, maintaining protocol solvency without human intervention.
- [[Flash Loan]] functionality, unique to DeFi, enables uncollateralised borrowing that must be repaid within a single atomic transaction, used for arbitrage, collateral swaps, and liquidation capital.

#### Stablecoins

- [[Stablecoin]] assets serve as DeFi's primary unit of account and medium of exchange, sidestepping the volatility of native blockchain tokens. Three architectures dominate: fiat-backed (USDC, USDT), crypto-overcollateralised (DAI), and algorithmic. Each embeds different trust and systemic risk profiles that affect their reliability as DeFi collateral.

#### Yield Farming and Liquidity Mining

- [[Yield Farming]] refers to strategies that maximise returns by deploying assets across multiple DeFi protocols simultaneously—supplying liquidity, borrowing against deposits, reinvesting rewards in recursive loops. Liquidity mining distributes [[Governance Token]] rewards to incentivise early protocol adoption, aligning user and protocol interests but also inflating token supply.

#### Governance and DAOs

- Most mature DeFi protocols transfer control of protocol parameters—interest rate curves, collateral factors, fee tiers—to token-holder vote via on-chain [[Decentralised Autonomous Organisation]] governance. [[Governance Token]] holders propose and ratify upgrades, adjustments, and treasury allocations. This structure distributes upgrade authority but concentrates voting power in large holders and exposes protocols to governance attacks.

#### Oracles

- [[Blockchain Oracle]] networks (Chainlink, Band Protocol) supply off-chain price and event data to on-chain contracts. DeFi protocols are critically dependent on oracle integrity: price manipulation attacks exploit latency or low-liquidity price feeds to trigger false liquidations or drain protocol reserves.

#### Derivatives and Structured Products

- On-chain [[Derivatives]] platforms (Synthetix, GMX, dYdX) offer perpetual futures, options, and synthetic assets tracking real-world prices. Structured products combine multiple primitives into vaults that execute yield strategies automatically, abstracting complexity for less technical users.

### Applications and Use Cases

- **Peer-to-peer lending and borrowing**: users globally can access credit or earn yield without a bank account, using [[Smart Contract]] collateral management.
- **Permissionless token exchange**: any ERC-20 token can be listed and traded on a DEX instantly without regulatory approval, enabling price discovery for nascent assets.
- **Cross-border remittances**: [[Stablecoin]] transfers settle on-chain in seconds at near-zero cost compared to correspondent banking, supporting [[Cross-Border Payments]] use cases.
- **Real-world asset tokenisation**: [[Real-World Asset Tokenization]] projects bring tokenised bonds, equities, and commodities on-chain, extending DeFi liquidity mechanisms to traditional markets while introducing custodian trust layers.
- **Algorithmic treasury management**: [[Decentralised Autonomous Organisation]] treasuries deployed into DeFi yield strategies allow protocol-native capital to generate returns and sustain operations.
- **Institutional on-chain finance**: permissioned DeFi forks and compliant token wrappers allow regulated institutions to access DeFi liquidity while meeting AML/KYC obligations.
- **Programmable derivatives**: synthetic exposure to equities, commodities, forex, and macro indices without traditional brokerage accounts, bridging DeFi to [[Algorithmic Trading]] strategies.
- **Insurance primitives**: decentralised insurance protocols allow users to purchase cover against smart-contract failure or stablecoin de-pegging, creating peer-to-peer risk markets.

### Architecture and Technical Mechanisms

- **Composability ("money legos")**: DeFi protocols are designed with standardised interfaces so output tokens from one protocol (e.g. Aave's aTokens representing deposit positions) can be used as input to another (e.g. as collateral in a CDP vault), enabling strategies that span multiple protocols in a single transaction.
- **Atomic transactions**: Ethereum's transaction model guarantees that multi-step DeFi interactions either fully complete or fully revert, eliminating partial-execution states that would strand funds.
- **[[Token Standard]]**: ERC-20 (fungible tokens), ERC-721 ([[Non-Fungible Token]]), and ERC-4626 (tokenised vault standard) define the interfaces DeFi contracts use to interact with token assets uniformly.
- **[[Layer 2 Scaling]]**: High gas fees on Ethereum mainnet drove migration of DeFi liquidity to optimistic rollups (Optimism, Arbitrum) and ZK rollups (zkSync, Starknet), which batch transactions off-chain and post compressed proofs on-chain, reducing costs by orders of magnitude while inheriting Ethereum security.
- **[[Interoperability Protocol]]**: cross-chain bridges and messaging layers (LayerZero, Axelar, Wormhole) allow liquidity and messages to flow between independent blockchains, expanding the DeFi addressable market but introducing bridge security as a new attack surface.
- **Tokenomics**: protocol [[Governance Token]] distribution schedules, fee capture mechanisms, and buyback or burn programmes determine long-run token value accrual and constitute a nascent field of on-chain mechanism design.

### Risk Landscape

- **Smart contract risk**: bugs or logical flaws in [[Smart Contract]] code can be exploited to drain liquidity; audits reduce but do not eliminate this risk.
- **Oracle manipulation**: flash-loan-enabled price oracle attacks can distort on-chain prices momentarily to extract value from dependent protocols.
- **Liquidation cascades**: correlated asset price crashes can trigger simultaneous mass liquidations, overwhelming liquidation bots and leaving protocols under-collateralised.
- **Governance attacks**: token concentration allows a majority attacker to pass malicious governance proposals transferring treasury assets or upgrading contracts to drain funds.
- **Regulatory uncertainty**: regulatory treatment of DeFi protocols, governance token holders, and front-end operators varies across jurisdictions; [[Regulatory Technology]] solutions attempt to layer compliance without undermining permissionlessness.
- **Bridge exploits**: cross-chain bridges have been the largest single source of DeFi losses, as they require centralised or multi-sig custody of bridged assets and present high-value targets.
- **MEV (Miner/Maximal Extractable Value)**: block producers and searchers can reorder, insert, or censor transactions to extract value from DeFi users through sandwich attacks, arbitrage, and liquidation front-running.

### Standards & Context

- **ERC-20**: the foundational fungible token interface standard for Ethereum, enabling all DeFi protocols to interact with any compliant token uniformly.
- **ERC-4626**: a tokenised vault standard that normalises the interface for yield-bearing vault contracts, improving composability across lending and yield aggregation protocols.
- **EIP-1559**: Ethereum's fee market reform introduced base-fee burning, altering ETH's supply dynamics and affecting DeFi transaction cost predictability.
- **MiCA (Markets in Crypto-Assets)**: the EU regulatory framework that classifies and regulates crypto-asset issuers and service providers, with significant implications for stablecoin issuance and DeFi front-end operators.
- **FATF guidance on virtual assets**: the Financial Action Task Force's guidance on applying AML/CTF rules to virtual asset service providers creates compliance obligations that front-end DeFi operators increasingly navigate.
- **OpenZeppelin**: widely adopted open-source library of audited [[Smart Contract]] modules (ERC-20, access control, upgradeability patterns) that many DeFi protocols use as a security baseline.
- **Chainlink CCIP (Cross-Chain Interoperability Protocol)**: a standardised messaging and token bridge protocol aimed at providing a shared security layer for cross-chain DeFi interactions.

### Current Landscape (2026)

- Regulation arrived in force: the US GENIUS Act (P.L. 119-27), signed 18 July 2025, established the first federal framework for dollar-backed stablecoins (1:1 audited reserves, monthly attestations, freeze/block capabilities), with implementing regulations due by 18 July 2026; the EU's MiCA reached its enforcement deadline around 1 July 2026 after finalising Level 2/3 measures in December 2025.
- US market-structure clarity advanced: the House passed the CLARITY Act in July 2025 and the Digital Asset Market Clarity Act (12 January 2026) formalised the "Digital Commodity" designation, shifting jurisdiction over non-security tokens from the SEC to the CFTC, with DeFi protocols and infrastructure development explicitly carved out of the regime.
- Total value locked has been volatile rather than uniformly booming: figures ranged from roughly $130-149bn in early 2026 (Dwellir, BlockEden) down to about $72-98bn by mid-2026 (DeFiLlama-tracked, CRS), still well below the ~$180bn late-2021 peak, with Ethereum anchoring over half of all TVL.
- Stablecoins decoupled from and dwarfed DeFi: aggregate market cap reached about $314-317bn by April-June 2026 (up over 50% since early 2025 per the Federal Reserve), roughly 4.4x total DeFi TVL, with USDT near 60% share, USDC around 25%, and MakerDAO rebranded to Sky (DAI/USDS); yield-bearing stablecoins such as Ethena's USDe grew from about $9.5bn to over $20bn.
- Major protocol upgrades reshaped the stack: Uniswap v4 (live January 2025) introduced customisable "hooks" across 10+ chains, and activated its fee switch via the UNIfication proposal on 25 December 2025; Aave v4 launched on Ethereum mainnet on 30 March 2026 with a hub-and-spoke unified-liquidity architecture, expanding to USDG (June 2026) and Avalanche (July 2026).
- Restaking and account abstraction matured: EigenLayer shipped mainnet slashing on 17 April 2025, enabling Actively Validated Services; EIP-4844 blob transactions cut L2 fees 80-95%, while ERC-4337 and EIP-7702 (letting EOAs act as smart accounts) plus paymaster gas sponsorship became standard UX layers.
- Institutional and TradFi convergence became the dominant theme: BlackRock and other asset managers deployed into tokenised Treasuries and money-market funds, Aave launched its Horizon RWA market for institutions, and analysts project TVL toward $250bn by end-2026 - though most stablecoin liquidity still circulates outside DeFi and no overarching DeFi-specific legislative framework yet exists.

### References

- 1. Congressional Research Service (2026). An Overview of Decentralized Finance (DeFi), R48883. https://www.congress.gov/crs-product/R48883
- 2. Federal Reserve (2026). Stablecoins in 2025: Developments and Financial Stability Implications, FEDS Notes. https://www.federalreserve.gov/econres/notes/feds-notes/stablecoins-in-2025-developments-and-financial-stability-implications-20260408.html
- 3. Dwellir (2026). The State of DeFi in 2026. https://www.dwellir.com/blog/state-of-defi-2026
- 4. Aave Labs (2026). Aave V4 is Live on Ethereum. https://aave.com/blog/aave-v4-live-ethereum
- 5. Uniswap Labs (2025). Uniswap v4 is Here - A New Era of DeFi. https://blog.uniswap.org/uniswap-v4-is-here
- 6. Symbiosis Finance (2026). How DeFi works now: 2026 tech stack explained. https://symbiosis.finance/blog/defi-in-2025-2026-what-changed-technically

### Provenance

## Merged from DeFi (needs reconciliation)
DeFi (Decentralised Finance) is the ecosystem of open, permissionless financial protocols and applications deployed as Smart Contracts on public blockchains — primarily Ethereum — that replicate and extend traditional financial services such as lending, borrowing, trading, yield generation, and derivatives without centralised intermediaries such as banks, brokers, or clearinghouses. Core DeFi primitives include Automated Market Makers (AMMs), over-collateralised lending protocols, stablecoins, flash loans, and yield aggregators, all coordinated through token-based incentive mechanisms and governed by Decentralised Autonomous Organisations (DAOs). DeFi protocols are composable — outputs of one protocol become inputs to another, enabling complex financial strategies assembled from protocol primitives. The open, programmable architecture distinguishes DeFi from traditional finance and from centralised cryptocurrency exchanges, making it a distinct paradigm within the broader blockchain economy.

### Overview

- DeFi emerged from the Ethereum ecosystem from 2018 onwards, capitalising on the [[Ethereum Virtual Machine]]'s Turing-complete [[Smart Contract]] execution environment to encode financial logic on-chain without requiring trust in any single operator.
- The core insight is that financial primitives — exchange, credit, savings, risk transfer — can be expressed as deterministic code deployed to a permissionless public ledger, accessible to any address globally, subject only to [[Gas Fee]]s and [[Consensus Mechanism]] finality.
- DeFi protocols are non-custodial: users retain key ownership of assets throughout; protocol logic executes trustlessly and is auditable on-chain, removing the need for intermediary custody.
- Composability (the "money lego" property) allows developers to chain protocol calls atomically. A single [[Smart Contract]] transaction can borrow on one protocol, swap on another, deposit on a third, and repay the original loan — all within one block.
- Governance is typically transferred to [[DAO Governance]] structures where [[Governance Token]] holders vote on parameter changes (fee tiers, collateral ratios, new market listings) whose outcomes execute via on-chain governance contracts.
- DeFi's total value locked (TVL) — the aggregate collateral deposited across protocols — became a key ecosystem health metric during the 2020–2021 "DeFi Summer" growth surge and has remained a benchmark for protocol adoption.

### Key Components and Mechanisms

- **[[Automated Market Maker]] (AMM)**
  - Replaces the centralised order book with algorithmically managed [[Liquidity Pool]]s.
  - Uniswap popularised the constant product formula (x·y = k), enabling permissionless token swapping against pooled reserves.
  - Later AMM variants (Curve, Balancer, Uniswap v3) introduced concentrated liquidity, stableswap invariants, and weighted multi-asset pools.
- **[[Liquidity Pool]]**
  - Token pairs (or multi-asset baskets) deposited by liquidity providers who earn a share of trading fees proportional to their pool share.
  - Impermanent loss is a key risk: divergence in pool asset prices reduces LP value relative to simply holding the assets.
- **Over-Collateralised Lending**
  - Borrowers lock collateral worth more than the loan value; liquidation is triggered algorithmically if the collateral-to-debt ratio falls below a protocol-defined threshold.
  - Protocols such as Aave and Compound implement interest rate curves driven by pool utilisation, encoded in the [[Smart Contract]] rather than set by human credit analysts.
  - [[Flash Loan]]s — borrowed and repaid atomically within a single transaction — are a uniquely DeFi instrument exploiting blockchain atomicity, enabling arbitrage, collateral swaps, and self-liquidations without upfront capital.
- **[[Stablecoin]]s**
  - Fiat-backed (USDC, USDT), crypto-collateralised (DAI via MakerDAO), and algorithmic designs attempt to maintain price stability essential for lending, payments, and treasury management.
  - Algorithmic stablecoin failures (Terra/Luna 2022) underscored systemic risk in under-collateralised designs.
- **[[Yield Farming]] and [[Liquidity Mining]]**
  - Protocols distribute [[Governance Token]]s to liquidity providers as additional incentives beyond base trading fees, aligning early adoption with protocol ownership.
  - Yield aggregators (Yearn Finance pattern) automatically route capital to highest-yielding strategies across multiple protocols.
- **Decentralised Derivatives**
  - Perpetual futures (dYdX, GMX), options protocols (Lyra, Dopex), and synthetic asset protocols (Synthetix) bring [[On-Chain Derivatives]] markets with transparent open interest and settlement.
- **[[Oracle]]s**
  - External price feeds (Chainlink, Pyth) are essential infrastructure — DeFi protocols require reliable on-chain price data for liquidation, settlement, and AMM rebalancing. Oracle manipulation is a primary attack vector.

### Applications and Use Cases

- **Permissionless lending and borrowing**: global access to credit and yield without KYC, enabled by [[Smart Contract]] collateral management.
- **Decentralised trading**: token swaps via AMMs (Uniswap, Curve, Balancer) have become primary liquidity venues for long-tail tokens.
- **Stablecoin issuance**: on-chain collateral vaults (MakerDAO) mint decentralised stablecoins used across the DeFi ecosystem.
- **Yield optimisation**: automated strategies compound returns across lending, staking, and liquidity provision positions.
- **Cross-chain liquidity**: [[Cross-Chain Bridge]]s extend DeFi to non-Ethereum ecosystems (Solana, Avalanche, Arbitrum, Optimism), routing liquidity to layer-2 environments with lower [[Gas Fee]]s.
- **On-chain derivatives and structured products**: decentralised options vaults (DOVs), interest rate swaps, and structured yield products mirror sophisticated financial instruments.
- **[[Algorithmic Trading]]**: on-chain liquidity surfaces enable automated arbitrage, market-making bots, and [[Maximal Extractable Value]] (MEV) extraction strategies that bridge DeFi to quantitative finance.
- **Programmable treasury management**: DAOs use DeFi protocols to manage protocol-owned liquidity (POL), diversify treasuries, and earn yield on idle assets.
- **[[Digital Identity]] integration**: emerging KYC-optional or privacy-preserving identity layers (Sismo, Worldcoin) seek to bring selective compliance to DeFi without reintroducing full centralisation.

### Risks and Challenges

- **Smart contract vulnerabilities**: bugs or logic errors in [[Smart Contract]] code have led to large-scale protocol exploits, with hundreds of millions lost across multiple incidents.
- **[[Oracle]] manipulation**: attacks that distort price feeds used by lending protocols can trigger unjust liquidations or enable undercollateralised borrowing.
- **[[Maximal Extractable Value]] (MEV)**: block producers (validators/miners) can reorder, insert, or censor transactions within a block to extract value, creating front-running and sandwich-attack dynamics.
- **[[Liquidity Pool]] impermanent loss**: liquidity providers bear price divergence risk that can erode returns relative to passive holding.
- **Algorithmic stablecoin fragility**: reflexive collapse dynamics in undercollateralised stablecoin designs introduce systemic risk.
- **Regulatory uncertainty**: global regulators are actively assessing whether DeFi protocols constitute regulated securities offerings, exchanges, or lending facilities, creating compliance and enforcement risk.
- **Layer-1 scalability**: high [[Gas Fee]]s on Ethereum mainnet during peak demand periods have driven migration to layer-2 rollups and alternative layer-1 chains.
- **Key management risk**: non-custodial architecture places full responsibility for private key security on users — loss of key means loss of assets.

### Standards and Context

- **ERC-20 [[Token Standard]]**: the foundational fungible token interface on Ethereum that all DeFi assets comply with, enabling composability across protocols.
- **ERC-4626**: the tokenised vault standard that normalises yield-bearing vault interfaces, making DeFi yield aggregators interoperable.
- **[[Ethereum Virtual Machine]] (EVM) compatibility**: shared execution environment across Ethereum, Arbitrum, Optimism, Polygon, Avalanche EVM chains enabling portability of DeFi code.
- **Chainlink and Pyth [[Oracle]] networks**: de-facto standards for price feed provision used across the majority of major DeFi protocols.
- **Uniswap v3 concentrated liquidity**: a protocol innovation adopted broadly as a reference AMM design for capital efficiency.
- **MakerDAO Multi-Collateral DAI**: one of the earliest and most studied decentralised stablecoin systems, influencing regulatory frameworks globally.
- **Financial Action Task Force (FATF)**: the FATF has issued guidance classifying DeFi protocols as virtual asset service providers (VASPs) in certain jurisdictions when sufficiently decentralised controls are absent, a contested regulatory classification.
- **Markets in Crypto-Assets (MiCA)**: the EU MiCA framework (effective 2024–2025) addresses stablecoin issuers and CASPs, with ongoing regulatory analysis of decentralised protocol coverage.

### Current Landscape (2026)

- Regulation shifted from headwind to enabling layer: the US GENIUS Act (S.1582) was signed into law on 18 July 2025 as Public Law 119-27, creating a federal payment-stablecoin regime that mandates 1:1 liquid reserves, monthly reserve disclosure, and a ban on issuers paying interest or yield to holders, with implementing regulations due by mid-2026.
- In parallel the EU's MiCA regime moved into phased enforcement (ESMA required CASPs to delist non-compliant stablecoins by end-January 2025), while narrowly carving out "fully decentralised" services under Recital 22, leaving ESMA Level 3 guidance on DeFi expected during 2026.
- Yield models were forced to restructure around the issuer interest ban, pivoting to swap fees, liquidity incentives, tokenised-T-bill exposure and KYC-gated institutional pools (Aave Arc, Maple Finance) rather than direct stablecoin rewards.
- Tokenised real-world assets became the standout growth category: on-chain public-market RWA value grew from roughly USD 5.6bn to over USD 16-18bn during 2025 and pushed past USD 30bn on-chain by early 2026, led by BlackRock's BUIDL, Ondo Finance and Franklin Templeton's BENJI, though most value remains inside permissioned rails with limited DeFi composability.
- Major protocol upgrades reshaped the stack: Aave v4 introduced a unified cross-chain liquidity layer (borrow on one chain against collateral posted on another), Uniswap v4 shipped customisable "hooks" for dynamic fees and on-chain limit orders, and Uniswap activated its long-delayed fee switch via the UNIfication proposal in late December 2025.
- Aave launched a structured AAVE buyback programme (about USD 1m/week over a six-month pilot) tied to a new fee-switch mechanism, marking a broader shift toward revenue-backed tokenomics over emissions-driven farming.
- The technical frontier converged on account abstraction and AI agents: ERC-4337 smart accounts plus EIP-7702 (letting ordinary wallets act temporarily as smart accounts), Circle's burn-and-mint CCTP as the institutional cross-chain USDC standard, and the ERC-8004 trustless-AI-agent standard going live on mainnet on 29 January 2026.
- Open challenges as of 2026 include a sharp TVL drawdown through the year (DeFiLlama tracking a retreat toward roughly USD 72-98bn by mid-2026 from the ~USD 171bn October-2025 cycle peak), the "composability gap" keeping tokenised RWAs siloed in closed rails, and unresolved jurisdictional treatment of DeFi front-ends and developers under US enforcement-led policy and the UK FCA perimeter regime (mandatory from October 2027).

### References

- 1. US Congress (2025). S.1582 — GENIUS Act, 119th Congress, Public Law 119-27. https://www.congress.gov/bill/119th-congress/senate-bill/1582
- 2. World Economic Forum (2025). Crypto rule comparison: the US GENIUS Act versus EU's MiCA. https://www.weforum.org/stories/financial-and-monetary-systems/us-genius-act-eu-mica-convergence-crypto-rules/
- 3. The Block (2025). 2026 DeFi Outlook. https://www.theblock.co/post/383120/2026-defi-outlook
- 4. Symbiosis Finance (2026). How DeFi works now: 2026 tech stack explained. https://symbiosis.finance/blog/defi-in-2025-2026-what-changed-technically
- 5. Dwellir (2026). The State of DeFi in 2026. https://www.dwellir.com/blog/state-of-defi-2026
- 6. European Systemic Risk Board (2025). Crypto-assets and decentralised finance. https://www.esrb.europa.eu/pub/pdf/reports/esrb.report202510_cryptoassets.en.pdf

### Provenance

