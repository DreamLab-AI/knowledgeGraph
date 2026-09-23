---
okf_version: "0.2"
type: Class
title: Data Serialization
resource: urn:ngm:class:data-serialization
domain: infrastructure
description: Data Serialization is the process of converting structured in-memory data objects — including primitive types, collections, and complex graphs — into a byte-sequence or character-stream representation that can be stored persistently, transmitted across a network boundary, or reconstructed (deserialised) into an equivalent in-memory representation on a different machine or at a different time, pote
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-format
requires:
  - urn:ngm:class:schema-evolution
  - urn:ngm:class:backward-compatibility
enables:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:message-passing
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:data-schema
  - urn:ngm:class:type-system
supports:
  - urn:ngm:class:data-storage
  - urn:ngm:class:network-communication
  - urn:ngm:class:event-streaming
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:schema-registry
  - urn:ngm:class:data-format-standard
  - urn:ngm:class:binary-encoding
  - urn:ngm:class:messagepack
  - urn:ngm:class:apache-avro
  - urn:ngm:class:xml
  - urn:ngm:class:yaml
---

# Data Serialization

Data Serialization is the process of converting structured in-memory data objects — including primitive types, collections, and complex graphs — into a byte-sequence or character-stream representation that can be stored persistently, transmitted across a network boundary, or reconstructed (deserialised) into an equivalent in-memory representation on a different machine or at a different time, potentially running different software. Serialization formats vary along axes of human readability (JSON, YAML, XML versus binary), schema enforcement (Protocol Buffers, Apache Avro with mandatory schemas versus schemaless JSON), compactness, and cross-language support, making format selection a critical engineering decision that affects system interoperability, performance, and evolvability.
