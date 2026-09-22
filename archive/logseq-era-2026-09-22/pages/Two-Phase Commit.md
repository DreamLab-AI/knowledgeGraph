public:: true

# Two-Phase Commit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:two-phase-commit",
  "@type": "Page",
  "vc:slug": "two-phase-commit",
  "title": "Two-Phase Commit",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:two-phase-commit",
  "@type": "Class",
  "label": "Two-Phase Commit",
  "definition": "Two-Phase Commit (2PC) is a distributed transaction coordination protocol that ensures atomic commitment across multiple participant nodes: either all participants commit a transaction or all abort it, with no partial updates persisted. In the prepare phase, a coordinator polls all participants for their readiness to commit; in the commit phase, it broadcasts the final decision based on unanimous consensus from the prepare phase. 2PC is the foundational protocol for distributed ACID transactions but is blocking in the presence of coordinator failure, a limitation addressed by Three-Phase Commit and Paxos-based variants.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-system-protocol",
      "label": "Distributed System Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:commit-phase",
        "label": "Commit Phase"
      },
      {
        "@id": "urn:ngm:class:transaction-manager",
        "label": "Transaction Coordinator"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-transaction",
        "label": "Distributed Transaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:write-ahead-logging",
        "label": "Write-Ahead Logging"
      },
      {
        "@id": "urn:ngm:class:persistent-storage",
        "label": "Durable Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-confirmation",
        "label": "Transaction Confirmation"
      },
      {
        "@id": "urn:ngm:class:acid-properties",
        "label": "ACID Properties"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:crash-recovery",
        "label": "Crash Recovery"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:database-system",
        "label": "Database System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec",
        "label": "ISO/IEC Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:raft-consensus",
        "label": "RAFT Consensus"
      },
      {
        "@id": "urn:ngm:class:saga-pattern",
        "label": "Saga Pattern"
      },
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Cross-Chain Atomic Swap"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction-processing",
        "label": "Transaction Processing"
      },
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:distributed-consensus",
        "label": "Distributed Consensus"
      },
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:2pc",
      "label": "2PC"
    },
    {
      "@id": "urn:ngm:class:two-phase-commit-protocol",
      "label": "Two-Phase Commit Protocol"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Two-Phase Commit]] is a [[Distributed System Protocol]] that coordinates atomic [[Transaction Processing]] across multiple database nodes in two sequential phases — prepare and commit — ensuring that either all participants durably record a transaction or none do, thereby maintaining [[Distributed Consensus]] on transaction outcome.

- ### Relationships
  - Two-Phase Commit is the canonical mechanism for achieving [[Transaction Finality]] in distributed databases and directly enables [[Transaction Confirmation]] semantics in XA-compliant systems. It relies on [[Distributed Systems]] coordination primitives and is typically implemented within [[Database System]] transaction managers. It [[contrastsWith]] [[RAFT Consensus]], which provides fault-tolerant replicated state machine coordination, and [[Distributed Consensus]] algorithms like Paxos that tolerate coordinator failure — limitations inherent to 2PC's blocking design.

- ### Content
  - The Two-Phase Commit protocol was formalised by Jim Gray in his 1978 notes on transactions and database recovery, building on the theoretical work of Lampson and Sturgis on crash recovery. It emerged as the standard mechanism for coordinating distributed transactions in XA (eXtended Architecture) environments, which became an ISO/IEC standard in 1991 and is implemented by all major relational database systems including Oracle, IBM DB2, PostgreSQL, and MySQL. The protocol's simplicity and correctness guarantees made it the default choice for distributed ACID transactions throughout the 1990s and 2000s.

  - 2PC operates through a coordinator and multiple resource managers (participants). In Phase 1 (Prepare), the coordinator sends a PREPARE message to all participants; each either writes its transaction log to durable storage and replies VOTE-COMMIT, or replies VOTE-ABORT. In Phase 2 (Commit/Abort), if all votes are VOTE-COMMIT the coordinator broadcasts COMMIT and participants make the transaction durable; if any participant voted ABORT or timed out, the coordinator broadcasts ABORT and all roll back. The critical durability guarantee is that a participant that votes COMMIT must be able to commit or roll back even after a crash, relying on write-ahead logging.

  - The protocol's fundamental limitation is that it is blocking: if the coordinator fails after participants have voted COMMIT but before broadcasting the final decision, participants are stuck in a prepared state — holding locks and unable to proceed — until the coordinator recovers. This can cause minutes-long outages in systems with hardware failures. Three-Phase Commit (3PC) adds a pre-commit phase to eliminate this blocking behaviour in a synchronous network, though it cannot tolerate network partitions. Practical systems typically add coordinator redundancy via Paxos or Raft to achieve non-blocking distributed transactions.

  - By 2024-2025, 2PC underpins distributed transaction support in cloud-native databases (Google Spanner uses Paxos-enhanced 2PC across globally distributed nodes), microservice choreography via the saga pattern as a 2PC alternative, and blockchain cross-chain atomic swaps that adapt its two-phase logic to smart-contract lock-and-release mechanisms. Google Spanner's TrueTime demonstrates that correct 2PC with external consistency is achievable at global scale using hardware-assisted clock synchronisation, achieving sub-10ms commit latency across continents.

