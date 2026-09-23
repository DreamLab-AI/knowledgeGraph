---
okf_version: "0.2"
type: Class
title: SAML 2.0
resource: urn:ngm:class:saml-2-0
domain: security
description: Security Assertion Markup Language 2.0 (SAML 2.0) is an OASIS open standard ratified in 2005 that defines an XML-based framework for exchanging authentication and authorisation data between an Identity Provider and a Service Provider. It enables web-based federated single sign-on by allowing an IdP to issue digitally signed XML assertions attesting a user's identity and attributes, which the SP ac
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:federated-identity
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:xml-encryption
  - urn:ngm:class:xml-digital-signature
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:federated-identity
  - urn:ngm:class:cross-domain-authentication
contrastsWith:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:ws-federation
bridgesTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:xml
  - urn:ngm:class:http
  - urn:ngm:class:soap
  - urn:ngm:class:tls
standardizedBy:
  - urn:ngm:class:oasis
relatedTo:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:provider
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-management
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:directory-service
  - urn:ngm:class:provider
  - urn:ngm:class:directory-service
---

# SAML 2.0

Security Assertion Markup Language 2.0 (SAML 2.0) is an OASIS open standard ratified in 2005 that defines an XML-based framework for exchanging authentication and authorisation data between an Identity Provider and a Service Provider. It enables web-based federated single sign-on by allowing an IdP to issue digitally signed XML assertions attesting a user's identity and attributes, which the SP accepts without requiring the user to re-authenticate. SAML 2.0 consolidates and supersedes SAML 1.0 and 1.1, Liberty Alliance ID-FF 1.2, and Shibboleth 1.3, incorporating bindings for HTTP Redirect, POST, Artifact, and SOAP transports. The standard is governed by OASIS and remains the dominant federation protocol in enterprise, higher-education, and government identity ecosystems.
