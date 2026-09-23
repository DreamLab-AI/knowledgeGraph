---
okf_version: "0.2"
type: Class
title: Quorum System
resource: urn:ngm:class:quorum-system
domain: distributed-systems
description: A quorum system is a collection of subsets of a distributed set of replicas, where any two subsets are guaranteed to intersect, used to coordinate read and write operations so that consistency is preserved despite failures. By requiring operations to gather acknowledgements from a quorum rather than every replica, the system tolerates a bounded number of faulty or unreachable nodes while still ens
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-consensus
requires:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:byzantine-fault-tolerant-system
implements:
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:raft-consensus
bridgesTo:
  - urn:ngm:class:fault-tolerance
uses:
  - urn:ngm:class:voting-mechanism
supports:
  - urn:ngm:class:pbft
  - urn:ngm:class:raft-consensus
partOf:
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:voting-mechanism
---

# Quorum System

A quorum system is a collection of subsets of a distributed set of replicas, where any two subsets are guaranteed to intersect, used to coordinate read and write operations so that consistency is preserved despite failures. By requiring operations to gather acknowledgements from a quorum rather than every replica, the system tolerates a bounded number of faulty or unreachable nodes while still ensuring that conflicting operations observe one another. Quorum systems are foundational to distributed consensus, replicated databases, and Byzantine fault-tolerant protocols.
