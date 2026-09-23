---
okf_version: "0.2"
type: Class
title: Multihash
resource: urn:ngm:class:multihash
domain: infrastructure
description: Multihash is a self-describing hash format developed by Protocol Labs in which the hash digest is prefixed with a varint-encoded function code and digest length, enabling consumers to identify the hash algorithm without out-of-band knowledge. It is a foundational component of the IPFS content-addressing stack and the Multiformat suite, providing algorithm agility so that systems can upgrade from S
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-hash
enables:
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:ipfs
bridgesTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:binary-encoding
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:post-quantum-cryptography
partOf:
  - urn:ngm:class:multiformats
  - urn:ngm:class:ipld
relatedTo:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:content-addressing
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:multicodec
  - urn:ngm:class:multiformats
  - urn:ngm:class:content-identifier
---

# Multihash

Multihash is a self-describing hash format developed by Protocol Labs in which the hash digest is prefixed with a varint-encoded function code and digest length, enabling consumers to identify the hash algorithm without out-of-band knowledge. It is a foundational component of the IPFS content-addressing stack and the Multiformat suite, providing algorithm agility so that systems can upgrade from SHA-256 to SHA3 or BLAKE3 without breaking existing identifiers. Any hash function can be registered in the Multihash table and the format is codec-neutral.
