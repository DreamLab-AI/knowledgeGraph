---
okf_version: "0.2"
type: Class
title: W3C DID Specification
resource: urn:ngm:class:w3-c-did-specification
domain: security
description: The W3C Decentralized Identifiers (DIDs) specification is a World Wide Web Consortium recommendation that defines a new type of globally unique, persistent, cryptographically verifiable identifier that does not require a centralised registration authority. A DID resolves to a DID Document containing cryptographic material, service endpoints, and verification methods, enabling the subject to authen
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:w3-c-did
hasPart:
  - urn:ngm:class:did-document
  - urn:ngm:class:verification-method
  - urn:ngm:class:service-endpoint
requires:
  - urn:ngm:class:did-method
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:did-resolver
enables:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralized-identity-did
  - urn:ngm:class:didcomm
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:eudi-wallet
implements:
  - urn:ngm:class:decentralised-identifier
contrastsWith:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:x-509-certificate
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:e-idas-2-0
  - urn:ngm:class:open-id-connect
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:json-ld
  - urn:ngm:class:uri-scheme
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:w3-c
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:did-document
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:digital-identity-standards
---

# W3C DID Specification

The W3C Decentralized Identifiers (DIDs) specification is a World Wide Web Consortium recommendation that defines a new type of globally unique, persistent, cryptographically verifiable identifier that does not require a centralised registration authority. A DID resolves to a DID Document containing cryptographic material, service endpoints, and verification methods, enabling the subject to authenticate and authorise interactions without reliance on any single identity provider. The specification defines a generic DID syntax and data model that is method-agnostic, with specific DID methods implementing the create/read/update/deactivate operations on different verifiable data registries including blockchains, distributed ledgers, and peer-to-peer networks. It became a W3C Recommendation in July 2022.
