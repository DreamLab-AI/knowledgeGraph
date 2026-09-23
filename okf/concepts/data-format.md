---
okf_version: "0.2"
type: Class
title: Data Format
resource: urn:ngm:class:data-format
domain: infrastructure
description: A Data Format is a formal structural and encoding specification that governs how raw bytes are organised, typed, and interpreted when data is stored, transmitted, or exchanged between computational systems. Formats encode decisions about byte ordering, field delimitation, schema evolution, compression, and type systems, ranging from binary serialisation protocols (Protocol Buffers, Apache Avro, Me
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:schema
  - urn:ngm:class:encoding
  - urn:ngm:class:serialisation
requires:
  - urn:ngm:class:schema-registry
  - urn:ngm:class:codec
enables:
  - urn:ngm:class:data-interoperability
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-exchange
  - urn:ngm:class:api-design
dependsOn:
  - urn:ngm:class:type-system
  - urn:ngm:class:character-encoding
implements:
  - urn:ngm:class:open-standard
  - urn:ngm:class:interface-definition-language
contrastsWith:
  - urn:ngm:class:binary-format
  - urn:ngm:class:text-format
bridgesTo:
  - urn:ngm:class:linked-data
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:data-validation
  - urn:ngm:class:data-compression
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:iso
  - urn:ngm:class:w3-c
partOf:
  - urn:ngm:class:data-standards
  - urn:ngm:class:data-architecture
relatedTo:
  - urn:ngm:class:json-ld
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:apache-parquet
  - urn:ngm:class:protobuf
---

# Data Format

A Data Format is a formal structural and encoding specification that governs how raw bytes are organised, typed, and interpreted when data is stored, transmitted, or exchanged between computational systems. Formats encode decisions about byte ordering, field delimitation, schema evolution, compression, and type systems, ranging from binary serialisation protocols (Protocol Buffers, Apache Avro, MessagePack) to human-readable interchange formats (JSON, XML, YAML, TOML) and domain-specific schemas (DICOM for medical imaging, glTF for 3D assets, FITS for astronomical data). The choice of data format critically determines interoperability scope, parsing overhead, storage efficiency, schema evolution capability, and compatibility with downstream processing pipelines and analytics engines.
