---
okf_version: "0.2"
type: Class
title: Trust Infrastructure
resource: urn:ngm:class:trust-infrastructure
domain: infrastructure
description: "Foundational systems providing authentication, authorisation, encryption, and trust establishment mechanisms. Enables secure interaction between participants in distributed systems through cryptographic protocols, identity verification, and access control policies. Comprises the hardware, software, and procedural controls that collectively guarantee confidentiality, integrity, and availability of "
maturity: draft
quality: 0.68
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:infrastructure
hasPart:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:encryption-service
  - urn:ngm:class:key-management
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-provider
  - urn:ngm:class:cryptographic-infrastructure
requires:
  - urn:ngm:class:network-layer
  - urn:ngm:class:physical-layer
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
  - urn:ngm:class:data-confidentiality
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:secure-communication
dependsOn:
  - urn:ngm:class:network-layer
  - urn:ngm:class:physical-layer
implements:
  - urn:ngm:class:policy-enforcement
  - urn:ngm:class:trust-framework
contrastsWith:
  - urn:ngm:class:zero-trust-architecture
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:trust-framework
  - urn:ngm:class:policy-enforcement
supports:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:digital-signature
standardizedBy:
  - urn:ngm:class:x509-standard
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
---

# Trust Infrastructure

Foundational systems providing authentication, authorisation, encryption, and trust establishment mechanisms. Enables secure interaction between participants in distributed systems through cryptographic protocols, identity verification, and access control policies. Comprises the hardware, software, and procedural controls that collectively guarantee confidentiality, integrity, and availability of trusted communications.
