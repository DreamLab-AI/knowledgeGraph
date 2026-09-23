---
okf_version: "0.2"
type: Class
title: OpenID Connect
resource: urn:ngm:class:open-id-connect
domain: infrastructure
description: "OpenID Connect (OIDC) is a federated identity and authentication protocol standardised by the OpenID Foundation that adds an authentication layer on top of the OAuth 2.0 authorisation framework. Upon successful authentication, an OIDC-compliant identity provider issues a signed JSON Web Token (ID Token) containing identity claims — such as subject identifier, email, and session expiry — which the "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:identity-federation
enables:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:api-security
dependsOn:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:json-web-key-set
  - urn:ngm:class:tls
implements:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:relying-party
contrastsWith:
  - urn:ngm:class:saml
  - urn:ngm:class:kerberos
  - urn:ngm:class:ldap
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:digital-identity-wallet
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:federated-identity
standardizedBy:
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:internet-engineering-task-force
relatedTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:access-control
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:financial-grade-api
---

# OpenID Connect

OpenID Connect (OIDC) is a federated identity and authentication protocol standardised by the OpenID Foundation that adds an authentication layer on top of the OAuth 2.0 authorisation framework. Upon successful authentication, an OIDC-compliant identity provider issues a signed JSON Web Token (ID Token) containing identity claims — such as subject identifier, email, and session expiry — which the relying party verifies cryptographically using the provider's published JSON Web Key Set without querying the provider again. OIDC defines standard flows (authorisation code, implicit, hybrid, and device code), a discovery endpoint, and a UserInfo endpoint, enabling single sign-on across web and mobile applications and serving as the identity spine for enterprise federation, consumer social logins, open banking APIs, and decentralised identity wallets.
