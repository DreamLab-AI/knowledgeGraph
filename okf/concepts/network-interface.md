---
okf_version: "0.2"
type: Class
title: Network Interface
resource: urn:ngm:class:network-interface
domain: infrastructure
description: A network interface is the hardware or software point at which a computing device connects to a network, mediating the transmission and reception of data frames. In hardware it is realised as a network interface controller bearing a unique MAC address; in software it appears as a named, addressable endpoint that the operating system binds to a protocol stack. The interface bridges the physical and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:hardware-component
hasPart:
  - urn:ngm:class:network-layer
requires:
  - urn:ngm:class:operating-system
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:packet-switching
dependsOn:
  - urn:ngm:class:operating-system
implements:
  - urn:ngm:class:osi-model
bridgesTo:
  - urn:ngm:class:network-layer
uses:
  - urn:ngm:class:ethernet
  - urn:ngm:class:tcp
supports:
  - urn:ngm:class:network-protocol
partOf:
  - urn:ngm:class:hardware-component
relatedTo:
  - urn:ngm:class:osi-model
  - urn:ngm:class:ethernet
  - urn:ngm:class:packet-switching
---

# Network Interface

A network interface is the hardware or software point at which a computing device connects to a network, mediating the transmission and reception of data frames. In hardware it is realised as a network interface controller bearing a unique MAC address; in software it appears as a named, addressable endpoint that the operating system binds to a protocol stack. The interface bridges the physical and data-link layers to the network layer, allowing higher-level protocols to send and receive packets without managing the underlying medium.
