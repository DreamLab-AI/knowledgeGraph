---
okf_version: "0.2"
type: Class
title: Chaumian Ecash
resource: urn:ngm:class:chaumian-ecash
domain: blockchain
description: Chaumian ecash is a form of digital cash, invented by David Chaum, that uses blind signatures to issue bearer tokens redeemable at a central mint while preserving payer privacy. The mint signs blinded token requests so it cannot link issued tokens to the users who later spend them, providing strong untraceability with offline-style bearer transfer. It matters as the cryptographic foundation for pr
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-protocol
relatedTo:
  - urn:ngm:class:fedimint
  - urn:ngm:class:cashu
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Chaumian Ecash

Chaumian ecash is a form of digital cash, invented by David Chaum, that uses blind signatures to issue bearer tokens redeemable at a central mint while preserving payer privacy. The mint signs blinded token requests so it cannot link issued tokens to the users who later spend them, providing strong untraceability with offline-style bearer transfer. It matters as the cryptographic foundation for privacy-preserving custodial payment systems, revived in Bitcoin through mints such as Cashu and Fedimint.
