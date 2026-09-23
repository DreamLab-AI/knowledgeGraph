---
okf_version: "0.2"
type: Class
title: Overlay Network
resource: urn:ngm:class:overlay-network
domain: infrastructure
description: An overlay network is a logical network built on top of an existing physical or underlay network, where nodes are connected by virtual links that may each traverse many underlying hops. By abstracting away the physical topology, overlays implement custom routing, addressing and services such as peer-to-peer file sharing, content delivery and encrypted tunnelling. They trade some efficiency for fle
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:networking-infrastructure
enables:
  - urn:ngm:class:encryption
dependsOn:
  - urn:ngm:class:application-layer
implements:
  - urn:ngm:class:virtual-network
contrastsWith:
  - urn:ngm:class:network-protocol
uses:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:cdn
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-systems
---

# Overlay Network

An overlay network is a logical network built on top of an existing physical or underlay network, where nodes are connected by virtual links that may each traverse many underlying hops. By abstracting away the physical topology, overlays implement custom routing, addressing and services such as peer-to-peer file sharing, content delivery and encrypted tunnelling. They trade some efficiency for flexibility, resilience and the ability to deploy new network behaviour without changing the underlay.
