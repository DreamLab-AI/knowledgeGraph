---
okf_version: "0.2"
type: Class
title: Ethereum
resource: urn:ngm:class:ethereum
domain: blockchain
description: Ethereum is an open-source, decentralised layer-1 blockchain platform conceived by Vitalik Buterin and launched in 2015, distinguished from Bitcoin by its general-purpose programmability via the Ethereum Virtual Machine (EVM), which executes Turing-complete smart contracts deployed on a shared global state. It transitioned from Proof of Work to Proof of Stake in September 2022 (the Merge), dramati
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:blockchain-network
hasPart:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:evm
  - urn:ngm:class:solidity
  - urn:ngm:class:gas
  - urn:ngm:class:mempool
  - urn:ngm:class:merkle-patricia-trie
  - urn:ngm:class:ethereum-node
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:validator-node
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:dao
  - urn:ngm:class:nft
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:account-abstraction
  - urn:ngm:class:restaking
  - urn:ngm:class:rollup
implements:
  - urn:ngm:class:eip-1559
  - urn:ngm:class:eip-4844
  - urn:ngm:class:eip
  - urn:ngm:class:erc20
  - urn:ngm:class:erc721
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
contrastsWith:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:solana
  - urn:ngm:class:polkadot
  - urn:ngm:class:avalanche
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:digital-sovereignty
  - urn:ngm:class:distributed-ledger-technology
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-standard
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:elliptic-curve-cryptography
---

# Ethereum

Ethereum is an open-source, decentralised layer-1 blockchain platform conceived by Vitalik Buterin and launched in 2015, distinguished from Bitcoin by its general-purpose programmability via the Ethereum Virtual Machine (EVM), which executes Turing-complete smart contracts deployed on a shared global state. It transitioned from Proof of Work to Proof of Stake in September 2022 (the Merge), dramatically reducing energy consumption while preserving consensus security through a validator set staking Ether (ETH). Ethereum serves as the foundational settlement layer for the majority of decentralised finance (DeFi) protocols, NFT standards, DAOs, and Layer-2 rollup networks, with its fee market governed by EIP-1559's base-fee-burn mechanism.
