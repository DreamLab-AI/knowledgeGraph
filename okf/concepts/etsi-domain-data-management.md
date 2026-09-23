---
okf_version: "0.2"
type: Class
title: "ETSI Domain: Data Management"
resource: urn:ngm:class:etsi-domain-data-management
domain: infrastructure
description: Domain marker for ETSI metaverse categorisation covering data storage, processing, synchronisation, and lifecycle management for distributed virtual environments.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:data-lifecycle
  - urn:ngm:class:data-synchronization
  - urn:ngm:class:data-processing
  - urn:ngm:class:data-storage
requires:
  - urn:ngm:class:database-system
  - urn:ngm:class:replication
  - urn:ngm:class:database-systems
  - urn:ngm:class:caching-infrastructure
  - urn:ngm:class:replication
enables:
  - urn:ngm:class:data-analytics
  - urn:ngm:class:state-persistence
  - urn:ngm:class:cross-platform-synchronization
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:consistency-protocols
bridgesTo:
  - urn:ngm:class:autonomous-robot
partOf:
  - urn:ngm:class:etsi-metaverse-domain-taxonomy
---

# ETSI Domain: Data Management

Domain marker for ETSI metaverse categorisation covering data storage, processing, synchronisation, and lifecycle management for distributed virtual environments.
