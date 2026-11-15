---
okf_version: "0.2"
type: Class
title: Passkey
resource: urn:ngm:class:passkey
domain: security
description: A passkey is a phishing-resistant, passwordless credential built on WebAuthn and FIDO2 public-key cryptography, stored on a device or synced across a user's devices via a platform cloud account. Authentication proceeds by the device signing a server-issued challenge with a private key that never leaves secure hardware, eliminating shared secrets that can be phished, leaked, or reused. Passkeys are
maturity: established
quality: 0
is-a:
  - urn:ngm:class:authentication-mechanism
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Passkey

A passkey is a phishing-resistant, passwordless credential built on WebAuthn and FIDO2 public-key cryptography, stored on a device or synced across a user's devices via a platform cloud account. Authentication proceeds by the device signing a server-issued challenge with a private key that never leaves secure hardware, eliminating shared secrets that can be phished, leaked, or reused. Passkeys are backed by biometric or PIN unlock at the device level and are promoted jointly by Apple, Google, and Microsoft as a replacement for passwords. They require a compatible authenticator and relying-party support to function.
