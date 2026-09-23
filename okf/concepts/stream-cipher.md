---
okf_version: "0.2"
type: Class
title: Stream Cipher
resource: urn:ngm:class:stream-cipher
domain: security
description: A stream cipher is a symmetric encryption technique that combines plaintext with a pseudorandom keystream, one bit or byte at a time, to produce ciphertext, in contrast to block ciphers which operate on fixed-size chunks. The security of a stream cipher depends critically on high-quality random number generation for keystream and nonce material, since keystream reuse catastrophically breaks confid
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:symmetric-encryption
requires:
  - urn:ngm:class:random-number-generation
---

# Stream Cipher

A stream cipher is a symmetric encryption technique that combines plaintext with a pseudorandom keystream, one bit or byte at a time, to produce ciphertext, in contrast to block ciphers which operate on fixed-size chunks. The security of a stream cipher depends critically on high-quality random number generation for keystream and nonce material, since keystream reuse catastrophically breaks confidentiality. Stream ciphers are favoured where low latency or resource-constrained encryption of continuous data streams is required.
