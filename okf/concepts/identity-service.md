---
okf_version: "0.2"
type: Class
title: Identity Service
resource: urn:ngm:class:identity-service
domain: security
description: "An identity service is a system component that manages the lifecycle of digital identities, providing authentication, authorisation, and identity data to other services within a platform architecture. It centralises functions such as user registration, credential issuance, session management, and federation so that applications can delegate trust decisions. Identity services are typically exposed "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:identity-management
partOf:
  - urn:ngm:class:service-layer
relatedTo:
  - urn:ngm:class:platform-layer
---

# Identity Service

An identity service is a system component that manages the lifecycle of digital identities, providing authentication, authorisation, and identity data to other services within a platform architecture. It centralises functions such as user registration, credential issuance, session management, and federation so that applications can delegate trust decisions. Identity services are typically exposed via standard protocols such as OAuth 2.0, OpenID Connect, and SAML.
