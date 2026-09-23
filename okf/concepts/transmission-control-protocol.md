---
okf_version: "0.2"
type: Class
title: Transmission Control Protocol
resource: urn:ngm:class:transmission-control-protocol
domain: infrastructure
description: The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of byte streams between applications over an IP network. It establishes connections through a handshake and uses acknowledgements, retransmission, and flow and congestion control to ensure data arrives intact. TCP is the dominant reliable transport u
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:transport-layer
requires:
  - urn:ngm:class:internet-protocol
enables:
  - urn:ngm:class:http
dependsOn:
  - urn:ngm:class:internet-protocol
implements:
  - urn:ngm:class:reliable-data-transfer
contrastsWith:
  - urn:ngm:class:network-protocol
bridgesTo:
  - urn:ngm:class:osi-model
uses:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:flow-control
supports:
  - urn:ngm:class:application-layer
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:transport-layer
relatedTo:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:packet-switching
---

# Transmission Control Protocol

The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of byte streams between applications over an IP network. It establishes connections through a handshake and uses acknowledgements, retransmission, and flow and congestion control to ensure data arrives intact. TCP is the dominant reliable transport underlying most internet applications.
