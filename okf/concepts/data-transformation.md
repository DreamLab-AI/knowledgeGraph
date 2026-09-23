---
okf_version: "0.2"
type: Class
title: Data Transformation
resource: urn:ngm:class:data-transformation
domain: infrastructure
description: Data transformation is the process of converting data from one structure, format or representation into another to make it suitable for storage, integration or analysis. It includes cleansing, type conversion, normalisation, aggregation, enrichment, schema mapping and serialisation, and is typically expressed as declarative or programmatic steps within a pipeline. Transformation reconciles heterog
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-processing
hasPart:
  - urn:ngm:class:data-cleaning
  - urn:ngm:class:data-serialization
requires:
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-analytics
dependsOn:
  - urn:ngm:class:data-engineering
implements:
  - urn:ngm:class:etl-pipeline
bridgesTo:
  - urn:ngm:class:data-integration
uses:
  - urn:ngm:class:schema
  - urn:ngm:class:data-validation
supports:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:data-warehouse
partOf:
  - urn:ngm:class:data-pipeline
relatedTo:
  - urn:ngm:class:data-processing
  - urn:ngm:class:data-lake
---

# Data Transformation

Data transformation is the process of converting data from one structure, format or representation into another to make it suitable for storage, integration or analysis. It includes cleansing, type conversion, normalisation, aggregation, enrichment, schema mapping and serialisation, and is typically expressed as declarative or programmatic steps within a pipeline. Transformation reconciles heterogeneous sources, enforces quality and conformance rules, and shapes raw inputs into the canonical forms required by downstream systems.
