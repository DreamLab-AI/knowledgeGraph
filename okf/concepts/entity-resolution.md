---
okf_version: "0.2"
type: Class
title: Entity Resolution
resource: urn:ngm:class:entity-resolution
domain: data
description: Entity resolution is the computational process of determining whether two or more records — potentially from disparate sources, formats, or schemas — refer to the same real-world entity, and then linking, merging, or deduplicating them into a single canonical representation. It encompasses blocking strategies that reduce the candidate comparison space, similarity scoring across attributes, and dec
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:data-integration
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:schema-mapping
  - urn:ngm:class:blocking
  - urn:ngm:class:string-similarity
enables:
  - urn:ngm:class:master-data-management
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:data-lineage
contrastsWith:
  - urn:ngm:class:data-deduplication
  - urn:ngm:class:ontology-alignment
bridgesTo:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:probabilistic-matching
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:embedding
  - urn:ngm:class:graph-neural-network
partOf:
  - urn:ngm:class:data-integration
  - urn:ngm:class:master-data-management
relatedTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:identity-resolution
  - urn:ngm:class:data-catalog
---

# Entity Resolution

Entity resolution is the computational process of determining whether two or more records — potentially from disparate sources, formats, or schemas — refer to the same real-world entity, and then linking, merging, or deduplicating them into a single canonical representation. It encompasses blocking strategies that reduce the candidate comparison space, similarity scoring across attributes, and decision logic (deterministic, probabilistic, or ML-based) that determines match, non-match, or possible-match outcomes. Widely applied in master data management, knowledge graph construction, fraud detection, and census processing, it forms a foundational layer of data integration pipelines that require a consistent, unified view of entities such as persons, organisations, products, or locations.
