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
  - urn:ngm:class:authorisation
contrastsWith:
  - urn:ngm:class:bearer-token
bridgesTo:
  - urn:ngm:class:identity-provider
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:authorisation
supports:
  - urn:ngm:class:single-sign-on
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:access-token
  - urn:ngm:class:refresh-token
  - urn:ngm:class:oauth
  - urn:ngm:class:authorisation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Pkce

PKCE, Proof Key for Code Exchange, is an extension to the OAuth 2.0 authorisation code flow that protects public clients, such as mobile and single-page applications, against interception of the authorisation code. The client generates a secret code verifier and sends its hashed code challenge when requesting authorisation, then proves possession of the verifier when redeeming the code, so a stolen code cannot be exchanged for tokens. It is now recommended for all OAuth clients, not only public ones.
