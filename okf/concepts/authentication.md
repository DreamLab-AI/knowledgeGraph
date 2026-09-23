---
okf_version: "0.2"
type: Class
title: Authentication
resource: urn:ngm:class:authentication
domain: security
description: Authentication is the security process of verifying that a claimed identity of a user, device, application, or service is genuine before granting access to protected resources. It is fundamentally distinct from authorisation, which determines what permissions an authenticated principal possesses. Authentication evidence is categorised into knowledge factors (passwords, PINs, security questions), p
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:identity-and-access-management
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:authorisation
  - urn:ngm:class:session-management
dependsOn:
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:secure-communication
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
  - urn:ngm:class:fido2
  - urn:ngm:class:fido2
contrastsWith:
  - urn:ngm:class:authorisation
  - urn:ngm:class:anonymity
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:compliance
  - urn:ngm:class:privacy
relatedTo:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:federation
  - urn:ngm:class:threat-model
  - urn:ngm:class:biometrics
  - urn:ngm:class:identity-provider
---

# Authentication

Authentication is the security process of verifying that a claimed identity of a user, device, application, or service is genuine before granting access to protected resources. It is fundamentally distinct from authorisation, which determines what permissions an authenticated principal possesses. Authentication evidence is categorised into knowledge factors (passwords, PINs, security questions), possession factors (hardware security keys, TOTP devices, mobile authenticators), and inherence factors (biometrics such as fingerprint or facial recognition), with cryptographic proofs (digital signatures, TLS client certificates, FIDO2 passkeys) increasingly replacing shared-secret schemes. Modern secure systems combine multiple independent factors through multi-factor authentication to achieve strong resistance against credential theft, phishing, replay attacks, and session hijacking.
