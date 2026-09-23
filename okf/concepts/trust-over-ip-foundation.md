---
okf_version: "0.2"
type: Class
title: Trust Over IP Foundation
resource: urn:ngm:class:trust-over-ip-foundation
domain: governance
description: The Trust over IP (ToIP) Foundation is a Linux Foundation project established in 2020 that defines a dual-stack architecture combining cryptographic machine trust at the technical layer with human, organisational, and legal trust governance frameworks for decentralised identity. The lower technical stack encompasses Decentralised Identifiers (DIDs), Verifiable Credentials, cryptographic key manage
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:standards-body
requires:
  - urn:ngm:class:did
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:credential-exchange
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cross-border-identity
  - urn:ngm:class:governance-framework
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:w3-c-verifiable-credentials
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:digital-wallet
uses:
  - urn:ngm:class:did-document
  - urn:ngm:class:didcomm
  - urn:ngm:class:openid-for-verifiable-credentials
  - urn:ngm:class:didcomm
supports:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:trust-registry
relatedTo:
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:eidas-regulation
  - urn:ngm:class:w3c-credentials-community-group
  - urn:ngm:class:internet-identity-workshop
---

# Trust Over IP Foundation

The Trust over IP (ToIP) Foundation is a Linux Foundation project established in 2020 that defines a dual-stack architecture combining cryptographic machine trust at the technical layer with human, organisational, and legal trust governance frameworks for decentralised identity. The lower technical stack encompasses Decentralised Identifiers (DIDs), Verifiable Credentials, cryptographic key management, and peer-to-peer messaging protocols across four numbered layers, whilst the upper governance stack provides trust registries, policy schemas, legal agreements, and assurance level definitions enabling parties to establish authoritative trust relationships without a central intermediary. ToIP produces the governance meta-model and interoperability specifications needed to make self-sovereign identity deployments composable and trustworthy at ecosystem scale.
