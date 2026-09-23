---
okf_version: "0.2"
type: Class
title: Gas
resource: urn:ngm:class:gas
domain: blockchain
description: Gas is the unit of computational work measurement within EVM-compatible blockchains. Every opcode executed by the Ethereum Virtual Machine consumes a defined gas quantity; users pay gas_price × gas_used to validators, preventing denial-of-service through unbounded computation and creating a market for block space.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:economic-mechanism
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:gas-limit
  - urn:ngm:class:gas-price
  - urn:ngm:class:gas-fee-market
  - urn:ngm:class:base-fee
  - urn:ngm:class:priority-fee
requires:
  - urn:ngm:class:ethereum-account
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:smart-contract-execution
dependsOn:
  - urn:ngm:class:proof-of-stake
implements:
  - urn:ngm:class:eip-1559
contrastsWith:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:feeless-blockchain
bridgesTo:
  - urn:ngm:class:microeconomics
  - urn:ngm:class:resource-allocation
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:opcodes
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:blockchain-consensus
relatedTo:
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:fee-market
  - urn:ngm:class:tokenomics
---

# Gas

Gas is the unit of computational work measurement within EVM-compatible blockchains. Every opcode executed by the Ethereum Virtual Machine consumes a defined gas quantity; users pay gas_price × gas_used to validators, preventing denial-of-service through unbounded computation and creating a market for block space.
