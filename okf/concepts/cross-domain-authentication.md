---
okf_version: "0.2"
type: Class
title: Cross Domain Authentication
resource: urn:ngm:class:cross-domain-authentication
domain: security
description: Cross-domain authentication is the capability for a principal authenticated in one security or administrative domain to prove its identity to services in another domain without re-enrolling separate credentials. It relies on federated trust relationships and standard token exchanges so that an identity provider in one realm is accepted by relying parties in another. This underpins single sign-on a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:trust-anchor
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:federated-identity
implements:
  - urn:ngm:class:identity-federation
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:saml
  - urn:ngm:class:oauth
  - urn:ngm:class:kerberos
supports:
  - urn:ngm:class:access-control
partOf:
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:identity-federation
---

# Cross Domain Authentication

Cross-domain authentication is the capability for a principal authenticated in one security or administrative domain to prove its identity to services in another domain without re-enrolling separate credentials. It relies on federated trust relationships and standard token exchanges so that an identity provider in one realm is accepted by relying parties in another. This underpins single sign-on across organisations and is essential to federated and distributed systems.
