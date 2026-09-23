---
okf_version: "0.2"
type: Class
title: Decentralised Authentication
resource: urn:ngm:class:decentralised-authentication
domain: security
description: "Decentralised authentication verifies the identity of a party without relying on a single central identity provider, instead using cryptographic keys, decentralised identifiers and verifiable credentials controlled by the user. The holder proves control of an identifier and presents credentials that a verifier checks against a distributed trust registry rather than a federated login service. This "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:authentication-protocol
requires:
  - urn:ngm:class:did-document
  - urn:ngm:class:trust-anchor
enables:
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:decentralised-identity
dependsOn:
  - urn:ngm:class:did
implements:
  - urn:ngm:class:authentication-protocol
contrastsWith:
  - urn:ngm:class:centralised-identity
  - urn:ngm:class:user-authentication
bridgesTo:
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:did
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did-method
supports:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:web-authn
partOf:
  - urn:ngm:class:decentralised-identity
relatedTo:
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:oauth-2-0
---

# Decentralised Authentication

Decentralised authentication verifies the identity of a party without relying on a single central identity provider, instead using cryptographic keys, decentralised identifiers and verifiable credentials controlled by the user. The holder proves control of an identifier and presents credentials that a verifier checks against a distributed trust registry rather than a federated login service. This shifts control of identity from platforms to individuals while preserving cryptographic assurance.
