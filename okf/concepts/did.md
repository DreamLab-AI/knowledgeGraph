---
okf_version: "0.2"
type: Class
title: DID
resource: urn:ngm:class:did
domain: security
description: A decentralised identifier, a type of globally unique identifier that enables verifiable, self-sovereign digital identity without reliance on a central registry.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:self-sovereign-identity
requires:
  - urn:ngm:class:public-key
  - urn:ngm:class:cryptography
  - urn:ngm:class:did-document
  - urn:ngm:class:did-resolver
enables:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:authentication
  - urn:ngm:class:key-agreement
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:did-method
contrastsWith:
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:federated-identity
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:decentralized-identifiers
uses:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:json-ld
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:privacy-preserving-authentication
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:wallet
  - urn:ngm:class:trust-registry
  - urn:ngm:class:service-endpoint
---

# DID

A decentralised identifier, a type of globally unique identifier that enables verifiable, self-sovereign digital identity without reliance on a central registry.
