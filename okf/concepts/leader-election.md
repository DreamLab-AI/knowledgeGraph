---
okf_version: "0.2"
type: Class
title: Leader Election
resource: urn:ngm:class:leader-election
domain: infrastructure
description: Leader election is a fundamental coordination primitive in distributed computing that enables a cluster of peer nodes to agree on a single node — the leader — that assumes special coordination responsibilities such as sequencing writes, directing consensus rounds, or managing resource allocation on behalf of the group. In the presence of node failures, network partitions, or leader crashes, the le
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-consensus
requires:
  - urn:ngm:class:failure-detector
  - urn:ngm:class:network-partition-tolerance
enables:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:service-discovery
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:high-availability
  - urn:ngm:class:log-replication
  - urn:ngm:class:replication
bridgesTo:
  - urn:ngm:class:delegated-proof-of-stake
uses:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
  - urn:ngm:class:quorum
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:participant-coordination
  - urn:ngm:class:etcd
  - urn:ngm:class:zookeeper
---

# Leader Election

Leader election is a fundamental coordination primitive in distributed computing that enables a cluster of peer nodes to agree on a single node — the leader — that assumes special coordination responsibilities such as sequencing writes, directing consensus rounds, or managing resource allocation on behalf of the group. In the presence of node failures, network partitions, or leader crashes, the leader election protocol must reliably select a new leader from the surviving nodes while ensuring safety (at most one leader at a time) and liveness (a leader is eventually elected) properties hold.
