---
okf_version: "0.2"
type: Class
title: Federation
resource: urn:ngm:class:federation
domain: distributed-systems
description: An architecture in which autonomous systems or organisations interoperate through agreed protocols and trust relationships while retaining independent control of their own resources, enabling cross-domain data and service exchange without centralised authority.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:federation-protocol
  - urn:ngm:class:trust-anchor
  - urn:ngm:class:identity-provider
requires:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:authentication
  - urn:ngm:class:trust-framework
  - urn:ngm:class:identity-management
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:cross-domain-authentication
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:decentralised-governance
implements:
  - urn:ngm:class:saml
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:oauth-2-0
bridgesTo:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:identity-management
uses:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:directory-service
supports:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:multi-tenancy
relatedTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:service-mesh
  - urn:ngm:class:api-gateway
---

# Federation

An architecture in which autonomous systems or organisations interoperate through agreed protocols and trust relationships while retaining independent control of their own resources, enabling cross-domain data and service exchange without centralised authority.
