---
okf_version: "0.2"
type: Class
title: Sequencer
resource: urn:ngm:class:sequencer
domain: blockchain
description: A sequencer is a component in a blockchain rollup or layer-2 system that receives user transactions, orders them into a canonical sequence, and produces blocks or batches for execution and settlement. By fixing transaction order off-chain before posting to the base layer, the sequencer enables fast confirmations and low fees. Sequencer design directly governs liveness, fairness, and the centralisa
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:layer-2-scaling
hasPart:
  - urn:ngm:class:rollup
requires:
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:censorship-resistance
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:data-availability
implements:
  - urn:ngm:class:fraud-proof
contrastsWith:
  - urn:ngm:class:validator
bridgesTo:
  - urn:ngm:class:data-availability
uses:
  - urn:ngm:class:optimistic-rollup
supports:
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
partOf:
  - urn:ngm:class:rollup
relatedTo:
  - urn:ngm:class:mev
  - urn:ngm:class:decentralization
---

# Sequencer

A sequencer is a component in a blockchain rollup or layer-2 system that receives user transactions, orders them into a canonical sequence, and produces blocks or batches for execution and settlement. By fixing transaction order off-chain before posting to the base layer, the sequencer enables fast confirmations and low fees. Sequencer design directly governs liveness, fairness, and the centralisation risk of a rollup.
