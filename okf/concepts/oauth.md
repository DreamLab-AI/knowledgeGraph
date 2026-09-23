---
okf_version: "0.2"
type: Class
title: OAuth
resource: urn:ngm:class:oauth
domain: security
description: An open standard for delegated authorisation that allows a user to grant a third-party application limited access to a protected resource on behalf of a resource owner, using scoped, revocable access tokens rather than sharing credentials.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:authorisation
hasPart:
  - urn:ngm:class:access-token
  - urn:ngm:class:refresh-token
  - urn:ngm:class:scope
requires:
  - urn:ngm:class:authorisation
  - urn:ngm:class:access-control
  - urn:ngm:class:http
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:api-security
  - urn:ngm:class:federated-identity
  - urn:ngm:class:delegated-authorisation
dependsOn:
  - urn:ngm:class:identity-provider
implements:
  - urn:ngm:class:oauth-2-0
contrastsWith:
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
bridgesTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:microservices
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:identity-provider
uses:
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:pkce
  - urn:ngm:class:bearer-token
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:rfc-6749
partOf:
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:zero-trust-architecture
---

# OAuth

An open standard for delegated authorisation that allows a user to grant a third-party application limited access to a protected resource on behalf of a resource owner, using scoped, revocable access tokens rather than sharing credentials.
