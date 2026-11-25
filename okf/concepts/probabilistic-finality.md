---
okf_version: "0.2"
type: Class
title: Probabilistic Finality
resource: urn:ngm:class:probabilistic-finality
domain: blockchain
description: Probabilistic finality is a transaction confirmation model characteristic of longest-chain consensus mechanisms where confidence in transaction irreversibility increases exponentially with block depth, approaching but never reaching absolute certainty, with reversal probability decaying as (q/p)^...
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain
  - urn:ngm:class:transaction-finality
requires:
  - urn:ngm:class:longest-chain-rule
contrastsWith:
  - urn:ngm:class:deterministic-finality
uses:
  - urn:ngm:class:proof-of-work
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Probabilistic Finality

Probabilistic finality is a transaction confirmation model characteristic of longest-chain consensus mechanisms where confidence in transaction irreversibility increases exponentially with block depth, approaching but never reaching absolute certainty, with reversal probability decaying as (q/p)^...
