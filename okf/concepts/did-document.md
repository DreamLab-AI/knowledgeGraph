---
okf_version: "0.2"
type: Class
title: DID Document
resource: urn:ngm:class:did-document
domain: blockchain
description: A DID Document is a JSON-LD resource resolved from a Decentralised Identifier (DID) that expresses the DID subject's cryptographic public keys, authentication methods, assertion methods, key agreement protocols, capability delegation mechanisms, and service endpoints. Defined by the W3C DID Core specification, a DID Document is the machine-readable artefact that enables any verifier to discover ho
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:decentralised-identifier
hasPart:
  - urn:ngm:class:verification-method
  - urn:ngm:class:service-endpoint
  - urn:ngm:class:verification-relationship
requires:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:did-method
  - urn:ngm:class:did-resolver
enables:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralised-authentication
  - urn:ngm:class:key-agreement-protocol
contrastsWith:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:agent-identity
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:json-ld
  - urn:ngm:class:linked-data
  - urn:ngm:class:digital-signature
standardizedBy:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:w3-c
partOf:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:self-sovereign-identity
relatedTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:identity-verification
  - urn:ngm:class:did-resolution
  - urn:ngm:class:did-url
---

# DID Document

A DID Document is a JSON-LD resource resolved from a Decentralised Identifier (DID) that expresses the DID subject's cryptographic public keys, authentication methods, assertion methods, key agreement protocols, capability delegation mechanisms, and service endpoints. Defined by the W3C DID Core specification, a DID Document is the machine-readable artefact that enables any verifier to discover how to authenticate with or communicate securely to a DID subject without relying on a centralised identity authority. DID Documents are anchored to a Verifiable Data Registry — such as a distributed ledger, blockchain, or peer-to-peer network — via a DID method-specific read operation, making them a foundational component of self-sovereign identity and verifiable credential ecosystems.
