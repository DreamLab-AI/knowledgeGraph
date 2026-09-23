---
okf_version: "0.2"
type: Class
title: Data Storage Layer
resource: urn:ngm:class:data-storage-layer
domain: infrastructure
description: Software layer managing persistent storage, retrieval, and lifecycle of digital assets, metadata, world state, user data, and transactional records in metaverse systems.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:data-layer
hasPart:
  - urn:ngm:class:cache-layer
  - urn:ngm:class:object-storage
  - urn:ngm:class:database-system
  - urn:ngm:class:object-storage
  - urn:ngm:class:blockchain-storage
  - urn:ngm:class:cdn-storage
requires:
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:storage-hardware
  - urn:ngm:class:backup-and-recovery
enables:
  - urn:ngm:class:content-distribution
  - urn:ngm:class:state-management
  - urn:ngm:class:data-analytics
  - urn:ngm:class:asset-persistence
  - urn:ngm:class:user-profile-storage
  - urn:ngm:class:state-management
dependsOn:
  - urn:ngm:class:replication
  - urn:ngm:class:on-chain-data-indexing
  - urn:ngm:class:encryption-service
bridgesTo:
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:metaverse-stack
---

# Data Storage Layer

Software layer managing persistent storage, retrieval, and lifecycle of digital assets, metadata, world state, user data, and transactional records in metaverse systems.
