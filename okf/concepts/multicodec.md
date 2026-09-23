---
okf_version: "0.2"
type: Class
title: Multicodec
resource: urn:ngm:class:multicodec
domain: infrastructure
description: Multicodec is a self-describing data encoding scheme, part of the Multiformats family, that prefixes a binary value with a compact varint code identifying the codec used to interpret the bytes that follow. By making the encoding explicit and machine-readable, multicodec lets systems handle many data formats and hash algorithms without out-of-band agreement, supporting future-proof, agile interoper
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:multiformats
hasPart:
  - urn:ngm:class:multihash
  - urn:ngm:class:cid
requires:
  - urn:ngm:class:data-serialization
  - urn:ngm:class:data-serialization
enables:
  - urn:ngm:class:content-addressing
  - urn:ngm:class:cid
implements:
  - urn:ngm:class:identifier
bridgesTo:
  - urn:ngm:class:cid
uses:
  - urn:ngm:class:multihash
  - urn:ngm:class:content-addressing
supports:
  - urn:ngm:class:ipfs
  - urn:ngm:class:libp2p
partOf:
  - urn:ngm:class:multiformats
relatedTo:
  - urn:ngm:class:multiformats
  - urn:ngm:class:ipfs
  - urn:ngm:class:libp2p
  - urn:ngm:class:filecoin
---

# Multicodec

Multicodec is a self-describing data encoding scheme, part of the Multiformats family, that prefixes a binary value with a compact varint code identifying the codec used to interpret the bytes that follow. By making the encoding explicit and machine-readable, multicodec lets systems handle many data formats and hash algorithms without out-of-band agreement, supporting future-proof, agile interoperability across content-addressed systems.
