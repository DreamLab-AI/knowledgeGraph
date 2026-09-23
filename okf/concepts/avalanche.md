---
okf_version: "0.2"
type: Class
title: Avalanche
resource: urn:ngm:class:avalanche
domain: blockchain
description: Avalanche is a high-throughput, low-latency layer-1 blockchain platform developed by Ava Labs that employs the Avalanche consensus family — a suite of leaderless, Byzantine-fault-tolerant protocols (Snowflake, Snowball, Avalanche) based on repeated random sub-sampled voting — to achieve probabilistic transaction finality in under two seconds. The platform is architecturally divided into three purp
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:blockchain-network
hasPart:
  - urn:ngm:class:x-chain
  - urn:ngm:class:p-chain
  - urn:ngm:class:c-chain
  - urn:ngm:class:subnet
requires:
  - urn:ngm:class:validator-node
  - urn:ngm:class:staking
enables:
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:tokenization
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:neural-network-text-tokenisation
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:avalanche-consensus
contrastsWith:
  - urn:ngm:class:polkadot
  - urn:ngm:class:ethereum
  - urn:ngm:class:solana
  - urn:ngm:class:polygon
bridgesTo:
  - urn:ngm:class:real-world-asset-tokenisation
  - urn:ngm:class:enterprise-blockchain
uses:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:evm
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:layer-1-blockchain
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:warp-messaging
---

# Avalanche

Avalanche is a high-throughput, low-latency layer-1 blockchain platform developed by Ava Labs that employs the Avalanche consensus family — a suite of leaderless, Byzantine-fault-tolerant protocols (Snowflake, Snowball, Avalanche) based on repeated random sub-sampled voting — to achieve probabilistic transaction finality in under two seconds. The platform is architecturally divided into three purpose-built chains: the Exchange Chain (X-Chain) for UTXO-model asset transfers, the Platform Chain (P-Chain) for validator and subnet management, and the Contract Chain (C-Chain) providing an EVM-compatible execution environment for Solidity smart contracts. Its subnet (now called L1) model allows developers to launch application-specific blockchains with custom virtual machines while optionally sharing primary-network validator sets, enabling both permissioned enterprise deployments and public decentralised applications within a unified interoperable ecosystem.
