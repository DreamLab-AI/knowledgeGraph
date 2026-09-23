---
okf_version: "0.2"
type: Class
title: CRDT
resource: urn:ngm:class:crdt
domain: distributed-collaboration
description: Conflict-free Replicated Data Types (CRDTs) are a family of data structures with mathematically proven convergence guarantees that allow multiple distributed replicas to be independently modified without requiring coordination, locks, or a consensus protocol, and which automatically merge to a si...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:dc-protocol-and-infra
  - urn:ngm:class:distributed-data-synchronisation
  - urn:ngm:class:eventually-consistent-data-structure
  - urn:ngm:class:replicated-data-structure
  - urn:ngm:class:mergeable-data-type
  - urn:ngm:class:commutative-data-structure
  - urn:ngm:class:monotone-data-structure
hasPart:
  - urn:ngm:class:or-set
  - urn:ngm:class:join-semilattice
  - urn:ngm:class:unique-identifier
  - urn:ngm:class:vector-clocks
  - urn:ngm:class:version-vector
  - urn:ngm:class:g-counter
  - urn:ngm:class:g-set
  - urn:ngm:class:lww-element-set
  - urn:ngm:class:replicated-growable-array
  - urn:ngm:class:causal-ordering
  - urn:ngm:class:join-semilattice
  - urn:ngm:class:tombstone-record
  - urn:ngm:class:delta-state
  - urn:ngm:class:causal-history-graph
requires:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:join-semilattice
  - urn:ngm:class:causal-delivery
  - urn:ngm:class:unique-replica-identifiers
  - urn:ngm:class:join-semilattice
  - urn:ngm:class:idempotent-merge
  - urn:ngm:class:monotone-operations
  - urn:ngm:class:causal-broadcast-protocol
enables:
  - urn:ngm:class:local-first-software
  - urn:ngm:class:replication
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:synchronisation
  - urn:ngm:class:real-time-collaborative-editing
  - urn:ngm:class:offline-first-collaboration
  - urn:ngm:class:synchronisation
  - urn:ngm:class:replication
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:coordination-free-computing
  - urn:ngm:class:replication
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:vector-clocks
  - urn:ngm:class:lamport-timestamps
  - urn:ngm:class:causal-consistency
  - urn:ngm:class:order-theory
  - urn:ngm:class:lattice-theory
implements:
  - urn:ngm:class:synchronisation
  - urn:ngm:class:idempotency
  - urn:ngm:class:join-semilattice
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:commutativity
  - urn:ngm:class:associativity
  - urn:ngm:class:state-lattice-merge
  - urn:ngm:class:synchronisation
  - urn:ngm:class:causal-broadcast
  - urn:ngm:class:eventual-consistency
contrastsWith:
  - urn:ngm:class:operational-transformation
  - urn:ngm:class:pessimistic-locking
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:paxos
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:optimistic-locking
  - urn:ngm:class:strong-consistency
bridgesTo:
  - urn:ngm:class:infra-network-and-comms
uses:
  - urn:ngm:class:vector-clocks
  - urn:ngm:class:join-semilattice
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:causal-history
  - urn:ngm:class:unique-identifiers-per-replica
  - urn:ngm:class:version-vectors
  - urn:ngm:class:logical-clocks
  - urn:ngm:class:vector-clocks
supports:
  - urn:ngm:class:collaborative-systems-modality
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:synchronisation
  - urn:ngm:class:collaboration-tools
  - urn:ngm:class:local-first-software
  - urn:ngm:class:real-time-collaborative-editing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:mobile-sync
  - urn:ngm:class:collaborative-systems-modality
  - urn:ngm:class:collaboration-tools
  - urn:ngm:class:synchronisation
  - urn:ngm:class:local-first-software
standardizedBy:
  - urn:ngm:class:shapiro-et-al-2011-socc
  - urn:ngm:class:syncfree-eu-project-fp7-ict-2011-7-609551
  - urn:ngm:class:inria-technical-report-rr-7506
relatedTo:
  - urn:ngm:class:cqrs
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:local-first-software
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:nostr-protocol
---

# CRDT

Conflict-free Replicated Data Types (CRDTs) are a family of data structures with mathematically proven convergence guarantees that allow multiple distributed replicas to be independently modified without requiring coordination, locks, or a consensus protocol, and which automatically merge to a si...
