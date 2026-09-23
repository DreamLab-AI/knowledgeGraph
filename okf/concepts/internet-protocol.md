---
okf_version: "0.2"
type: Class
title: Internet Protocol
resource: urn:ngm:class:internet-protocol
domain: infrastructure
description: The Internet Protocol (IP) is the principal network-layer protocol of the Internet protocol suite, responsible for addressing hosts and routing packets of data from a source to a destination across interconnected networks. It defines a best-effort, connectionless delivery service in which each datagram is forwarded independently using hierarchical addresses. IP provides the universal addressing an
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:ipv6
  - urn:ngm:class:dns
requires:
  - urn:ngm:class:routing-protocol
enables:
  - urn:ngm:class:tcp
  - urn:ngm:class:udp
  - urn:ngm:class:tcp-ip
dependsOn:
  - urn:ngm:class:packet-switching
implements:
  - urn:ngm:class:network-layer
  - urn:ngm:class:packet-switching
uses:
  - urn:ngm:class:osi-model
supports:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:networking
relatedTo:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:communication-protocol
---

# Internet Protocol

The Internet Protocol (IP) is the principal network-layer protocol of the Internet protocol suite, responsible for addressing hosts and routing packets of data from a source to a destination across interconnected networks. It defines a best-effort, connectionless delivery service in which each datagram is forwarded independently using hierarchical addresses. IP provides the universal addressing and packet format on which higher-layer transport and application protocols depend.
