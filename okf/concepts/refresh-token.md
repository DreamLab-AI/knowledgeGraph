---
okf_version: "0.2"
type: Class
title: Refresh Token
resource: urn:ngm:class:refresh-token
domain: security
description: "A refresh token is a long-lived credential issued alongside a short-lived access token, used to obtain new access tokens without prompting the user to re-authenticate. By keeping access tokens short-lived and exchanging the refresh token at the authorisation server, systems limit the damage of a leaked access token while preserving a smooth user session. Refresh tokens are sensitive and typically "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:oauth-2-0
hasPart:
  - urn:ngm:class:token
requires:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:session-management
dependsOn:
  - urn:ngm:class:oauth
implements:
  - urn:ngm:class:authorization
contrastsWith:
  - urn:ngm:class:bearer-token
bridgesTo:
  - urn:ngm:class:identity-provider
uses:
  - urn:ngm:class:oauth-2-0
supports:
  - urn:ngm:class:single-sign-on
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:token
  - urn:ngm:class:oauth
  - urn:ngm:class:authentication
  - urn:ngm:class:session-management
---

# Refresh Token

A refresh token is a long-lived credential issued alongside a short-lived access token, used to obtain new access tokens without prompting the user to re-authenticate. By keeping access tokens short-lived and exchanging the refresh token at the authorisation server, systems limit the damage of a leaked access token while preserving a smooth user session. Refresh tokens are sensitive and typically bound, rotated, and revocable.
