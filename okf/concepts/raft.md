---
okf_version: "0.2"
type: Class
title: Raft
resource: urn:ngm:class:raft
domain: distributed-systems
description: "Raft is a distributed consensus algorithm designed explicitly for understandability, introduced by Diego Ongaro and John Ousterhout at USENIX ATC 2014 as a more comprehensible alternative to the Paxos family of protocols. Raft decomposes the consensus problem into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster maintains a replicated log of c"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-algorithm
requires:
  - urn:ngm:class:quorum
  - urn:ngm:class:persistent-storage
enables:
  - urn:ngm:class:distributed-system-architecture
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:fault-tolerance-system
  - urn:ngm:class:high-availability
  - urn:ngm:class:linearizability
implements:
  - urn:ngm:class:leader-election
  - urn:ngm:class:log-replication
  - urn:ngm:class:crash-fault-tolerance
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerant-system
  - urn:ngm:class:paxos
bridgesTo:
  - urn:ngm:class:blockchain-consensus
uses:
  - urn:ngm:class:data-replication
  - urn:ngm:class:distributed-system
  - urn:ngm:class:quorum
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:heartbeat-mechanism
supports:
  - urn:ngm:class:etcd
  - urn:ngm:class:cockroachdb
  - urn:ngm:class:consul
relatedTo:
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:state-machine-replication
---

# Raft

Raft is a distributed consensus algorithm designed explicitly for understandability, introduced by Diego Ongaro and John Ousterhout at USENIX ATC 2014 as a more comprehensible alternative to the Paxos family of protocols. Raft decomposes the consensus problem into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster maintains a replicated log of commands through a strong leader that serialises all writes; followers replicate the leader's log entries and redirect client requests. Leader election uses randomised timeouts to avoid split votes. Raft has become the dominant consensus algorithm in modern distributed systems infrastructure, underpinning etcd, CockroachDB, TiKV, Consul, and many other widely deployed systems.
