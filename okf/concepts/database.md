---
okf_version: "0.2"
type: Class
title: Database
resource: urn:ngm:class:database
domain: infrastructure
description: A database is an organised collection of structured data managed by a database management system that supports persistent storage, efficient retrieval, concurrent access and integrity guarantees. Databases expose query interfaces, enforce schemas or schemaless models, and provide transactional or eventual-consistency semantics depending on their design. They form the durable state layer beneath mo
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:sql
  - urn:ngm:class:persistence
  - urn:ngm:class:caching
requires:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-engineering
dependsOn:
  - urn:ngm:class:scalability
  - urn:ngm:class:disaster-recovery
contrastsWith:
  - urn:ngm:class:caching
uses:
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:high-availability
relatedTo:
  - urn:ngm:class:data-quality
  - urn:ngm:class:observability
  - urn:ngm:class:cloud-computing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Database

A database is an organised collection of structured data managed by a database management system that supports persistent storage, efficient retrieval, concurrent access and integrity guarantees. Databases expose query interfaces, enforce schemas or schemaless models, and provide transactional or eventual-consistency semantics depending on their design. They form the durable state layer beneath most data-intensive applications and services.
