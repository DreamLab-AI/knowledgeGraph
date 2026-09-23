---
okf_version: "0.2"
type: Class
title: Quorum Blockchain
resource: urn:ngm:class:quorum-blockchain
domain: blockchain
description: An enterprise-grade permissioned ereum fork, initiated by JPMorgan Chase's Blockchain Centre of Excellence and open-sourced under Apache 2.0 that extends the ereum protocol with private transaction envelopes managed by the Tessera privacy manager (successor to Constellation, implemented v...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:consortium-blockchain
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:permissioned-blockchain
  - urn:ngm:class:enterprise-blockchain
  - urn:ngm:class:distributed-ledger
hasPart:
  - urn:ngm:class:evm
  - urn:ngm:class:go-quorum
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:qbft
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:solidity
  - urn:ngm:class:tessera
  - urn:ngm:class:hyperledger-besu
  - urn:ngm:class:ibft-consensus
  - urn:ngm:class:qbft
  - urn:ngm:class:clique-consensus
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:permissioning-framework
requires:
  - urn:ngm:class:identity-management
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:identity-management
enables:
  - urn:ngm:class:cbdc-infrastructure
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:tokenised-real-world-assets
  - urn:ngm:class:trade-finance-automation
  - urn:ngm:class:wholesale-cbdc
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:tokenised-real-world-assets
  - urn:ngm:class:institutional-settlement
  - urn:ngm:class:tokenised-repo
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:solidity
  - urn:ngm:class:go-ethereum
  - urn:ngm:class:json-rpc-api
  - urn:ngm:class:p2p-networking
implements:
  - urn:ngm:class:enterprise-ethereum-alliance-specification
  - urn:ngm:class:erc20-standard
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:qbft
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:istanbul-bft
  - urn:ngm:class:qbft
  - urn:ngm:class:erc-20-token-standard
contrastsWith:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:r3-corda
  - urn:ngm:class:public-ethereum
  - urn:ngm:class:hyperledger-besu
  - urn:ngm:class:daml-ledger
  - urn:ngm:class:permissioned-blockchain
uses:
  - urn:ngm:class:hardhat
  - urn:ngm:class:infura
  - urn:ngm:class:tessera
  - urn:ngm:class:tessera
  - urn:ngm:class:ethsigner
  - urn:ngm:class:web3j
  - urn:ngm:class:truffle-framework
supports:
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:trade-finance
  - urn:ngm:class:digital-asset
  - urn:ngm:class:jpm-coin
  - urn:ngm:class:kinexys-platform
  - urn:ngm:class:digital-asset
  - urn:ngm:class:trade-finance
  - urn:ngm:class:alastria-network
  - urn:ngm:class:securities-settlement
standardizedBy:
  - urn:ngm:class:apache-license-2-0
  - urn:ngm:class:enterprise-ethereum-alliance-specification
  - urn:ngm:class:w3-c-did
  - urn:ngm:class:eip-225-clique
  - urn:ngm:class:ibft-2-0-specification
relatedTo:
  - urn:ngm:class:consen-sys
  - urn:ngm:class:enterprise-ethereum-alliance
  - urn:ngm:class:jpmorgan
  - urn:ngm:class:blockchain-as-a-service
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:digital-asset
  - urn:ngm:class:jpmorgan
---

# Quorum Blockchain

An enterprise-grade permissioned ereum fork, initiated by JPMorgan Chase's Blockchain Centre of Excellence and open-sourced under Apache 2.0 that extends the ereum protocol with private transaction envelopes managed by the Tessera privacy manager (successor to Constellation, implemented v...
