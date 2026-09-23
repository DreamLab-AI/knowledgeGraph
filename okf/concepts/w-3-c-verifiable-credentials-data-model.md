---
okf_version: "0.2"
type: Class
title: W3C Verifiable Credentials Data Model
resource: urn:ngm:class:w-3-c-verifiable-credentials-data-model
domain: security
description: The W3C Verifiable Credentials Data Model (VCDM) is a W3C Recommendation that defines a standardised, machine-readable data model for expressing and cryptographically verifying claims about subjects on the Web. It establishes a three-party trust triangle comprising an issuer that creates and signs credentials, a holder that stores and presents them, and a verifier that checks their authenticity an
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:technical-standard
hasPart:
  - urn:ngm:class:verifiable-presentation
  - urn:ngm:class:credential-subject
  - urn:ngm:class:credential-status
requires:
  - urn:ngm:class:did
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:json-ld
enables:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:digital-identity-wallet
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralised-identity
contrastsWith:
  - urn:ngm:class:saml
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:digital-identity-wallet
uses:
  - urn:ngm:class:linked-data-proofs
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:digital-signature
  - urn:ngm:class:selective-disclosure-jwt
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:bitstring-status-list
  - urn:ngm:class:trust-registry
---

# W3C Verifiable Credentials Data Model

The W3C Verifiable Credentials Data Model (VCDM) is a W3C Recommendation that defines a standardised, machine-readable data model for expressing and cryptographically verifying claims about subjects on the Web. It establishes a three-party trust triangle comprising an issuer that creates and signs credentials, a holder that stores and presents them, and a verifier that checks their authenticity and validity. Credentials are expressed as JSON or JSON-LD documents and may be signed using proof mechanisms such as Data Integrity Proofs or JWT/SD-JWT, enabling selective disclosure and privacy-preserving presentation. The model underpins decentralised identity systems and Self-Sovereign Identity architectures by separating identity assertion from centralised identity providers.
