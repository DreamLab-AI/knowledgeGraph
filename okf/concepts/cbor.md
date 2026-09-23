---
okf_version: "0.2"
type: Class
title: CBOR
resource: urn:ngm:class:cbor
domain: infrastructure
description: "Concise Binary Object Representation (CBOR) is a binary data serialisation format specified in RFC 7049 (superseded by RFC 8949) designed to enable extremely compact encoding of structured data with a data model that is a superset of JSON. CBOR encodes values using a type-length-value scheme, eliminating the overhead of textual delimiters and key quotation, which makes it particularly well-suited "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-serialization
requires:
  - urn:ngm:class:internet-of-things
enables:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:credential-format-standard
  - urn:ngm:class:remote-attestation
implements:
  - urn:ngm:class:cose
  - urn:ngm:class:deterministic-encoding
bridgesTo:
  - urn:ngm:class:linked-data
  - urn:ngm:class:hardware-security-module
uses:
  - urn:ngm:class:binary-encoding
supports:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralised-identity
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
  - urn:ngm:class:iso-iec-18013-5-m-dl
relatedTo:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:data-format-standard
  - urn:ngm:class:messagepack
---

# CBOR

Concise Binary Object Representation (CBOR) is a binary data serialisation format specified in RFC 7049 (superseded by RFC 8949) designed to enable extremely compact encoding of structured data with a data model that is a superset of JSON. CBOR encodes values using a type-length-value scheme, eliminating the overhead of textual delimiters and key quotation, which makes it particularly well-suited for constrained environments such as IoT devices, embedded systems, and low-bandwidth protocols where minimising message size and parsing complexity is critical.
