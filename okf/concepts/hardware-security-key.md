---
okf_version: "0.2"
type: Class
title: Hardware Security Key
resource: urn:ngm:class:hardware-security-key
domain: security
description: A hardware security key is a dedicated physical authenticator — typically a USB, NFC, or Bluetooth device — that stores cryptographic keys and performs origin-bound public-key challenge responses to prove possession of a second factor. By keeping private keys in tamper-resistant hardware and signing only challenges scoped to the legitimate web origin, it provides strong resistance to phishing, cre
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:multi-factor-authentication
hasPart:
  - urn:ngm:class:yubikey
requires:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:passkey
  - urn:ngm:class:phishing-resistance
implements:
  - urn:ngm:class:fido2
  - urn:ngm:class:web-authn
  - urn:ngm:class:u2f
contrastsWith:
  - urn:ngm:class:password
  - urn:ngm:class:biometric-authentication
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:security-token
partOf:
  - urn:ngm:class:multi-factor-authentication
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hardware Security Key

A hardware security key is a dedicated physical authenticator — typically a USB, NFC, or Bluetooth device — that stores cryptographic keys and performs origin-bound public-key challenge responses to prove possession of a second factor. By keeping private keys in tamper-resistant hardware and signing only challenges scoped to the legitimate web origin, it provides strong resistance to phishing, credential replay, and man-in-the-middle attacks that defeat one-time-password methods. Hardware keys implement open standards such as FIDO2 and U2F and are a core enabler of passwordless and passkey-based authentication.
