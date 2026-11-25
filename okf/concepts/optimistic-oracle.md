---
okf_version: "0.2"
type: Class
title: Optimistic Oracle
resource: urn:ngm:class:optimistic-oracle
domain: blockchain
description: An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:price-oracle
requires:
  - urn:ngm:class:dispute-resolution
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:decentralised-finance
bridgesTo:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:chainlink
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Optimistic Oracle

An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.
