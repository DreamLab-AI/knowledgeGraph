---
okf_version: "0.2"
type: Class
title: Authentication Service
resource: urn:ngm:class:authentication-service
domain: security
description: An authentication service is a system component that verifies the identity of users, devices, or applications attempting to access protected resources. It validates credentials against stored identity information and issues tokens or assertions that enable authorised access across applications and services, forming the foundation of secure identity management in enterprise systems.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:security-service
hasPart:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:token-service
  - urn:ngm:class:credential-store
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:authorisation
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:session-management
  - urn:ngm:class:federated-identity
  - urn:ngm:class:multi-factor-authentication
implements:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:credential-validation
contrastsWith:
  - urn:ngm:class:authorisation
bridgesTo:
  - urn:ngm:class:security-services
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:cryptography
uses:
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:saml
  - urn:ngm:class:lightweight-directory-access-protocol
supports:
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:adaptive-authentication
partOf:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:zero-trust-architecture
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:security-token
---

# Authentication Service

An authentication service is a system component that verifies the identity of users, devices, or applications attempting to access protected resources. It validates credentials against stored identity information and issues tokens or assertions that enable authorised access across applications and services, forming the foundation of secure identity management in enterprise systems.
