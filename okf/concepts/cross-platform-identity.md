---
okf_version: "0.2"
type: Class
title: Cross-Platform Identity
resource: urn:ngm:class:cross-platform-identity
domain: infrastructure
description: Cross-platform identity refers to the capability of linking and managing a user's electronic identity and attributes across multiple distinct systems, platforms, and organisational boundaries, enabling seamless authentication and authorisation across heterogeneous environments through federated identity management.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:federation
requires:
  - urn:ngm:class:trust
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:multi-factor-authentication
enables:
  - urn:ngm:class:federated-identity-system
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:user-experience
  - urn:ngm:class:authorisation
  - urn:ngm:class:federated-identity-system
dependsOn:
  - urn:ngm:class:directory-service
  - urn:ngm:class:attribute-based-access-control
implements:
  - urn:ngm:class:identity-federation
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:trust
contrastsWith:
  - urn:ngm:class:siloed-identity
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:did
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:saml
  - urn:ngm:class:scim
standardizedBy:
  - urn:ngm:class:oasis-standards
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:zero-trust-architecture
---

# Cross-Platform Identity

Cross-platform identity refers to the capability of linking and managing a user's electronic identity and attributes across multiple distinct systems, platforms, and organisational boundaries, enabling seamless authentication and authorisation across heterogeneous environments through federated identity management.
