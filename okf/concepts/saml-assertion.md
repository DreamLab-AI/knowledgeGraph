---
okf_version: "0.2"
type: Class
title: Saml Assertion
resource: urn:ngm:class:saml-assertion
domain: security
description: A SAML assertion is an XML-based security token, issued by an identity provider, that conveys statements about an authenticated subject to a relying service provider. Assertions carry authentication, attribute and authorisation-decision statements, are bound to a subject and validity window, and are protected by XML digital signatures to ensure integrity and origin. They are the core data structur
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:saml
hasPart:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:xml
requires:
  - urn:ngm:class:identity-provider
enables:
  - urn:ngm:class:single-sign-on
implements:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorization
contrastsWith:
  - urn:ngm:class:oauth
uses:
  - urn:ngm:class:xml
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:identity-federation
partOf:
  - urn:ngm:class:saml
  - urn:ngm:class:single-sign-on
relatedTo:
  - urn:ngm:class:security-token
  - urn:ngm:class:identity-provider
---

# Saml Assertion

A SAML assertion is an XML-based security token, issued by an identity provider, that conveys statements about an authenticated subject to a relying service provider. Assertions carry authentication, attribute and authorisation-decision statements, are bound to a subject and validity window, and are protected by XML digital signatures to ensure integrity and origin. They are the core data structure exchanged in SAML single sign-on and federated identity.
