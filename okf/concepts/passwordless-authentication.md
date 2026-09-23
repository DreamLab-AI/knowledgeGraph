---
okf_version: "0.2"
type: Class
title: Passwordless Authentication
resource: urn:ngm:class:passwordless-authentication
domain: security
description: Passwordless Authentication encompasses identity verification mechanisms that prove user identity without requiring the user to memorise or enter a shared-secret password. Instead, authentication relies on possession of a hardware token or platform authenticator, biometric characteristics, cryptographic key pairs, or one-time codes delivered through a trusted out-of-band channel. The FIDO2 standar
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:authentication-mechanism
requires:
  - urn:ngm:class:trusted-platform-module
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:identity-proofing
enables:
  - urn:ngm:class:phishing-resistant-authentication
  - urn:ngm:class:digital-identity-management
  - urn:ngm:class:zero-trust-architecture
contrastsWith:
  - urn:ngm:class:password-authentication
  - urn:ngm:class:knowledge-based-authentication
  - urn:ngm:class:password-authentication
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:hardware-security-key
  - urn:ngm:class:digital-signature
  - urn:ngm:class:challenge-response-protocol
supports:
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-federation
standardizedBy:
  - urn:ngm:class:web-authn
  - urn:ngm:class:fido2
  - urn:ngm:class:fido-alliance
relatedTo:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:digital-identity-wallet
---

# Passwordless Authentication

Passwordless Authentication encompasses identity verification mechanisms that prove user identity without requiring the user to memorise or enter a shared-secret password. Instead, authentication relies on possession of a hardware token or platform authenticator, biometric characteristics, cryptographic key pairs, or one-time codes delivered through a trusted out-of-band channel. The FIDO2 standard — comprising the W3C WebAuthn specification and the FIDO Alliance CTAP protocol — provides the primary open standard for passkey-based passwordless authentication, binding credentials to device hardware and enabling phishing-resistant login flows. By eliminating the shared secret as an authentication factor, passwordless schemes structurally defeat credential-stuffing, password-spray, and phishing attack classes.
