---
okf_version: "0.2"
type: Class
title: Local Area Network
resource: urn:ngm:class:local-area-network
domain: infrastructure
description: A local area network (LAN) is a communications network that interconnects devices within a limited geographic area such as a building, campus, or data centre floor, typically under a single administrative domain. LANs provide high-bandwidth, low-latency connectivity enabling resource sharing, collaborative computing, and access to shared infrastructure services. Modern LANs are predominantly imple
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:networking-infrastructure
hasPart:
  - urn:ngm:class:network-switch
  - urn:ngm:class:wireless-access-point
  - urn:ngm:class:network-router
enables:
  - urn:ngm:class:resource-sharing
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:network-attached-storage
contrastsWith:
  - urn:ngm:class:wide-area-network
  - urn:ngm:class:metropolitan-area-network
bridgesTo:
  - urn:ngm:class:wide-area-network
  - urn:ngm:class:internet
uses:
  - urn:ngm:class:ethernet
  - urn:ngm:class:wi-fi
  - urn:ngm:class:tcp-ip
supports:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:high-performance-computing
standardizedBy:
  - urn:ngm:class:ieee-802-x
  - urn:ngm:class:ieee-802-x
partOf:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:wide-area-network
relatedTo:
  - urn:ngm:class:virtual-local-area-network
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:network-security
---

# Local Area Network

A local area network (LAN) is a communications network that interconnects devices within a limited geographic area such as a building, campus, or data centre floor, typically under a single administrative domain. LANs provide high-bandwidth, low-latency connectivity enabling resource sharing, collaborative computing, and access to shared infrastructure services. Modern LANs are predominantly implemented using Ethernet (IEEE 802.3) and Wi-Fi (IEEE 802.11) technologies, with switching and VLAN segmentation providing logical isolation.
