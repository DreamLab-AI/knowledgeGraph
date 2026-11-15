---
okf_version: "0.2"
type: Class
title: Data Mapping
resource: urn:ngm:class:data-mapping
domain: governance
description: Data mapping is the process of defining correspondences between fields, elements, or schemas of a source data structure and those of a target, specifying how each attribute is matched, transformed, or combined during movement between systems. It is foundational to data integration, migration, and interoperability, guiding extract-transform-load pipelines and message translation so that semanticall
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-integration
requires:
  - urn:ngm:class:data-transformation
  - urn:ngm:class:data-catalogue
enables:
  - urn:ngm:class:data-lineage
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:data-modelling
  - urn:ngm:class:schema-mapping
uses:
  - urn:ngm:class:etl-pipeline
supports:
  - urn:ngm:class:data-governance
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:iso-20022
partOf:
  - urn:ngm:class:data-integration
relatedTo:
  - urn:ngm:class:data-protection
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Data Mapping

Data mapping is the process of defining correspondences between fields, elements, or schemas of a source data structure and those of a target, specifying how each attribute is matched, transformed, or combined during movement between systems. It is foundational to data integration, migration, and interoperability, guiding extract-transform-load pipelines and message translation so that semantically equivalent information aligns across heterogeneous models. In privacy and governance contexts, data mapping also denotes the cataloguing of where personal data resides and how it flows, which is a prerequisite for lineage tracking and regulatory compliance.
