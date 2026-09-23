---
okf_version: "0.2"
type: Class
title: Deserialisation
resource: urn:ngm:class:deserialisation
domain: data
description: The process of reconstructing in-memory data structures or objects from a serialised byte stream or textual encoding such as JSON, XML, or Protocol Buffers, reversing serialisation so that transmitted or persisted state can be used by a running program. Deserialisation must validate structure, types, and bounds of untrusted input, since naive object reconstruction is a well-known source of remote-
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:data-format-standard
contrastsWith:
  - urn:ngm:class:serialisation
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:protobuf
partOf:
  - urn:ngm:class:data-exchange
---

# Deserialisation

The process of reconstructing in-memory data structures or objects from a serialised byte stream or textual encoding such as JSON, XML, or Protocol Buffers, reversing serialisation so that transmitted or persisted state can be used by a running program. Deserialisation must validate structure, types, and bounds of untrusted input, since naive object reconstruction is a well-known source of remote-code-execution vulnerabilities.
