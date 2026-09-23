---
okf_version: "0.2"
type: Class
title: Single Sign-On
resource: urn:ngm:class:single-sign-on
domain: security
description: Single Sign-On (SSO) is an authentication architecture in which a user authenticates once to a central Identity Provider (IdP) and receives a cryptographically signed assertion or token that grants access to multiple independent service providers without re-entering credentials. Dominant protocol implementations include SAML 2.0 (XML-based assertions), OpenID Connect layered over OAuth 2.0 (JSON W
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:trust-framework
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:digital-identity-management
  - urn:ngm:class:federated-identity
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:zero-trust-architecture
implements:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
  - urn:ngm:class:kerberos
contrastsWith:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:password-manager
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:session-management
  - urn:ngm:class:multi-factor-authentication
supports:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:audit-logging
  - urn:ngm:class:user-provisioning
relatedTo:
  - urn:ngm:class:federated-credential-exchange
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:directory-service
  - urn:ngm:class:authentication-standards
  - urn:ngm:class:directory-service
---

# Single Sign-On

Single Sign-On (SSO) is an authentication architecture in which a user authenticates once to a central Identity Provider (IdP) and receives a cryptographically signed assertion or token that grants access to multiple independent service providers without re-entering credentials. Dominant protocol implementations include SAML 2.0 (XML-based assertions), OpenID Connect layered over OAuth 2.0 (JSON Web Token–based), and Kerberos (ticket-granting ticket mechanism in Windows/Active Directory environments). SSO reduces credential exposure and attack surface by centralising authentication at a hardened IdP, simplifies user lifecycle management across enterprise systems, and is the cornerstone of modern Identity and Access Management platforms encompassing provisioning, deprovisioning, and audit.
