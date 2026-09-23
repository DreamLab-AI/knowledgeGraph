---
okf_version: "0.2"
type: Class
title: BLAKE3
resource: urn:ngm:class:blake3
domain: security
description: BLAKE3 is a cryptographic hash function released in 2020 that achieves exceptional speed through a tree-hashing construction enabling unlimited parallelism across SIMD lanes and CPU cores, while simultaneously functioning as a keyed hash, a key derivation function, and an extendable-output function (XOF). It is derived from the BLAKE2 family, inheriting its ARX (add-rotate-XOR) ChaCha-based compre
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:content-addressing
  - urn:ngm:class:cryptographic-verification
uses:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:blake2
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:data-integrity
---

# BLAKE3

BLAKE3 is a cryptographic hash function released in 2020 that achieves exceptional speed through a tree-hashing construction enabling unlimited parallelism across SIMD lanes and CPU cores, while simultaneously functioning as a keyed hash, a key derivation function, and an extendable-output function (XOF). It is derived from the BLAKE2 family, inheriting its ARX (add-rotate-XOR) ChaCha-based compression function, and extends it with a Bao-style binary tree that allows verified streaming and incremental hashing. BLAKE3 produces digests of arbitrary length (defaulting to 256 bits), is formally specified under a Creative Commons public-domain dedication, and is designed to be faster than SHA-256 on modern hardware by factors of five to ten on multi-core systems. Its unified API replaces the need for separate HMAC, HKDF, or KDF constructions.
