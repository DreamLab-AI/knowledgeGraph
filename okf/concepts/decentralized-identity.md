---
okf_version: "0.2"
type: Class
title: Decentralized Identity
resource: urn:ngm:class:decentralized-identity
domain: security
description: Decentralized Identity is an approach to digital identity management in which individuals, organisations, and devices hold cryptographic control over their own identifiers and credentials without dependence on any centralised identity provider. Built upon the W3C Decentralized Identifiers (DID) v1.0 Recommendation and the W3C Verifiable Credentials Data Model, it establishes a tripartite trust tri
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:digital-identity
hasPart:
  - urn:ngm:class:did-document
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:credential-verification
  - urn:ngm:class:didcomm
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:verifiable-credential-vc
requires:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:cross-border-authentication
implements:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:oauth
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:web3
  - urn:ngm:class:iot-device-authentication
uses:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:blockchain
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:distributed-ledger-technology
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:decentralized-identity-foundation
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:trust-framework
---

# Decentralized Identity

Decentralized Identity is an approach to digital identity management in which individuals, organisations, and devices hold cryptographic control over their own identifiers and credentials without dependence on any centralised identity provider. Built upon the W3C Decentralized Identifiers (DID) v1.0 Recommendation and the W3C Verifiable Credentials Data Model, it establishes a tripartite trust triangle of issuers, holders, and verifiers where credential authenticity is established through public-key cryptography anchored to a verifiable data registry — such as a distributed ledger or DNS — rather than through a privileged intermediary. This architecture realises self-sovereign identity principles: the subject generates and controls their key material, selectively discloses attributes using mechanisms such as BBS+ signatures or SD-JWT, and satisfies verifiers without exposing credentials to central surveillance or requiring real-time queries to the issuer.
