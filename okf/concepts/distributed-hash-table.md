---
okf_version: "0.2"
type: Class
title: Distributed Hash Table
resource: urn:ngm:class:distributed-hash-table
domain: distributed-systems
description: A distributed hash table (DHT) is a decentralised data structure that partitions a key-value store across a set of participating nodes so that each node is responsible for only a fraction of the total keyspace, with lookups routed through a structured overlay network in O(log n) hops without any central coordinator. Nodes join and leave dynamically, and the system rebalances key responsibility thr
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:distributed-system
hasPart:
  - urn:ngm:class:routing-table
  - urn:ngm:class:node-identifier
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:consistent-hashing
  - urn:ngm:class:node
enables:
  - urn:ngm:class:ipfs
  - urn:ngm:class:content-addressing
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:censorship-resistant-communication
dependsOn:
  - urn:ngm:class:structured-overlay-network
  - urn:ngm:class:bootstrap-protocol
implements:
  - urn:ngm:class:kademlia-dht
  - urn:ngm:class:chord-protocol
contrastsWith:
  - urn:ngm:class:centralised-index
  - urn:ngm:class:unstructured-overlay-network
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-identifier
uses:
  - urn:ngm:class:libp2p
  - urn:ngm:class:xor-metric
  - urn:ngm:class:k-bucket
supports:
  - urn:ngm:class:bittorrent
  - urn:ngm:class:ethereum
  - urn:ngm:class:filecoin
partOf:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:overlay-network
relatedTo:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:replication
---

# Distributed Hash Table

A distributed hash table (DHT) is a decentralised data structure that partitions a key-value store across a set of participating nodes so that each node is responsible for only a fraction of the total keyspace, with lookups routed through a structured overlay network in O(log n) hops without any central coordinator. Nodes join and leave dynamically, and the system rebalances key responsibility through consistent hashing or an XOR-metric routing algorithm, tolerating high churn without degrading availability. DHTs form the foundational lookup and routing primitive of peer-to-peer networks, underpinning decentralised content addressing, peer discovery, and distributed storage at global scale.
