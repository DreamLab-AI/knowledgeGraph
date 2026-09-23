---
okf_version: "0.2"
type: Class
title: Packet Switching
resource: urn:ngm:class:packet-switching
domain: infrastructure
description: Packet switching is a method of data transmission in which messages are divided into discrete packets that are routed independently across a shared network and reassembled at the destination. Each packet carries addressing information allowing intermediate nodes to forward it along varying paths, making efficient use of shared links. It is the foundational technique of the internet, contrasting wi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-communication
hasPart:
  - urn:ngm:class:routing-protocol
requires:
  - urn:ngm:class:routing-protocol
enables:
  - urn:ngm:class:quality-of-service
dependsOn:
  - urn:ngm:class:network-layer
  - urn:ngm:class:bandwidth
uses:
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:network-protocol
  - urn:ngm:class:internet-protocol
supports:
  - urn:ngm:class:congestion-control
partOf:
  - urn:ngm:class:network-communication
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:network-communication
---

# Packet Switching

Packet switching is a method of data transmission in which messages are divided into discrete packets that are routed independently across a shared network and reassembled at the destination. Each packet carries addressing information allowing intermediate nodes to forward it along varying paths, making efficient use of shared links. It is the foundational technique of the internet, contrasting with circuit switching that dedicates a fixed path for a session.
