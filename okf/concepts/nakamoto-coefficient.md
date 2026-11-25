---
okf_version: "0.2"
type: Class
title: Nakamoto Coefficient
resource: urn:ngm:class:nakamoto-coefficient
domain: blockchain
description: "The Nakamoto Coefficient is a quantitative metric for blockchain decentralisation, defined as the minimum number of independent entities in a given subsystem (such as mining pool concentration, validator set, or client software diversity) whose collusion or failure would be sufficient to compromise network security, liveness, or integrity. A higher Nakamoto Coefficient indicates a more resilient, "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:bc-governance-and-regulation
supports:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-set
relatedTo:
  - urn:ngm:class:51-attack
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:blockchain-governance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Nakamoto Coefficient

The Nakamoto Coefficient is a quantitative metric for blockchain decentralisation, defined as the minimum number of independent entities in a given subsystem (such as mining pool concentration, validator set, or client software diversity) whose collusion or failure would be sufficient to compromise network security, liveness, or integrity. A higher Nakamoto Coefficient indicates a more resilient, decentralised network; a coefficient of one denotes a single point of failure. The metric is applicable across multiple dimensions of a network simultaneously, yielding a multi-dimensional decentralisation profile rather than a single scalar.
