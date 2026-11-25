---
okf_version: "0.2"
type: Class
title: Password Authentication
resource: urn:ngm:class:password-authentication
domain: security
description: Password authentication is a knowledge-based method of verifying a user's identity by checking a secret string they supply against a stored credential. The stored credential is typically a salted cryptographic hash rather than the plaintext password, so that the secret is never recovered even if the store is compromised. As a single-factor mechanism it is widely deployed but vulnerable to guessing
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:identity-management
  - urn:ngm:class:session-management
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-verification
dependsOn:
  - urn:ngm:class:cryptography
contrastsWith:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:multi-factor-authentication
uses:
  - urn:ngm:class:cryptography
  - urn:ngm:class:salt
supports:
  - urn:ngm:class:single-sign-on
relatedTo:
  - urn:ngm:class:privacy
  - urn:ngm:class:data-protection
  - urn:ngm:class:security
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Password Authentication

Password authentication is a knowledge-based method of verifying a user's identity by checking a secret string they supply against a stored credential. The stored credential is typically a salted cryptographic hash rather than the plaintext password, so that the secret is never recovered even if the store is compromised. As a single-factor mechanism it is widely deployed but vulnerable to guessing, reuse, phishing, and credential-stuffing attacks, motivating stronger or supplementary methods.
