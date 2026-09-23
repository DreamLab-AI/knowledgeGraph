---
okf_version: "0.2"
type: Class
title: Two-Phase Commit
resource: urn:ngm:class:two-phase-commit
domain: distributed-systems
description: "Two-Phase Commit (2PC) is a distributed transaction coordination protocol that ensures atomic commitment across multiple participant nodes: either all participants commit a transaction or all abort it, with no partial updates persisted. In the prepare phase, a coordinator polls all participants for their readiness to commit; in the commit phase, it broadcasts the final decision based on unanimous "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:distributed-system-protocol
hasPart:
  - urn:ngm:class:commit-phase
  - urn:ngm:class:transaction-manager
requires:
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:persistent-storage
enables:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:acid-properties
dependsOn:
  - urn:ngm:class:crash-recovery
contrastsWith:
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:saga-pattern
  - urn:ngm:class:paxos
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:atomic-swap
uses:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:database-system
supports:
  - urn:ngm:class:relational-database
standardizedBy:
  - urn:ngm:class:iso-iec
partOf:
  - urn:ngm:class:distributed-transaction
relatedTo:
  - urn:ngm:class:transaction-processing
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:consensus-protocol
---

# Two-Phase Commit

Two-Phase Commit (2PC) is a distributed transaction coordination protocol that ensures atomic commitment across multiple participant nodes: either all participants commit a transaction or all abort it, with no partial updates persisted. In the prepare phase, a coordinator polls all participants for their readiness to commit; in the commit phase, it broadcasts the final decision based on unanimous consensus from the prepare phase. 2PC is the foundational protocol for distributed ACID transactions but is blocking in the presence of coordinator failure, a limitation addressed by Three-Phase Commit and Paxos-based variants.
