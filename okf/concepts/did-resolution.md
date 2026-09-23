---
okf_version: "0.2"
type: Class
title: DID Resolution
resource: urn:ngm:class:did-resolution
domain: security
description: DID Resolution is the process of dereferencing a Decentralised Identifier (DID) to retrieve its associated DID Document, which contains cryptographic public keys, authentication methods, and service endpoints. Defined by the W3C DID Core specification, resolution is performed by a DID Resolver that applies the read operation of the relevant DID Method — such as did:web, did:key, or did:ion — again
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:decentralized-identifier
hasPart:
  - urn:ngm:class:did-document
  - urn:ngm:class:did-resolution-metadata
  - urn:ngm:class:did-document-metadata
requires:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:did-method
  - urn:ngm:class:verifiable-data-registry
enables:
  - urn:ngm:class:identity-verification-system
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralized-authentication
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credential-vc
implements:
  - urn:ngm:class:w-3-c-did-core-specification
contrastsWith:
  - urn:ngm:class:dns
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:dns
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:did-resolver
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-key-management
standardizedBy:
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:identity-management
  - urn:ngm:class:service-endpoint
  - urn:ngm:class:did-url-dereferencing
  - urn:ngm:class:didcomm
---

# DID Resolution

DID Resolution is the process of dereferencing a Decentralised Identifier (DID) to retrieve its associated DID Document, which contains cryptographic public keys, authentication methods, and service endpoints. Defined by the W3C DID Core specification, resolution is performed by a DID Resolver that applies the read operation of the relevant DID Method — such as did:web, did:key, or did:ion — against its underlying verifiable data registry. The resolution process returns both a DID Document and Resolution Metadata describing the outcome, enabling verifiers to authenticate subjects, verify Verifiable Credentials, and establish secure communication channels in decentralised identity systems.
