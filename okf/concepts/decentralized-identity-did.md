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
  - urn:ngm:class:public-key-infrastructure
enables:
  - urn:ngm:class:decentralised-authentication
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:cross-domain-identity
dependsOn:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:json-data-interchange-format-ld
  - urn:ngm:class:blockchain-technology
bridgesTo:
  - urn:ngm:class:did-nostr-identity
partOf:
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:identity-management-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Decentralized Identity (DID)

A W3C standard for self-sovereign digital identities that are globally unique, cryptographically verifiable, and controlled by the identity subject without requiring centralized authorities.
