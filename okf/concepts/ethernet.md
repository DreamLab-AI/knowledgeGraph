---
okf_version: "0.2"
type: Class
title: Ethernet
resource: urn:ngm:class:ethernet
domain: infrastructure
description: Ethernet is a family of wired networking technologies, standardised as IEEE 802.3, used to connect devices in local area networks (LANs) and data centres via twisted-pair, fibre, and coaxial cabling at speeds from 10 Mbit/s to 400 Gbit/s.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:physical-layer
  - urn:ngm:class:data-link-layer
requires:
  - urn:ngm:class:network-switch
enables:
  - urn:ngm:class:local-area-network
  - urn:ngm:class:data-centre-networking
  - urn:ngm:class:internet-of-things
dependsOn:
  - urn:ngm:class:ieee-802-3
implements:
  - urn:ngm:class:ieee-802-3
  - urn:ngm:class:osi-model
contrastsWith:
  - urn:ngm:class:wi-fi
  - urn:ngm:class:infiniband
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:full-duplex-communication
supports:
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:vlan
  - urn:ngm:class:time-sensitive-networking
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:ieee-802-3
partOf:
  - urn:ngm:class:local-area-network
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:bandwidth
---

# Ethernet

Ethernet is a family of wired networking technologies, standardised as IEEE 802.3, used to connect devices in local area networks (LANs) and data centres via twisted-pair, fibre, and coaxial cabling at speeds from 10 Mbit/s to 400 Gbit/s.
