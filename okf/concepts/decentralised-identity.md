---
okf_version: "0.2"
type: Class
title: Decentralised Identity
resource: urn:ngm:class:decentralised-identity
domain: blockchain
description: Decentralised Identity is a model for digital identity management in which individuals, organisations, and devices create, own, and control their own cryptographic identifiers and verifiable credentials without dependence on centralised identity providers or registries. Identifiers are anchored to a verifiable data registry — typically a blockchain or distributed ledger — as Decentralised Identifi
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:did-method
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:digital-identity
  - urn:ngm:class:digital-identity
implements:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:openid-for-verifiable-credentials
contrastsWith:
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:federated-identity
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:ai-agent-identity
  - urn:ngm:class:access-control
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did-document
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:public-key-cryptography
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:open-id-foundation
relatedTo:
  - urn:ngm:class:credential-schema
  - urn:ngm:class:federated-identity
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:trust-framework
---

# Decentralised Identity

Decentralised Identity is a model for digital identity management in which individuals, organisations, and devices create, own, and control their own cryptographic identifiers and verifiable credentials without dependence on centralised identity providers or registries. Identifiers are anchored to a verifiable data registry — typically a blockchain or distributed ledger — as Decentralised Identifiers (DIDs) standardised by the W3C DID Core 1.0 specification, which defines a URI scheme resolving to a DID Document containing public keys and service endpoints. Credentials attesting to attributes of the DID subject are issued by trusted parties as W3C Verifiable Credentials, stored in a user-controlled digital wallet, and selectively disclosed to verifiers using zero-knowledge proofs or selective-disclosure mechanisms. The model operationalises Self-Sovereign Identity principles, giving subjects full autonomy over their identity data across systems and jurisdictions.
