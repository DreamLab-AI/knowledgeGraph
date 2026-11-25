---
okf_version: "0.2"
type: Class
title: Offline Verification
resource: urn:ngm:class:offline-verification
domain: security
description: Offline verification is the ability to cryptographically validate a credential or claim without requiring a live connection to the issuer or a central server. The verifier checks digital signatures against the issuer's public key and any revocation data already held, confirming authenticity and integrity locally. It is a defining property of decentralised identity, enabling trust in low-connectivi
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:digital-identity
relatedTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:self-sovereign-identity
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Offline Verification

Offline verification is the ability to cryptographically validate a credential or claim without requiring a live connection to the issuer or a central server. The verifier checks digital signatures against the issuer's public key and any revocation data already held, confirming authenticity and integrity locally. It is a defining property of decentralised identity, enabling trust in low-connectivity or privacy-sensitive settings.
