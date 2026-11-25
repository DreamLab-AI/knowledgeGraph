---
okf_version: "0.2"
type: Class
title: TCP
resource: urn:ngm:class:tcp
domain: infrastructure
description: "The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of a byte stream between applications over an IP network. It establishes connections via a three-way handshake, segments data, acknowledges receipt, retransmits lost segments, and applies flow and congestion control to share network capacity fairly. "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-transport
requires:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:network-transport
enables:
  - urn:ngm:class:http
  - urn:ngm:class:secure-communication
  - urn:ngm:class:client-server-architecture
implements:
  - urn:ngm:class:reliability
contrastsWith:
  - urn:ngm:class:udp
uses:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:packet-switching
supports:
  - urn:ngm:class:transport-layer-security
partOf:
  - urn:ngm:class:osi-model
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:network-protocol
  - urn:ngm:class:network-layer
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# TCP

The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of a byte stream between applications over an IP network. It establishes connections via a three-way handshake, segments data, acknowledges receipt, retransmits lost segments, and applies flow and congestion control to share network capacity fairly. TCP is one of the core protocols of the Internet protocol suite, underlying most application protocols that demand reliability.
