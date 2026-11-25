---
okf_version: "0.2"
type: Class
title: SD-JWT VC
resource: urn:ngm:class:sd-jwt-vc
domain: security
description: A verifiable credential format that uses Selective Disclosure JSON Web Tokens, allowing a holder to reveal only chosen claims to a verifier. It combines the JWT structure with salted hashes that support selective disclosure.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:json-data-interchange-format-web-token
requires:
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:selective-disclosure
enables:
  - urn:ngm:class:digital-identity
bridgesTo:
  - urn:ngm:class:privacy
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# SD-JWT VC

A verifiable credential format that uses Selective Disclosure JSON Web Tokens, allowing a holder to reveal only chosen claims to a verifier. It combines the JWT structure with salted hashes that support selective disclosure.
