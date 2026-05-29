public:: true

# tendermint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6c3848fc2ab9188dd2c563828019be7cee4e269f5438c19f5173f79898e9ee6",
  "@type": "Page",
  "vc:slug": "tendermint",
  "title": "tendermint",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tendermint",
  "@type": "Class",
  "label": "Tendermint",
  "definition": "Tendermint is a Byzantine fault-tolerant (BFT) consensus engine that implements a partially synchronous, round-based, leader-elected protocol providing deterministic finality on each block. It separates the consensus layer from the application layer via the Application BlockChain Interface (ABCI), allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the consensus core of the Cosmos SDK and has influenced several subsequent BFT designs, offering safety guarantees as long as fewer than one-third of validator voting power is Byzantine.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:deterministic-finality", "label": "Deterministic Finality"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cosmos-ibc", "label": "Cosmos IBC"},
      {"@id": "urn:ngm:class:practical-byzantine-fault-tolerance", "label": "Practical Byzantine Fault Tolerance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Tendermint is a Byzantine fault-tolerant (BFT) consensus engine that implements a partially synchronous, round-based, leader-elected protocol providing deterministic finality on each block. It separates the consensus layer from the application layer via the Application BlockChain Interface (ABCI), allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the consensus core of the Cosmos SDK and has influenced several subsequent BFT designs, offering safety guarantees as long as fewer than one-third of validator voting power is Byzantine.

- ### Semantic Classification
  - owl-class:: tendermint:Tendermint
  - owl-role:: Concept

- ### Relationships
  - implements [[Byzantine Fault Tolerance]]
  - implements [[Deterministic Finality]]
  - relatedTo [[Cosmos IBC]]
  - relatedTo [[Practical Byzantine Fault Tolerance]]
  - contrastsWith [[Proof Of Work]]

- ### Content
  Tendermint Core provides a BFT state-machine replication engine whose design derives from PBFT but introduces several pragmatic modifications for blockchain use cases. The protocol operates in rounds comprising a propose phase, a prevote phase, and a precommit phase, with a designated proposer rotating among the validator set each round. A block achieves finality once it collects precommits from more than two-thirds of total validator voting power, eliminating probabilistic fork risk and enabling immediate transaction confirmation.

  The ABCI interface decouples Tendermint's networking and consensus logic from application business logic, enabling the Cosmos SDK to build application-specific blockchains (AppChains) on a shared consensus substrate. This modularity has made Tendermint widely adopted across interoperable chains connected via the Inter-Blockchain Communication (IBC) protocol. Cosmos IBC relies on Tendermint's instant finality to enable trust-minimised cross-chain asset transfers — a key advantage over Nakamoto-consensus chains where probabilistic finality requires waiting many confirmations.

  Tendermint's liveness is conditional on partial synchrony: validators must be able to communicate within a bounded (though unknown) delay. Under complete network partition, the protocol halts rather than producing conflicting forks — an explicit design choice prioritising consistency (safety) over availability in the CAP theorem sense.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
