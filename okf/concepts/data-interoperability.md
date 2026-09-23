---
okf_version: "0.2"
type: Class
title: Data Interoperability
resource: urn:ngm:class:data-interoperability
domain: data
description: Data Interoperability is the capability of heterogeneous systems, applications, and data sources to exchange, interpret, and act upon shared data without loss of meaning across organisational and technical boundaries. It encompasses syntactic interoperability (shared formats and wire protocols), semantic interoperability (common vocabularies, ontologies, and data models), and pragmatic interoperab
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:data-standards
  - urn:ngm:class:data-format
  - urn:ngm:class:schema-registry
  - urn:ngm:class:api-contract
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:federated-learning
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:open-data
dependsOn:
  - urn:ngm:class:data-governance
  - urn:ngm:class:identity-management
  - urn:ngm:class:metadata-management
implements:
  - urn:ngm:class:linked-data
  - urn:ngm:class:rest-api
  - urn:ngm:class:graph-ql
contrastsWith:
  - urn:ngm:class:data-silo
  - urn:ngm:class:vendor-lock-in
  - urn:ngm:class:data-silo
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:iso
  - urn:ngm:class:oasis
relatedTo:
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:syntactic-interoperability
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-mesh
  - urn:ngm:class:data-fabric
---

# Data Interoperability

Data Interoperability is the capability of heterogeneous systems, applications, and data sources to exchange, interpret, and act upon shared data without loss of meaning across organisational and technical boundaries. It encompasses syntactic interoperability (shared formats and wire protocols), semantic interoperability (common vocabularies, ontologies, and data models), and pragmatic interoperability (agreed processes, policies, and trust frameworks). Achieving full data interoperability requires alignment across API contracts, schema registries, identity frameworks, and data governance regimes. It is a foundational property enabling federated analytics, cross-domain knowledge graphs, and open ecosystem integration.
