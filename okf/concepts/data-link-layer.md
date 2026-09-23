---
okf_version: "0.2"
type: Class
title: Data Link Layer
resource: urn:ngm:class:data-link-layer
domain: infrastructure
description: The data link layer is the second layer of the OSI model, responsible for node-to-node data transfer across a single physical link and for framing raw bits from the physical layer into structured frames. It provides addressing through hardware (MAC) addresses, error detection, and media access control that arbitrates shared transmission media. By presenting a reliable link to the network layer abo
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:osi-model
hasPart:
  - urn:ngm:class:ethernet
requires:
  - urn:ngm:class:physical-layer
enables:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:ethernet
contrastsWith:
  - urn:ngm:class:network-layer
supports:
  - urn:ngm:class:network-layer
  - urn:ngm:class:infrastructure
partOf:
  - urn:ngm:class:osi-model
relatedTo:
  - urn:ngm:class:network-layer
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:network-protocol
---

# Data Link Layer

The data link layer is the second layer of the OSI model, responsible for node-to-node data transfer across a single physical link and for framing raw bits from the physical layer into structured frames. It provides addressing through hardware (MAC) addresses, error detection, and media access control that arbitrates shared transmission media. By presenting a reliable link to the network layer above, it abstracts away the imperfections of the underlying physical medium.
