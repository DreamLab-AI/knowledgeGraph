---
okf_version: "0.2"
type: Class
title: Network Communication
resource: urn:ngm:class:network-communication
domain: infrastructure
description: Network Communication is the transmission of data between computing nodes via shared or dedicated media, governed by layered protocol stacks that abstract physical signal propagation into reliable, addressable data exchange. It encompasses all paradigms of machine-to-machine data transfer including wired, wireless, and optical mediums organised according to reference models such as the OSI seven-l
maturity: mature
quality: 0.85
is-a:
  - urn:ngm:class:communication-network
hasPart:
  - urn:ngm:class:protocol-stack
  - urn:ngm:class:network-layer
  - urn:ngm:class:transport-layer
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:physical-layer
requires:
  - urn:ngm:class:ip-addressing
  - urn:ngm:class:routing-protocol
enables:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:cloud-computing
dependsOn:
  - urn:ngm:class:network-infrastructure
implements:
  - urn:ngm:class:osi-model
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:decentralised-network
uses:
  - urn:ngm:class:packet-switching
  - urn:ngm:class:tls-encryption
supports:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:network-security
standardizedBy:
  - urn:ngm:class:ieee-standards
  - urn:ngm:class:ietf-rfc
relatedTo:
  - urn:ngm:class:network-architecture
  - urn:ngm:class:network-protocol
  - urn:ngm:class:latency
---

# Network Communication

Network Communication is the transmission of data between computing nodes via shared or dedicated media, governed by layered protocol stacks that abstract physical signal propagation into reliable, addressable data exchange. It encompasses all paradigms of machine-to-machine data transfer including wired, wireless, and optical mediums organised according to reference models such as the OSI seven-layer model and TCP/IP suite.
