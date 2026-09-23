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
  - urn:ngm:class:authorization
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
---

# Relying Party

A relying party is an application or service that depends on an external identity provider or credential issuer to authenticate users and assert their attributes, rather than managing credentials itself. It consumes and validates assertions, tokens or verifiable credentials to make access-control decisions. As a core role in federated and decentralised identity, the relying party trusts issuers within a defined trust framework and enforces the resulting authorisation.
