public:: true
alias:: Content Addressed Storage

# Content-Addressed Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:content-addressed-storage",
  "@type": "Page",
  "vc:slug": "content-addressed-storage",
  "title": "Content-Addressed Storage",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-addressed-storage",
  "@type": "Class",
  "label": "Content-Addressed Storage",
  "definition": "Content-addressed storage (CAS) is a data storage paradigm in which each piece of data is identified and retrieved by a cryptographic hash of its content rather than by its location or a human-assigned name. Because the identifier is derived deterministically from the data itself, identical content always maps to the same address, enabling automatic deduplication and verifiable integrity without requiring trust in the storage provider. Content-addressed storage forms the basis of distributed systems such as IPFS, Git, and Arweave, and underlies the content-integrity mechanisms of blockchain data layers. It is fundamentally different from location-addressed storage, where the same content can exist at multiple addresses or the same address can point to different content over time.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-storage",
      "label": "Data Storage"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:content-addressable-storage",
      "label": "Content-Addressable Storage"
    },
    {
      "@id": "urn:ngm:class:cas",
      "label": "CAS"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      },
      {
        "@id": "urn:ngm:class:distributed-hash-table",
        "label": "Distributed Hash Table"
      },
      {
        "@id": "urn:ngm:class:kzg-commitment",
        "label": "KZG Commitment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:data-deduplication",
        "label": "Data Deduplication"
      },
      {
        "@id": "urn:ngm:class:tamper-evidence",
        "label": "Tamper Evidence"
      },
      {
        "@id": "urn:ngm:class:reproducible-builds",
        "label": "Reproducible Builds"
      },
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Verifiable Provenance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      },
      {
        "@id": "urn:ngm:class:arweave",
        "label": "Arweave"
      },
      {
        "@id": "urn:ngm:class:filecoin",
        "label": "Filecoin"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:content-identifier",
        "label": "Content Identifier"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-storage",
        "label": "Decentralized Storage"
      },
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:object-storage",
        "label": "Object Storage"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-layer",
        "label": "Blockchain Data Layer"
      },
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Dataset Versioning"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Content-addressed storage (CAS) is a storage paradigm in which data is identified and retrieved by a [[Cryptographic Hash]] of its contents rather than by a file path or network location. Because the identifier is computed deterministically from the data, identical content always produces the same address, enabling automatic [[Data Deduplication]] and [[Tamper Evidence]] without trust in any intermediary. CAS forms the foundational retrieval model for systems such as [[IPFS]], [[Git]], [[Arweave]], and [[Filecoin]], and underpins [[Blockchain Data Layer]] off-chain references where a smart contract need only store a compact hash to commit verifiably to arbitrary data.

- ### Overview
  - Content-addressed storage inverts the conventional naming relationship between data and identity. In traditional [[Location-Addressed Storage]], a URL or file path designates where data lives — the same path may return different data at different times, and the same data may exist at many paths simultaneously. In a content-addressed system, the path *is* the data: the address H(data) is computed by a [[Hash Function]] such as SHA-256 or Blake3, and any node that recomputes the hash from received bytes can verify correctness independently.
  - This self-certifying property is fundamental to decentralised and trustless architectures. No certificate authority, central registry, or DNS resolver is required; any peer holding the bytes can serve them verifiably. The practical implications are:
    - **Integrity**: data corruption or tampering is detected automatically on retrieval.
    - **Deduplication**: identical content stored by millions of peers occupies one logical slot in the address space.
    - **Cacheability**: content at a given address is immutable, so any cache is always correct.
    - **Censorship resistance**: data can be served by any reachable peer without relying on the original publisher's infrastructure.

- ### Key Mechanisms
  - **[[Hash Function]] application** — A write operation computes `address = H(data)` using a collision-resistant function. SHA-1 was used in early [[Git]]; SHA-256 and Blake3 are prevalent in modern systems. The [[Content Identifier]] (CID) format used by [[IPFS]] encodes the hash function, hash length, and digest in a self-describing multiformat.
  - **[[Merkle Tree]] structures** — For structured or hierarchical data, each internal node hashes its children, producing a root hash that commits to the entire dataset. Partial inclusion proofs require only O(log n) hashes, enabling efficient [[Cryptographic Verification]] of individual chunks within large files or state tries.
  - **[[Distributed Hash Table]] (DHT)** — In peer-to-peer CAS networks, a DHT maps content addresses to the network locations of peers that hold the corresponding data, enabling routing without a central directory. [[IPFS]] uses the Kademlia DHT variant.
  - **[[KZG Commitment]]** — A polynomial commitment scheme used in Ethereum's danksharding design (EIP-4844) to commit to blob data via a constant-size proof, extending content addressing to zero-knowledge-friendly primitives and bridging CAS into [[Zero-Knowledge Proof]] workflows.
  - **Chunking and block graphs** — Large files are split into fixed or variable-size chunks, each independently addressed. A root block references child blocks by their hashes, forming a directed acyclic graph (DAG) akin to a [[Merkle Tree]]. [[IPFS]] implements this as UnixFS over IPLD (InterPlanetary Linked Data).

- ### Applications and Use Cases
  - **[[Version Control]]** — [[Git]] pioneered production CAS: every blob, tree, commit, and tag is identified by its SHA-1 (SHA-256 in newer repos) hash. Distributed collaboration across millions of developers relies on this model for conflict-free merging and branch integrity.
  - **[[Decentralized Storage]] networks** — [[IPFS]] provides a global peer-to-peer CAS layer; [[Filecoin]] adds economic incentives for persistent pinning; [[Arweave]] encodes permanent storage in a blockchain-based endowment model. Together they form the decentralised web storage stack.
  - **Blockchain off-chain data** — Smart contracts on Ethereum, Solana, and similar platforms store only hashes on-chain, with the corresponding data served via [[IPFS]] or centralised gateways. This pattern, called content-addressed off-chain storage, keeps on-chain costs minimal while preserving verifiability.
  - **AI/ML dataset and model versioning** — Tools such as DVC (Data Version Control) and Hugging Face Hub apply CAS to large numerical datasets and model weights, enabling [[Reproducible Builds]] of training pipelines and [[Verifiable Provenance]] for AI artefacts. [[Model Registry]] systems increasingly adopt CAS to track lineage.
  - **[[Dataset Versioning]]** — Scientific data repositories (e.g. Zenodo, Software Heritage) use content addressing to archive immutable snapshots of research artefacts, ensuring long-term reproducibility independent of institutional URL stability.
  - **Backup and deduplication** — Enterprise backup systems (Veeam, Restic, Borg) use CAS internally for block-level deduplication, significantly reducing storage footprint for incremental backups without relying on file-path metadata.
  - **Container image layers** — Docker and OCI container images are stored as content-addressed layers; the image manifest references layer digests, ensuring that pulling an image by digest always retrieves the exact same filesystem layers regardless of registry state.
  - **Software supply chain** — Package managers such as npm (integrity field), Nix, and Guix use content hashes to pin dependencies, forming the cryptographic backbone of [[Reproducible Builds]] and supply-chain attestation.

- ### Relationships
  - uses:: [[Cryptographic Hash]]
  - uses:: [[Merkle Tree]]
  - uses:: [[Content Addressing]]
  - uses:: [[Distributed Hash Table]]
  - uses:: [[KZG Commitment]]
  - enables:: [[Data Availability]]
  - enables:: [[Cryptographic Verification]]
  - enables:: [[Data Deduplication]]
  - enables:: [[Tamper Evidence]]
  - enables:: [[Reproducible Builds]]
  - enables:: [[Verifiable Provenance]]
  - implements:: [[IPFS]]
  - implements:: [[Git]]
  - implements:: [[Arweave]]
  - implements:: [[Filecoin]]
  - requires:: [[Hash Function]]
  - requires:: [[Content Identifier]]
  - supports:: [[Decentralized Storage]]
  - supports:: [[Distributed Storage]]
  - supports:: [[Peer-to-Peer Network]]
  - supports:: [[Version Control]]
  - contrastsWith:: [[Location-Addressed Storage]]
  - contrastsWith:: [[Object Storage]]
  - bridges-to:: [[Blockchain Data Layer]]
  - bridges-to:: [[Dataset Versioning]]
  - bridges-to:: [[Model Registry]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - relatedTo:: [[Data Integrity]]

- ### Standards & Context
  - **Multiformats / CID** — The Content Identifier (CID) specification, maintained by the IPFS / Protocol Labs ecosystem, defines a self-describing format encoding the codec, hash function, and digest. CIDv1 uses multibase encoding and is the standard reference format across IPLD-based systems.
  - **IPLD (InterPlanetary Linked Data)** — A data model and codec family for content-addressed structured data. IPLD defines DAG-CBOR, DAG-JSON, and DAG-PB codecs, enabling typed links between content-addressed blocks and forming the semantic layer atop raw CAS.
  - **OCI Image Specification** — The Open Container Initiative (OCI) Image Specification mandates content addressing for image layers using SHA-256 digests, making CAS a de facto standard in cloud-native infrastructure.
  - **Ethereum EIP-4844 (Proto-Danksharding)** — Introduced blob-carrying transactions whose data is committed via KZG polynomial commitments; the blob sidecar is pruned after a retention window but the commitment (a form of content address) remains on-chain permanently.
  - **Software Heritage** — An international initiative archiving all public source code using SHA-1/SHA-256 content addresses, providing a [[Verifiable Provenance]] layer for the global software commons.

- ### Provenance
  - sources:: IPFS documentation (docs.ipfs.tech); Git internals documentation (git-scm.com); Ethereum EIP-4844 specification; OCI Image Specification; Protocol Labs IPLD documentation; Restic backup documentation
  - updated:: 2026-06-13
