---
okf_version: "0.2"
type: Class
title: WebAuthn
resource: urn:ngm:class:web-authn
domain: security
description: "WebAuthn (Web Authentication) is a W3C and FIDO Alliance standard that enables web applications to authenticate users using public-key cryptography rather than passwords, through hardware or software authenticators such as security keys, platform biometrics, and passkeys. The browser exposes the navigator.credentials API, which delegates cryptographic operations to a CTAP-compliant authenticator; "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:authentication-mechanism
requires:
  - urn:ngm:class:relying-party
enables:
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:phishing-resistant-authentication
  - urn:ngm:class:passkey
implements:
  - urn:ngm:class:w3c-recommendation
contrastsWith:
  - urn:ngm:class:password-authentication
  - urn:ngm:class:one-time-password
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:fido2
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:challenge-response-protocol
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:fido-alliance
relatedTo:
  - urn:ngm:class:web-standard
  - urn:ngm:class:credential-verification
  - urn:ngm:class:digital-identity
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:security-key
---

# WebAuthn

WebAuthn (Web Authentication) is a W3C and FIDO Alliance standard that enables web applications to authenticate users using public-key cryptography rather than passwords, through hardware or software authenticators such as security keys, platform biometrics, and passkeys. The browser exposes the navigator.credentials API, which delegates cryptographic operations to a CTAP-compliant authenticator; the authenticator generates a key pair, stores the private key in a secure enclave, and signs authentication challenges that the relying party verifies using the registered public key. WebAuthn eliminates shared secrets from the authentication path, making phishing, credential stuffing, and replay attacks fundamentally impossible by design. It is the technical foundation of the passkey ecosystem deployed by Apple, Google, and Microsoft.
