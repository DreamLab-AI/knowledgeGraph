---
okf_version: "0.2"
type: Class
title: Smart Contract Platform
resource: urn:ngm:class:smart-contract-platform
domain: blockchain
description: A Smart Contract Platform is a blockchain-based infrastructure layer that provides a deterministic execution environment for self-executing programmable agreements, enabling decentralised application (dApp) development through virtual machine runtimes, developer toolchains, consensus-enforced state transitions, and economic incentive mechanisms such as gas metering. These platforms extend base-lay
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:gas-metering
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:developer-toolchain
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:dao
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:token-standard
dependsOn:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:merkle-tree
contrastsWith:
  - urn:ngm:class:traditional-contract
bridgesTo:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:supply-chain-traceability
supports:
  - urn:ngm:class:account-abstraction
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:formal-verification
  - urn:ngm:class:oracle-network
  - urn:ngm:class:tokenomics
---

# Smart Contract Platform

A Smart Contract Platform is a blockchain-based infrastructure layer that provides a deterministic execution environment for self-executing programmable agreements, enabling decentralised application (dApp) development through virtual machine runtimes, developer toolchains, consensus-enforced state transitions, and economic incentive mechanisms such as gas metering. These platforms extend base-layer blockchains with Turing-complete or domain-specific scripting capabilities, allowing arbitrary business logic to be encoded and trustlessly enforced on a shared public ledger. Prominent examples include Ethereum and its EVM-compatible derivatives, Solana with its Sealevel parallel runtime, Cardano with its Plutus/eUTXO model, and Polkadot with its ink! WebAssembly runtime. Each platform makes distinct design trade-offs across the performance-security-decentralisation trilemma and imposes its own programming model, fee structure, and upgrade governance.
