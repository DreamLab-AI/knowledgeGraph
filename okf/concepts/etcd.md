---
okf_version: "0.2"
type: Class
title: Etcd
resource: urn:ngm:class:etcd
domain: infrastructure
description: etcd is a strongly consistent, distributed key-value store used to hold the critical configuration and coordination data of distributed systems. It uses the Raft consensus algorithm to replicate data across a cluster, providing linearisable reads and writes with reliable failover. etcd is best known as the primary datastore for Kubernetes cluster state, and is also used for service discovery, dist
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:kubernetes
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:consensus-algorithm
implements:
  - urn:ngm:class:service-discovery
contrastsWith:
  - urn:ngm:class:zookeeper
uses:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:key-value-store
supports:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:consul
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:service-discovery
---

# Etcd

etcd is a strongly consistent, distributed key-value store used to hold the critical configuration and coordination data of distributed systems. It uses the Raft consensus algorithm to replicate data across a cluster, providing linearisable reads and writes with reliable failover. etcd is best known as the primary datastore for Kubernetes cluster state, and is also used for service discovery, distributed locking, leader election, and configuration management in many cloud-native platforms.
