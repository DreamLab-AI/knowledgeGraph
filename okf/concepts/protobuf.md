---
okf_version: "0.2"
type: Class
title: Protobuf
resource: urn:ngm:class:protobuf
domain: infrastructure
description: Protocol Buffers (Protobuf) is a language-neutral, platform-neutral mechanism for serialising structured data using a compact binary wire format defined by an interface description in a .proto schema. A code generator produces typed accessors in many languages from that schema, enabling efficient, forwards- and backwards-compatible message exchange. It is the default payload format for gRPC and is
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-format
requires:
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:remote-procedure-call
dependsOn:
  - urn:ngm:class:schema
  - urn:ngm:class:schema-registry
implements:
  - urn:ngm:class:data-serialization
contrastsWith:
  - urn:ngm:class:xml
bridgesTo:
  - urn:ngm:class:serialisation
uses:
  - urn:ngm:class:data-model
supports:
  - urn:ngm:class:message-passing
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:data-format
  - urn:ngm:class:xml
  - urn:ngm:class:schema-registry
  - urn:ngm:class:data-serialization
---

# Protobuf

Protocol Buffers (Protobuf) is a language-neutral, platform-neutral mechanism for serialising structured data using a compact binary wire format defined by an interface description in a .proto schema. A code generator produces typed accessors in many languages from that schema, enabling efficient, forwards- and backwards-compatible message exchange. It is the default payload format for gRPC and is widely used for high-throughput inter-service communication and storage.
