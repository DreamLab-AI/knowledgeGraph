Content-addressed storage (CAS) is a data storage paradigm in which each piece of data is identified and retrieved by a cryptographic hash of its content rather than by its location or a human-assigned name. Because the identifier is derived deterministically from the data itself, identical content always maps to the same address, enabling automatic deduplication and verifiable integrity without requiring trust in the storage provider. Content-addressed storage forms the basis of distributed systems such as IPFS, Git, and Arweave, and underlies the content-integrity mechanisms of blockchain data layers. It is fundamentally different from location-addressed storage, where the same content can exist at multiple addresses or the same address can point to different content over time.

### Overview

- Content-addressed storage inverts the conventional naming relationship between data and identity. In traditional [[Location-Addressed Storage]], a URL or file path designates where data lives — the same path may return different data at different times, and the same data may exist at many paths simultaneously. In a content-addressed system, the path *is* the data: the address H(data) is computed by a [[Hash Function]] such as SHA-256 or Blake3, and any node that recomputes the hash from received bytes can verify correctness independently.
- This self-certifying property is fundamental to decentralised and trustless architectures. No certificate authority, central registry, or DNS resolver is required; any peer holding the bytes can serve them verifiably. The practical implications are:
  - **Integrity**: data corruption or tampering is detected automatically on retrieval.
  - **Deduplication**: identical content stored by millions of peers occupies one logical slot in the address space.
  - **Cacheability**: content at a given address is immutable, so any cache is always correct.
  - **Censorship resistance**: data can be served by any reachable peer without relying on the original publisher's infrastructure.

### Key Mechanisms

- **[[Hash Function]] application** — A write operation computes `address = H(data)` using a collision-resistant function. SHA-1 was used in early [[Git]]; SHA-256 and Blake3 are prevalent in modern systems. The [[Content Identifier]] (CID) format used by [[IPFS]] encodes the hash function, hash length, and digest in a self-describing multiformat.
- **[[Merkle Tree]] structures** — For structured or hierarchical data, each internal node hashes its children, producing a root hash that commits to the entire dataset. Partial inclusion proofs require only O(log n) hashes, enabling efficient [[Cryptographic Verification]] of individual chunks within large files or state tries.
- **[[Distributed Hash Table]] (DHT)** — In peer-to-peer CAS networks, a DHT maps content addresses to the network locations of peers that hold the corresponding data, enabling routing without a central directory. [[IPFS]] uses the Kademlia DHT variant.
- **[[KZG Commitment]]** — A polynomial commitment scheme used in Ethereum's danksharding design (EIP-4844) to commit to blob data via a constant-size proof, extending content addressing to zero-knowledge-friendly primitives and bridging CAS into [[Zero-Knowledge Proof]] workflows.
- **Chunking and block graphs** — Large files are split into fixed or variable-size chunks, each independently addressed. A root block references child blocks by their hashes, forming a directed acyclic graph (DAG) akin to a [[Merkle Tree]]. [[IPFS]] implements this as UnixFS over IPLD (InterPlanetary Linked Data).

### Applications and Use Cases

- **[[Version Control]]** — [[Git]] pioneered production CAS: every blob, tree, commit, and tag is identified by its SHA-1 (SHA-256 in newer repos) hash. Distributed collaboration across millions of developers relies on this model for conflict-free merging and branch integrity.
- **[[Decentralized Storage]] networks** — [[IPFS]] provides a global peer-to-peer CAS layer; [[Filecoin]] adds economic incentives for persistent pinning; [[Arweave]] encodes permanent storage in a blockchain-based endowment model. Together they form the decentralised web storage stack.
- **Blockchain off-chain data** — Smart contracts on Ethereum, Solana, and similar platforms store only hashes on-chain, with the corresponding data served via [[IPFS]] or centralised gateways. This pattern, called content-addressed off-chain storage, keeps on-chain costs minimal while preserving verifiability.
- **AI/ML dataset and model versioning** — Tools such as DVC (Data Version Control) and Hugging Face Hub apply CAS to large numerical datasets and model weights, enabling [[Reproducible Builds]] of training pipelines and [[Verifiable Provenance]] for AI artefacts. [[Model Registry]] systems increasingly adopt CAS to track lineage.
- **[[Dataset Versioning]]** — Scientific data repositories (e.g. Zenodo, Software Heritage) use content addressing to archive immutable snapshots of research artefacts, ensuring long-term reproducibility independent of institutional URL stability.
- **Backup and deduplication** — Enterprise backup systems (Veeam, Restic, Borg) use CAS internally for block-level deduplication, significantly reducing storage footprint for incremental backups without relying on file-path metadata.
- **Container image layers** — Docker and OCI container images are stored as content-addressed layers; the image manifest references layer digests, ensuring that pulling an image by digest always retrieves the exact same filesystem layers regardless of registry state.
- **Software supply chain** — Package managers such as npm (integrity field), Nix, and Guix use content hashes to pin dependencies, forming the cryptographic backbone of [[Reproducible Builds]] and supply-chain attestation.

### Standards & Context

- **Multiformats / CID** — The Content Identifier (CID) specification, maintained by the IPFS / Protocol Labs ecosystem, defines a self-describing format encoding the codec, hash function, and digest. CIDv1 uses multibase encoding and is the standard reference format across IPLD-based systems.
- **IPLD (InterPlanetary Linked Data)** — A data model and codec family for content-addressed structured data. IPLD defines DAG-CBOR, DAG-JSON, and DAG-PB codecs, enabling typed links between content-addressed blocks and forming the semantic layer atop raw CAS.
- **OCI Image Specification** — The Open Container Initiative (OCI) Image Specification mandates content addressing for image layers using SHA-256 digests, making CAS a de facto standard in cloud-native infrastructure.
- **Ethereum EIP-4844 (Proto-Danksharding)** — Introduced blob-carrying transactions whose data is committed via KZG polynomial commitments; the blob sidecar is pruned after a retention window but the commitment (a form of content address) remains on-chain permanently.
- **Software Heritage** — An international initiative archiving all public source code using SHA-1/SHA-256 content addresses, providing a [[Verifiable Provenance]] layer for the global software commons.

### Current Landscape (2026)

- IPIP-0499, merged into the IPFS specification in early 2026, finally makes CIDs deterministic across implementations by defining named DAG-construction profiles (unixfs-v1-2025 and unixfs-v0-2015); the new default raises chunk size from 256 KiB to 1 MiB and links-per-node from 174 to 1024, giving shallower DAGs and roughly 4x fewer nodes for a 1 TiB file. It shipped across kubo 0.40, boxo 0.37 and helia/unixfs 7.0.3.
- Filecoin launched Proof of Data Possession (PDP) on mainnet in early 2025, a challenge-response proof (about 160 bytes per challenge) that lets providers prove they hold an immediately available hot copy without unsealing, complementing the older Proof of Replication (PoRep) for cold storage.
- Filecoin Onchain Cloud went live on 18 November 2025, packaging Warm Storage (backed by PDP), Filecoin Pay and Filecoin Beam behind the Synapse SDK, and moving the network from cold archival storage towards a programmable, verifiable cloud aimed at AI datasets and dApp frontends.
- 2025 also brought Fast Finality (F3) and three network upgrades (NV25, plus NV27 "Golden Week"); Q3 2025 network utilisation reached around 36% with roughly 1,110 PiB stored under active deals, and Filecoin Pay with the USDFC stablecoin enabled on-chain storage payments.
- Content addressing broadened beyond IPFS/Filecoin: the DASL family (CID, CAR, DRISL/dag-cbor, plus RASL/MASL) drove a wave of small interoperable libraries, an IETF Internet-Draft for CBOR tag-42 CIDs was submitted, and IPLD now underpins Bluesky/AT Protocol (over 40 million users, 5+ billion files on IPFS).
- Browser-native verified retrieval matured: helia/verified-fetch (2024) plus Ed25519 support reaching every major engine (Chrome 137, May 2025) enable in-service-worker verification of content-addressed data, and CAR-focused tooling such as the CAR Content Locator improved access to individual files inside large archives.
- Key open challenges as of 2026 are economic sustainability of unincentivised layers (a 2025 IFIP TMA study measured IPFS peer availability falling from 60% to 40% across 2024–2025), routing/retrieval latency versus centralised clouds, and migrating the long tail of legacy non-deterministic CIDs.

### References

- 1. IPFS Foundation (2026). IPIP-0499: Updating IPFS Standards for Consistent, Reproducible CIDs. https://ipfsfoundation.org/ipip-0499-updating-ipfs-standards-for-consistent-reproducible-cids/
- 2. Filecoin (2026). Filecoin in 2025: Year in Review. https://www.filecoin.io/blog/filecoin-in-2025-year-in-review
- 3. Filecoin Foundation / fil.org (2025). Introducing Proof of Data Possession (PDP): Verifiable Hot Storage on Filecoin. https://fil.org/blog/introducing-proof-of-data-possession-pdp-verifiable-hot-storage-on-filecoin
- 4. AInvest (2025). Filecoin Onchain Cloud: A New Decentralized Infrastructure Paradigm for Web3 and AI. https://www.ainvest.com/news/filecoin-onchain-cloud-decentralized-infrastructure-paradigm-web3-ai-2511/
- 5. IPFS Foundation (2026). Content Addressing: 2025 in Review. https://ipfsfoundation.org/content-addressing-2025-in-review/
- 6. IFIP TMA (2025). Degrees of Decentralized Freedom: Comparing Modern Decentralized Storage Systems. https://tma.ifip.org/2025/wp-content/uploads/sites/14/2025/06/tma2025_paper16.pdf

### Provenance

