---
okf_version: "0.2"
type: Class
title: Conversion Pipeline
resource: urn:ngm:class:conversion-pipeline
domain: spatial-computing
description: An automated workflow process that transforms digital data or assets from one format, schema, or representation to another, enabling interoperability and compatibility across heterogeneous systems and platforms.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-standards-and-interop
hasPart:
  - urn:ngm:class:format-parser
  - urn:ngm:class:transformation-engine
  - urn:ngm:class:validation-module
  - urn:ngm:class:output-generator
  - urn:ngm:class:error-handler
requires:
  - urn:ngm:class:asset-metadata
  - urn:ngm:class:data-schema
  - urn:ngm:class:conversion-rules
  - urn:ngm:class:format-specification
enables:
  - urn:ngm:class:asset-optimization
  - urn:ngm:class:format-migration
  - urn:ngm:class:cross-platform-interoperability
  - urn:ngm:class:data-harmonization
dependsOn:
  - urn:ngm:class:data-validation
  - urn:ngm:class:schema-registry
  - urn:ngm:class:metadata-management
bridgesTo:
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:data-processing
---

# Conversion Pipeline

An automated workflow process that transforms digital data or assets from one format, schema, or representation to another, enabling interoperability and compatibility across heterogeneous systems and platforms.
