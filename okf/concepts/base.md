---
okf_version: "0.2"
type: Class
title: Base
resource: urn:ngm:class:base
domain: blockchain
description: An Ethereum Layer 2 network built by Coinbase using the Optimism OP Stack, providing low-cost, EVM-compatible transactions settled on and secured by the Ethereum mainnet.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:layer-2-scaling
hasPart:
  - urn:ngm:class:sequencer
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:optimism
  - urn:ngm:class:op-stack
  - urn:ngm:class:optimistic-rollup
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:erc-20-tokens
dependsOn:
  - urn:ngm:class:coinbase
  - urn:ngm:class:ethereum-proof-of-stake
contrastsWith:
  - urn:ngm:class:arbitrum
  - urn:ngm:class:polygon
  - urn:ngm:class:zk-rollup
bridgesTo:
  - urn:ngm:class:decentralised-finance-infrastructure
  - urn:ngm:class:web3-payments
  - urn:ngm:class:coinbase
uses:
  - urn:ngm:class:calldata-compression
  - urn:ngm:class:eip-4844
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:decentralised-exchange
partOf:
  - urn:ngm:class:superchain
  - urn:ngm:class:optimism-collective
relatedTo:
  - urn:ngm:class:ethereum-bridge
---

# Base

An Ethereum Layer 2 network built by Coinbase using the Optimism OP Stack, providing low-cost, EVM-compatible transactions settled on and secured by the Ethereum mainnet.
