---
okf_version: "0.2"
type: Class
title: Delegated Proof of Stake
resource: urn:ngm:class:delegated-proof-of-stake
domain: blockchain
description: A Proof-of-Stake variant in which token holders delegate block production rights to a fixed number of elected delegates (witnesses or block producers) via a token-weighted democratic voting mechanism. DPoS achieves high throughput and fast block times by concentrating validation among a small elected set, with delegates subject to removal by voters if they misbehave or underperform.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-of-stake
enables:
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:virtual-economy
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:nakamoto-consensus
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:virtual-economy
uses:
  - urn:ngm:class:validator-set
  - urn:ngm:class:epoch
  - urn:ngm:class:governance-token
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:nominated-proof-of-stake
  - urn:ngm:class:liquid-proof-of-stake
  - urn:ngm:class:delegate-democracy
  - urn:ngm:class:blockchain-governance
---

# Delegated Proof of Stake

A Proof-of-Stake variant in which token holders delegate block production rights to a fixed number of elected delegates (witnesses or block producers) via a token-weighted democratic voting mechanism. DPoS achieves high throughput and fast block times by concentrating validation among a small elected set, with delegates subject to removal by voters if they misbehave or underperform.
