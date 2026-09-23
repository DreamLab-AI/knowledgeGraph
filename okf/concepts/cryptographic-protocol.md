---
okf_version: "0.2"
type: Class
title: Cryptographic Protocol
resource: urn:ngm:class:cryptographic-protocol
domain: security
description: Cryptographic Protocol encompasses mathematical frameworks and algorithmic procedures that secure digital systems through cryptographic primitives including hash functions, digital signatures, encryption schemes, zero-knowledge proofs, and commitment protocols, enabling confidentiality, integrity, authentication, and non-repudiation across distributed and blockchain applications.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:authentication-protocol
  - urn:ngm:class:commitment-scheme
requires:
  - urn:ngm:class:encryption-scheme
  - urn:ngm:class:digital-signature
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:random-number-generator
enables:
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:privacy-preservation
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:secure-communication
  - urn:ngm:class:zero-knowledge-proof
dependsOn:
  - urn:ngm:class:computational-hardness-assumption
  - urn:ngm:class:elliptic-curve-cryptography
implements:
  - urn:ngm:class:security-framework
  - urn:ngm:class:trust-model
contrastsWith:
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:post-quantum-cryptography
uses:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:hmac
supports:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:smart-contract
standardizedBy:
  - urn:ngm:class:nist-post-quantum-cryptography
  - urn:ngm:class:post-quantum-cryptography
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-infrastructure
---

# Cryptographic Protocol

Cryptographic Protocol encompasses mathematical frameworks and algorithmic procedures that secure digital systems through cryptographic primitives including hash functions, digital signatures, encryption schemes, zero-knowledge proofs, and commitment protocols, enabling confidentiality, integrity, authentication, and non-repudiation across distributed and blockchain applications.
