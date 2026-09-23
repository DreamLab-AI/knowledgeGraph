---
okf_version: "0.2"
type: Class
title: Thread Protocol
resource: urn:ngm:class:thread-protocol
domain: infrastructure
description: Thread is an IPv6-based, low-power wireless mesh networking protocol designed for IoT devices in home and commercial environments, using IEEE 802.15.4 as its radio layer and providing self-healing, self-configuring mesh topology with native IP routing, secure device commissioning, and no single point of failure. Thread is managed by the Thread Group and forms the network and transport foundation f
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ieee-802-15-4
hasPart:
  - urn:ngm:class:openthread
requires:
  - urn:ngm:class:ieee-802-15-4
  - urn:ngm:class:6lowpan
  - urn:ngm:class:ipv6
enables:
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:smart-home-automation
  - urn:ngm:class:industrial-io-t
dependsOn:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:dtls
implements:
  - urn:ngm:class:mesh-networking
contrastsWith:
  - urn:ngm:class:zigbee
  - urn:ngm:class:z-wave
  - urn:ngm:class:bluetooth-mesh
bridgesTo:
  - urn:ngm:class:local-area-network
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:network-layer
  - urn:ngm:class:co-ap
  - urn:ngm:class:udp
supports:
  - urn:ngm:class:low-power-device
  - urn:ngm:class:device-commissioning
standardizedBy:
  - urn:ngm:class:thread-group
relatedTo:
  - urn:ngm:class:mesh-routing-software
  - urn:ngm:class:wireless-radio
  - urn:ngm:class:home-area-network
  - urn:ngm:class:building-automation
---

# Thread Protocol

Thread is an IPv6-based, low-power wireless mesh networking protocol designed for IoT devices in home and commercial environments, using IEEE 802.15.4 as its radio layer and providing self-healing, self-configuring mesh topology with native IP routing, secure device commissioning, and no single point of failure. Thread is managed by the Thread Group and forms the network and transport foundation for the Matter smart-home application protocol.
