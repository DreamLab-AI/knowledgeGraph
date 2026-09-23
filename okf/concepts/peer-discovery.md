---
okf_version: "0.2"
type: Class
title: Peer Discovery
resource: urn:ngm:class:peer-discovery
domain: blockchain
description: Protocol mechanism by which blockchain nodes locate and connect to other network participants without central coordination, using bootstrap nodes, DNS seeds, gossip-based address propagation, and distributed hash table lookups to establish and maintain a resilient peer-to-peer overlay network.
maturity: established
quality: 0.68
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:network-resilience
  - urn:ngm:class:decentralization
dependsOn:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:network-topology
implements:
  - urn:ngm:class:overlay-network
contrastsWith:
  - urn:ngm:class:client-server-architecture
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:bootstrap-node
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:kademlia-dht
supports:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:consensus-protocol
relatedTo:
  - urn:ngm:class:network-topology
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:nat-traversal
---

# Peer Discovery

Protocol mechanism by which blockchain nodes locate and connect to other network participants without central coordination, using bootstrap nodes, DNS seeds, gossip-based address propagation, and distributed hash table lookups to establish and maintain a resilient peer-to-peer overlay network.
