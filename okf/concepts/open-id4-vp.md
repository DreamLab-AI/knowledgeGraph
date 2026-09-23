---
okf_version: "0.2"
type: Class
title: OpenID4VP
resource: urn:ngm:class:open-id4-vp
domain: security
description: OpenID for Verifiable Presentations (OpenID4VP) is an extension of the OpenID Connect and OAuth 2.0 framework that enables relying parties to request and receive W3C Verifiable Presentations from a holder's digital identity wallet using standard authorisation request-response flows. The specification defines a Presentation Exchange-compatible request syntax, transport bindings for cross-device and
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:open-id-connect
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:holder-binding
  - urn:ngm:class:cross-platform-authentication
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model
contrastsWith:
  - urn:ngm:class:saml
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:presentation-exchange
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:json-ld
supports:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:iso-iec-18013-5-m-dl
  - urn:ngm:class:eudi-wallet
standardizedBy:
  - urn:ngm:class:open-id-foundation
relatedTo:
  - urn:ngm:class:open-id4-vci
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:e-idas-2-0
---

# OpenID4VP

OpenID for Verifiable Presentations (OpenID4VP) is an extension of the OpenID Connect and OAuth 2.0 framework that enables relying parties to request and receive W3C Verifiable Presentations from a holder's digital identity wallet using standard authorisation request-response flows. The specification defines a Presentation Exchange-compatible request syntax, transport bindings for cross-device and same-device wallets, and response encoding options for signed JWT VPs and JSON-LD credential formats. OpenID4VP allows verifiers to specify which credential types and claims are required, enabling selective disclosure and privacy-preserving identity verification without centralised identity providers holding user data.
