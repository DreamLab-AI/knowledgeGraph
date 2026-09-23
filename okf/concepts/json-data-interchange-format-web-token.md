---
okf_version: "0.2"
type: Class
title: JSON Web Token
resource: urn:ngm:class:json-data-interchange-format-web-token
domain: security
description: A JSON Web Token (JWT) is a compact, URL-safe representation of claims transmitted between parties, defined by IETF RFC 7519. A JWT consists of three Base64URL-encoded parts — header, payload, and signature — concatenated with periods. The header specifies the token type and signing algorithm; the payload carries claims (assertions about a subject such as user identity, roles, and expiry time); an
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:authentication-mechanism
requires:
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:access-control
  - urn:ngm:class:rest-api
  - urn:ngm:class:session-management
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:federated-identity
implements:
  - urn:ngm:class:bearer-token
contrastsWith:
  - urn:ngm:class:saml-assertion
bridgesTo:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralised-identifier
uses:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:ietf
  - urn:ngm:class:base64url-encoding
  - urn:ngm:class:hmac
  - urn:ngm:class:rsa-algorithm
  - urn:ngm:class:ecdsa
relatedTo:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:digital-identity
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:json-web-encryption
  - urn:ngm:class:refresh-token
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:api-gateway
---

# JSON Web Token

A JSON Web Token (JWT) is a compact, URL-safe representation of claims transmitted between parties, defined by IETF RFC 7519. A JWT consists of three Base64URL-encoded parts — header, payload, and signature — concatenated with periods. The header specifies the token type and signing algorithm; the payload carries claims (assertions about a subject such as user identity, roles, and expiry time); and the signature is computed using either a symmetric shared secret (HMAC) or an asymmetric key pair (RSA, ECDSA), allowing the receiving party to verify token integrity without a round-trip to an authorisation server. JWTs are the dominant stateless session mechanism in REST API and OAuth 2.0 / OpenID Connect identity architectures.
