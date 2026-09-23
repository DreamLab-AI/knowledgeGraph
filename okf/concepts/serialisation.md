---
okf_version: "0.2"
type: Class
title: Serialisation
resource: urn:ngm:class:serialisation
domain: infrastructure
description: Serialisation is the process of converting in-memory data structures or object graphs into a linear byte sequence or text representation that can be stored, transmitted, and later reconstructed. The inverse operation, deserialisation, rebuilds the original structure from the encoded form. Serialisation underpins persistence, inter-process and network communication, and the interoperability of syst
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-format-standard
hasPart:
  - urn:ngm:class:deserialisation
requires:
  - urn:ngm:class:data-format
enables:
  - urn:ngm:class:message-passing
  - urn:ngm:class:remote-procedure-call
implements:
  - urn:ngm:class:data-format
contrastsWith:
  - urn:ngm:class:deserialisation
bridgesTo:
  - urn:ngm:class:message-passing
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:protobuf
supports:
  - urn:ngm:class:api
  - urn:ngm:class:interoperability
relatedTo:
  - urn:ngm:class:xml
  - urn:ngm:class:network-communication
---

# Serialisation

Serialisation is the process of converting in-memory data structures or object graphs into a linear byte sequence or text representation that can be stored, transmitted, and later reconstructed. The inverse operation, deserialisation, rebuilds the original structure from the encoded form. Serialisation underpins persistence, inter-process and network communication, and the interoperability of systems that exchange structured data.
