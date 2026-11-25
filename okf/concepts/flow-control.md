---
okf_version: "0.2"
type: Class
title: Flow Control
resource: urn:ngm:class:flow-control
domain: infrastructure
description: Flow control is the mechanism by which a data communication protocol prevents a fast sender from overwhelming a slower receiver. It regulates the rate or volume of data in transit using techniques such as sliding windows, credit schemes and backpressure, so that the receiver's buffers are not exceeded. Distinct from congestion control, which protects the shared network, flow control is an end-to-e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:reliability
enables:
  - urn:ngm:class:network-transport
  - urn:ngm:class:reliability
contrastsWith:
  - urn:ngm:class:congestion-control
uses:
  - urn:ngm:class:communication-protocols
  - urn:ngm:class:rate-limiting
supports:
  - urn:ngm:class:quic
  - urn:ngm:class:reliability
partOf:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:network-transport
relatedTo:
  - urn:ngm:class:concurrency
  - urn:ngm:class:congestion-control
  - urn:ngm:class:network-protocol
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Flow Control

Flow control is the mechanism by which a data communication protocol prevents a fast sender from overwhelming a slower receiver. It regulates the rate or volume of data in transit using techniques such as sliding windows, credit schemes and backpressure, so that the receiver's buffers are not exceeded. Distinct from congestion control, which protects the shared network, flow control is an end-to-end concern that protects the individual receiving endpoint.
