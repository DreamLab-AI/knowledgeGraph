---
okf_version: "0.2"
type: Class
title: SAML
resource: urn:ngm:class:saml
domain: security
description: Security Assertion Markup Language (SAML) is an XML-based open standard developed by OASIS that defines formats and protocols for exchanging authentication and authorisation data between an identity provider (IdP) and a service provider (SP). SAML 2.0, published in 2005, is the dominant version in enterprise deployments and enables web-based single sign-on by allowing the IdP to issue digitally si
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:federated-identity
hasPart:
  - urn:ngm:class:saml-assertion
  - urn:ngm:class:saml-protocol
  - urn:ngm:class:saml-binding
  - urn:ngm:class:saml-metadata
requires:
  - urn:ngm:class:xml
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:identity-provider
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:federated-identity
  - urn:ngm:class:cross-domain-authentication
implements:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
  - urn:ngm:class:identity-federation
contrastsWith:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:kerberos
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:cloud-identity
uses:
  - urn:ngm:class:xml-encryption
  - urn:ngm:class:xml-signature
  - urn:ngm:class:http-redirect-binding
  - urn:ngm:class:http-post-binding
standardizedBy:
  - urn:ngm:class:oasis
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:identity-management
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:zero-trust-architecture
---

# SAML

Security Assertion Markup Language (SAML) is an XML-based open standard developed by OASIS that defines formats and protocols for exchanging authentication and authorisation data between an identity provider (IdP) and a service provider (SP). SAML 2.0, published in 2005, is the dominant version in enterprise deployments and enables web-based single sign-on by allowing the IdP to issue digitally signed XML assertions that service providers trust without requiring the user to re-authenticate. It decouples the identity layer from application services, enabling cross-domain federated identity across organisational and cloud boundaries.
