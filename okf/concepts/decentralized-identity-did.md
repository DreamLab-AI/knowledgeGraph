---
okf_version: "0.2"
type: Class
title: Decentralized Identity (DID)
resource: urn:ngm:class:decentralized-identity-did
domain: infrastructure
description: A W3C standard for self-sovereign digital identities that are globally unique, cryptographically verifiable, and controlled by the identity subject without requiring centralized authorities.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:did-document
  - urn:ngm:class:did-method
  - urn:ngm:class:did-resolver
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:did-uri
requires:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:decentralized-authentication
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:cross-domain-identity
dependsOn:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:json-ld
  - urn:ngm:class:blockchain-technology
bridgesTo:
  - urn:ngm:class:did-nostr-identity
partOf:
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:identity-management-system
---

# Decentralized Identity (DID)

A W3C standard for self-sovereign digital identities that are globally unique, cryptographically verifiable, and controlled by the identity subject without requiring centralized authorities.
