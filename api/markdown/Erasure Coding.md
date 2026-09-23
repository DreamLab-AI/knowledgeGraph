
Erasure coding is a forward error-correction (FEC) technique that encodes a data object into n encoded fragments (shards or chunks), distributed across nodes or storage devices, such that any k of those n fragments are sufficient to reconstruct the original data without any centralised copy. The redundancy overhead ratio (n − k) / k is typically far lower than full replication, making erasure coding the preferred durability mechanism in large-scale distributed storage, distributed ledger systems, and content-addressed networks where storage efficiency and fault tolerance are simultaneously required. Foundational schemes include Reed-Solomon codes (based on Galois Field arithmetic), as well as computationally efficient variants such as LDPC, Fountain codes (LT and Raptor), and Cauchy Reed-Solomon; newer constructions couple erasure codes with polynomial commitments (e.g. KZG) to provide data availability proofs in blockchain systems.

- ### Overview
  - Erasure coding originated in classical information theory and coding theory, with applications in satellite communications, optical media (CD/DVD), and deep-space telemetry long before distributed computing.
  - The core property: given a (k, n) erasure code, any k out of n encoded symbols recover the original k data symbols — the remaining n − k symbols are redundancy ("parity" or "check" symbols).
  - The storage overhead is (n − k) / k. For example, a (6, 9) code stores 1.5× the original data volume whilst tolerating 3 simultaneous node failures; triple replication achieves the same failure tolerance at 3× overhead.
  - Erasure coding is therefore the preferred durability mechanism in large-scale [[Storage Infrastructure]] where the cost of full replication is prohibitive.
  - The trade-off: reconstruction requires reading k fragments and performing matrix inversion; [[Data Replication]] allows recovery from a single copy.

- ### Key Mechanisms
  - #### Reed-Solomon Codes
    - Classical systematic erasure code based on polynomial evaluation over a [[Galois Field Arithmetic]] (finite field GF(2^m)).
    - Any k of n encoded symbols uniquely determine the degree-(k−1) polynomial and thereby the original k data symbols.
    - Widely used in RAID-6 (tolerates 2 simultaneous disk failures), optical disc error correction, and satellite links.
    - Used in [[Ceph]], Azure Blob Storage, and [[IPFS]]-family systems.
  - #### LDPC Codes
    - Low-Density Parity-Check codes: sparse bipartite graph construction allowing near-linear-time encoding and decoding.
    - Approach the Shannon limit; suited to high-throughput network and storage applications.
    - Used in 5G NR air interface and some distributed storage tiers.
  - #### Fountain Codes (LT and Raptor)
    - Rateless erasure codes: generate a potentially unlimited stream of encoded symbols; any k (with small overhead) suffice to decode.
    - LT codes use random degree distributions; Raptor codes add a pre-code for linear-time decoding.
    - Suited to broadcast and lossy network channels where the erasure rate is unknown in advance.
  - #### Cauchy Reed-Solomon
    - A variant of Reed-Solomon using Cauchy matrices, enabling faster XOR-based computation by mapping to GF(2).
    - Reduces computational cost of encoding/decoding versus standard Vandermonde-based RS.
  - #### Systematic vs Non-Systematic Forms
    - Systematic codes retain the original k data fragments unchanged among the n output fragments; the remaining n − k are parity fragments.
    - Non-systematic codes transform all n output fragments; original data not directly readable without decoding.
    - Most storage deployments use systematic forms to allow direct reads of un-damaged data without decode overhead.

- ### Applications and Use Cases
  - #### Distributed Object Storage
    - [[Ceph]] RADOS uses erasure-coded pools as the primary cold-data durability mechanism, configuring (k, m) profiles (e.g. k=4, m=2) per pool.
    - [[Filecoin]] storage deals use erasure coding to guarantee retrievability of stored data across sector failures.
    - [[IPFS]] content-addressed blocks can be redundantly stored via erasure-coded overlays (e.g. via Helia or Kubo plugins).
    - Facebook f4 (warm BLOB storage) demonstrated ~50% storage reduction versus replication by switching to erasure coding for cold tier.
    - Azure Blob Storage and Amazon S3 use erasure coding internally for durability within and across availability zones.
  - #### RAID Storage
    - [[RAID]]-5 uses single parity (1 drive failure tolerance); RAID-6 uses double parity (2 drive failure tolerance), both based on simple Reed-Solomon variants.
    - Enterprise storage arrays extend RAID principles to object-based erasure coding with wider stripe widths.
  - #### Blockchain and Distributed Ledger
    - [[Danksharding]] (Ethereum upgrade) uses erasure coding combined with [[KZG Commitments]] (polynomial commitments) to implement Data Availability Sampling (DAS).
    - Light clients can sample random shards and, via the erasure code structure, probabilistically verify that full block data is available without downloading it.
    - [[Data Availability Layer]] services (e.g. Celestia, EigenDA) rely on erasure coding as their core primitive.
    - [[Distributed Ledger]] sharding designs use erasure coding to partition transaction data across validator shards while maintaining recoverability.
  - #### Satellite and Wireless Communications
    - DVB-S2 and 5G NR use LDPC codes as their error-correction layer.
    - Fountain codes (Raptor) are used in broadcast file delivery (FLUTE/ALC protocol over multicast).
  - #### Optical Media
    - CD, DVD, and Blu-ray all use Reed-Solomon Product-like Code (RS-PC) for error correction, an early mass-market application of erasure coding principles.
  - #### Network Coding
    - Relates to [[Network Coding]] where intermediate network nodes mix (XOR or linearly combine) packets, enabling more efficient use of network capacity with erasure-correction properties.
  - #### Secret Sharing
    - Shamir's Secret Sharing is mathematically equivalent to a (k, n) Reed-Solomon erasure code over a finite field, connecting erasure coding to [[Secret Sharing]] and threshold cryptography.

- ### Standards and Context
  - **IETF RFC 5053** — Raptor Forward Error Correction Scheme for Object Delivery.
  - **IETF RFC 6330** — RaptorQ Forward Error Correction Scheme for Object and Flow Data Delivery.
  - **IETF RFC 5510** — Reed-Solomon Forward Error Correction (FEC) Schemes for FECFRAME.
  - **DVB-S2 (ETSI EN 302 307)** — specifies LDPC + BCH concatenated FEC for digital video broadcasting.
  - **3GPP TS 38.212** — specifies LDPC as the data channel code for 5G NR.
  - **Ethereum EIP-4844 / Danksharding** — specifies KZG commitments + erasure coding for blob data availability.
  - **Ceph RADOS** — open-source reference implementation of production erasure-coded object storage with pluggable backends (Jerasure, ISA-L, shec).
  - **Intel ISA-L (Intelligent Storage Acceleration Library)** — hardware-accelerated SIMD implementation of Reed-Solomon widely used in production storage stacks.

- ### Semantic Classification

- ### Current Landscape (2026)
  - Erasure coding moved from data-centre storage into blockchain data availability: Ethereum's Fusaka hard fork activated PeerDAS (EIP-7594) on mainnet at slot 13,164,544 on 3 December 2025, applying 1D Reed-Solomon extension to each blob and splitting it into 128 columns so the full data reconstructs from any 64, letting nodes sample rather than download everything.
  - PeerDAS scaling has been ramped via Blob-Parameter-Only (BPO) forks: BPO1 (9 December 2025) raised the blob target/max to 10/15 and BPO2 (7 January 2026) to 14/21, cutting validator blob bandwidth by roughly 85% while a long-term roadmap targets up to 128 blobs (~16 MB) per block.
  - Ceph's Tentacle release (2025) shipped "Fast EC" (allow_ec_optimizations), adding partial reads, partial writes and parity-delta writes plus small-object padding to reduce the long-standing write-amplification and read penalties of erasure-coded pools.
  - Research is pushing past classic stripe-based schemes: the OSDI '25 paper "Nos/Nostor" (Gao, Shu et al.) introduced stripeless erasure coding using symmetric balanced incomplete block designs, reporting 1.61x-2.60x throughput over stripe-based baselines for in-memory key-value stores.
  - Coding-theory frontier work in 2025 includes rateless/random-linear-network-coding approaches to data-availability sampling (arXiv 2509.21586), where a single RLNC sample is claimed to give assurance equivalent to ~73 two-dimensional Reed-Solomon samples, and hybrid replication-plus-EC schemes such as HyRES (arXiv, November 2025) that cut storage cost versus pure replication while lowering file-loss probability.
  - The December 2024 ACM Transactions on Storage survey (Cheng et al.) consolidated the field, positioning Clay codes as the state-of-the-art general (n,k) minimum-storage regenerating codes and cataloguing deployed profiles such as Backblaze Vaults (20,17) and Tencent ultra-cold storage (12,10).
  - Key production players remain Ceph, MinIO (inline per-object Reed-Solomon), Colossus, HDFS and DAOS on the storage side, with Ethereum and Celestia now the highest-profile erasure-coding adopters in decentralised data availability.
  - Open challenges as of 2026 centre on repair cost and configuration sensitivity (HotStorage '24 work showed recovery time varying up to 426% by configuration), on verifying that DAS custody actually holds in practice (ethPandaOps' dasmon monitors column custody against KZG commitments post-Fusaka), and on hardware offload (FPGA EC accelerators reporting up to 2.67x throughput) to close the CPU bottleneck.

- ### References
  - 1. Ethereum Foundation (2025). Fusaka Testnet Announcement (PeerDAS / EIP-7594 and BPO forks). https://blog.ethereum.org/2025/09/26/fusaka-testnet-announcement
  - 2. tryethernal / ethPandaOps (2026). PeerDAS Has Been Live for 8 Months: How Ethereum Verifies It's Working (dasmon custody verification). https://tryethernal.com/blog/peerdas-custody-verification-dasmon
  - 3. Ceph Project (2025). Fast Erasure Coding for Tentacle: Performance Updates. https://ceph.io/en/news/blog/2025/tentacle-fastec-performance-updates/
  - 4. Cheng, K. et al. (2024). A Survey of the Past, Present, and Future of Erasure Coding for Storage Systems. ACM Transactions on Storage 20(4). https://keyuncheng.github.io/files/publications/tos24ecsurvey.pdf
  - 5. Gao, J., Shu, J., Yan, B., Zhang, Y. (2025). Stripeless Data Placement for Erasure-Coded In-Memory Storage (Nos/Nostor). USENIX OSDI '25. https://www.usenix.org/conference/osdi25/presentation/gao
  - 6. Anonymous (2025). From Indexing to Coding: A New Paradigm for Data Availability Sampling (RLNC rateless codes). arXiv:2509.21586. https://arxiv.org/html/2509.21586v1

- ### Provenance

