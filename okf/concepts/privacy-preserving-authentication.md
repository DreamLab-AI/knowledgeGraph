---
okf_version: "0.2"
type: Class
title: Privacy-Preserving Authentication
resource: urn:ngm:class:privacy-preserving-authentication
domain: security
description: Privacy-preserving authentication encompasses cryptographic mechanisms that allow a party to prove identity, membership, or credential possession to a verifier without revealing the underlying identity attributes, credential content, or linkage information across sessions. Core techniques include zero-knowledge proofs, anonymous credentials (e.g., U-Prove, BBS+), blind signatures, and selective di
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:credential-issuer
  - urn:ngm:class:commitment-scheme
enables:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:anonymous-credential-system
  - urn:ngm:class:unlinkable-authentication
implements:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:minimal-disclosure-principle
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:oauth
bridgesTo:
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:gdpr-compliance
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:zero-knowledge-proof-zkp
  - urn:ngm:class:blind-signatures
  - urn:ngm:class:bbs-signature
  - urn:ngm:class:ring-signature
supports:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:age-verification
standardizedBy:
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:e-idas-2-0
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:post-quantum-cryptography
---

# Privacy-Preserving Authentication

Privacy-preserving authentication encompasses cryptographic mechanisms that allow a party to prove identity, membership, or credential possession to a verifier without revealing the underlying identity attributes, credential content, or linkage information across sessions. Core techniques include zero-knowledge proofs, anonymous credentials (e.g., U-Prove, BBS+), blind signatures, and selective disclosure, enabling authentication that is both unforgeable and unlinkable. The goal is to satisfy verifier assurance requirements while minimising the personal data exposed in each authentication event.
