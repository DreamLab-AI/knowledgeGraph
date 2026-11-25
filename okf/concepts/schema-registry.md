---
okf_version: "0.2"
type: Class
title: Schema Registry
resource: urn:ngm:class:schema-registry
domain: infrastructure
description: A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and controlled evolution of data formats across distributed microservices and event-driven architectures.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:sc-standards-and-interop
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:schema-versioning
requires:
  - urn:ngm:class:serialisation-format
  - urn:ngm:class:api-contract
enables:
  - urn:ngm:class:schema-evolution
  - urn:ngm:class:data-pipeline
dependsOn:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:rest-api
implements:
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:json-data-interchange-format-schema
contrastsWith:
  - urn:ngm:class:document-store
bridgesTo:
  - urn:ngm:class:data-management
  - urn:ngm:class:api-gateway
uses:
  - urn:ngm:class:message-broker
supports:
  - urn:ngm:class:backward-compatibility
  - urn:ngm:class:microservices
standardizedBy:
  - urn:ngm:class:apache-kafka
partOf:
  - urn:ngm:class:event-streaming
relatedTo:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:data-governance
  - urn:ngm:class:etl-pipeline
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Schema Registry

A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and controlled evolution of data formats across distributed microservices and event-driven architectures.
