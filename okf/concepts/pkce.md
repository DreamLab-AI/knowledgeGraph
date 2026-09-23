---
okf_version: "0.2"
type: Class
title: Pkce
resource: urn:ngm:class:pkce
domain: infrastructure
description: PKCE, Proof Key for Code Exchange, is an extension to the OAuth 2.0 authorisation code flow that protects public clients, such as mobile and single-page applications, against interception of the authorisation code. The client generates a secret code verifier and sends its hashed code challenge when requesting authorisation, then proves possession of the verifier when redeeming the code, so a stole
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:oauth-2-0
hasPart:
  - urn:ngm:class:token
requires:
  - urn:ngm:class:encryption
enables:
  - urn:ngm:class:authentication
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
  - urn:ngm:class:authorization
supports:
  - urn:ngm:class:single-sign-on
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:access-token
  - urn:ngm:class:refresh-token
  - urn:ngm:class:oauth
  - urn:ngm:class:authorization
---

# Pkce

PKCE, Proof Key for Code Exchange, is an extension to the OAuth 2.0 authorisation code flow that protects public clients, such as mobile and single-page applications, against interception of the authorisation code. The client generates a secret code verifier and sends its hashed code challenge when requesting authorisation, then proves possession of the verifier when redeeming the code, so a stolen code cannot be exchanged for tokens. It is now recommended for all OAuth clients, not only public ones.
