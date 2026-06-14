public:: true

# Merkle DAG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:merkle-dag",
  "@type": "Page",
  "vc:slug": "merkle-dag",
  "title": "Merkle DAG",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:merkle-dag",
  "@type": "Class",
  "label": "Merkle DAG",
  "definition": "A Merkle Directed Acyclic Graph (DAG) is a data structure combining Merkle tree hash-linking with a generalised directed acyclic graph topology, allowing nodes to have multiple parents and enabling content-addressed, tamper-evident storage of arbitrary graph-shaped data. Unlike a binary Merkle tree, each node's cryptographic hash is derived from all its children, forming a unique, immutable identifier for any subgraph.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"},
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:content-identifier", "label": "Content Identifier"},
      {"@id": "urn:ngm:class:directed-acyclic-graph", "label": "Directed Acyclic Graph"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:merkle-node", "label": "Merkle Node"},
      {"@id": "urn:ngm:class:typed-link", "label": "Typed Link"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:ipld", "label": "IPLD"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:hash-collision-resistance", "label": "Hash Collision Resistance"},
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"},
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:deduplication", "label": "Deduplication"},
      {"@id": "urn:ngm:class:tamper-evident-storage", "label": "Tamper-Evident Storage"},
      {"@id": "urn:ngm:class:verifiable-computation", "label": "Verifiable Computation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:immutable-data-model", "label": "Immutable Data Model"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:authenticated-data-structure", "label": "Authenticated Data Structure"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:reproducible-builds", "label": "Reproducible Builds"},
      {"@id": "urn:ngm:class:decentralised-data-streaming", "label": "Decentralised Data Streaming"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:merkle-patricia-trie", "label": "Merkle Patricia Trie"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:git", "label": "Git"},
      {"@id": "urn:ngm:class:filecoin", "label": "Filecoin"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:data-structure", "label": "Data Structure"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:cross-chain-interoperability", "label": "Cross-Chain Interoperability"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ipld-dag", "label": "IPLD DAG"},
    {"@id": "urn:ngm:class:hash-linked-dag", "label": "Hash-Linked DAG"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Merkle DAG]] is a content-addressed directed acyclic graph in which every node is identified by the cryptographic hash of its content and its children's hashes, extending the tamper-evidence of [[Merkle Tree]] structures to graph-shaped data with arbitrary fan-in.

- ### Relationships
  - Merkle DAGs depend on [[Cryptographic Hash Function]] to derive node identifiers, directly enable [[IPFS]] and other [[Distributed Storage]] systems, and generalise the structure of [[Merkle Tree]] constructs used in [[Distributed Ledger Technology]].

- ### Content
  - The Merkle DAG concept emerged from Ralph Merkle's 1979 hash-tree patent combined with later work on distributed version control. Git's internal object model is a prominent early Merkle DAG: commits, trees, and blobs form a DAG where every object is addressed by its SHA-1 (later SHA-256) hash. The generalisation from binary trees to arbitrary DAGs was formalised in the IPFS ecosystem circa 2014–2015 through the IPLD (InterPlanetary Linked Data) specification.
  - In a Merkle DAG, each node stores a payload and a list of typed links to child nodes, each link containing the child's content identifier (CID). A node's own CID is computed by hashing its payload together with its children's CIDs, making the entire reachable subgraph cryptographically committed. Adding or modifying any descendant produces a different root CID, providing structural integrity without a trusted third party. Deduplication is automatic: identical subgraphs share the same CID across the entire network.
  - Merkle DAGs are foundational to content-addressed storage systems used in decentralised infrastructure. IPFS uses IPLD Merkle DAGs to store and retrieve files, web pages, and databases in a peer-to-peer network where content is routed by CID rather than location. Blockchains such as Ethereum use Merkle Patricia Tries (a Merkle DAG variant) to efficiently prove state membership. Version control systems, reproducible build systems, and distributed package managers all exploit the structural deduplication and tamper-evidence properties.
  - As of 2024–2025, IPLD v2 has standardised codec support (DAG-CBOR, DAG-JSON, DAG-PB) enabling interoperability between IPFS, Filecoin, and other Web3 storage layers. CIDv1 with SHA2-256 is the dominant content identifier format. Research into authenticated data structures is expanding Merkle DAG applications to verifiable computation, zkVM state proofs, and cross-chain state verification, with projects such as Ceramic Network using Merkle DAGs for decentralised data streams.

