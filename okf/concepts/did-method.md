---
okf_version: "0.2"
type: Class
title: DID Method
resource: urn:ngm:class:did-method
domain: security
description: A DID Method is a specification that defines how a particular type of Decentralised Identifier (DID) is created, resolved, updated, and deactivated, encoding the syntax rules and CRUD semantics for identifiers anchored to a specific verifiable data registry, ledger, or peer-to-peer network. Each method is identified by a unique method name embedded in the DID string (e.g. did:web, did:key, did:ion
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:decentralized-identity
requires:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:did-document
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:decentralised-identifier
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-identity
  - urn:ngm:class:decentralised-authentication
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:did-resolution
  - urn:ngm:class:did-resolution
contrastsWith:
  - urn:ngm:class:oauth
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ipfs
uses:
  - urn:ngm:class:cryptographic-key-pair
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:content-addressing
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:decentralized-identity-foundation
relatedTo:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:did-resolver
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:digital-identity-wallet
---

# DID Method

A DID Method is a specification that defines how a particular type of Decentralised Identifier (DID) is created, resolved, updated, and deactivated, encoding the syntax rules and CRUD semantics for identifiers anchored to a specific verifiable data registry, ledger, or peer-to-peer network. Each method is identified by a unique method name embedded in the DID string (e.g. did:web, did:key, did:ion), and must provide a compliant DID Resolver that retrieves the corresponding DID Document containing public keys and service endpoints. DID Methods are standardised through the W3C DID Core specification and registered in the DIF DID Method Registry, enabling interoperable self-sovereign identity across heterogeneous systems. The diversity of methods reflects trade-offs between decentralisation guarantees, key management complexity, ledger dependency, and resolver performance.
