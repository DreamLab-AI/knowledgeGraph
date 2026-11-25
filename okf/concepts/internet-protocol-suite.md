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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Internet Protocol Suite

The Internet Protocol Suite (commonly TCP/IP) is the layered set of communication protocols used to interconnect network devices, defining how data is addressed, routed, fragmented and delivered across heterogeneous networks including the public Internet. It is organised into layers -- link, internet, transport and application -- each providing services to the layer above, with the network layer providing addressing and routing and transport protocols such as TCP, UDP and QUIC providing end-to-end delivery guarantees. Its layered, protocol-agnostic design is what allows the Internet to span vastly different physical networks under one addressing scheme.
