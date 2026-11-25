---
okf_version: "0.2"
type: Class
title: Phishing Resistance
resource: urn:ngm:class:phishing-resistance
domain: security
description: Phishing resistance is a property of an authentication mechanism whereby credentials cannot be captured, replayed, or relayed by an attacker impersonating a legitimate service, because the authentication protocol cryptographically binds the exchange to the origin requesting it. Mechanisms such as FIDO2/WebAuthn and hardware security keys achieve this by verifying the requesting origin as part of t
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:authentication
partOf:
  - urn:ngm:class:authentication
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Phishing Resistance

Phishing resistance is a property of an authentication mechanism whereby credentials cannot be captured, replayed, or relayed by an attacker impersonating a legitimate service, because the authentication protocol cryptographically binds the exchange to the origin requesting it. Mechanisms such as FIDO2/WebAuthn and hardware security keys achieve this by verifying the requesting origin as part of the cryptographic challenge, so a spoofed site cannot obtain a usable credential. It is increasingly mandated as a baseline requirement for high-assurance authentication standards.
