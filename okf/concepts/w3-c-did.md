---
okf_version: "0.2"
type: Class
title: W3C DID
resource: urn:ngm:class:w3-c-did
domain: security
description: W3C DID (Decentralised Identifier) is a W3C Recommendation standard (published July 2022) that defines a new type of globally unique, persistent, and cryptographically verifiable identifier that does not require a centralised registration authority. A DID resolves to a DID Document — a JSON-LD data structure containing public keys, authentication mechanisms, and service endpoints — enabling the DI
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:w3-c-did-core
hasPart:
  - urn:ngm:class:did-document
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:did-method
  - urn:ngm:class:did-resolver
  - urn:ngm:class:verification-method
requires:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:json-ld
enables:
  - urn:ngm:class:decentralised-trust
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-identity-management
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:selective-disclosure
implements:
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:trust-over-ip-stack
contrastsWith:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:open-id4-vc
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:uri
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:sidetree-protocol
---

# W3C DID

W3C DID (Decentralised Identifier) is a W3C Recommendation standard (published July 2022) that defines a new type of globally unique, persistent, and cryptographically verifiable identifier that does not require a centralised registration authority. A DID resolves to a DID Document — a JSON-LD data structure containing public keys, authentication mechanisms, and service endpoints — enabling the DID subject to prove control and establish secure communication without depending on a third-party identity provider. DIDs are the foundational primitive for self-sovereign identity systems.
