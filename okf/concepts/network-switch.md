---
okf_version: "0.2"
type: Class
title: Network Switch
resource: urn:ngm:class:network-switch
domain: infrastructure
description: A network switch is a hardware device that connects devices within a local area network and forwards data frames between them based on MAC addresses at the data link layer. By learning which addresses sit on which ports, it forwards traffic only to its destination, improving efficiency over shared media. Switches are foundational building blocks of wired networks in offices, campuses and data cent
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:networking-infrastructure
hasPart:
  - urn:ngm:class:network-interface-card
  - urn:ngm:class:packet-switching
requires:
  - urn:ngm:class:ethernet
  - urn:ngm:class:network-interface
enables:
  - urn:ngm:class:time-sensitive-networking
dependsOn:
  - urn:ngm:class:networking-standard
uses:
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:network-topology
  - urn:ngm:class:low-latency-networking
partOf:
  - urn:ngm:class:networking-infrastructure
  - urn:ngm:class:data-centre
relatedTo:
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:networking-technology
---

# Network Switch

A network switch is a hardware device that connects devices within a local area network and forwards data frames between them based on MAC addresses at the data link layer. By learning which addresses sit on which ports, it forwards traffic only to its destination, improving efficiency over shared media. Switches are foundational building blocks of wired networks in offices, campuses and data centres.
