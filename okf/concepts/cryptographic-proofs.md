---
okf_version: "0.2"
type: Class
title: Cryptographic Proofs
resource: urn:ngm:class:cryptographic-proofs
domain: security
description: Cryptographic proofs are mathematical constructions that allow one party to convince another of the truth of a statement with cryptographic certainty, often without revealing the underlying data. They include proofs of knowledge, membership proofs, proofs of computation, and zero-knowledge proofs, and rely on primitives such as hash functions, commitments, and elliptic-curve operations. Cryptograp
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zk-starks
  - urn:ngm:class:merkle-proof
requires:
  - urn:ngm:class:computational-hardness-assumption
  - urn:ngm:class:trusted-setup
enables:
  - urn:ngm:class:data-availability
  - urn:ngm:class:verifiable-computation
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:trust-minimisation
contrastsWith:
  - urn:ngm:class:interactive-proof
  - urn:ngm:class:fraud-proof
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:hash-function
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:rollup
  - urn:ngm:class:certificate-transparency
relatedTo:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:cryptographic-accumulator
---

# Cryptographic Proofs

Cryptographic proofs are mathematical constructions that allow one party to convince another of the truth of a statement with cryptographic certainty, often without revealing the underlying data. They include proofs of knowledge, membership proofs, proofs of computation, and zero-knowledge proofs, and rely on primitives such as hash functions, commitments, and elliptic-curve operations. Cryptographic proofs underpin blockchain validity, verifiable computation, privacy-preserving authentication, and data-availability guarantees, letting verifiers trust outcomes they did not themselves compute.
