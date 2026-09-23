---
okf_version: "0.2"
type: Class
title: Routing Table
resource: urn:ngm:class:routing-table
domain: blockchain
description: A routing table is a data structure, held in a router, switch or networked host, that stores the mappings between destination network addresses and the next hop or outgoing interface used to forward packets toward them. Each entry typically records a destination prefix, a next-hop address, an interface, and a metric or administrative cost used to select among competing routes. Routing tables are p
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-structure
hasPart:
  - urn:ngm:class:ip-address
requires:
  - urn:ngm:class:routing-protocol
enables:
  - urn:ngm:class:peer-to-peer-network
dependsOn:
  - urn:ngm:class:network-protocol
implements:
  - urn:ngm:class:routing-protocol
contrastsWith:
  - urn:ngm:class:peer-to-peer-network
bridgesTo:
  - urn:ngm:class:payment-routing
uses:
  - urn:ngm:class:routing-protocol
supports:
  - urn:ngm:class:distributed-systems
standardizedBy:
  - urn:ngm:class:network-protocol
partOf:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:kademlia-dht
  - urn:ngm:class:distributed-hash-table
---

# Routing Table

A routing table is a data structure, held in a router, switch or networked host, that stores the mappings between destination network addresses and the next hop or outgoing interface used to forward packets toward them. Each entry typically records a destination prefix, a next-hop address, an interface, and a metric or administrative cost used to select among competing routes. Routing tables are populated by static configuration and by dynamic routing protocols, and are consulted on every forwarding decision.
