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
---

# Phishing Resistance

Phishing resistance is a property of an authentication mechanism whereby credentials cannot be captured, replayed, or relayed by an attacker impersonating a legitimate service, because the authentication protocol cryptographically binds the exchange to the origin requesting it. Mechanisms such as FIDO2/WebAuthn and hardware security keys achieve this by verifying the requesting origin as part of the cryptographic challenge, so a spoofed site cannot obtain a usable credential. It is increasingly mandated as a baseline requirement for high-assurance authentication standards.
