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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Quorum System

A quorum system is a collection of subsets of a distributed set of replicas, where any two subsets are guaranteed to intersect, used to coordinate read and write operations so that consistency is preserved despite failures. By requiring operations to gather acknowledgements from a quorum rather than every replica, the system tolerates a bounded number of faulty or unreachable nodes while still ensuring that conflicting operations observe one another. Quorum systems are foundational to distributed consensus, replicated databases, and Byzantine fault-tolerant protocols.
