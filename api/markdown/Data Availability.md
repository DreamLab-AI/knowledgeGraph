
Data availability is the property of a distributed system—most critically blockchain networks and rollup scaling architectures—that guarantees all data necessary to verify and reconstruct network state is published and retrievable by any participant. The core data availability problem arises when a block producer publishes a block header without releasing the underlying transaction data, making it impossible for validators or light clients to verify the block's correctness without downloading all data. Modern solutions combine erasure coding (expanding data such that any sufficient subset allows full reconstruction) with data availability sampling (DAS), enabling light nodes to probabilistically confirm full publication by checking only a small random subset of encoded chunks. Data availability is a foundational primitive in modular blockchain architectures, separating the data publication concern from execution, consensus, and settlement layers.

- ### Overview
  - Data availability addresses a fundamental security challenge in scalable blockchain design: how to guarantee that block data is publicly accessible without requiring every node to download every byte.
  - The problem becomes acute in settings where execution is separated from data publication—for example, an optimistic rollup posts compressed transaction batches to a parent chain and relies on the parent network's data availability guarantee to enable fraud proofs.
  - Without guaranteed data availability, a sequencer or block producer can commit a hash of data it never publishes, making it impossible for verifiers to detect incorrect state transitions.
  - **Why it matters**
    - Enables trust-minimised [[Light Client]] operation without full block download
    - Is the primary bottleneck for [[Layer 2 Scaling]] throughput—rollup cost scales with DA cost
    - Determines whether [[Fraud Proof]] and [[Validity Proof]] systems are actually enforceable
    - Underpins decentralisation: nodes can participate in consensus without storing all history
  - **The data availability problem**
    - A block producer publishes a header committing to block data via a [[Merkle Tree]] root or [[KZG Polynomial Commitment]]
    - If the producer withholds chunks of the underlying data, no third party can reconstruct and verify the block
    - [[Light Client]] nodes that only check headers cannot detect the withholding without downloading all data
    - A [[Data Withholding Attack]] exploits this to commit invalid state transitions undetected

- ### Key Mechanisms
  - **Erasure Coding**
    - The original block data is encoded using [[Erasure Coding]] (typically [[Reed-Solomon Code]]) to expand it by a redundancy factor (commonly 2×)
    - Any sufficient fraction of the encoded chunks (e.g. any 50% of a 2× expansion) allows full reconstruction
    - This transforms a binary "data available or not" question into a probabilistic sampling problem
  - **Data Availability Sampling (DAS)**
    - [[Data Availability Sampling]] allows each [[Light Client]] to request a small random set of coded chunks from the network
    - If any requested chunk is unavailable, the node rejects the block
    - Statistical argument: a withholding attacker must hide more than half the chunks, but random sampling across many nodes makes this detectable with exponentially high probability
    - Approximately 75 random samples per light node achieves very high confidence of detecting a 50%-withholding attacker
  - **Cryptographic Commitments**
    - [[Cryptographic Commitment]] schemes bind block headers to their underlying data
    - [[Merkle Tree]] roots provide chunk-level inclusion proofs, allowing sampled chunks to be verified against the committed root
    - [[KZG Polynomial Commitment]] (as used in Ethereum's EIP-4844 and full danksharding) provides efficient opening proofs and enables 2D sampling schemes with stronger security guarantees
  - **Data Availability Committees (DACs)**
    - An alternative trust model uses a [[Data Availability Committee]]—a designated set of signatories that attest to having stored data off-chain
    - DACs trade trust assumptions for lower cost and latency, used in systems like Arbitrum AnyTrust and Validium rollups
    - Security depends on honest-majority or threshold assumptions within the committee
  - **Blob Transactions and EIP-4844**
    - [[Proto-Danksharding]] (Ethereum EIP-4844) introduced blob-carrying transactions: large data fields attached to transactions at lower cost than equivalent calldata
    - KZG commitments to blob data are verified on-chain; blobs themselves are pruned after a retention window (~18 days)
    - This separated DA cost from execution cost, immediately reducing rollup transaction fees

- ### Architectural Contexts
  - **Monolithic blockchains**
    - All nodes download and store all data; DA is trivially satisfied but limits scalability
    - Full nodes can verify everything but bandwidth costs restrict participation
  - **Modular blockchains**
    - [[Modular Blockchain]] architectures explicitly separate execution, consensus, settlement, and data availability layers
    - Dedicated DA layers (Celestia, EigenDA, Avail) handle data publication as their primary function
    - Rollups post batches to the DA layer and inherit its availability guarantees, settling on a separate chain
  - **Rollup architectures**
    - Optimistic [[Rollup]] systems depend on data availability to make transaction data accessible to fraud proof challengers
    - ZK [[Rollup]] systems use [[Validity Proof]] (ZK-SNARKs/STARKs) to prove correct execution, but still require data publication so users can reconstruct state and exit
    - Validium systems move data off-chain to a [[Data Availability Committee]], accepting a trust tradeoff for higher throughput

- ### Dedicated Data Availability Layers
  - **Celestia**
    - Purpose-built DA layer implementing DAS over a Cosmos-based network
    - Nodes perform random sampling over 2D erasure-coded data squares
    - Rollups (rollups using Celestia as DA) post data blobs and receive inclusion proofs
  - **EigenDA**
    - Ethereum-restaked DA network using EigenLayer; validators restake ETH to participate in DA attestation
    - Provides high throughput and inherits Ethereum economic security through restaking
  - **Avail**
    - Polygon-ecosystem DA layer also using DAS with KZG commitments
    - Targeting interoperability across multiple rollup ecosystems
  - **Ethereum Danksharding roadmap**
    - Full [[Danksharding]] extends EIP-4844 to provide 2D DAS over a large number of blobs
    - Aims to scale Ethereum's DA capacity by orders of magnitude, enabling light clients to perform DAS natively

- ### Applications and Use Cases
  - **Rollup data posting**: Optimistic and ZK rollups post compressed transaction batches to a DA layer as the prerequisite for fraud or validity proof enforcement
  - **Light client security**: Mobile and browser-based [[Light Client]] nodes use DAS to participate in consensus-level verification without running a full node
  - **Cross-chain bridges**: [[Blockchain Interoperability]] protocols rely on data availability proofs to verify source chain state in a trust-minimised way
  - **Decentralised sequencers**: Shared sequencer networks post ordering data to a DA layer to allow permissionless proof of sequencing
  - **Data blobs for NFTs and on-chain storage**: EIP-4844 blobs are used for cost-effective publication of large binary data (images, calldata) with a defined expiry window
  - **Volitions**: Hybrid systems allowing per-transaction choice between on-chain DA and off-chain DAC, optimising cost versus trust

- ### Standards & Context
  - **EIP-4844 (Proto-Danksharding)**: Ethereum Improvement Proposal introducing blob transactions with KZG commitments; activated on Ethereum mainnet in March 2024 (Dencun upgrade). Blobs are 128 KB each, with a target of three and maximum of six per block.
  - **Full Danksharding (EIP-7594 / PeerDAS)**: Research-stage proposal extending EIP-4844 with peer-based DAS, enabling light clients to sample across many blobs without downloading all of them. Under active specification by the Ethereum Foundation.
  - **Celestia specification**: Open specification for 2D erasure coding and DAS published by Celestia Labs; influences design of other DA layers.
  - **IETF considerations**: No formal IETF standard yet; the concept is de facto standardised through EIP processes and independent protocol specifications.
  - **Modular blockchain taxonomy**: The Celestia and Eclipse ecosystems use a layered taxonomy distinguishing execution, settlement, consensus, and data availability layers as discrete protocol components.
  - Related standards and cryptographic primitives: [[Reed-Solomon Code]], [[KZG Polynomial Commitment]], [[Merkle Tree]] (all have independent formal specifications)

- ### Current Landscape (2026)
  - Ethereum's Fusaka hard fork activated on mainnet on 3 December 2025, shipping PeerDAS (EIP-7594) — the first production data-availability sampling on L1, where each node stores only ~1/8 of erasure-coded blob data (128 columns, Reed-Solomon) and verifies availability against KZG commitments rather than downloading every blob.
  - Fusaka replaced named-fork blob scaling with Blob-Parameter-Only (BPO) forks (EIP-7892): BPO1 (9 December 2025) raised the per-block blob target/max from 6/9 to 10/15, and BPO2 (7 January 2026) to 14/21 (~2.7 MB of blob data per block), with a longer-term roadmap toward 48 and eventually 128 blobs (~16 MB) per block.
  - EIP-7918 introduced a blob base-fee reserve in Fusaka so blob prices no longer collapse to near-zero when execution gas dominates, forcing L2s to pay a meaningful floor for the bandwidth and storage their data imposes.
  - The dedicated DA market has consolidated around five players by 2026 — Celestia (TIA), EigenDA, Avail (AVAIL), NearDA and Ethereum blobspace — with EigenDA V2 (July 2025) claiming ~100 MB/s throughput via its restaking-secured committee, while Celestia and Avail run live light-node DAS in production.
  - Full Danksharding remains the endgame but is still years out (commonly cited around 2027+ on current roadmaps); external DA layers are betting on better economics and specialised features (cross-rollup interoperability, sovereign rollups) even after Ethereum's native DAS scales.
  - Open challenges as of 2026 include the "supernode" centralisation pressure in PeerDAS (validators staking 4,096 ETH or more must serve all 128 columns as data healers), the security trade-offs of committee-based DACs like EigenDA versus fully sampled chains, and softening DA-token prices (TIA down ~23% over the six months to November 2025) squeezing standalone DA economics.

- ### References
  - 1. Ethereum Foundation (2025). Fusaka Mainnet Announcement. https://blog.ethereum.org/2025/11/06/fusaka-mainnet-announcement
  - 2. Ethereum.org (2026). PeerDAS — Fusaka roadmap. https://ethereum.org/roadmap/fusaka/peerdas/
  - 3. BlockEden (2026). PeerDAS and the Future of Ethereum: Transforming Data Availability. https://blockeden.xyz/blog/2026/03/27/ethereum-fusaka-peerdas-full-danksharding-l2-scaling/
  - 4. Datawallet (2026). Ethereum Fusaka Upgrade & EIPs Explained. https://www.datawallet.com/crypto/ethereum-fusaka-upgrade-explained
  - 5. Spark (2025). Data Availability — Spark Glossary. https://www.spark.money/glossary/data-availability

- ### Provenance

