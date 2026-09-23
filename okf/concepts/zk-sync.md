---
okf_version: "0.2"
type: Class
title: zkSync
resource: urn:ngm:class:zk-sync
domain: blockchain
description: zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactio
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:validity-proof
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:rollup
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:data-availability
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:decentralised-finance-domain
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-tree
implements:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:evm-compatibility
contrastsWith:
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
  - urn:ngm:class:starknet
  - urn:ngm:class:optimistic-rollup
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:finance
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
  - urn:ngm:class:polygon
uses:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zk-starks
  - urn:ngm:class:solidity
supports:
  - urn:ngm:class:erc-20-tokens
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:ethereum
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:polygon
  - urn:ngm:class:polygon-zkevm
  - urn:ngm:class:layer-2-networks
---

# zkSync

zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactions is valid, the network achieves Ethereum-level settlement security without an optimistic challenge period. zkSync is part of a broader effort to scale Ethereum through zero-knowledge cryptography.
