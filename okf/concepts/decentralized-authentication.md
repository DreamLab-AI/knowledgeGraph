---
okf_version: "0.2"
type: Class
title: Decentralized Authentication
resource: urn:ngm:class:decentralized-authentication
domain: security
description: Decentralised Authentication is an approach to verifying identity claims without relying on a single central authority or identity provider. It uses cryptographic credentials, decentralised identifiers and distributed trust mechanisms so that users control their own authentication material and prove claims directly to relying parties. The model reduces single points of failure, limits data central
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:verifiable-credentials
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralized-identity
dependsOn:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:blockchain
contrastsWith:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:oauth
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:biometric-authentication
partOf:
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:digital-identity
---

# Decentralized Authentication

Decentralised Authentication is an approach to verifying identity claims without relying on a single central authority or identity provider. It uses cryptographic credentials, decentralised identifiers and distributed trust mechanisms so that users control their own authentication material and prove claims directly to relying parties. The model reduces single points of failure, limits data centralisation and aligns with self-sovereign identity principles.
