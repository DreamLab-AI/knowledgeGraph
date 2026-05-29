public:: true

# PBFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pbft",
  "@type": "Page",
  "vc:slug": "pbft",
  "title": "PBFT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pbft",
  "@type": "Class",
  "label": "PBFT",
  "definition": "Practical Byzantine Fault Tolerance (PBFT) is a state-machine replication protocol designed by Castro and Liskov (1999) that achieves consensus in asynchronous distributed systems despite up to f arbitrarily faulty (Byzantine) nodes, requiring a total of at least 3f+1 replicas. It proceeds through pre-prepare, prepare, and commit phases to ensure all correct replicas execute the same sequence of operations, providing both safety and liveness under partial synchrony assumptions. PBFT was the first Byzantine fault-tolerant protocol deemed practical for deployed systems, with latency polynomial rather than exponential in the number of nodes. Its communication complexity of O(n²) limits scalability but makes it highly suitable for small-to-medium permissioned blockchain networks.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:bc-cryptographic-primitive", "label": "Cryptographic Primitive"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:blockchain-infrastructure", "label": "Blockchain Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dynamic-scalable-bft", "label": "Dynamic Scalable BFT"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[PBFT]] (Practical Byzantine Fault Tolerance) is a [[Byzantine Fault Tolerance]] [[Consensus Protocol]] for state-machine replication that guarantees safety and liveness in partially synchronous networks with up to f faulty nodes out of 3f+1 total replicas, using authenticated three-phase message exchange.
- ### Relationships
  - [[PBFT]] specialises [[Byzantine Fault Tolerance]] and implements a [[Consensus Protocol]] over a [[Distributed System]] using [[Cryptographic Primitive]] operations for message authentication. It enables [[Distributed Ledger Technology]] and [[Blockchain Infrastructure]] in permissioned settings. It relates to [[Dynamic Scalable BFT]] variants that address its scalability limitations, and to the broader [[Consensus Mechanism]] and [[Protocol and Consensus]] landscape. It contrasts with energy-intensive [[Proof Of Work]] by delivering finality deterministically rather than probabilistically.
- ### Content
  - PBFT was published by Miguel Castro and Barbara Liskov at OSDI 1999 and represented a breakthrough in practical Byzantine fault-tolerant distributed systems. Prior BFT protocols were theoretically sound but computationally prohibitive for real deployments. PBFT achieved Byzantine agreement with a communication overhead of O(n²) messages per request—still expensive, but manageable for networks of tens to hundreds of nodes.

  - The protocol operates in views led by a primary node. A client sends a request to the primary, which broadcasts a pre-prepare message. Backups validate and multicast prepare messages; once a backup collects 2f prepare messages (a quorum), it multicasts a commit message. After collecting 2f+1 commit messages, a replica executes the request and replies to the client. View-change sub-protocol handles primary failures, replacing the primary while preserving the committed log.

  - PBFT's deterministic finality—a request is committed after two rounds of all-to-all communication—makes it attractive for permissioned blockchains where transaction irreversibility is required quickly without the energy expenditure of proof-of-work. Hyperledger Fabric's early ordering service and many enterprise DLT platforms adapted PBFT or its derivatives (Tendermint, HotStuff) for their core consensus layer.

  - The O(n²) message complexity limits PBFT to small validator sets—typically under 100 nodes—before latency and bandwidth become prohibitive. This has driven a rich literature of optimisations: linear-communication HotStuff reduces the complexity to O(n) in the happy path; sharding partitions the validator set into smaller committees. These successors retain PBFT's conceptual three-phase structure whilst addressing its scalability bottleneck.
