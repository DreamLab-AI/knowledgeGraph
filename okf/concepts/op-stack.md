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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Op Stack

The OP Stack is an open-source, modular software framework, originally developed for Optimism, used to deploy and operate Ethereum layer-2 networks built on the optimistic rollup model. It standardises the components of a rollup chain, including the sequencer, derivation pipeline, fault-proof system, and bridge contracts, so that many independent chains can share a common technical foundation. Chains built on it interoperate as a federation often described as a superchain.
