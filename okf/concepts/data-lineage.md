---
okf_version: "0.2"
type: Class
title: Data Lineage
resource: urn:ngm:class:data-lineage
domain: data
description: Data lineage is the documented record of data's origins, movements, transformations and consumption as it flows through systems and pipelines. It maps how a data element is derived end to end, supporting impact analysis, debugging, audit and regulatory compliance. As a pillar of data governance and metadata management it makes data trustworthy by exposing its provenance.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:data-provenance
requires:
  - urn:ngm:class:metadata-catalog
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:audit-trail
dependsOn:
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:data-schema
contrastsWith:
  - urn:ngm:class:data-catalog
bridgesTo:
  - urn:ngm:class:blockchain-provenance
  - urn:ngm:class:supply-chain-transparency
uses:
  - urn:ngm:class:graph-database
  - urn:ngm:class:apache-atlas
  - urn:ngm:class:open-lineage
supports:
  - urn:ngm:class:data-quality-management
  - urn:ngm:class:gdpr-compliance
standardizedBy:
  - urn:ngm:class:open-lineage
  - urn:ngm:class:provenance-standard
partOf:
  - urn:ngm:class:data-governance
  - urn:ngm:class:metadata-management
relatedTo:
  - urn:ngm:class:data-observability
  - urn:ngm:class:etl-pipeline
---

# Data Lineage

Data lineage is the documented record of data's origins, movements, transformations and consumption as it flows through systems and pipelines. It maps how a data element is derived end to end, supporting impact analysis, debugging, audit and regulatory compliance. As a pillar of data governance and metadata management it makes data trustworthy by exposing its provenance.
