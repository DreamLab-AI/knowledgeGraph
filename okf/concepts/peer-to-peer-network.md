---
okf_version: "0.2"
type: Class
title: Peer-to-Peer Network
resource: urn:ngm:class:peer-to-peer-network
domain: distributed-systems
description: A decentralised communication architecture in which participating nodes connect directly to one another without a central coordinator, enabling distributed ledger technology to broadcast transactions, propagate blocks, and maintain a shared state across an open membership set. It underlies the censorship resistance and fault tolerance of blockchain systems.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:mempool
  - urn:ngm:class:transaction-pool
  - urn:ngm:class:bootstrap-node
  - urn:ngm:class:archival-node
  - urn:ngm:class:full-node
  - urn:ngm:class:kademlia-dht
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:node
  - urn:ngm:class:tcp-ip
enables:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:fault-tolerance
implements:
  - urn:ngm:class:libp2p
  - urn:ngm:class:bittorrent-protocol
contrastsWith:
  - urn:ngm:class:client-server-architecture
bridgesTo:
  - urn:ngm:class:cdn
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:nat-traversal
  - urn:ngm:class:kademlia-dht
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:distributed-ledger-technology
---

# Peer-to-Peer Network

A decentralised communication architecture in which participating nodes connect directly to one another without a central coordinator, enabling distributed ledger technology to broadcast transactions, propagate blocks, and maintain a shared state across an open membership set. It underlies the censorship resistance and fault tolerance of blockchain systems.
