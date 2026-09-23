---
okf_version: "0.2"
type: Class
title: Network Transport
resource: urn:ngm:class:network-transport
domain: distributed-systems
description: "Network transport is the layer of communication concerned with end-to-end delivery of data between application endpoints across a network. It builds on the underlying packet-routing service to provide services such as connection establishment, multiplexing, reliable or unreliable delivery, ordering, flow control, and congestion control. Transport protocols determine the guarantees and performance "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:transport-layer
hasPart:
  - urn:ngm:class:flow-control
  - urn:ngm:class:congestion-control
requires:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:web-socket
dependsOn:
  - urn:ngm:class:packet-switching
implements:
  - urn:ngm:class:transport-layer
uses:
  - urn:ngm:class:tcp
  - urn:ngm:class:udp
  - urn:ngm:class:quic
supports:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:data-distribution-service
  - urn:ngm:class:message-passing
relatedTo:
  - urn:ngm:class:networking
---

# Network Transport

Network transport is the layer of communication concerned with end-to-end delivery of data between application endpoints across a network. It builds on the underlying packet-routing service to provide services such as connection establishment, multiplexing, reliable or unreliable delivery, ordering, flow control, and congestion control. Transport protocols determine the guarantees and performance characteristics that distributed applications experience.
