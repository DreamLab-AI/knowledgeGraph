---
okf_version: "0.2"
type: Class
title: Storage Layer
resource: urn:ngm:class:storage-layer
domain: infrastructure
description: Hardware and software infrastructure responsible for persistent retention, retrieval, and management of data and digital assets across distributed systems.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:technology-infrastructure-domain-layer
hasPart:
  - urn:ngm:class:block-storage
  - urn:ngm:class:cache-layer
  - urn:ngm:class:object-storage
  - urn:ngm:class:database-system
requires:
  - urn:ngm:class:file-system
  - urn:ngm:class:network-connectivity
  - urn:ngm:class:storage-hardware
enables:
  - urn:ngm:class:content-delivery
  - urn:ngm:class:data-persistence
  - urn:ngm:class:asset-management
dependsOn:
  - urn:ngm:class:data-management
  - urn:ngm:class:replication-protocol
partOf:
  - urn:ngm:class:technology-infrastructure-domain-layer
---

# Storage Layer

Hardware and software infrastructure responsible for persistent retention, retrieval, and management of data and digital assets across distributed systems.
