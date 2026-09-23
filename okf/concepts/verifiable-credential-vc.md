---
okf_version: "0.2"
type: Class
title: Verifiable Credential (VC)
resource: urn:ngm:class:verifiable-credential-vc
domain: spatial-computing
description: A W3C standard for tamper-evident credentials that can be cryptographically verified, containing claims made by an issuer about a subject, enabling trustable digital attestations without requiring direct communication with the issuer.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-standards-and-interop
hasPart:
  - urn:ngm:class:credential-schema
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:claim
  - urn:ngm:class:issuer-signature
  - urn:ngm:class:credential-metadata
requires:
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:decentralized-identity-did
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-identity-wallet
enables:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:verifiable-presentations
  - urn:ngm:class:trustable-attestations
  - urn:ngm:class:privacy-preserving-verification
dependsOn:
  - urn:ngm:class:w3c-vc-data-model
  - urn:ngm:class:json-ld
  - urn:ngm:class:linked-data-signatures
  - urn:ngm:class:credential-status-registry
partOf:
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:trust-infrastructure
---

# Verifiable Credential (VC)

A W3C standard for tamper-evident credentials that can be cryptographically verified, containing claims made by an issuer about a subject, enabling trustable digital attestations without requiring direct communication with the issuer.
