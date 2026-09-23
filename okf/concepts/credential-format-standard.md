---
okf_version: "0.2"
type: Class
title: Credential Format Standard
resource: urn:ngm:class:credential-format-standard
domain: security
description: Technical specifications defining the structure, encoding, and cryptographic verification methods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats such as W3C Verifiable Credentials and ISO mDL.
maturity: draft
quality: 0.65
is-a:
  - urn:ngm:class:identity-standards
requires:
  - urn:ngm:class:cryptographic-proofs
  - urn:ngm:class:standards-body
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:digital-signature
  - urn:ngm:class:issuer-infrastructure
enables:
  - urn:ngm:class:credential-verification
  - urn:ngm:class:identity-portability
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:trust-interoperability
implements:
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:sd-jwt
contrastsWith:
  - urn:ngm:class:saml-assertion
bridgesTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:digital-identity-wallet
uses:
  - urn:ngm:class:json-ld
  - urn:ngm:class:cbor
  - urn:ngm:class:linked-data
supports:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:self-sovereign-identity
relatedTo:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:identity-verification
  - urn:ngm:class:trust-framework
---

# Credential Format Standard

Technical specifications defining the structure, encoding, and cryptographic verification methods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats such as W3C Verifiable Credentials and ISO mDL.
