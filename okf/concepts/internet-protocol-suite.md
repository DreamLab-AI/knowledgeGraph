---
okf_version: "0.2"
type: Class
title: Internet Protocol Suite
resource: urn:ngm:class:internet-protocol-suite
domain: infrastructure
description: The Internet Protocol Suite (commonly TCP/IP) is the layered set of communication protocols used to interconnect network devices, defining how data is addressed, routed, fragmented and delivered across heterogeneous networks including the public Internet. It is organised into layers -- link, internet, transport and application -- each providing services to the layer above, with the network layer p
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:network-layer
  - urn:ngm:class:quic
---

# Internet Protocol Suite

The Internet Protocol Suite (commonly TCP/IP) is the layered set of communication protocols used to interconnect network devices, defining how data is addressed, routed, fragmented and delivered across heterogeneous networks including the public Internet. It is organised into layers -- link, internet, transport and application -- each providing services to the layer above, with the network layer providing addressing and routing and transport protocols such as TCP, UDP and QUIC providing end-to-end delivery guarantees. Its layered, protocol-agnostic design is what allows the Internet to span vastly different physical networks under one addressing scheme.
