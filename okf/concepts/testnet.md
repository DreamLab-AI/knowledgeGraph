---
okf_version: "0.2"
type: Class
title: Testnet
resource: urn:ngm:class:testnet
domain: blockchain
description: Blockchain testnet is a parallel blockchain network maintained by protocol developers and validators that mirrors the structure, consensus rules, and transaction semantics of a production mainnet whilst operating in a sandboxed environment with free or faucet-dispensed native tokens (typically 1 ...
maturity: established
quality: 0.51
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:distributed-system
  - urn:ngm:class:testing-infrastructure
  - urn:ngm:class:protocol-implementation
  - urn:ngm:class:peer-to-peer-network
hasPart:
  - urn:ngm:class:block-explorer
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:full-node
  - urn:ngm:class:genesis-block
  - urn:ngm:class:validator-node
  - urn:ngm:class:faucet
  - urn:ngm:class:mining-staking-pool
  - urn:ngm:class:sepolia-testnet
  - urn:ngm:class:holesky-testnet
  - urn:ngm:class:bitcoin-testnet3
  - urn:ngm:class:solana-devnet
  - urn:ngm:class:polygon-amoy
  - urn:ngm:class:arbitrum-sepolia
  - urn:ngm:class:optimism-sepolia
requires:
  - urn:ngm:class:consensus-rule
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:native-token
  - urn:ngm:class:peerto-peer-protocol
  - urn:ngm:class:state-management
  - urn:ngm:class:native-token
  - urn:ngm:class:consensus-rules
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:peerto-peer-protocol
enables:
  - urn:ngm:class:smart-contract-development
  - urn:ngm:class:protocol-testing
  - urn:ngm:class:dapp-deployment
  - urn:ngm:class:cross-chain-integration
  - urn:ngm:class:consensus-research
dependsOn:
  - urn:ngm:class:network-protocol-stack
  - urn:ngm:class:cryptography
  - urn:ngm:class:database-systems
  - urn:ngm:class:economic-models
  - urn:ngm:class:formal-verification-theory
implements:
  - urn:ngm:class:pbft
  - urn:ngm:class:validator-selection
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:pbft
contrastsWith:
  - urn:ngm:class:mainnet
  - urn:ngm:class:private-blockchain
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:local-development-network
bridgesTo:
  - urn:ngm:class:testing-infrastructure
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:mempool
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:rlp-encoding
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:mempool
supports:
  - urn:ngm:class:performance-benchmarks
  - urn:ngm:class:security-audit
  - urn:ngm:class:developer-onboarding
  - urn:ngm:class:bug-discovery
  - urn:ngm:class:performance-benchmarks
  - urn:ngm:class:security-audit
  - urn:ngm:class:validator-training
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:polkadot
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:polkadot
relatedTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:validator-economics
  - urn:ngm:class:staging-environment
  - urn:ngm:class:protocol-upgrade
---

# Testnet

Blockchain testnet is a parallel blockchain network maintained by protocol developers and validators that mirrors the structure, consensus rules, and transaction semantics of a production mainnet whilst operating in a sandboxed environment with free or faucet-dispensed native tokens (typically 1 ...
