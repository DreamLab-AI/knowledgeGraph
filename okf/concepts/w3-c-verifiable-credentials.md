---
okf_version: "0.2"
type: Class
title: W3C Verifiable Credentials
resource: urn:ngm:class:w3-c-verifiable-credentials
domain: security
description: "W3C Verifiable Credentials (VCs) are a standardised data model and serialisation format published by the World Wide Web Consortium that enables the cryptographic expression of credentials — such as educational qualifications, identity attributes, and professional licences — in a tamper-evident, machine-verifiable form. The standard defines three roles: issuer (creates and signs the credential), ho"
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:verifiable-credentials
requires:
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-security
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:credential-verification
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:federated-credential-exchange
  - urn:ngm:class:digital-identity-wallet
implements:
  - urn:ngm:class:open-world-assumption
  - urn:ngm:class:trust-model
contrastsWith:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:saml-assertion
  - urn:ngm:class:oauth-token
bridgesTo:
  - urn:ngm:class:ai-agent-identity
  - urn:ngm:class:supply-chain-provenance
  - urn:ngm:class:dao
  - urn:ngm:class:decentralized-autonomous-organization
uses:
  - urn:ngm:class:did-document
  - urn:ngm:class:json-ld
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:linked-data
  - urn:ngm:class:ed25519
  - urn:ngm:class:ed25519
standardizedBy:
  - urn:ngm:class:world-wide-web-consortium
  - urn:ngm:class:w3c-recommendation
relatedTo:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:credential-format-standard
  - urn:ngm:class:decentralized-identity-did
  - urn:ngm:class:open-badges
  - urn:ngm:class:eidas-regulation
  - urn:ngm:class:zero-knowledge-proof
---

# W3C Verifiable Credentials

W3C Verifiable Credentials (VCs) are a standardised data model and serialisation format published by the World Wide Web Consortium that enables the cryptographic expression of credentials — such as educational qualifications, identity attributes, and professional licences — in a tamper-evident, machine-verifiable form. The standard defines three roles: issuer (creates and signs the credential), holder (stores and presents it), and verifier (validates the signature and claims), forming a trust triangle that operates without requiring a centralised credential registry. VCs are designed to interoperate with Decentralised Identifiers (DIDs) to enable self-sovereign identity systems in which individuals and organisations control their own digital identity without dependence on a single provider. The VC Data Model 2.0 became a W3C Recommendation in 2024, adding selective disclosure via SD-JWT and BBS+ signatures, JSON Schema validation, and expanded media-type support.
