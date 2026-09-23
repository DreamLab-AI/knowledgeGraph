---
okf_version: "0.2"
type: Class
title: Multiformats
resource: urn:ngm:class:multiformats
domain: infrastructure
description: Multiformats is a collection of self-describing protocol and value specifications designed to make data formats future-proof and interoperable across decentralised systems. Rather than hard-coding a single hash, encoding, or address scheme, each multiformat prefixes the value with a compact code declaring which algorithm or format it uses, so software can interpret it unambiguously and evolve with
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:content-addressing
hasPart:
  - urn:ngm:class:multihash
  - urn:ngm:class:content-identifier
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:content-addressing
implements:
  - urn:ngm:class:content-identifier
uses:
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:ipfs
  - urn:ngm:class:libp2p
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:content-addressing
relatedTo:
  - urn:ngm:class:decentralised-file-storage
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:interoperability
---

# Multiformats

Multiformats is a collection of self-describing protocol and value specifications designed to make data formats future-proof and interoperable across decentralised systems. Rather than hard-coding a single hash, encoding, or address scheme, each multiformat prefixes the value with a compact code declaring which algorithm or format it uses, so software can interpret it unambiguously and evolve without breaking. Components include multihash, multibase, multicodec, and multiaddr, and the family underpins content addressing in IPFS and libp2p.
