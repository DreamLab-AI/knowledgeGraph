---
okf_version: "0.2"
type: Class
title: TCP/IP
resource: urn:ngm:class:tcp-ip
domain: infrastructure
description: "TCP/IP is the layered suite of communication protocols that underpins the Internet, named after its two core members: the Transmission Control Protocol and the Internet Protocol. It organises networking into link, internet, transport, and application layers, providing addressing, routing, and reliable end-to-end byte streams over heterogeneous physical networks. Its packet-switched, best-effort de"
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:network-layer
  - urn:ngm:class:application-layer
requires:
  - urn:ngm:class:bandwidth
dependsOn:
  - urn:ngm:class:network-layer
implements:
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:osi-model
uses:
  - urn:ngm:class:application-layer
supports:
  - urn:ngm:class:http
  - urn:ngm:class:dns
  - urn:ngm:class:rest-api
partOf:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:edge-computing
---

# TCP/IP

TCP/IP is the layered suite of communication protocols that underpins the Internet, named after its two core members: the Transmission Control Protocol and the Internet Protocol. It organises networking into link, internet, transport, and application layers, providing addressing, routing, and reliable end-to-end byte streams over heterogeneous physical networks. Its packet-switched, best-effort design with end-to-end reliability above the network layer enabled global interoperability.
