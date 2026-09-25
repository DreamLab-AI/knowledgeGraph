Ethereum is an open-source, decentralised layer-1 blockchain platform conceived by Vitalik Buterin and launched in 2015, distinguished from Bitcoin by its general-purpose programmability via the Ethereum Virtual Machine (EVM), which executes Turing-complete smart contracts deployed on a shared global state. It transitioned from Proof of Work to Proof of Stake in September 2022 (the Merge), dramatically reducing energy consumption while preserving consensus security through a validator set staking Ether (ETH). Ethereum serves as the foundational settlement layer for the majority of decentralised finance (DeFi) protocols, NFT standards, DAOs, and Layer-2 rollup networks, with its fee market governed by EIP-1559's base-fee-burn mechanism.

### Overview

- Ethereum operates as a permissionless, globally replicated state machine. Every full node maintains an identical copy of the world state — a mapping from account addresses to balances, nonces, and contract storage — updated with every confirmed block.
- The platform transitioned from [[Proof of Work]] to [[Proof of Stake]] in September 2022 in an upgrade known as the Merge, replacing energy-intensive mining with a system in which validators lock (stake) ETH as collateral, earning rewards for attesting to and proposing blocks.
- The Merge was followed by a phased roadmap: the Surge (scaling via [[Rollup]] and [[EIP-4844]] blob transactions), the Scourge (MEV mitigation), the Verge (Verkle trees), the Purge (history expiry), and the Splurge (miscellaneous improvements).
- [[EIP-1559]], activated in August 2021, restructured the fee market so that a protocol-determined base fee is burned each block, making ETH supply deflationary during periods of high network demand.

### Key Components

#### Ethereum Virtual Machine (EVM)

- The [[Ethereum Virtual Machine]] is a stack-based, 256-bit virtual machine that executes [[Bytecode]] compiled from [[Solidity]] or other high-level languages.
- It enforces a deterministic, sandboxed execution model; each instruction consumes [[Gas]], capping computation and preventing denial-of-service via infinite loops.
- The EVM specification has become a cross-chain standard: [[Solana]], [[Polkadot]], [[Avalanche]], and many other networks offer EVM-compatible environments or bridges.

#### Consensus Layer

- Since the Merge, Ethereum's consensus is managed by a separate Beacon Chain running Casper FFG (Friendly Finality Gadget) combined with the LMD-GHOST fork-choice rule.
- Validators stake a minimum of 32 ETH, are randomly selected to propose blocks, and attest to the canonical chain in committees; [[Validator Node]] misbehaviour (equivocation or inactivity) triggers slashing or leak penalties.
- [[EigenLayer]] extends Ethereum's cryptoeconomic security to external protocols through [[Restaking]], allowing validators to opt into additional slashing conditions in exchange for additional rewards.

#### Account Model & State

- Ethereum maintains two account types: externally owned accounts (EOAs) controlled by private keys, and contract accounts holding [[Smart Contract]] code and storage.
- The global state is encoded as a [[Merkle Patricia Trie]], enabling lightweight state proofs and efficient state transition verification.
- [[EIP-4337]] and [[Account Abstraction]] decouple transaction validation logic from EOA keys, enabling programmable wallets with features such as social recovery, batch transactions, and sponsored gas.

#### Token Standards

- [[ERC-20]] defines the fungible token interface, underpinning thousands of [[Cryptocurrency]] and governance tokens deployed on Ethereum.
- [[ERC-721]] defines non-fungible tokens ([[NFT]]), enabling unique on-chain asset representation used in digital art, gaming items, and identity credentials.
- Further standards — ERC-1155, ERC-4626 (vault), ERC-3525 (semi-fungible) — extend the primitives for DeFi and enterprise applications.

#### Gas & Fee Market

- Every EVM operation has an associated [[Gas]] cost denominated in gwei (10⁻⁹ ETH).
- [[EIP-1559]] introduced a base fee (burned) plus optional priority fee (to validators), replacing the prior first-price auction and reducing fee volatility.
- [[EIP-4844]] (Proto-Danksharding, March 2024) introduced blob-carrying transactions at much lower cost, providing dedicated data availability bandwidth for [[Layer 2 Scaling]] rollups.

### Mechanisms

#### Proof of Stake Consensus

- Validators are organised into committees that attest to blocks in each slot (12 seconds). Epochs (32 slots) mark checkpoints at which Casper FFG finalises the chain.
- The protocol enforces economic finality: reversing a finalised checkpoint requires an attacker to burn at least one-third of total staked ETH.
- Liquid staking derivatives (e.g. via protocols built on Ethereum) allow holders to stake without running infrastructure, though they introduce concentration and governance risks.

#### Layer 2 Rollups

- [[Rollup]] networks (Optimistic and ZK variants) execute transactions off-chain and post compressed state data or validity proofs to Ethereum as the settlement and data-availability layer.
- [[Optimistic Rollup]] chains (Optimism, Arbitrum) use [[Fraud Proof]] challenges during a dispute window; ZK rollups (zkSync, StarkNet) use cryptographic [[Formal Verification]] via succinct proofs for instant finality.
- [[EIP-4844]] blob transactions reduce the cost of posting rollup data to Ethereum by an order of magnitude, enabling lower user fees across the L2 ecosystem.

#### EIP Governance Process

- Protocol changes proceed through the [[EIP]] process: draft → review → last call → final. Core EIPs affecting consensus require coordination among client teams and are activated at a specific block or epoch.
- The [[Ethereum Foundation]] funds core research and client development but does not unilaterally control protocol changes; governance is informal, relying on rough consensus among client maintainers, researchers, and the broader community.

### Applications & Use Cases

#### Decentralised Finance (DeFi)

- Ethereum hosts the majority of [[Decentralised Finance]] activity: decentralised exchanges ([[Uniswap]], [[Curve Finance]]), lending protocols ([[Aave]]), stablecoins, and yield aggregators.
- [[Liquidity Pool]] models pioneered by [[Automated Market Maker]] protocols replaced traditional order books, enabling permissionless token swaps and lending against on-chain collateral.

#### NFTs & Digital Ownership

- Ethereum's [[ERC-721 Standard]] and [[ERC-20]] standards established the dominant framework for provably scarce digital assets, including art, collectibles, music rights, and in-game items.
- [[Digital Ownership]] of on-chain assets is enforced by the network's consensus without relying on any centralised custodian.

#### DAOs & On-Chain Governance

- [[DAO]] organisations encode membership rules, voting mechanisms, and treasury management in [[Smart Contract]] code deployed on Ethereum, enabling trustless collective decision-making.
- [[On-Chain Governance]] frameworks (Governor, Compound Bravo, OpenZeppelin Governor) provide composable primitives adopted across DeFi protocols and public goods funding platforms such as [[Gitcoin]].

#### Identity & Credentialing

- [[Ethereum Name Service]] (ENS) provides human-readable identifiers (".eth" names) mapped to Ethereum addresses, used in wallet displays, IPFS content addressing, and social profiles.
- [[Decentralised Identity]] standards leverage Ethereum addresses and signed attestations for self-sovereign identity, verified via [[EIP-712]] typed structured data signatures.
- [[Gitcoin Passport]] and similar systems aggregate on-chain and off-chain credentials to score Sybil resistance for quadratic funding rounds.

#### Cross-Chain Interoperability

- Bridge protocols ([[Connext]], [[Chainlink CCIP]], [[Optimism]]'s canonical bridge) enable asset and message transfer between Ethereum mainnet and Layer 2 networks or other chains.
- [[Cross-Chain Interoperability]] architectures increasingly treat Ethereum as the canonical settlement and security root for multi-chain ecosystems.

#### Enterprise & Institutional Use

- The [[Enterprise Ethereum Alliance]] coordinates enterprise adoption, defining profiles and standards for private/permissioned EVM deployments.
- Institutional DeFi, tokenised securities, and central bank digital currency research frequently reference or pilot Ethereum-compatible infrastructure.

### Standards & Context

- The [[EIP]] process (Ethereum Improvement Proposals) governs all protocol changes; EIPs include standards for the core protocol (core EIPs), networking (networking EIPs), interfaces (ERCs), and meta-process (meta EIPs).
- [[EIP-1559]] (fee market reform, 2021), [[EIP-4337]] (account abstraction, 2023), and [[EIP-4844]] (Proto-Danksharding, 2024) are landmark standards that define modern Ethereum behaviour.
- The [[Ethereum Yellow Paper]] by Gavin Wood formally specifies the EVM and state transition function, serving as the authoritative technical reference for client implementations.
- [[Enterprise Ethereum Alliance]] publishes specifications for EVM compatibility in enterprise settings, referenced by [[Central Bank Digital Currency]] pilot programmes and regulated financial infrastructure.
- Ethereum interacts with off-chain data through [[Chainlink]] oracle networks, providing [[Smart Contract]] access to real-world price feeds, randomness, and cross-chain messaging.
- [[ERC-721 Standard]], [[ERC-20]], and related standards are referenced by the W3C and other bodies in work on verifiable credentials, tokenised assets, and digital identity.
- [[Safe]] (formerly Gnosis Safe) provides the dominant multi-signature [[Crypto Wallet]] standard on Ethereum, acting as treasury infrastructure for DAOs and institutional holders.
- [[OpenZeppelin]] provides audited, reusable [[Smart Contract]] libraries implementing ERC standards, used across the majority of deployed Ethereum contracts.
- [[IPFS]] and [[Filecoin]] are frequently paired with Ethereum for decentralised content storage, with [[Content Addressed Storage]] references embedded in NFT metadata and DAO documents.
- [[MetaMask]] is the most widely used browser-extension [[Crypto Wallet]] for Ethereum interaction, injecting a Web3 provider into browser contexts for [[Decentralised Application]] access.

### Current Landscape (2026)

- The Fusaka upgrade activated on mainnet on 3 December 2025 (slot 13,164,544), with PeerDAS (EIP-7594) as its headliner, letting validators sample blob data rather than download every blob in full and enabling a roughly 8x theoretical increase in blob capacity.
- Fusaka also introduced Blob Parameter Only (BPO) forks, which allow blob throughput to be raised without a full hard-fork cycle; the first two BPO forks lifted the blob target to 14 per block and the maximum to 21 (a ~2.3x rise over pre-Fusaka), while the default block gas limit climbed to 60M (up from the long-standing 30M).
- The May 2025 Pectra upgrade shipped EIP-7702 (letting ordinary EOAs temporarily execute smart-contract code for batching, gas sponsorship and social recovery) and EIP-7251, which raised the maximum effective validator balance from 32 to 2,048 ETH; by May 2026 over 26% of validators were compounding and L2 fees had settled below two cents.
- US spot Ethereum ETF staking became a reality: Grayscale enabled staking in October 2025 and paid the first-ever US spot Ether staking distribution in January 2026 (~$9.4M), and BlackRock listed the dedicated iShares Staked Ethereum Trust (ETHB) on Nasdaq in March 2026 with $107M seed capital.
- On 17 March 2026 the SEC issued a Commission-level interpretive release, joined by the CFTC, naming Ether among sixteen digital commodities outside the securities laws and clarifying that protocol staking rewards do not trigger Securities Act registration; Fidelity (FETH), Franklin Templeton, Invesco, 21Shares and VanEck had staking amendments pending through Q2 2026.
- The next major upgrade, Glamsterdam (execution-layer Amsterdam plus consensus-layer Gloas), is targeted for the second half of 2026 with enshrined proposer-builder separation (EIP-7732) and block-level access lists (EIP-7928) as headliners, aimed at lifting the block gas limit from 60M toward roughly 200M; Hegotá is scoped to follow in 2027 with FOCIL inclusion lists.
- Markets and governance remained under strain: ETH traded around $2,075-$2,100 in May 2026, down roughly 57% from its August 2025 all-time high near $4,946, while the Ethereum Foundation cut about a fifth of its staff and reorganised around three tracks (Scale, Improve UX, Harden the L1).

### References

- 1. Ethereum Foundation (2026). Ethereum roadmap (Pectra, Fusaka, Glamsterdam). https://ethereum.org/roadmap/
- 2. Ethereum Foundation (2026). Building on Ethereum in 2026: what has changed. https://ethereum.org/latest/building-on-ethereum-in-2026/
- 3. Ethereum Foundation (2026). Protocol Priorities Update for 2026. https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026
- 4. Astraea Law (2026). Ethereum Staking Regulation in 2026: What Institutions Can Rely On. https://astraea.law/insights/ethereum-staking-regulation-institutions-2026
- 5. Latham & Watkins (2026). US Crypto Policy Tracker: Regulatory Developments (SEC/CFTC 17 March 2026 interpretive release). https://www.lw.com/en/us-crypto-policy-tracker/regulatory-developments

### Provenance

