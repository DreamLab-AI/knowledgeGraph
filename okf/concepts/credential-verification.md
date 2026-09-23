---
okf_version: "0.2"
type: Class
title: Credential Verification
resource: urn:ngm:class:credential-verification
domain: security
description: Credential verification is the process of cryptographically or institutionally confirming the authenticity, integrity, and current validity of a credential — such as a digital certificate, verifiable credential, or identity assertion — issued by a trusted authority about a subject, so that a relying party can grant access or trust without real-time contact with the original issuer. In decentralise
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:authentication
hasPart:
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:schema-validation
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:revocation-check
requires:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:revocation-registry
  - urn:ngm:class:trust-anchor
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:digital-identity-management
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:trust-establishment
dependsOn:
  - urn:ngm:class:credential-schema
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:certificate-authority
contrastsWith:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:password-authentication
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ledger-technology
uses:
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:decentralized-identity-did
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:digital-signature
standardizedBy:
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:open-id4-vc
  - urn:ngm:class:x-509-certificate
partOf:
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:digital-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:kyc
  - urn:ngm:class:mobile-driving-licence
---

# Credential Verification

Credential verification is the process of cryptographically or institutionally confirming the authenticity, integrity, and current validity of a credential — such as a digital certificate, verifiable credential, or identity assertion — issued by a trusted authority about a subject, so that a relying party can grant access or trust without real-time contact with the original issuer. In decentralised identity systems it relies on public-key cryptography, digital signatures, and optionally distributed ledgers to enable privacy-preserving, tamper-evident verification. The process must also resolve issuer keys and query revocation registries (via CRL, OCSP, or on-chain status) to ensure invalidated credentials cannot be fraudulently reused. Selective-disclosure techniques, including zero-knowledge proofs and SD-JWTs, allow subjects to prove specific attributes without exposing unnecessary personal data.
