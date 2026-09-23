---
okf_version: "0.2"
type: Class
title: Op Stack
resource: urn:ngm:class:op-stack
domain: blockchain
description: The OP Stack is an open-source, modular software framework, originally developed for Optimism, used to deploy and operate Ethereum layer-2 networks built on the optimistic rollup model. It standardises the components of a rollup chain, including the sequencer, derivation pipeline, fault-proof system, and bridge contracts, so that many independent chains can share a common technical foundation. Cha
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:optimistic-rollup
hasPart:
  - urn:ngm:class:sequencer
  - urn:ngm:class:fraud-proof
requires:
  - urn:ngm:class:rollup
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:optimism
  - urn:ngm:class:cross-chain-bridge
dependsOn:
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:layer-2-scaling
contrastsWith:
  - urn:ngm:class:gas-optimization
uses:
  - urn:ngm:class:data-availability
  - urn:ngm:class:evm-compatibility
supports:
  - urn:ngm:class:modular-blockchain
relatedTo:
  - urn:ngm:class:blockchain
---

# Op Stack

The OP Stack is an open-source, modular software framework, originally developed for Optimism, used to deploy and operate Ethereum layer-2 networks built on the optimistic rollup model. It standardises the components of a rollup chain, including the sequencer, derivation pipeline, fault-proof system, and bridge contracts, so that many independent chains can share a common technical foundation. Chains built on it interoperate as a federation often described as a superchain.
