---
okf_version: "0.2"
type: Class
title: FIDO Alliance
resource: urn:ngm:class:fido-alliance
domain: security
description: An industry consortium that develops open authentication standards—UAF, U2F, FIDO2, and WebAuthn—designed to replace passwords with phishing-resistant public-key cryptography, enabling strong authentication across browsers, devices, and online services.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:standards-body
requires:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:hardware-security-key
enables:
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:phishing-resistant-authentication
  - urn:ngm:class:single-sign-on
implements:
  - urn:ngm:class:web-authn
  - urn:ngm:class:fido2
contrastsWith:
  - urn:ngm:class:password-authentication
  - urn:ngm:class:one-time-password
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:governance
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:digital-signature
  - urn:ngm:class:trusted-platform-module
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:identity-and-access-management
standardizedBy:
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:security-key
---

# FIDO Alliance

An industry consortium that develops open authentication standards—UAF, U2F, FIDO2, and WebAuthn—designed to replace passwords with phishing-resistant public-key cryptography, enabling strong authentication across browsers, devices, and online services.
