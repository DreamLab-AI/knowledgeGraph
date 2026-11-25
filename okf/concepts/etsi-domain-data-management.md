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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ETSI Domain: Data Management

Domain marker for ETSI metaverse categorisation covering data storage, processing, synchronisation, and lifecycle management for distributed virtual environments.
