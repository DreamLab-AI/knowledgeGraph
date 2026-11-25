---
okf_version: "0.2"
type: Class
title: Semantic Metadata Registry
resource: urn:ngm:class:semantic-metadata-registry
domain: infrastructure
description: A centralized catalog managing structured metadata schemas, controlled vocabularies, and semantic relationships to enable consistent asset description, cross-platform interoperability, and intelligent discovery.
maturity: draft
quality: 0.35
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:metadata-registry
hasPart:
  - urn:ngm:class:metadata-schema
  - urn:ngm:class:namespace-management
  - urn:ngm:class:schema-versioning
  - urn:ngm:class:term-definitions
  - urn:ngm:class:controlled-vocabularies
  - urn:ngm:class:metadata-schemas
  - urn:ngm:class:relationship-mappings
requires:
  - urn:ngm:class:rdf-store
  - urn:ngm:class:validator
  - urn:ngm:class:vocabulary-services
  - urn:ngm:class:validator
enables:
  - urn:ngm:class:asset-registry
  - urn:ngm:class:cross-platform-interoperability
  - urn:ngm:class:data-integration
  - urn:ngm:class:semantic-search
  - urn:ngm:class:asset-registry
dependsOn:
  - urn:ngm:class:ontology-repository
  - urn:ngm:class:linked-data-platform
  - urn:ngm:class:semantic-reasoning-engine
partOf:
  - urn:ngm:class:metadata-management
  - urn:ngm:class:metadata-management
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Semantic Metadata Registry

A centralized catalog managing structured metadata schemas, controlled vocabularies, and semantic relationships to enable consistent asset description, cross-platform interoperability, and intelligent discovery.
