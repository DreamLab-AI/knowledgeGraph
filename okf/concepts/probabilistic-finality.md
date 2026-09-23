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
---

# Probabilistic Finality

Probabilistic finality is a transaction confirmation model characteristic of longest-chain consensus mechanisms where confidence in transaction irreversibility increases exponentially with block depth, approaching but never reaching absolute certainty, with reversal probability decaying as (q/p)^...
