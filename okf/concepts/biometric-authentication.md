---
okf_version: "0.2"
type: Class
title: Biometric Authentication
resource: urn:ngm:class:biometric-authentication
domain: security
description: "Biometric authentication is an identity verification method that uses measurable, unique physiological or behavioural characteristics of an individual — such as fingerprints, facial geometry, iris patterns, voice, or behavioural signals like keystroke dynamics — to confirm the claimed identity of a subject. Unlike password-based or token-based mechanisms, biometric credentials are inherent to the "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:data-protection
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:digital-identity-verification
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:continuous-authentication
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:zero-trust-architecture
implements:
  - urn:ngm:class:fido2
  - urn:ngm:class:web-authn
contrastsWith:
  - urn:ngm:class:password-authentication
  - urn:ngm:class:token-based-authentication
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:on-device-inference
uses:
  - urn:ngm:class:biometric-verification
  - urn:ngm:class:biometric-binding-mechanism
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:presentation-attack-detection
  - urn:ngm:class:feature-extraction
relatedTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:identity-management
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:gdpr
---

# Biometric Authentication

Biometric authentication is an identity verification method that uses measurable, unique physiological or behavioural characteristics of an individual — such as fingerprints, facial geometry, iris patterns, voice, or behavioural signals like keystroke dynamics — to confirm the claimed identity of a subject. Unlike password-based or token-based mechanisms, biometric credentials are inherent to the individual and cannot be forgotten, shared, or easily replicated, though they introduce irreversibility concerns because compromised biometric data cannot be reset. A complete system comprises enrolment, secure template storage (typically on-device in a secure enclave), a matching engine evaluated by false acceptance rate and false rejection rate, and presentation attack detection to counter spoofing. Biometric authentication underpins modern identity assurance frameworks such as FIDO2/WebAuthn, eIDAS 2.0 digital identity wallets, and biometric border control systems worldwide.
