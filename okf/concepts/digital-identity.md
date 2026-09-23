---
okf_version: "0.2"
type: Class
title: Digital Identity
resource: urn:ngm:class:digital-identity
domain: security
description: A digital representation of an entity encompassing personally identifiable information, behavioral data, credentials, and authentication attributes that enables individuals and organizations to establish presence, ownership, and trust within virtual environments, blockchain networks, and metaverse platforms.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:identity
hasPart:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:digital-signature
requires:
  - urn:ngm:class:credential-storage
  - urn:ngm:class:privacy-controls
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorization
  - urn:ngm:class:access-control
  - urn:ngm:class:digital-presence
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:did-nostr-identity
contrastsWith:
  - urn:ngm:class:federated-identity
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:did-nostr-identity
uses:
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:biometric-authentication
supports:
  - urn:ngm:class:metaverse
  - urn:ngm:class:data-privacy
standardizedBy:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:w3-c-verifiable-credentials
partOf:
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:kyc
---

# Digital Identity

A digital representation of an entity encompassing personally identifiable information, behavioral data, credentials, and authentication attributes that enables individuals and organizations to establish presence, ownership, and trust within virtual environments, blockchain networks, and metaverse platforms.
