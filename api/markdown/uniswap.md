- ### Definition
  - Uniswap is a decentralised exchange (DEX) protocol built on [[Ethereum]] and EVM-compatible networks that allows users to swap [[ERC-20]] tokens directly from self-custodied [[Web3 Wallet]] wallets without a central intermediary. It implements an [[Automated Market Maker]] model in which the price of assets is determined algorithmically by the ratio of reserves in a [[Liquidity Pool]], rather than by matching buyers and sellers in a traditional [[Order Book Exchange]]. Successive versions have incrementally refined capital efficiency, fee flexibility, and extensibility, cementing Uniswap's role as a core primitive of [[Decentralised Finance]]. Governance authority over protocol parameters is held collectively by [[UNI Governance Token]] holders through [[On-Chain Governance]] proposals and votes.

- ### Overview
  - Launched in November 2018 by Hayden Adams on Ethereum mainnet, Uniswap introduced the constant-product market maker formula as a practical DEX mechanism.
  - The protocol operates entirely via [[Smart Contract]] code deployed on-chain, requiring no account registration, KYC, or trust in a third party.
  - Any ERC-20 token pair can be traded so long as a liquidity pool exists; pools themselves can be created permissionlessly by any participant.
  - The protocol earns revenue by charging swap fees that are distributed to [[Liquidity Provider]] participants who supply assets to pools.
  - Uniswap has become a reference implementation widely studied, forked, and deployed across the EVM ecosystem, including on Layer 2 networks such as Arbitrum, Optimism, Polygon, and Base.
  - The UNI governance token, airdropped in September 2020, transferred protocol stewardship to a decentralised community governed through the Uniswap Foundation and on-chain voting.

- ### Protocol Versions
  - **v1 (2018)** — proof-of-concept; supported only ETH/ERC-20 pairs; single 0.3 % fee tier; limited capital efficiency.
  - **v2 (2020)** — introduced ERC-20/ERC-20 direct pairs; added a time-weighted average price (TWAP) [[Price Oracle]]; flash swaps; improved routing via the [[Router Contract]].
  - **v3 (2021)** — concentrated liquidity: LPs specify price ranges for deployment, dramatically increasing capital efficiency; multiple fee tiers (0.01 %, 0.05 %, 0.3 %, 1 %); non-fungible LP positions represented as NFTs; improved TWAP oracle.
  - **v4 (2024)** — singleton pool architecture reducing gas costs; hooks system enabling custom logic (e.g., dynamic fees, TWAMM, limit orders) to be attached to pool lifecycle events; flash accounting for gas-efficient multi-step operations.

- ### Key Mechanisms
  - **Constant-Product Invariant** — the formula x × y = k ensures that the product of the two token reserves remains constant after every trade, creating an automatic bonding curve for price discovery.
  - **[[Liquidity Pool]]** — pairs of tokens locked in a smart contract; any trader interacts with the pool directly, receiving output tokens calculated to maintain the invariant (minus the fee).
  - **LP Tokens / NFT Positions** — in v2, liquidity providers receive fungible ERC-20 LP tokens representing their proportional pool share; in v3 these become non-fungible NFTs encoding the specific price range.
  - **[[Automated Market Maker]]** — the algorithmic pricing replaces traditional market makers and order books, enabling 24/7 liquidity without active market-making entities.
  - **[[Price Oracle]]** — cumulative price accumulators updated each block enable external contracts to compute robust TWAP prices resistant to single-block manipulation.
  - **[[Router Contract]]** — a peripheral contract that chains multiple pool swaps to enable any-to-any ERC-20 routing (multi-hop), so direct pool pairs are not strictly required.
  - **[[Factory Contract]]** — deploys new pool contracts and maintains a registry of all Uniswap pools, enabling discovery and routing across the ecosystem.
  - **Hooks (v4)** — arbitrary callback contracts invoked at lifecycle points (before/after swap, before/after LP mint/burn), enabling custom fee logic, oracles, and order types without forking core contracts.

- ### Impermanent Loss and Fee Revenue
  - Liquidity providers face [[Impermanent Loss]] when the price of deposited assets diverges relative to simply holding them; the magnitude increases with divergence.
  - Swap fees collected offset impermanent loss; in high-volume pools or tightly correlated asset pools, fee income can exceed divergence losses.
  - Concentrated liquidity (v3) amplifies both fee revenue and impermanent loss exposure within a specified price range; capital efficiency gains are offset by increased range management complexity.

- ### Governance
  - The UNI token (total supply 1 billion, distributed over four years) grants holders proposal and voting rights on protocol parameters.
  - Governance proposals may alter fee tiers, activate protocol fee switches, govern the Uniswap Foundation treasury, and approve cross-chain deployments.
  - The [[On-Chain Governance]] mechanism uses a timelock contract; proposals must meet a quorum and pass a voting threshold before execution.
  - [[Decentralised Autonomous Organisation]] principles underpin the governance structure, though significant voting power remains concentrated among early investors and the team.

- ### Applications and Use Cases
  - **Token Trading** — primary use case: permissionless swapping of any ERC-20 token pair without a CEX account.
  - **[[Yield Farming]]** — LPs earn trading fees and, during incentive periods, additional token rewards by providing liquidity.
  - **[[Flash Loan]] Arbitrage** — v2 flash swaps allow borrowing pool assets within a single transaction for arbitrage, liquidations, or collateral swaps, repaid before the transaction ends.
  - **[[Decentralised Finance]] Composability** — Uniswap pools are integrated into lending protocols (e.g., Aave, Compound), aggregators (1inch, Paraswap), and structured products as price sources and liquidity venues.
  - **Token Launch** — projects list new tokens by seeding a Uniswap pool, providing immediate secondary market liquidity without CEX gatekeeping.
  - **Stablecoin Pairs** — dedicated low-fee tiers (0.01 % or 0.05 %) optimise gas and returns for correlated asset pairs (e.g., USDC/USDT).
  - **Cross-Chain Liquidity** — Uniswap v3 and v4 deployments on Layer 2 networks reduce transaction costs and improve throughput for end users.

- ### Maximal Extractable Value (MEV) Considerations
  - Because transactions are publicly visible in the mempool before inclusion, Uniswap swaps are susceptible to [[Maximal Extractable Value]] extraction by searchers through front-running and sandwich attacks.
  - Protocol-level mitigations include slippage tolerance settings and, in the v4 hooks architecture, the potential for TWAMM or private order-flow integrations.
  - The broader Ethereum ecosystem responds with MEV-aware infrastructure such as PBS (Proposer-Builder Separation) and private transaction relays.

- ### Relationships
  - uses:: [[Automated Market Maker]]
  - uses:: [[Smart Contract]]
  - uses:: [[Ethereum Virtual Machine]]
  - uses:: [[ERC-20]]
  - hasPart:: [[Liquidity Pool]]
  - hasPart:: [[UNI Governance Token]]
  - hasPart:: [[Router Contract]]
  - hasPart:: [[Factory Contract]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Yield Farming]]
  - enables:: [[Token Swap]]
  - enables:: [[Permissionless Token Listing]]
  - requires:: [[Ethereum]]
  - requires:: [[Liquidity Provider]]
  - requires:: [[Web3 Wallet]]
  - dependsOn:: [[Token Economics]]
  - dependsOn:: [[On-Chain Governance]]
  - dependsOn:: [[Price Oracle]]
  - contrastsWith:: [[Centralised Exchange]]
  - contrastsWith:: [[Order Book Exchange]]
  - relatedTo:: [[Curve Finance]]
  - relatedTo:: [[SushiSwap]]
  - relatedTo:: [[Impermanent Loss]]
  - relatedTo:: [[Flash Loan]]
  - relatedTo:: [[Maximal Extractable Value]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[Layer 2 Scaling]]

- ### Standards and Context
  - Uniswap smart contracts are written in Solidity and deployed on the [[Ethereum Virtual Machine]]; v3 contracts are licensed under the Business Source License (BSL 1.1), converting to GPL after two years.
  - Pool interfaces follow the ERC-20 standard for tokens; LP positions in v3 implement ERC-721 (NFT).
  - The protocol's TWAP oracle has been cited in academic literature and implemented as a reference design for on-chain price feeds in the [[Decentralised Finance]] ecosystem.
  - Regulatory classification of Uniswap remains contested; as a non-custodial, smart-contract-only protocol it presents novel challenges for traditional financial regulation frameworks.
  - The Uniswap Foundation (established 2022) funds ecosystem grants, research, and protocol development separate from Uniswap Labs (the commercial entity).

- ### Provenance
  - sources:: Uniswap whitepaper v2 and v3; Uniswap v4 core documentation; Ethereum.org DeFi overview; Hayden Adams original blog posts; academic literature on AMM mechanisms
  - updated:: 2026-06-13