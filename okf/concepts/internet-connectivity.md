---
okf_version: "0.2"
type: Class
title: Internet Connectivity
resource: urn:ngm:class:internet-connectivity
domain: infrastructure
description: Internet connectivity is the capability of a device or network to exchange data with the global Internet, established through physical or wireless access links and the protocol stack that routes packets between endpoints. It depends on addressing, name resolution, and routing infrastructure provided by access and transit providers. Connectivity is characterised by attributes such as bandwidth, lat
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-connectivity
hasPart:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:latency
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:tcp-ip
enables:
  - urn:ngm:class:edge-computing
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:dns
implements:
  - urn:ngm:class:network-protocol
bridgesTo:
  - urn:ngm:class:network-infrastructure
uses:
  - urn:ngm:class:tcp-ip
supports:
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:latency
  - urn:ngm:class:dns
---

# Internet Connectivity

Internet connectivity is the capability of a device or network to exchange data with the global Internet, established through physical or wireless access links and the protocol stack that routes packets between endpoints. It depends on addressing, name resolution, and routing infrastructure provided by access and transit providers. Connectivity is characterised by attributes such as bandwidth, latency, reliability, and reachability, all of which shape the performance of applications that rely on it.
