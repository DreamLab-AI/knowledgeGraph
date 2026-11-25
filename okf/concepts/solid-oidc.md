---
okf_version: "0.2"
type: Class
title: Solid-OIDC
resource: urn:ngm:class:solid-oidc
domain: data
description: Solid-OIDC is the authentication specification for the Solid ecosystem, extending OpenID Connect with decentralised identity so a user authenticates with their own WebID and identity provider rather than a centralised platform. It issues DPoP-bound access tokens that resource servers (Solid Pods) verify, enabling a user to control which applications access their personal data store. It is the iden
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:solid
  - urn:ngm:class:digital-identity
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Solid-OIDC

Solid-OIDC is the authentication specification for the Solid ecosystem, extending OpenID Connect with decentralised identity so a user authenticates with their own WebID and identity provider rather than a centralised platform. It issues DPoP-bound access tokens that resource servers (Solid Pods) verify, enabling a user to control which applications access their personal data store. It is the identity layer that makes Solid's separation of identity, data, and application possible.
