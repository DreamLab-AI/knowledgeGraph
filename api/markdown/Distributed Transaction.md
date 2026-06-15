public:: true

# Distributed Transaction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:distributed-transaction",
  "@type": "Page",
  "title": "Distributed Transaction",
  "vc:slug": "distributed-transaction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-transaction",
  "@type": "Class",
  "label": "Distributed Transaction",
  "definition": "A distributed transaction is a unit of work whose operations span two or more independent data stores, services or network nodes, yet must complete with all-or-nothing atomicity across every participant. Coordinating such a transaction requires protocols that agree on a single outcome despite partial failures, network partitions and concurrent activity at each site. Classical coordination uses atomic commit protocols, while modern systems often relax strict atomicity for availability using compensating workflows.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction-processing",
      "label": "Transaction Processing"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:two-phase-commit",
        "label": "Two Phase Commit"
      },
      {
        "@id": "urn:ngm:class:saga-pattern",
        "label": "Saga Pattern"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:transaction-processing",
        "label": "Transaction Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:two-phase-commit",
        "label": "Two Phase Commit"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:saga-pattern",
        "label": "Saga Pattern"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction-processing",
        "label": "Transaction Processing"
      },
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A distributed transaction is a unit of work whose operations span two or more independent data stores, services or network nodes, yet must complete with all-or-nothing atomicity across every participant. Coordinating such a transaction requires protocols that agree on a single outcome despite partial failures, network partitions and concurrent activity at each site. Classical coordination uses atomic commit protocols, while modern systems often relax strict atomicity for availability using compensating workflows.
  - Related core concepts: [[Transaction Processing]], [[Two Phase Commit]], [[Saga Pattern]], [[Consensus]].
- ### Overview
  - Distributed transactions extend the familiar database guarantee of atomicity, consistency, isolation and durability to settings where state is partitioned across machines that can fail independently. Because no single node has authoritative knowledge of all participants, the system relies on a coordinator and an agreement protocol to drive every participant to the same commit or abort decision.
  - It is modelled as a subclass of [[Transaction Processing]] within the distributed-systems domain.
  - The fundamental tension in distributed transactions is captured by the trade-off between strong atomicity and availability under partition. Two-phase commit delivers atomicity but blocks if the coordinator fails at the wrong moment, while consensus-backed commit and saga-based compensation relax timing or isolation to keep services responsive during failures.
  - Modern microservice and ledger systems frequently prefer eventual, compensating designs over global locks because cross-service two-phase commit couples availability across teams and scales poorly. Sagas trade the clean abstraction of a single atomic unit for a sequence of locally durable steps with explicit undo logic.
- ### Mechanisms
  - Atomic commit: two-phase and three-phase commit protocols vote and then converge on a single global decision.
  - Coordinator failure: blocking in two-phase commit motivates consensus-backed coordination and recovery logs.
  - Saga compensation: long-running business transactions trade strict atomicity for a sequence of locally committed steps with compensating undo actions.
  - Isolation levels: concurrency control and global ordering manage interleaving across participants.
- ### Applications
  - Cross-shard updates in distributed and partitioned databases.
  - Multi-service workflows in microservice architectures using sagas.
  - Atomic settlement and cross-ledger exchange in financial and blockchain systems.
- ### Considerations
  - Isolation across participants is hard; without care, intermediate states of a saga become visible and require careful semantic compensation.
  - Coordinator and participant recovery depend on durable logs so that an interrupted transaction can be resolved deterministically on restart.
  - Idempotency of participant operations is a practical prerequisite for safe retries in any distributed commit protocol.
- ### Relationships
  - subClassOf:: [[Transaction Processing]]
  - bridgesTo:: [[Two Phase Commit]]
  - bridgesTo:: [[Saga Pattern]]
  - enables:: [[Atomic Settlement]]
  - partOf:: [[Transaction Processing]]
  - requires:: [[Consensus]]
  - requires:: [[Two Phase Commit]]
  - uses:: [[Consensus]]
  - implements:: [[Saga Pattern]]
  - dependsOn:: [[Consensus]]
  - supports:: [[Atomic Settlement]]
  - relatedTo:: [[Transaction Processing]]
  - relatedTo:: [[Atomic Settlement]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
