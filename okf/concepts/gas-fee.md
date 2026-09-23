---
okf_version: "0.2"
type: Class
title: Gas Fee
resource: urn:ngm:class:gas-fee
domain: blockchain
description: A gas fee is the payment a user must make to compensate the network validators or miners for the computational resources consumed when processing a transaction or executing a smart contract on a blockchain. On Ethereum-compatible networks, 'gas' is an abstract unit measuring the computational effort required by an operation; the fee is calculated as gas units consumed multiplied by a price per uni
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:transaction-fee
requires:
  - urn:ngm:class:native-token
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:spam-prevention
  - urn:ngm:class:block-production
dependsOn:
  - urn:ngm:class:gas-limit
  - urn:ngm:class:gas-price
  - urn:ngm:class:network-congestion
implements:
  - urn:ngm:class:eip-1559
contrastsWith:
  - urn:ngm:class:feeless-blockchain
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:tokenomics
  - urn:ngm:class:microeconomics
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:mempool
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:layer-2-scaling
partOf:
  - urn:ngm:class:ethereum
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:base-fee
  - urn:ngm:class:priority-fee
  - urn:ngm:class:miner-extractable-value
---

# Gas Fee

A gas fee is the payment a user must make to compensate the network validators or miners for the computational resources consumed when processing a transaction or executing a smart contract on a blockchain. On Ethereum-compatible networks, 'gas' is an abstract unit measuring the computational effort required by an operation; the fee is calculated as gas units consumed multiplied by a price per unit (the gas price), denominated in the network's native currency. Following EIP-1559 on Ethereum, gas fees split into a protocol-set base fee — which is burned, permanently removing supply — and an optional priority tip paid directly to the block proposer. Gas fees serve the dual purpose of economically compensating validators and acting as a spam-prevention mechanism by making resource-intensive computation costly.
