---
okf_version: "0.2"
type: Class
title: Decentralised Network
resource: urn:ngm:class:decentralised-network
domain: infrastructure
description: A Decentralised Network is a network architecture in which control, data and decision-making are distributed across many independent nodes rather than concentrated in a central authority or server. Nodes communicate peer-to-peer, share responsibility for routing, storage and consensus, and the network continues to operate even when individual nodes fail or leave. This topology improves resilience,
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:decentralization
dependsOn:
  - urn:ngm:class:node
contrastsWith:
  - urn:ngm:class:federation
bridgesTo:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:blockchain-network
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:overlay-network
supports:
  - urn:ngm:class:resilience
  - urn:ngm:class:distributed-ledger
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:federation
  - urn:ngm:class:ipfs
---

# Decentralised Network

A Decentralised Network is a network architecture in which control, data and decision-making are distributed across many independent nodes rather than concentrated in a central authority or server. Nodes communicate peer-to-peer, share responsibility for routing, storage and consensus, and the network continues to operate even when individual nodes fail or leave. This topology improves resilience, censorship resistance and fault tolerance at the cost of greater coordination complexity.
