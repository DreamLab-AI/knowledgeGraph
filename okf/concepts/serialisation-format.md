---
okf_version: "0.2"
type: Class
title: Serialisation Format
resource: urn:ngm:class:serialisation-format
domain: infrastructure
description: A serialisation format is a specification for encoding in-memory data structures into a byte or text stream that can be persisted or transmitted and later reconstructed. Formats differ in schema rigidity, compactness, speed, and cross-language support, spanning text formats like JSON and YAML and binary formats like Protocol Buffers, Avro, and Parquet. It is fundamental to checkpointing, messaging
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:checkpoints
  - urn:ngm:class:distributed-computing
---

# Serialisation Format

A serialisation format is a specification for encoding in-memory data structures into a byte or text stream that can be persisted or transmitted and later reconstructed. Formats differ in schema rigidity, compactness, speed, and cross-language support, spanning text formats like JSON and YAML and binary formats like Protocol Buffers, Avro, and Parquet. It is fundamental to checkpointing, messaging, and distributed computation.
