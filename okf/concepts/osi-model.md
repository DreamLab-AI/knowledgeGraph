---
okf_version: "0.2"
type: Class
title: OSI Model
resource: urn:ngm:class:osi-model
domain: infrastructure
description: "The OSI (Open Systems Interconnection) Model is a conceptual reference framework developed by ISO that partitions network communication functions into seven hierarchical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer has a well-defined responsibility and communicates with the layer immediately above and below it through standardised interfaces, "
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:network-architecture
hasPart:
  - urn:ngm:class:physical-layer
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:network-layer
  - urn:ngm:class:transport-layer
  - urn:ngm:class:session-layer
  - urn:ngm:class:presentation-layer
  - urn:ngm:class:application-layer
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:architecture
  - urn:ngm:class:architecture
enables:
  - urn:ngm:class:vendor-neutrality
  - urn:ngm:class:protocol-interoperability
  - urn:ngm:class:network-troubleshooting
dependsOn:
  - urn:ngm:class:standardisation
implements:
  - urn:ngm:class:separation-of-concerns
contrastsWith:
  - urn:ngm:class:tcp-ip-model
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:encapsulation
  - urn:ngm:class:protocol-data-unit
standardizedBy:
  - urn:ngm:class:iso
  - urn:ngm:class:iec
partOf:
  - urn:ngm:class:network-architecture
relatedTo:
  - urn:ngm:class:rest-api
  - urn:ngm:class:firewall
  - urn:ngm:class:network-security
  - urn:ngm:class:internet-protocol
---

# OSI Model

The OSI (Open Systems Interconnection) Model is a conceptual reference framework developed by ISO that partitions network communication functions into seven hierarchical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer has a well-defined responsibility and communicates with the layer immediately above and below it through standardised interfaces, enabling interoperability between heterogeneous systems from different vendors. Originally published as ISO/IEC 7498-1 in 1984, the model does not describe a concrete protocol stack but provides a universal vocabulary and design template for networking protocols. It remains the canonical educational and diagnostic framework for understanding where specific protocols, devices, and services operate within a network.
