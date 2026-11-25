---
okf_version: "0.2"
type: Class
title: Keccak-256 Hashing
resource: urn:ngm:class:keccak-256-hashing
domain: blockchain
description: Keccak-256 is a cryptographic hash function from the Keccak family, producing a fixed 256-bit digest using a sponge construction. It is the specific variant adopted by Ethereum, distinct from the later NIST-standardised SHA3-256 due to a difference in padding. Keccak-256 provides collision and preimage resistance for addresses, transaction hashes and message commitments in blockchain systems.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:snapshot-voting
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Keccak-256 Hashing

Keccak-256 is a cryptographic hash function from the Keccak family, producing a fixed 256-bit digest using a sponge construction. It is the specific variant adopted by Ethereum, distinct from the later NIST-standardised SHA3-256 due to a difference in padding. Keccak-256 provides collision and preimage resistance for addresses, transaction hashes and message commitments in blockchain systems.
