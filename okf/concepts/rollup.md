---
okf_version: "0.2"
type: Class
title: Rollup
resource: urn:ngm:class:rollup
domain: blockchain
description: A Rollup is a blockchain scaling technique that executes transactions off a base layer such as Ethereum while posting compressed transaction data and state commitments back to it for settlement and data availability. By batching many transactions and proving or asserting their validity on the main chain, rollups increase throughput and reduce fees while inheriting much of the base layer's security
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:sequencer
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:smart-contract
  - urn:ngm:class:data-availability
enables:
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
  - urn:ngm:class:zk-sync
  - urn:ngm:class:polygon
  - urn:ngm:class:decentralised-application
dependsOn:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:cryptographic-proof
contrastsWith:
  - urn:ngm:class:sidechain
  - urn:ngm:class:state-channel
  - urn:ngm:class:plasma
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:polygon
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:calldata
partOf:
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:proto-danksharding
  - urn:ngm:class:danksharding
---

# Rollup

A Rollup is a blockchain scaling technique that executes transactions off a base layer such as Ethereum while posting compressed transaction data and state commitments back to it for settlement and data availability. By batching many transactions and proving or asserting their validity on the main chain, rollups increase throughput and reduce fees while inheriting much of the base layer's security. Two main types exist: optimistic rollups, which assume validity and rely on fraud proofs during a challenge window, and zero-knowledge rollups, which post validity proofs verifying each batch. Rollups are central to Ethereum's layer-2 scaling strategy.
