---
okf_version: "0.2"
type: Class
title: Decentralized Identifier
resource: urn:ngm:class:decentralized-identifier
domain: security
description: A Decentralised Identifier (DID) is a globally unique, persistent, cryptographically verifiable identifier that a subject creates and controls without reliance on any centralised registry, authority, or intermediary. Defined by the W3C DID Core specification, a DID is a URI of the form did:method:identifier that resolves to a DID Document containing public keys, authentication mechanisms, and serv
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:did-resolution
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:did-document
enables:
  - urn:ngm:class:identity-management
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralized-authentication
  - urn:ngm:class:verifiable-credential-vc
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:uri
contrastsWith:
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:oauth
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:cryptographic-key-pair
  - urn:ngm:class:digital-signature
  - urn:ngm:class:did-method
supports:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:privacy-preserving-authentication
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:access-control
---

# Decentralized Identifier

A Decentralised Identifier (DID) is a globally unique, persistent, cryptographically verifiable identifier that a subject creates and controls without reliance on any centralised registry, authority, or intermediary. Defined by the W3C DID Core specification, a DID is a URI of the form did:method:identifier that resolves to a DID Document containing public keys, authentication mechanisms, and service endpoints. DIDs enable self-sovereign identity by decoupling identifier ownership from third-party identity providers, allowing verifiable credential exchange and privacy-preserving authentication across heterogeneous systems.
