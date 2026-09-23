---
okf_version: "0.2"
type: Class
title: User Authentication Mechanism
resource: urn:ngm:class:user-authentication-mechanism
domain: infrastructure
description: A User Authentication Mechanism is a protocol or system component that verifies the claimed identity of a user before granting access to a resource or service. Mechanisms include password-based credentials, OAuth 2.0 federated login, biometric binding, multi-factor authentication, and decentralised identity using DIDs, each offering different trade-offs between security, usability, and privacy.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:infra-security-and-identity
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:digital-identity-management
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:decentralised-identity
relatedTo:
  - urn:ngm:class:identity-and-access-management
---

# User Authentication Mechanism

A User Authentication Mechanism is a protocol or system component that verifies the claimed identity of a user before granting access to a resource or service. Mechanisms include password-based credentials, OAuth 2.0 federated login, biometric binding, multi-factor authentication, and decentralised identity using DIDs, each offering different trade-offs between security, usability, and privacy.
