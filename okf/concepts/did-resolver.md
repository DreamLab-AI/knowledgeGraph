---
okf_version: "0.2"
type: Class
title: DID Resolver
resource: urn:ngm:class:did-resolver
domain: security
description: "A DID resolver is a component that takes a Decentralized Identifier (DID) and returns its associated DID document containing public keys, verification methods, and service endpoints. It implements the W3C DID Resolution specification, dispatching to method-specific drivers (e.g. did:web, did:ion, did:key) to locate and verify the document. Resolvers are the lookup layer that makes DIDs actionable "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:digital-identity
hasPart:
  - urn:ngm:class:did-method
  - urn:ngm:class:did-document
requires:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:did-method
enables:
  - urn:ngm:class:decentralized-authentication
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:self-sovereign-identity
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:dns
implements:
  - urn:ngm:class:w-3-c-did-core-specification
  - urn:ngm:class:did-resolution
contrastsWith:
  - urn:ngm:class:dns-resolver
  - urn:ngm:class:certificate-authority
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:web-of-trust
uses:
  - urn:ngm:class:cryptographic-key-pair
  - urn:ngm:class:json-ld
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:decentralized-identity-did
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:identity-verification
---

# DID Resolver

A DID resolver is a component that takes a Decentralized Identifier (DID) and returns its associated DID document containing public keys, verification methods, and service endpoints. It implements the W3C DID Resolution specification, dispatching to method-specific drivers (e.g. did:web, did:ion, did:key) to locate and verify the document. Resolvers are the lookup layer that makes DIDs actionable for authentication and credential exchange.
