---
okf_version: "0.2"
type: Class
title: Identity Federation
resource: urn:ngm:class:identity-federation
domain: infrastructure
description: A distributed authentication workflow that enables cross-domain identity linking through trust relationships, allowing users to access resources across multiple organizations using a single set of credentials.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:trust-establishment
  - urn:ngm:class:credential-mapping
  - urn:ngm:class:attribute-exchange
  - urn:ngm:class:policy-negotiation
  - urn:ngm:class:token-translation
  - urn:ngm:class:session-propagation
requires:
  - urn:ngm:class:federation-protocol
  - urn:ngm:class:identity-provider-id-p
  - urn:ngm:class:trust-framework
  - urn:ngm:class:metadata-exchange
enables:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:cross-domain-sso
  - urn:ngm:class:b2b-collaboration
  - urn:ngm:class:multi-organization-access
dependsOn:
  - urn:ngm:class:pki-infrastructure
  - urn:ngm:class:security-token
  - urn:ngm:class:attribute-schema
  - urn:ngm:class:federation-agreement
partOf:
  - urn:ngm:class:distributed-authentication-architecture
  - urn:ngm:class:identity-management-system
---

# Identity Federation

A distributed authentication workflow that enables cross-domain identity linking through trust relationships, allowing users to access resources across multiple organizations using a single set of credentials.
