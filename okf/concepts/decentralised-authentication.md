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
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:did-document
  - urn:ngm:class:trust-anchor
  - urn:ngm:class:cryptography
  - urn:ngm:class:verifiable-credentials
enables:
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralised-identity
dependsOn:
  - urn:ngm:class:decentralised-identifier
implements:
  - urn:ngm:class:authentication-protocol
contrastsWith:
  - urn:ngm:class:centralised-identity
  - urn:ngm:class:user-authentication
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:oauth
bridgesTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did-method
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:web-authn
partOf:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:identity-provider
  - urn:ngm:class:digital-identity
---

# Decentralised Authentication

Decentralised authentication verifies the identity of a party without relying on a single central identity provider, instead using cryptographic keys, decentralised identifiers and verifiable credentials controlled by the user. The holder proves control of an identifier and presents credentials that a verifier checks against a distributed trust registry rather than a federated login service. This shifts control of identity from platforms to individuals while preserving cryptographic assurance.
