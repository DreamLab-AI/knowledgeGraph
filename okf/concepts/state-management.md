---
okf_version: "0.2"
type: Class
title: State Management
resource: urn:ngm:class:state-management
domain: infrastructure
description: State Management is the set of patterns, architectures, and tools used to represent, update, synchronise, and persist the mutable state of an application or distributed system in a predictable and auditable way. In single-page web applications, state management libraries such as Redux implement unidirectional data flow and immutable state trees. In distributed systems, state management encompasses
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:software-architecture
hasPart:
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:command-query-responsibility-segregation
requires:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:concurrency-control
enables:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:scalability
  - urn:ngm:class:data-consistency
implements:
  - urn:ngm:class:eventual-consistency
contrastsWith:
  - urn:ngm:class:stateless-architecture
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:state-machine
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:consensus-protocol
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:message-queue
  - urn:ngm:class:audit-trail
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:raft
---

# State Management

State Management is the set of patterns, architectures, and tools used to represent, update, synchronise, and persist the mutable state of an application or distributed system in a predictable and auditable way. In single-page web applications, state management libraries such as Redux implement unidirectional data flow and immutable state trees. In distributed systems, state management encompasses consensus protocols, state machine replication, and event sourcing patterns that ensure all nodes maintain consistent views of shared state despite failures and network partitions. Blockchain ledgers represent a specialised form of state management with Byzantine fault-tolerant distributed consensus.
