---
okf_version: "0.2"
type: Class
title: One Time Password
resource: urn:ngm:class:one-time-password
domain: security
description: A one-time password (OTP) is a credential that is valid for only a single login session or transaction, mitigating the risk of credential replay associated with static passwords. OTPs are typically generated from a shared secret combined with a moving factor — either a counter (HOTP) or the current time (TOTP) — using an HMAC construction, and delivered through authenticator apps, hardware tokens,
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:multi-factor-authentication
hasPart:
  - urn:ngm:class:hmac
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:key-generation
enables:
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:modular-arithmetic
implements:
  - urn:ngm:class:multi-factor-authentication
contrastsWith:
  - urn:ngm:class:passwordless-authentication
uses:
  - urn:ngm:class:hmac
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-signature
---

# One Time Password

A one-time password (OTP) is a credential that is valid for only a single login session or transaction, mitigating the risk of credential replay associated with static passwords. OTPs are typically generated from a shared secret combined with a moving factor — either a counter (HOTP) or the current time (TOTP) — using an HMAC construction, and delivered through authenticator apps, hardware tokens, or out-of-band channels such as SMS. While OTPs strengthen authentication as a second factor, they remain susceptible to real-time phishing, in contrast to origin-bound phishing-resistant methods.
