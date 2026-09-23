---
okf_version: "0.2"
type: Class
title: Log Replication
resource: urn:ngm:class:log-replication
domain: distributed-systems
description: "Log replication is the mechanism by which an ordered, append-only sequence of commands is copied consistently across the nodes of a distributed system so that each replica can apply the same operations in the same order. In leader-based consensus protocols such as Raft, the leader appends client commands to its log and replicates entries to followers, committing an entry once a quorum has durably "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:replication
hasPart:
  - urn:ngm:class:leader-election
  - urn:ngm:class:quorum
requires:
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:leader-election
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:linearizability
implements:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:consensus-algorithm
uses:
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
partOf:
  - urn:ngm:class:raft
relatedTo:
  - urn:ngm:class:consistency-model
  - urn:ngm:class:distributed-systems
---

# Log Replication

Log replication is the mechanism by which an ordered, append-only sequence of commands is copied consistently across the nodes of a distributed system so that each replica can apply the same operations in the same order. In leader-based consensus protocols such as Raft, the leader appends client commands to its log and replicates entries to followers, committing an entry once a quorum has durably stored it. By ensuring every replica converges on an identical log, it is the substrate for state machine replication and strong consistency. It must handle leader failover, log divergence, and consistency checks to keep replicas in agreement.
