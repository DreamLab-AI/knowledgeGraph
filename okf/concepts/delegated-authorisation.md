---
okf_version: "0.2"
type: Class
title: Delegated Authorisation
resource: urn:ngm:class:delegated-authorisation
domain: security
description: Delegated authorisation is the pattern in which a resource owner grants a third-party application limited access to their resources without sharing their credentials. An authorisation server issues scoped, often time-limited tokens that the application presents to the resource server, so access can be granted, constrained, and revoked independently of the owner's password. OAuth 2.0 is the dominan
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:oauth-2-0
requires:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:federated-identity
dependsOn:
  - urn:ngm:class:authorization
  - urn:ngm:class:identity-provider
implements:
  - urn:ngm:class:authorization
contrastsWith:
  - urn:ngm:class:authentication
bridgesTo:
  - urn:ngm:class:identity-provider
uses:
  - urn:ngm:class:token
supports:
  - urn:ngm:class:api
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:oauth
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:token
  - urn:ngm:class:authorization
---

# Delegated Authorisation

Delegated authorisation is the pattern in which a resource owner grants a third-party application limited access to their resources without sharing their credentials. An authorisation server issues scoped, often time-limited tokens that the application presents to the resource server, so access can be granted, constrained, and revoked independently of the owner's password. OAuth 2.0 is the dominant framework that implements this pattern across web and API ecosystems.
