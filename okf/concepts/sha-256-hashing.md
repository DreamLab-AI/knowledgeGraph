---
okf_version: "0.2"
type: Class
title: SHA-256 Hashing
resource: urn:ngm:class:sha-256-hashing
domain: security
description: SHA-256 Hashing refers to the application of the SHA-256 (Secure Hash Algorithm 256-bit) cryptographic hash function — a member of the SHA-2 family standardised by NIST in 2001 — to produce a fixed-length 256-bit (32-byte) message digest from an arbitrary-length input, with the properties of determinism, pre-image resistance, second pre-image resistance, and collision resistance. The algorithm ope
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:data-integrity
  - urn:ngm:class:merkle-proof
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:sha-256
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:proof-of-work
---

# SHA-256 Hashing

SHA-256 Hashing refers to the application of the SHA-256 (Secure Hash Algorithm 256-bit) cryptographic hash function — a member of the SHA-2 family standardised by NIST in 2001 — to produce a fixed-length 256-bit (32-byte) message digest from an arbitrary-length input, with the properties of determinism, pre-image resistance, second pre-image resistance, and collision resistance. The algorithm operates via 64 rounds of bit manipulation, modular addition, and nonlinear functions over a 512-bit block schedule. SHA-256 is the foundational hash function of Bitcoin's proof-of-work mining, block header commitments, and Merkle tree construction, as well as a critical primitive in TLS, code signing, and certificate transparency.
