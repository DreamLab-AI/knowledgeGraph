---
okf_version: "0.2"
type: Class
title: Mesh Networking
resource: urn:ngm:class:mesh-networking
domain: infrastructure
description: Mesh networking is a network topology in which nodes connect directly, dynamically, and non-hierarchically, relaying data on behalf of one another to reach destinations. Each node cooperates in routing, so the network can self-organise and self-heal around failed or moved nodes without central infrastructure. Mesh topologies are widely used in wireless sensor networks, smart-home protocols, and re
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-topology
requires:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:resilience
  - urn:ngm:class:asset-tracking
dependsOn:
  - urn:ngm:class:routing-protocol
implements:
  - urn:ngm:class:network-topology
bridgesTo:
  - urn:ngm:class:fault-tolerance
uses:
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:zigbee
  - urn:ngm:class:thread-protocol
supports:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:bluetooth-low-energy
partOf:
  - urn:ngm:class:network-topology
relatedTo:
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:resilience
---

# Mesh Networking

Mesh networking is a network topology in which nodes connect directly, dynamically, and non-hierarchically, relaying data on behalf of one another to reach destinations. Each node cooperates in routing, so the network can self-organise and self-heal around failed or moved nodes without central infrastructure. Mesh topologies are widely used in wireless sensor networks, smart-home protocols, and resilient community networks.
