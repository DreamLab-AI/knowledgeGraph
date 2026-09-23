---
okf_version: "0.2"
type: Class
title: Authentication Standards
resource: urn:ngm:class:authentication-standards
domain: security
description: Authentication Standards encompass protocols and specifications for verifying user identity in digital systems, particularly FIDO2 and WebAuthn standards that enable passwordless, phishing-resistant authentication using public key cryptography and hardware authenticators for secure access to metaverse platforms and blockchain applications.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:security-standards
hasPart:
  - urn:ngm:class:fido2
  - urn:ngm:class:web-authn
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:hardware-authenticators
  - urn:ngm:class:client-implementation
enables:
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:phishing-resistance
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:secure-platform-access
dependsOn:
  - urn:ngm:class:asymmetric-cryptography
implements:
  - urn:ngm:class:nist-sp-800-63
contrastsWith:
  - urn:ngm:class:password-authentication
bridgesTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:access-control
uses:
  - urn:ngm:class:biometric-verification
  - urn:ngm:class:challenge-response-protocol
supports:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:single-sign-on
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:fido-alliance
partOf:
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
---

# Authentication Standards

Authentication Standards encompass protocols and specifications for verifying user identity in digital systems, particularly FIDO2 and WebAuthn standards that enable passwordless, phishing-resistant authentication using public key cryptography and hardware authenticators for secure access to metaverse platforms and blockchain applications.
