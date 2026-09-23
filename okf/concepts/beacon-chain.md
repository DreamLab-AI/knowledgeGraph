---
okf_version: "0.2"
type: Class
title: Beacon Chain
resource: urn:ngm:class:beacon-chain
domain: blockchain
description: The Beacon Chain is the proof-of-stake consensus backbone introduced to Ethereum that coordinates validators, manages staking, and finalises blocks. It organises time into slots and epochs, assigns block-proposal and attestation duties, and applies a finality gadget that locks in the canonical chain. The Beacon Chain decouples consensus from execution, providing the security and randomness that th
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:consensus-layer
hasPart:
  - urn:ngm:class:validator
  - urn:ngm:class:attestation
  - urn:ngm:class:epoch
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:staking
  - urn:ngm:class:validator
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:sharding
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:staking
implements:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:consensus-mechanism
uses:
  - urn:ngm:class:block-proposal
  - urn:ngm:class:attestation
supports:
  - urn:ngm:class:ethereum
  - urn:ngm:class:consensus-layer
partOf:
  - urn:ngm:class:consensus-layer
relatedTo:
  - urn:ngm:class:ethereum
  - urn:ngm:class:sharding
  - urn:ngm:class:finality
---

# Beacon Chain

The Beacon Chain is the proof-of-stake consensus backbone introduced to Ethereum that coordinates validators, manages staking, and finalises blocks. It organises time into slots and epochs, assigns block-proposal and attestation duties, and applies a finality gadget that locks in the canonical chain. The Beacon Chain decouples consensus from execution, providing the security and randomness that the broader sharded and execution layers build upon.
