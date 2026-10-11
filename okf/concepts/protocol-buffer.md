---
okf_version: "0.2"
type: Class
title: Protocol Buffer
resource: urn:ngm:class:protocol-buffer
domain: infrastructure
description: Protocol Buffers (Protobuf) is a language-neutral, platform-neutral mechanism for serialising structured data using a compact binary wire format defined by an interface description in a .proto schema. A code generator produces typed accessors in many languages from that schema, enabling efficient, forwards- and backwards-compatible message exchange. It is the default payload format for gRPC and is
maturity: draft
quality: 0.35
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:data-format
requires:
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:remote-procedure-call
implements:
  - urn:ngm:class:data-format
  - urn:ngm:class:data-serialization
contrastsWith:
  - urn:ngm:class:xml
bridgesTo:
  - urn:ngm:class:serialisation
uses:
  - urn:ngm:class:data-model
relatedTo:
  - urn:ngm:class:data-format
  - urn:ngm:class:xml
  - urn:ngm:class:schema-registry
  - urn:ngm:class:data-serialization
---

# Protocol Buffer

Protocol Buffers (Protobuf) is a language-neutral, platform-neutral mechanism for serialising structured data using a compact binary wire format defined by an interface description in a .proto schema. A code generator produces typed accessors in many languages from that schema, enabling efficient, forwards- and backwards-compatible message exchange. It is the default payload format for gRPC and is widely used for high-throughput inter-service communication and storage.
