---
okf_version: "0.2"
type: Class
title: Credential Store
resource: urn:ngm:class:credential-store
domain: security
description: A credential store is the component within an identity system that holds user identifiers, secrets, and account attributes used during authentication. Implemented as a directory, database, or secrets vault, it is queried by an identity provider to validate sign-in attempts and issue tokens. Its integrity and confidentiality are critical to the security of the surrounding identity infrastructure.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
relatedTo:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:authentication
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Credential Store

A credential store is the component within an identity system that holds user identifiers, secrets, and account attributes used during authentication. Implemented as a directory, database, or secrets vault, it is queried by an identity provider to validate sign-in attempts and issue tokens. Its integrity and confidentiality are critical to the security of the surrounding identity infrastructure.
