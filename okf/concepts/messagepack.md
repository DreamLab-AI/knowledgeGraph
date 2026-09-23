---
okf_version: "0.2"
type: Class
title: Messagepack
resource: urn:ngm:class:messagepack
domain: infrastructure
description: "MessagePack is a binary data serialisation format that encodes structured data compactly while preserving a data model compatible with JSON, allowing maps, arrays, strings, integers, and floats to be transmitted in far fewer bytes than their textual equivalents. It uses a type-prefixed encoding that minimises overhead, making it well-suited to high-throughput messaging, caching, and inter-service "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-serialization
requires:
  - urn:ngm:class:binary-encoding
enables:
  - urn:ngm:class:message-queue
  - urn:ngm:class:embedded-systems
implements:
  - urn:ngm:class:data-serialization
contrastsWith:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:protocol-buffer
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:binary-encoding
supports:
  - urn:ngm:class:internet-of-things
partOf:
  - urn:ngm:class:data-serialization
relatedTo:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:cbor
  - urn:ngm:class:protocol-buffer
---

# Messagepack

MessagePack is a binary data serialisation format that encodes structured data compactly while preserving a data model compatible with JSON, allowing maps, arrays, strings, integers, and floats to be transmitted in far fewer bytes than their textual equivalents. It uses a type-prefixed encoding that minimises overhead, making it well-suited to high-throughput messaging, caching, and inter-service communication. MessagePack trades human readability for speed and compactness, sitting between verbose JSON and schema-bound formats like Protocol Buffers.
