---
okf_version: "0.2"
type: Class
title: At Protocol
resource: urn:ngm:class:at-protocol
domain: infrastructure
description: The AT Protocol (Authenticated Transfer Protocol) is an open, federated networking protocol for decentralised social applications, originally developed for Bluesky, that combines portable accounts, signed data repositories, and account migration with a separation between data hosting and algorithmic curation. It uses decentralised identifiers and content-addressed records so users own their identi
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:open-standards
hasPart:
  - urn:ngm:class:content-addressing
requires:
  - urn:ngm:class:did
  - urn:ngm:class:content-addressing
  - urn:ngm:class:did
enables:
  - urn:ngm:class:federation
  - urn:ngm:class:decentralised-identity
dependsOn:
  - urn:ngm:class:did
  - urn:ngm:class:did
implements:
  - urn:ngm:class:protocol
  - urn:ngm:class:open-standards
contrastsWith:
  - urn:ngm:class:activity-pub
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:did
  - urn:ngm:class:content-addressing
  - urn:ngm:class:did
supports:
  - urn:ngm:class:federation
partOf:
  - urn:ngm:class:open-standards
relatedTo:
  - urn:ngm:class:cross-platform-identity
  - urn:ngm:class:activity-pub
---

# At Protocol

The AT Protocol (Authenticated Transfer Protocol) is an open, federated networking protocol for decentralised social applications, originally developed for Bluesky, that combines portable accounts, signed data repositories, and account migration with a separation between data hosting and algorithmic curation. It uses decentralised identifiers and content-addressed records so users own their identity and data independently of any single provider. The protocol aims to deliver large-scale interoperable social networking with user choice over feeds and moderation.
