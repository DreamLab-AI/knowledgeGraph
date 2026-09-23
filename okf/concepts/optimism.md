---
okf_version: "0.2"
type: Class
title: Optimism
resource: urn:ngm:class:optimism
domain: blockchain
description: Optimism is an Ethereum layer-2 scaling network that uses optimistic rollup technology to process transactions off the main chain while inheriting Ethereum security. Launched on mainnet in late 2021 by OP Labs, it batches transactions and posts compressed data and state commitments to Ethereum, assuming validity unless challenged within a dispute window. It is closely associated with the OP Stack,
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:op-stack
  - urn:ngm:class:optimism-collective
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:rollup
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:sequencer
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:superchain
  - urn:ngm:class:public-goods-funding
  - urn:ngm:class:decentralised-finance-domain
dependsOn:
  - urn:ngm:class:eip-4844
implements:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:evm
contrastsWith:
  - urn:ngm:class:arbitrum
  - urn:ngm:class:zk-sync
  - urn:ngm:class:polygon
  - urn:ngm:class:zero-knowledge-rollup
bridgesTo:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:retroactive-public-goods-funding
  - urn:ngm:class:arbitrum
  - urn:ngm:class:zk-sync
  - urn:ngm:class:polygon
partOf:
  - urn:ngm:class:ethereum
  - urn:ngm:class:superchain
relatedTo:
  - urn:ngm:class:base
  - urn:ngm:class:cross-chain-interoperability
---

# Optimism

Optimism is an Ethereum layer-2 scaling network that uses optimistic rollup technology to process transactions off the main chain while inheriting Ethereum security. Launched on mainnet in late 2021 by OP Labs, it batches transactions and posts compressed data and state commitments to Ethereum, assuming validity unless challenged within a dispute window. It is closely associated with the OP Stack, a modular open-source framework for building rollup chains, and the broader Superchain concept that links such chains. The OP token governs the Optimism Collective and funds public-goods initiatives through retroactive funding rounds.
