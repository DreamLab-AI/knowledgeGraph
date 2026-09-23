---
okf_version: "0.2"
type: Class
title: Digital Signatures
resource: urn:ngm:class:digital-signatures
domain: security
description: A cryptographic mechanism that uses asymmetric key pairs to produce a verifiable seal on digital data, ensuring authenticity, integrity, and non-repudiation of messages, transactions, and documents across distributed and decentralised systems.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:signature-algorithm
  - urn:ngm:class:hash-function
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:private-key
  - urn:ngm:class:hash-function
  - urn:ngm:class:signature-algorithm
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:data-integrity
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:code-signing
  - urn:ngm:class:transaction-authorisation
implements:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:bls-signature
  - urn:ngm:class:schnorr-signature
contrastsWith:
  - urn:ngm:class:symmetric-cryptography
  - urn:ngm:class:message-authentication-code
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:post-quantum-cryptography
supports:
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:nist-cryptographic-standards
  - urn:ngm:class:nist-fips-186
---

# Digital Signatures

A cryptographic mechanism that uses asymmetric key pairs to produce a verifiable seal on digital data, ensuring authenticity, integrity, and non-repudiation of messages, transactions, and documents across distributed and decentralised systems.
