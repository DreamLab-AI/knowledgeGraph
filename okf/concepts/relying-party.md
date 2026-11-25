---
okf_version: "0.2"
type: Class
title: Relying Party
resource: urn:ngm:class:relying-party
domain: security
description: A relying party is an application or service that depends on an external identity provider or credential issuer to authenticate users and assert their attributes, rather than managing credentials itself. It consumes and validates assertions, tokens or verifiable credentials to make access-control decisions. As a core role in federated and decentralised identity, the relying party trusts issuers wi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:access-control
requires:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:trust-framework
enables:
  - urn:ngm:class:authorisation
dependsOn:
  - urn:ngm:class:authentication
implements:
  - urn:ngm:class:authentication-protocol
contrastsWith:
  - urn:ngm:class:identity-provider
bridgesTo:
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:oauth
  - urn:ngm:class:saml
supports:
  - urn:ngm:class:single-sign-on
relatedTo:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:digital-trust
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Relying Party

A relying party is an application or service that depends on an external identity provider or credential issuer to authenticate users and assert their attributes, rather than managing credentials itself. It consumes and validates assertions, tokens or verifiable credentials to make access-control decisions. As a core role in federated and decentralised identity, the relying party trusts issuers within a defined trust framework and enforces the resulting authorisation.
