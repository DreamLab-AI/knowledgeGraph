---
okf_version: "0.2"
type: Class
title: Cellular Network
resource: urn:ngm:class:cellular-network
domain: infrastructure
description: A cellular network is a wireless communication system in which a geographic area is divided into cells, each served by a base station, enabling mobile devices to connect and maintain service while moving. Frequency reuse across cells and handover between base stations allow large numbers of users to share limited radio spectrum. Successive generations such as 4G LTE and 5G have progressively incre
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:telecommunications-infrastructure
hasPart:
  - urn:ngm:class:radio-transceiver
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:radio-access-network
  - urn:ngm:class:wireless-communication
enables:
  - urn:ngm:class:internet-of-things
contrastsWith:
  - urn:ngm:class:wireless-connectivity
  - urn:ngm:class:mesh-networking
uses:
  - urn:ngm:class:wireless-radio
  - urn:ngm:class:network-transport
supports:
  - urn:ngm:class:mobile-device
  - urn:ngm:class:low-latency-networking
partOf:
  - urn:ngm:class:telecommunications-infrastructure
  - urn:ngm:class:telecommunications
relatedTo:
  - urn:ngm:class:networking-infrastructure
---

# Cellular Network

A cellular network is a wireless communication system in which a geographic area is divided into cells, each served by a base station, enabling mobile devices to connect and maintain service while moving. Frequency reuse across cells and handover between base stations allow large numbers of users to share limited radio spectrum. Successive generations such as 4G LTE and 5G have progressively increased capacity, throughput and latency performance.
