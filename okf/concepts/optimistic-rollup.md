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
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralised-application
partOf:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
  - urn:ngm:class:base
---

# Optimistic Rollup

A layer-two scaling design that posts transaction data to a base chain and assumes results are valid unless challenged within a dispute window through a fraud proof.
