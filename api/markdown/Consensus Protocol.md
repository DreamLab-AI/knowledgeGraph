
A consensus protocol is a set of rules and algorithms by which distributed network participants reach agreement on a single shared state or value without requiring centralised authority, ensuring liveness, safety, and Byzantine fault tolerance up to a specified threshold of adversarial nodes. Classical families include compute-bound Proof-of-Work, stake-weighted Proof-of-Stake, and message-passing BFT protocols such as PBFT, Tendermint, and HotStuff. Each protocol specifies leader election, block proposal, voting rounds, and finality conditions that together determine throughput, latency, decentralisation, and security trade-offs. Consensus protocols underpin blockchains, distributed databases, and any replicated state machine requiring deterministic agreement across potentially unreliable or malicious peers.

- ### Overview
  - Consensus protocols exist because in any distributed system without a trusted central authority, nodes may crash, become temporarily unreachable, or behave maliciously — the Byzantine Generals Problem formalised by Lamport, Shostak, and Pease (1982). Without a rigorous agreement mechanism, independent nodes will diverge and produce conflicting histories.
  - The design space is structured around three axes:
    - **Fault model**: crash-fault tolerance (CFT) vs. [[Byzantine Fault Tolerance]] (BFT)
    - **Sybil resistance**: how participation rights are granted — compute ([[Proof of Work]]), stake ([[Proof of Stake]]), identity, or lottery
    - **Finality type**: probabilistic finality (more confirmations reduce reversion probability) vs. deterministic / instant finality (once committed, irreversible)
  - The choice of consensus protocol fundamentally shapes a network's throughput (transactions per second), latency (time to finality), decentralisation (number and diversity of validators), and energy consumption. These trade-offs are often called the [[Blockchain Trilemma]]: security, scalability, and decentralisation cannot all be maximised simultaneously.
  - Modern protocols also address governance: how protocol parameters — block size, epoch length, slashing conditions — can be upgraded without a hard fork.

- ### Key Families and Mechanisms
  - #### Nakamoto Consensus / Proof of Work
    - Introduced by [[Bitcoin]] (2009), nodes compete to solve a cryptographic puzzle (SHA-256 double-hash below a target difficulty). The longest valid chain is canonical.
    - Probabilistic finality: six confirmations gives negligible reversion probability under honest majority assumption.
    - Energy-intensive by design; difficulty adjusts every 2,016 blocks to maintain ~10-minute block times.
    - [[Proof of Work]] enables [[Sybil Resistance]] by tying votes to real-world compute expenditure.
  - #### Proof of Stake
    - Validators lock (stake) native tokens as collateral; [[Leader Election]] selects proposers weighted by stake.
    - Misbehaviour triggers slashing — partial or full confiscation of staked tokens — creating economic penalties without physical cost.
    - [[Ethereum]] transitioned from PoW to PoS (The Merge, 2022), dramatically reducing energy consumption.
    - Variants include [[Delegated Proof of Stake]] (DPoS, used by EOS and TRON), Nominated PoS (NPoS, used by [[Polkadot]]), and Liquid Staking derivatives.
  - #### Classical BFT Protocols
    - [[Practical Byzantine Fault Tolerance]] (PBFT, Castro & Liskov 1999): three-phase (pre-prepare, prepare, commit) message exchange; tolerates up to f Byzantine nodes among 3f+1 total; deterministic finality but O(n²) message complexity limiting validator set size.
    - [[Tendermint]]: adapts PBFT for open blockchain use; locks on the highest-voted block each round; used by [[Cosmos]] hub and many IBC chains.
    - HotStuff (Yin et al. 2019): linear O(n) message complexity using threshold signatures; basis for [[LibraBFT]] / DiemBFT and [[Aptos]]/[[Sui]] consensus.
    - All BFT protocols require a known validator set, making them permissioned or semi-permissioned in practice.
  - #### Novel and Hybrid Approaches
    - **Avalanche consensus**: repeated random sub-sampling; nodes iteratively query small random committees; achieves probabilistic BFT with low message overhead; used by [[Avalanche Network]].
    - **Algorand**: cryptographic sortition via [[Verifiable Random Function]] (VRF) selects a hidden committee each round; low latency, instant finality; used by [[Algorand]].
    - **Casper FFG**: [[Finality Gadget]] overlaid on a fork-choice rule (LMD-GHOST) in [[Ethereum]] PoS; provides economic finality via supermajority attestations at epoch checkpoints.
    - **GRANDPA** ([[Polkadot]]): finalises chains of blocks rather than individual blocks; decouples block production (BABE) from finalisation for throughput.
    - **Proof of Space-Time** ([[Chia]]): validators prove storage allocation rather than computation, aiming for lower energy than PoW.
  - #### Finality and Fork Choice
    - [[Fork Choice Rule]] determines which chain tip honest nodes build upon when forks exist (e.g. longest chain, heaviest chain, GHOST).
    - [[Finality Gadget]] adds a separate overlay that checkpoints blocks with a supermajority vote, making them economically irreversible.
    - Epoch-based finality (Ethereum) vs. block-level finality (Tendermint) creates latency/throughput trade-offs.
  - #### Safety and Liveness Bounds
    - The FLP impossibility theorem (Fischer, Lynch, Paterson 1985) proves no deterministic protocol can guarantee both safety and liveness under asynchrony with even one crash fault.
    - Practical protocols address this via partial synchrony assumptions (periods of bounded network delay) or probabilistic guarantees.
    - BFT safety requires less than ⅓ Byzantine nodes; CFT safety requires less than ½ crash faults; Nakamoto PoW requires honest majority of hashrate.

- ### Applications and Use Cases
  - **Public permissionless blockchains**: [[Bitcoin]] (PoW), [[Ethereum]] (PoS + Casper FFG), [[Cardano]] (Ouroboros PoS), [[Solana]] (Proof of History + Tower BFT).
  - **Enterprise / consortium blockchains**: [[Hyperledger Fabric]] uses a pluggable consensus ordering service (Raft or Kafka-based); [[Quorum]] uses Istanbul BFT; [[R3 Corda]] uses notary-based deterministic finality.
  - **Layer 2 scaling**: [[Rollup]] sequencers rely on L1 consensus for data availability and settlement; optimistic and ZK rollups defer fraud/validity proofs to L1 consensus.
  - **Cross-chain bridges**: [[Interoperability Protocol]]s use consensus proofs (light clients, [[Merkle Proof]]s) from one chain to verify state on another.
  - **Decentralised Autonomous Organisations**: [[DAO]] governance votes are recorded and executed via on-chain transactions committed by consensus.
  - **Distributed databases**: [[Raft Consensus]] and [[Paxos]] underpin etcd, CockroachDB, Google Spanner — CFT consensus for data stores without open participation.
  - **Federated AI**: [[Federated Learning]] aggregation can use consensus-inspired Byzantine-robust aggregation rules (Krum, Bulyan) to tolerate malicious gradient updates.

- ### Standards and Context
  - No single standards body governs public blockchain consensus protocols; each network's specification lives in a public whitepaper, BIP/EIP, or research paper.
  - The **IEEE P2418** working group addresses blockchain standards including consensus interoperability for IoT.
  - The **ISO/TC 307** technical committee on blockchain and distributed ledger technologies publishes guidance on consensus classifications (ISO 22739 terminology standard).
  - The **IETF** has chartered working groups (e.g. DINRG — Decentralised Internet Infrastructure Research Group) examining consensus algorithms for Internet applications.
  - Regulatory frameworks (EU MiCA, US SEC guidance) increasingly treat proof of stake validators as potentially systemically important infrastructure, influencing how consensus parameters are governed.
  - Academic venues publishing consensus research: ACM CCS, IEEE S&P, USENIX Security, ACM PODC (Principles of Distributed Computing), and FC (Financial Cryptography).

- ### Provenance

