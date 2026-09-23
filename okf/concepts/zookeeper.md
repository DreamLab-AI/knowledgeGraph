---
okf_version: "0.2"
type: Class
title: ZooKeeper
resource: urn:ngm:class:zookeeper
domain: distributed-systems
description: "An Apache open-source coordination service for distributed systems that exposes a replicated, hierarchical key-value namespace of 'znodes' with strict ordering guarantees, ephemeral nodes, and watches, over which applications build leader election, distributed locks, configuration management, and group membership; consistency across the ensemble is maintained by the ZAB atomic-broadcast protocol, "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:distributed-systems
enables:
  - urn:ngm:class:leader-election
  - urn:ngm:class:configuration-management
  - urn:ngm:class:service-discovery
contrastsWith:
  - urn:ngm:class:etcd
uses:
  - urn:ngm:class:consensus-algorithm
relatedTo:
  - urn:ngm:class:paxos
  - urn:ngm:class:apache-kafka
---

# ZooKeeper

An Apache open-source coordination service for distributed systems that exposes a replicated, hierarchical key-value namespace of 'znodes' with strict ordering guarantees, ephemeral nodes, and watches, over which applications build leader election, distributed locks, configuration management, and group membership; consistency across the ensemble is maintained by the ZAB atomic-broadcast protocol, a Paxos-influenced consensus design.
