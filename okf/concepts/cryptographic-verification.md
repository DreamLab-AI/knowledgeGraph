---
okf_version: "0.2"
type: Class
title: Cryptographic Verification
resource: urn:ngm:class:cryptographic-verification
domain: security
description: Cryptographic Verification is the process of using cryptographic primitives—such as digital signatures, hash functions, and zero-knowledge proofs—to confirm the authenticity, integrity, and non-repudiation of data, identities, or transactions. It forms the trust foundation for blockchain systems, content authentication, and decentralised identity schemes.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:infra-security-and-identity
requires:
  - urn:ngm:class:cryptographic-key-management
enables:
  - urn:ngm:class:content-authentication
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:tee
implements:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:certificate-authority
contrastsWith:
  - urn:ngm:class:password-authentication
bridgesTo:
  - urn:ngm:class:cryptographic-system
  - urn:ngm:class:smart-contract
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:identity-verification
  - urn:ngm:class:supply-chain-provenance
standardizedBy:
  - urn:ngm:class:nist-cryptographic-standards
  - urn:ngm:class:x-509-certificate
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:tls
---

# Cryptographic Verification

Cryptographic Verification is the process of using cryptographic primitives—such as digital signatures, hash functions, and zero-knowledge proofs—to confirm the authenticity, integrity, and non-repudiation of data, identities, or transactions. It forms the trust foundation for blockchain systems, content authentication, and decentralised identity schemes.
