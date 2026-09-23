---
okf_version: "0.2"
type: Class
title: Access Token
resource: urn:ngm:class:access-token
domain: security
description: An access token is a credential that a client presents to a resource server to access protected resources within a granted scope and lifetime. Typically short-lived and often a bearer token, it carries or references the authorisation decision so the resource server need not re-check with the authorisation server on every request. Access tokens are the workhorse credential of OAuth 2.0 and API auth
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:oauth-2-0
hasPart:
  - urn:ngm:class:token
requires:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:api
dependsOn:
  - urn:ngm:class:oauth
implements:
  - urn:ngm:class:authorization
contrastsWith:
  - urn:ngm:class:refresh-token
bridgesTo:
  - urn:ngm:class:identity-provider
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:bearer-token
supports:
  - urn:ngm:class:single-sign-on
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:token
  - urn:ngm:class:oauth
  - urn:ngm:class:authorization
  - urn:ngm:class:session-management
---

# Access Token

An access token is a credential that a client presents to a resource server to access protected resources within a granted scope and lifetime. Typically short-lived and often a bearer token, it carries or references the authorisation decision so the resource server need not re-check with the authorisation server on every request. Access tokens are the workhorse credential of OAuth 2.0 and API authorisation.
