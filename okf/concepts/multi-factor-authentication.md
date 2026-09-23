---
okf_version: "0.2"
type: Class
title: Multi-Factor Authentication
resource: urn:ngm:class:multi-factor-authentication
domain: security
description: Multi-Factor Authentication (MFA) is a security mechanism that requires a claimant to present two or more independent verification factors drawn from distinct categories — something known (a password or PIN), something possessed (a hardware token or mobile device), and something inherent (a biometric characteristic) — before access is granted to a system or resource. By requiring multiple independ
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:authentication-mechanism
hasPart:
  - urn:ngm:class:one-time-password
  - urn:ngm:class:hardware-security-key
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:push-notification-authentication
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:credential-management
  - urn:ngm:class:shared-secret
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:digital-identity-management
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:privileged-access-management
dependsOn:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:secure-channel
contrastsWith:
  - urn:ngm:class:password-authentication
  - urn:ngm:class:single-factor-authentication
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:biometric-binding-mechanism
  - urn:ngm:class:fido2
  - urn:ngm:class:time-based-one-time-password
  - urn:ngm:class:fido2
supports:
  - urn:ngm:class:data-security
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:risk-management
standardizedBy:
  - urn:ngm:class:authentication-standards
  - urn:ngm:class:nist-sp-800-63
  - urn:ngm:class:fido-alliance
partOf:
  - urn:ngm:class:authentication-mechanism
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:cybersecurity-standard
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:adaptive-authentication
  - urn:ngm:class:phishing-resistance
---

# Multi-Factor Authentication

Multi-Factor Authentication (MFA) is a security mechanism that requires a claimant to present two or more independent verification factors drawn from distinct categories — something known (a password or PIN), something possessed (a hardware token or mobile device), and something inherent (a biometric characteristic) — before access is granted to a system or resource. By requiring multiple independent proofs, MFA ensures that compromise of a single credential is insufficient for an attacker to gain access, substantially raising the cost and complexity of successful attacks. It is widely mandated by regulatory frameworks, cybersecurity standards, and national policy as a baseline control for protecting sensitive systems, privileged accounts, and personal data. Modern deployments increasingly employ adaptive or risk-based MFA, invoking stronger authentication only when contextual risk signals exceed a configurable threshold.
