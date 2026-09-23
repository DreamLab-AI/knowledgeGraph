---
okf_version: "0.2"
type: Class
title: Federated Identity
resource: urn:ngm:class:federated-identity
domain: security
description: Federated Identity is an architectural paradigm in which a user authenticates once with a trusted Identity Provider and receives a signed assertion that is accepted by multiple independent relying-party services across organisational or administrative boundaries, eliminating per-service credential stores. The federation relationship is governed by bilateral or multilateral trust agreements and imp
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:provider
  - urn:ngm:class:trust-framework
  - urn:ngm:class:provider
  - urn:ngm:class:security-assertion
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:authentication-standards
  - urn:ngm:class:digital-certificate
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:cross-domain-authentication
  - urn:ngm:class:delegated-authorisation
  - urn:ngm:class:zero-trust-architecture
contrastsWith:
  - urn:ngm:class:siloed-identity
  - urn:ngm:class:centralised-identity
bridgesTo:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:cryptographic-signature
supports:
  - urn:ngm:class:access-control
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:session-management
  - urn:ngm:class:user-provisioning
standardizedBy:
  - urn:ngm:class:oasis-standards
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:directory-service
  - urn:ngm:class:scim
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:directory-service
---

# Federated Identity

Federated Identity is an architectural paradigm in which a user authenticates once with a trusted Identity Provider and receives a signed assertion that is accepted by multiple independent relying-party services across organisational or administrative boundaries, eliminating per-service credential stores. The federation relationship is governed by bilateral or multilateral trust agreements and implemented through standard protocols such as SAML 2.0, OpenID Connect, and OAuth 2.0, which define how authentication tokens are issued, transported, and cryptographically verified. Federated identity is foundational to enterprise single sign-on, cross-institutional academic collaboration, and consumer social-login ecosystems, and is actively converging with decentralised-identity models that replace central providers with holder-controlled cryptographic credentials.
