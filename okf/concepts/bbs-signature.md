---
okf_version: "0.2"
type: Class
title: BBS+ Signature
resource: urn:ngm:class:bbs-signature
domain: security
description: BBS+ Signature is a pairing-based digital signature scheme that signs a vector of messages simultaneously and supports the generation of zero-knowledge proofs that reveal only a chosen subset of those messages — a property known as selective disclosure — without revealing the full signed message set or enabling linkage of multiple presentations to the same credential. It is a cornerstone primitive
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:privacy-preserving-identity
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:bls-signature
  - urn:ngm:class:decentralized-identifiers
---

# BBS+ Signature

BBS+ Signature is a pairing-based digital signature scheme that signs a vector of messages simultaneously and supports the generation of zero-knowledge proofs that reveal only a chosen subset of those messages — a property known as selective disclosure — without revealing the full signed message set or enabling linkage of multiple presentations to the same credential. It is a cornerstone primitive for privacy-preserving verifiable credentials.
