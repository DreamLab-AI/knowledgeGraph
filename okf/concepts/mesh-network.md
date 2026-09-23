---
okf_version: "0.2"
type: Class
title: Mesh Network
resource: urn:ngm:class:mesh-network
domain: infrastructure
description: "A mesh network is a network topology in which each node relays data for the network, cooperating to distribute information so that traffic can take multiple paths between source and destination. Mesh networks self-organise and self-heal: when a link or node fails, traffic is rerouted around the fault without manual reconfiguration. They are widely used in wireless sensor networks, smart-home proto"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-topology
hasPart:
  - urn:ngm:class:routing-protocol
enables:
  - urn:ngm:class:smart-home
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:sensor-networks
  - urn:ngm:class:sensor-networks
dependsOn:
  - urn:ngm:class:wireless-network
implements:
  - urn:ngm:class:fault-tolerance
uses:
  - urn:ngm:class:routing-protocol
supports:
  - urn:ngm:class:io-t
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:network-topology
relatedTo:
  - urn:ngm:class:zigbee
  - urn:ngm:class:thread-protocol
  - urn:ngm:class:bluetooth-low-energy
---

# Mesh Network

A mesh network is a network topology in which each node relays data for the network, cooperating to distribute information so that traffic can take multiple paths between source and destination. Mesh networks self-organise and self-heal: when a link or node fails, traffic is rerouted around the fault without manual reconfiguration. They are widely used in wireless sensor networks, smart-home protocols, and community and industrial deployments where infrastructure-free, resilient connectivity is required.
