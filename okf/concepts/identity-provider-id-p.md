---
okf_version: "0.2"
type: Class
title: Identity Provider (IdP)
resource: urn:ngm:class:identity-provider-id-p
domain: infrastructure
description: An authentication service system that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:credential-store
  - urn:ngm:class:session-manager
  - urn:ngm:class:user-directory
  - urn:ngm:class:policy-engine
  - urn:ngm:class:authentication-server
  - urn:ngm:class:token-issuer
requires:
  - urn:ngm:class:authentication-protocol
  - urn:ngm:class:cryptographic-key-store
  - urn:ngm:class:user-database
enables:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:user-provisioning
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-federation
  - urn:ngm:class:single-sign-on
dependsOn:
  - urn:ngm:class:pki-infrastructure
  - urn:ngm:class:directory-service
  - urn:ngm:class:credential-schema
partOf:
  - urn:ngm:class:identity-management-system
  - urn:ngm:class:federation-infrastructure
---

# Identity Provider (IdP)

An authentication service system that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network.
