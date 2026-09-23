---
okf_version: "0.2"
type: Class
title: OAuth 2.0
resource: urn:ngm:class:oauth-2-0
domain: infrastructure
description: OAuth 2.0 is an open authorisation framework standardised as RFC 6749 (2012) that enables a resource owner to delegate scoped, time-limited access to their protected resources on a resource server to a third-party client application, without exposing credentials. The framework separates four distinct roles—resource owner, client, authorisation server, and resource server—and defines multiple grant
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:authorisation
  - urn:ngm:class:refresh-token
  - urn:ngm:class:access-token
  - urn:ngm:class:pkce
  - urn:ngm:class:authorisation
  - urn:ngm:class:client-credentials-flow
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:http
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:http
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:identity-federation
  - urn:ngm:class:delegated-authorisation
  - urn:ngm:class:api-security
implements:
  - urn:ngm:class:rfc-6749
contrastsWith:
  - urn:ngm:class:oauth
  - urn:ngm:class:api-key-authentication
  - urn:ngm:class:oauth
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:bearer-token
  - urn:ngm:class:authorisation
  - urn:ngm:class:scope
  - urn:ngm:class:authorisation
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:least-privilege
standardizedBy:
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
  - urn:ngm:class:federated-identity
---

# OAuth 2.0

OAuth 2.0 is an open authorisation framework standardised as RFC 6749 (2012) that enables a resource owner to delegate scoped, time-limited access to their protected resources on a resource server to a third-party client application, without exposing credentials. The framework separates four distinct roles—resource owner, client, authorisation server, and resource server—and defines multiple grant types (authorisation code, client credentials, device code, refresh token) suited to different trust levels and client profiles. Access tokens with explicit scopes enforce the principle of least privilege, while extensions such as PKCE (RFC 7636), JWT access tokens (RFC 9068), token introspection (RFC 7662), and token revocation (RFC 7009) complete the lifecycle. OAuth 2.0 serves as the foundation upon which OpenID Connect 1.0 adds federated authentication, together underpinning modern Identity and Access Management platforms and Zero Trust Architecture policies.
