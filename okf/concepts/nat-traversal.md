---
okf_version: "0.2"
type: Class
title: NAT Traversal
resource: urn:ngm:class:nat-traversal
domain: blockchain
description: NAT traversal is the set of techniques that let two devices behind Network Address Translation establish a direct connection despite the address rewriting and connection-tracking that NAT imposes. Methods such as hole punching, relaying and the coordination protocols STUN, TURN and ICE allow peers to discover routable endpoints and open paths through restrictive routers. NAT traversal is essential
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:peer-to-peer-network
requires:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:real-time-communication
dependsOn:
  - urn:ngm:class:node
uses:
  - urn:ngm:class:overlay-network
  - urn:ngm:class:gossip-protocol
supports:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:decentralization
  - urn:ngm:class:decentralisation
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:full-node
  - urn:ngm:class:network-protocol
  - urn:ngm:class:blockchain
---

# NAT Traversal

NAT traversal is the set of techniques that let two devices behind Network Address Translation establish a direct connection despite the address rewriting and connection-tracking that NAT imposes. Methods such as hole punching, relaying and the coordination protocols STUN, TURN and ICE allow peers to discover routable endpoints and open paths through restrictive routers. NAT traversal is essential to peer-to-peer and decentralised networks where nodes behind home or corporate routers must reach one another without a central server.
