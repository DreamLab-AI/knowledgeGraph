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
---

# Solid-OIDC

Solid-OIDC is the authentication specification for the Solid ecosystem, extending OpenID Connect with decentralised identity so a user authenticates with their own WebID and identity provider rather than a centralised platform. It issues DPoP-bound access tokens that resource servers (Solid Pods) verify, enabling a user to control which applications access their personal data store. It is the identity layer that makes Solid's separation of identity, data, and application possible.
