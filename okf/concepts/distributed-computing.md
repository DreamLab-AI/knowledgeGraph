---
okf_version: "0.2"
type: Class
title: Distributed Computing
resource: urn:ngm:class:distributed-computing
domain: infrastructure
description: Distributed Computing is a computational paradigm in which networked autonomous nodes (processes, machines, datacentres or geographic regions) coordinate through message passing over partially synchronous networks to solve problems no single node can solve alone or to scale capacity beyond a sing...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:networked-systems
  - urn:ngm:class:concurrent-computing
  - urn:ngm:class:coordination-systems
hasPart:
  - urn:ngm:class:coordination-layer
  - urn:ngm:class:leader-election
  - urn:ngm:class:logical-clock
  - urn:ngm:class:message-queue
  - urn:ngm:class:replication
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:distributed-lock
  - urn:ngm:class:coordination-layer
  - urn:ngm:class:replication
requires:
  - urn:ngm:class:message-passing
  - urn:ngm:class:network-communication
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:serialisation-format
  - urn:ngm:class:time-synchronisation
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:identity-and-naming
enables:
  - urn:ngm:class:distributed-ai-training
  - urn:ngm:class:geographic-distribution
  - urn:ngm:class:high-availability
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:elastic-capacity
dependsOn:
  - urn:ngm:class:lamport-timestamps
  - urn:ngm:class:vector-clocks
  - urn:ngm:class:flp-impossibility
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:pacelc
  - urn:ngm:class:byzantine-generals-problem
  - urn:ngm:class:two-generals-problem
implements:
  - urn:ngm:class:actor-model
  - urn:ngm:class:map-reduce
  - urn:ngm:class:paxos
  - urn:ngm:class:pbft
  - urn:ngm:class:raft
  - urn:ngm:class:saga-pattern
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:crdt
  - urn:ngm:class:mapreduce
  - urn:ngm:class:bulk-synchronous-parallel
contrastsWith:
  - urn:ngm:class:centralised-computing
  - urn:ngm:class:single-machine-multiprocessing
  - urn:ngm:class:embarrassingly-parallel-batch
  - urn:ngm:class:mainframe-computing
uses:
  - urn:ngm:class:apache-flink
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:apache-spark
  - urn:ngm:class:etcd
  - urn:ngm:class:g-rpc
  - urn:ngm:class:kubernetes
  - urn:ngm:class:service-mesh
  - urn:ngm:class:ray
  - urn:ngm:class:zookeeper
supports:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:distributed-ai-training
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:microservices
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:streaming-analytics
standardizedBy:
  - urn:ngm:class:apache-software-foundation
  - urn:ngm:class:cncf
  - urn:ngm:class:g-rpc
  - urn:ngm:class:quic
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:quic
  - urn:ngm:class:g-rpc
  - urn:ngm:class:mpi-forum
relatedTo:
  - urn:ngm:class:cloud-native
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:edge-computing
  - urn:ngm:class:federated-learning
  - urn:ngm:class:peer-to-peer-network
---

# Distributed Computing

Distributed Computing is a computational paradigm in which networked autonomous nodes (processes, machines, datacentres or geographic regions) coordinate through message passing over partially synchronous networks to solve problems no single node can solve alone or to scale capacity beyond a sing...
