---
okf_version: "0.2"
type: Class
title: Credential Issuance
resource: urn:ngm:class:credential-issuance
domain: security
description: Credential issuance is the process by which an authoritative entity — an issuer — creates, signs, and delivers a structured attestation about a subject's attributes, qualifications, or identity to that subject or to a designated holder. In the W3C Verifiable Credentials model, issuance involves binding claims to a subject's decentralised identifier using the issuer's cryptographic key, producing a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:credential-revocation
  - urn:ngm:class:holder-binding
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:key-management
  - urn:ngm:class:identity-proofing
enables:
  - urn:ngm:class:credential-verification
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:digital-trust
  - urn:ngm:class:credential-presentation
dependsOn:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:trust-framework
contrastsWith:
  - urn:ngm:class:federated-identity
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:credential-schema
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:selective-disclosure
standardizedBy:
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:sd-jwt-vc
relatedTo:
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:e-idas
---

# Credential Issuance

Credential issuance is the process by which an authoritative entity — an issuer — creates, signs, and delivers a structured attestation about a subject's attributes, qualifications, or identity to that subject or to a designated holder. In the W3C Verifiable Credentials model, issuance involves binding claims to a subject's decentralised identifier using the issuer's cryptographic key, producing a tamper-evident credential that the holder can present to verifiers without returning to the issuer. The issuance process encompasses schema selection, claim population, signature generation, and delivery, and may be implemented with varying degrees of issuer privacy, holder binding strength, and revocability.
