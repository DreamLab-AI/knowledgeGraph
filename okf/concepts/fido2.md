---
okf_version: "0.2"
type: Class
title: FIDO2
resource: urn:ngm:class:fido2
domain: security
description: "FIDO2 is an open authentication standard developed by the FIDO Alliance and W3C that enables passwordless, phishing-resistant authentication using public-key cryptography. It consists of two components: the W3C Web Authentication API (WebAuthn), which defines the browser and platform interface for creating and using public key credentials, and the Client to Authenticator Protocol (CTAP2), which de"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:authentication-standards
hasPart:
  - urn:ngm:class:web-authn
requires:
  - urn:ngm:class:relying-party
  - urn:ngm:class:verification
enables:
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:identity-verification
  - urn:ngm:class:phishing-resistant-authentication
  - urn:ngm:class:passkey
contrastsWith:
  - urn:ngm:class:password-authentication
  - urn:ngm:class:authentication
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:digital-identity-wallet
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:web-standard
  - urn:ngm:class:challenge-response-protocol
  - urn:ngm:class:digital-signature
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:fido-alliance
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-management
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:trusted-platform-module
---

# FIDO2

FIDO2 is an open authentication standard developed by the FIDO Alliance and W3C that enables passwordless, phishing-resistant authentication using public-key cryptography. It consists of two components: the W3C Web Authentication API (WebAuthn), which defines the browser and platform interface for creating and using public key credentials, and the Client to Authenticator Protocol (CTAP2), which defines the communication between a platform and an external authenticator such as a hardware security key or passkey-capable device. FIDO2 credentials are bound to a specific relying party origin, making them immune to phishing, and private keys never leave the authenticator device, eliminating the credential theft risk associated with password databases.
