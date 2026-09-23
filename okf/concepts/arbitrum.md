---
okf_version: "0.2"
type: Class
title: Arbitrum
resource: urn:ngm:class:arbitrum
domain: blockchain
description: Arbitrum is a family of Ethereum layer-2 scaling solutions developed by Offchain Labs that use optimistic rollup technology to increase transaction throughput and reduce fees. Its flagship network, Arbitrum One, launched on mainnet in 2021 and executes transactions in a custom virtual machine while posting transaction data and state commitments to Ethereum. Arbitrum's interactive multi-round fraud
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:rollup
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:sequencer
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralised-finance-domain
dependsOn:
  - urn:ngm:class:data-availability
implements:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:evm-compatibility
contrastsWith:
  - urn:ngm:class:optimism
  - urn:ngm:class:zk-sync
  - urn:ngm:class:zero-knowledge-rollup
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:finance
  - urn:ngm:class:optimism
  - urn:ngm:class:zk-sync
  - urn:ngm:class:polygon
uses:
  - urn:ngm:class:calldata-compression
  - urn:ngm:class:web-assembly
  - urn:ngm:class:governance-token
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cross-chain-bridge
partOf:
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:plasma
  - urn:ngm:class:layer-2-scaling
---

# Arbitrum

Arbitrum is a family of Ethereum layer-2 scaling solutions developed by Offchain Labs that use optimistic rollup technology to increase transaction throughput and reduce fees. Its flagship network, Arbitrum One, launched on mainnet in 2021 and executes transactions in a custom virtual machine while posting transaction data and state commitments to Ethereum. Arbitrum's interactive multi-round fraud-proof protocol distinguishes it from other optimistic rollups by narrowing disputes to a single instruction before on-chain resolution. The ARB token governs the network through the Arbitrum DAO, and Arbitrum Nitro and Orbit extend the technology to custom chains.
