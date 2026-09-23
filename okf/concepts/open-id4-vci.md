---
okf_version: "0.2"
type: Class
title: OpenID4VCI
resource: urn:ngm:class:open-id4-vci
domain: security
description: "OpenID for Verifiable Credential Issuance (OpenID4VCI) is an OpenID Foundation protocol specification that defines a standard API by which an Issuer can deliver W3C Verifiable Credentials to a Holder's digital wallet using OAuth 2.0 and OpenID Connect as the underlying authorisation and identity layer. The protocol specifies credential offer flows, authorisation code and pre-authorised code grant "
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:credential-issuance
requires:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:credential-issuer-metadata
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:credential-verification
  - urn:ngm:class:self-sovereign-identity
implements:
  - urn:ngm:class:credential-format-standard
  - urn:ngm:class:authorization-code-flow
contrastsWith:
  - urn:ngm:class:didcomm
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:e-idas-2-0
  - urn:ngm:class:eudi-wallet
  - urn:ngm:class:iso-mdoc
standardizedBy:
  - urn:ngm:class:open-id-foundation
partOf:
  - urn:ngm:class:self-sovereign-identity
relatedTo:
  - urn:ngm:class:open-id4-vp
---

# OpenID4VCI

OpenID for Verifiable Credential Issuance (OpenID4VCI) is an OpenID Foundation protocol specification that defines a standard API by which an Issuer can deliver W3C Verifiable Credentials to a Holder's digital wallet using OAuth 2.0 and OpenID Connect as the underlying authorisation and identity layer. The protocol specifies credential offer flows, authorisation code and pre-authorised code grant types, credential endpoint interactions, and metadata discovery, enabling interoperable credential issuance across identity wallet implementations and issuing authority systems. It is designed to complement OpenID4VP (Verifiable Presentations) to form a complete self-sovereign identity exchange ecosystem.
