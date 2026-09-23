---
okf_version: "0.2"
type: Class
title: Finality Gadget
resource: urn:ngm:class:finality-gadget
domain: blockchain
description: A Finality Gadget is a protocol component layered onto a block-producing (typically probabilistically-final) blockchain to provide periodic deterministic finality for checkpointed epochs, operating as a BFT overlay that requires a supermajority of validator stake to attest to a canonical chain prefix before that prefix is considered irreversible. The archetypal finality gadget is Casper the Friend
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:blockchain-security
uses:
  - urn:ngm:class:validator-set
  - urn:ngm:class:validator-node
  - urn:ngm:class:probabilistic-finality
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:gasper-consensus
  - urn:ngm:class:checkpoints
  - urn:ngm:class:epoch
---

# Finality Gadget

A Finality Gadget is a protocol component layered onto a block-producing (typically probabilistically-final) blockchain to provide periodic deterministic finality for checkpointed epochs, operating as a BFT overlay that requires a supermajority of validator stake to attest to a canonical chain prefix before that prefix is considered irreversible. The archetypal finality gadget is Casper the Friendly Finality Gadget (Casper FFG), which Ethereum uses in its Gasper consensus construction alongside LMD-GHOST fork-choice to combine liveness (blocks always added) with periodic safety (epochs finalised every ~12.8 minutes). Finality gadgets decouple the latency-optimised block-production layer from the safety-optimised finality layer, allowing chains to maintain high throughput while providing applications with a provable point after which reorganisation is cryptoeconomically infeasible.
