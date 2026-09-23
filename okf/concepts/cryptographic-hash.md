---
okf_version: "0.2"
type: Class
title: Cryptographic Hash
resource: urn:ngm:class:cryptographic-hash
domain: security
description: Deterministic mathematical function transforming arbitrary input data into a fixed-length digest, guaranteeing data integrity verification and tamper detection through collision resistance, pre-image resistance, and avalanche-effect properties.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:avalanche-effect
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:one-way-function
enables:
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:password-hashing
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:commitment-scheme
implements:
  - urn:ngm:class:sha-256
  - urn:ngm:class:sha-3
  - urn:ngm:class:blake2
  - urn:ngm:class:keccak-256
contrastsWith:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:checksums
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:supply-chain-provenance
uses:
  - urn:ngm:class:compression-function
  - urn:ngm:class:merkle-damgard-construction
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:data-integrity
  - urn:ngm:class:tamper-detection
  - urn:ngm:class:encryption
standardizedBy:
  - urn:ngm:class:nist-fips-186
  - urn:ngm:class:nist-fips-202
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-protocol
relatedTo:
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:post-quantum-cryptography
---

# Cryptographic Hash

Deterministic mathematical function transforming arbitrary input data into a fixed-length digest, guaranteeing data integrity verification and tamper detection through collision resistance, pre-image resistance, and avalanche-effect properties.
