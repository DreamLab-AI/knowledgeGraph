---
okf_version: "0.2"
type: Class
title: Linked Data Encoder
resource: urn:ngm:class:linked-data-encoder
domain: infrastructure
description: A semantic encoding pipeline that transforms agent state, credentials, events, and metadata into JSON-LD 1.1 format using pinned, versioned JSON-LD Context|W3C JSON-LD contexts, enabling standardised Federation Surface|federation surfaces (S1–S11) that are queryable, linkable, and mac...
maturity: established
quality: 0.87
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:data-layer
hasPart:
  - urn:ngm:class:json-data-interchange-format-ld-context
  - urn:ngm:class:semantic-mapping
  - urn:ngm:class:uri-resolution
  - urn:ngm:class:context-pinning
requires:
  - urn:ngm:class:canonical-json
  - urn:ngm:class:json-data-interchange-format-ld-1-1-standard
  - urn:ngm:class:w-3-c-vocabulary
  - urn:ngm:class:uri-canonicaliser
enables:
  - urn:ngm:class:cross-system-querying
  - urn:ngm:class:knowledge-graph-integration
  - urn:ngm:class:linked-data-consumption
  - urn:ngm:class:semantic-federation
implements:
  - urn:ngm:class:json-data-interchange-format-ld-1-1
  - urn:ngm:class:rdf-semantics
  - urn:ngm:class:linked-data
  - urn:ngm:class:linked-data
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:rdf-store
---

# Linked Data Encoder

A semantic encoding pipeline that transforms agent state, credentials, events, and metadata into JSON-LD 1.1 format using pinned, versioned JSON-LD Context|W3C JSON-LD contexts, enabling standardised Federation Surface|federation surfaces (S1–S11) that are queryable, linkable, and mac...
