---
okf_version: "0.2"
type: Class
title: Raw Data
resource: urn:ngm:class:raw-data
domain: data
description: Raw data is unprocessed information as originally collected from a source, before cleaning, transformation, aggregation or annotation. It may be noisy, inconsistent, redundant or incomplete, and typically lacks the structure and quality guarantees of processed data. Raw data forms the input to data pipelines, where it is ingested, validated and transformed into usable, analysis-ready forms.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data
requires:
  - urn:ngm:class:data-collection
enables:
  - urn:ngm:class:data-processing
  - urn:ngm:class:data-pipeline
dependsOn:
  - urn:ngm:class:data-collection
implements:
  - urn:ngm:class:data-collection
contrastsWith:
  - urn:ngm:class:metadata
bridgesTo:
  - urn:ngm:class:data-transformation
uses:
  - urn:ngm:class:sensor-data
supports:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:information-extraction
partOf:
  - urn:ngm:class:data
relatedTo:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-ingestion
---

# Raw Data

Raw data is unprocessed information as originally collected from a source, before cleaning, transformation, aggregation or annotation. It may be noisy, inconsistent, redundant or incomplete, and typically lacks the structure and quality guarantees of processed data. Raw data forms the input to data pipelines, where it is ingested, validated and transformed into usable, analysis-ready forms.
