---
okf_version: "0.2"
type: Class
title: Decentralised Identifier
resource: urn:ngm:class:decentralised-identifier
domain: security
description: A type of globally unique identifier, defined by a W3C standard, that is controlled by its subject and resolves to a DID document containing public keys and service endpoints, without depending on a central registry or issuing authority.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:did-document
  - urn:ngm:class:did-method
enables:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralised-authentication
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:uri-scheme
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:centralised-identifier
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:identity-management
uses:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:digital-signature
  - urn:ngm:class:json-ld
standardizedBy:
  - urn:ngm:class:w3-c
partOf:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:oauth
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:identity-resolution
---

# Decentralised Identifier

A type of globally unique identifier, defined by a W3C standard, that is controlled by its subject and resolves to a DID document containing public keys and service endpoints, without depending on a central registry or issuing authority.
