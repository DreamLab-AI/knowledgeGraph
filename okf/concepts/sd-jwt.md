---
okf_version: "0.2"
type: Class
title: SD-JWT
resource: urn:ngm:class:sd-jwt
domain: security
description: "SD-JWT (Selective Disclosure JSON Web Token) is an IETF-specified extension to the JSON Web Token standard that allows an Issuer to create a signed token containing hashed claim values, from which the Holder can selectively reveal only the specific claims needed for a given presentation — without exposing other claims or enabling correlation across presentations. The mechanism uses SHA-256 salted "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:selective-disclosure
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:credential-verification
  - urn:ngm:class:holder-binding
  - urn:ngm:class:minimal-disclosure
implements:
  - urn:ngm:class:ietf-rfc
  - urn:ngm:class:oauth-working-group-specification
contrastsWith:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:bbs-signatures
  - urn:ngm:class:iso-mdoc
bridgesTo:
  - urn:ngm:class:digital-identity-governance
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:sha-256
  - urn:ngm:class:base64url-encoding
supports:
  - urn:ngm:class:eidas-2-digital-identity-wallet
  - urn:ngm:class:open-id4-vci
  - urn:ngm:class:open-id4-vp
relatedTo:
  - urn:ngm:class:credential-format-standard
  - urn:ngm:class:w-3-c-verifiable-credentials-2-0
  - urn:ngm:class:decentralised-identifier
---

# SD-JWT

SD-JWT (Selective Disclosure JSON Web Token) is an IETF-specified extension to the JSON Web Token standard that allows an Issuer to create a signed token containing hashed claim values, from which the Holder can selectively reveal only the specific claims needed for a given presentation — without exposing other claims or enabling correlation across presentations. The mechanism uses SHA-256 salted disclosure objects appended to the base JWT; verifiers can validate revealed disclosures against the issuer signature whilst remaining blind to undisclosed claims. SD-JWT forms the primary credential format for the European Union's eIDAS 2.0 digital identity wallet system.
