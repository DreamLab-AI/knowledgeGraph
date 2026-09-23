---
okf_version: "0.2"
type: Class
title: Digital Identity Management
resource: urn:ngm:class:digital-identity-management
domain: security
description: The systems, processes, and technologies for creating, maintaining, and verifying digital representations of individuals and entities across virtual environments, incorporating self-sovereign identity principles, decentralized identifiers, and verifiable credentials for secure cross-platform authentication.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:identity-systems
hasPart:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:credential-storage
requires:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:identity-provider
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:identity-providers
  - urn:ngm:class:credential-storage
enables:
  - urn:ngm:class:user-authentication
  - urn:ngm:class:cross-platform-identity
  - urn:ngm:class:privacy-controls
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:privacy-control
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:zero-knowledge-proof
contrastsWith:
  - urn:ngm:class:centralised-identity
  - urn:ngm:class:federated-identity
bridgesTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:metaverse
  - urn:ngm:class:blockchain
standardizedBy:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:e-idas-2-0
  - urn:ngm:class:iso-27001
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:kyc
---

# Digital Identity Management

The systems, processes, and technologies for creating, maintaining, and verifying digital representations of individuals and entities across virtual environments, incorporating self-sovereign identity principles, decentralized identifiers, and verifiable credentials for secure cross-platform authentication.
