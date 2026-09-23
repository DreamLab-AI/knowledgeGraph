---
okf_version: "0.2"
type: Class
title: Authentication System
resource: urn:ngm:class:authentication-system
domain: security
description: An authentication system is an infrastructure component responsible for verifying the claimed identity of users, devices, or services before granting access to protected resources. It integrates credential management, identity verification workflows, session management, and integration with downstream access control mechanisms to enforce the principle that only legitimate principals can initiate a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:zero-trust-architecture
uses:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:cryptographic-signature
relatedTo:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:authentication-standards
---

# Authentication System

An authentication system is an infrastructure component responsible for verifying the claimed identity of users, devices, or services before granting access to protected resources. It integrates credential management, identity verification workflows, session management, and integration with downstream access control mechanisms to enforce the principle that only legitimate principals can initiate authenticated sessions. Authentication systems range from simple password databases to federated multi-factor frameworks spanning organisational boundaries.
