---
okf_version: "0.2"
type: Class
title: Optimistic Rollup
resource: urn:ngm:class:optimistic-rollup
domain: blockchain
description: A layer-two scaling design that posts transaction data to a base chain and assumes results are valid unless challenged within a dispute window through a fraud proof.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:rollup
hasPart:
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:sequencer
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:data-availability
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:evm-compatibility
  - urn:ngm:class:transaction-throughput
dependsOn:
  - urn:ngm:class:base-layer
  - urn:ngm:class:evm
implements:
  - urn:ngm:class:optimistic-execution
contrastsWith:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:plasma
  - urn:ngm:class:state-channel
bridgesTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:interoperability
  - urn:ngm:class:evm
  - urn:ngm:class:optimism
uses:
  - urn:ngm:class:calldata
  - urn:ngm:class:state-root
supports:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:decentralised-application
partOf:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
  - urn:ngm:class:base
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Optimistic Rollup

A layer-two scaling design that posts transaction data to a base chain and assumes results are valid unless challenged within a dispute window through a fraud proof.
