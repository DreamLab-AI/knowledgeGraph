---
okf_version: "0.2"
type: Class
title: Federation Surface
resource: urn:ngm:class:federation-surface
domain: infrastructure
description: A standardised JSON-LD 1.1 encoding surface (S1–S11) that exposes agent state, credentials, events, and work metadata in a queryable, linkable format, enabling federated consumption by heterogeneous external systems (monitoring dashboards, compliance audits, blockchain oracles, knowledge grap...
maturity: established
quality: 0.86
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:middleware-layer
hasPart:
  - urn:ngm:class:json-data-interchange-format-ld-context
  - urn:ngm:class:content-addressing
  - urn:ngm:class:linked-data-encoder
  - urn:ngm:class:uri-canonicaliser
requires:
  - urn:ngm:class:json-data-interchange-format-ld-1-1-standard
  - urn:ngm:class:w-3-c-vocabulary
  - urn:ngm:class:http-endpoint
enables:
  - urn:ngm:class:monitoring
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:cross-system-querying
  - urn:ngm:class:linked-data-consumption
  - urn:ngm:class:monitoring
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:knowledge-graph-federation
implements:
  - urn:ngm:class:json-data-interchange-format-ld-1-1
  - urn:ngm:class:w-3-c-linked-data-platform
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:smart-contract
  - urn:ngm:class:data-portal
---

# Federation Surface

A standardised JSON-LD 1.1 encoding surface (S1–S11) that exposes agent state, credentials, events, and work metadata in a queryable, linkable format, enabling federated consumption by heterogeneous external systems (monitoring dashboards, compliance audits, blockchain oracles, knowledge grap...
