---
okf_version: "0.2"
type: Class
title: Full Duplex Communication
resource: urn:ngm:class:full-duplex-communication
domain: infrastructure
description: Full-duplex communication is a mode of data exchange in which both endpoints can transmit and receive simultaneously over a single connection. It contrasts with half-duplex, where only one side may send at a time. Full-duplex channels enable low-latency, bidirectional interaction and are central to technologies such as web sockets and real-time messaging.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:communication-protocol
requires:
  - urn:ngm:class:transmission-control-protocol
enables:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:low-latency
dependsOn:
  - urn:ngm:class:network-protocol
implements:
  - urn:ngm:class:bidirectional-communication
contrastsWith:
  - urn:ngm:class:http
bridgesTo:
  - urn:ngm:class:real-time-communication
uses:
  - urn:ngm:class:transmission-control-protocol
supports:
  - urn:ngm:class:real-time-communication
partOf:
  - urn:ngm:class:communication-protocol
relatedTo:
  - urn:ngm:class:bidirectional-communication
  - urn:ngm:class:network-protocol
---

# Full Duplex Communication

Full-duplex communication is a mode of data exchange in which both endpoints can transmit and receive simultaneously over a single connection. It contrasts with half-duplex, where only one side may send at a time. Full-duplex channels enable low-latency, bidirectional interaction and are central to technologies such as web sockets and real-time messaging.
