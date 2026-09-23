---
okf_version: "0.2"
type: Class
title: Hyperledger Besu
resource: urn:ngm:class:hyperledger-besu
domain: blockchain
description: Enterprise-grade Ethereum client developed by the Hyperledger Foundation supporting both public and permissioned private blockchain deployments with pluggable consensus mechanisms including Proof of Work, Proof of Authority (Clique/IBFT), and Practical Byzantine Fault Tolerance (PBFT). Besu provides full EVM compatibility, privacy extensions via private transaction groups, permissioning, and a JSO
maturity: draft
quality: 0.65
is-a:
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:consortium-blockchain
  - urn:ngm:class:regulatory-compliance
implements:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:proof-of-authority
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:json-data-interchange-format-rpc
  - urn:ngm:class:consensus-protocol
contrastsWith:
  - urn:ngm:class:hyperledger-fabric
bridgesTo:
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:private-channels
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:permissioned-blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:private-transaction
standardizedBy:
  - urn:ngm:class:hyperledger-foundation
partOf:
  - urn:ngm:class:hyperledger-foundation
  - urn:ngm:class:enterprise-blockchain-architecture
  - urn:ngm:class:hyperledger-foundation
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:enterprise-blockchain
---

# Hyperledger Besu

Enterprise-grade Ethereum client developed by the Hyperledger Foundation supporting both public and permissioned private blockchain deployments with pluggable consensus mechanisms including Proof of Work, Proof of Authority (Clique/IBFT), and Practical Byzantine Fault Tolerance (PBFT). Besu provides full EVM compatibility, privacy extensions via private transaction groups, permissioning, and a JSON-RPC/WebSocket API surface, making it suitable for enterprise consortia, regulated financial networks, and cross-chain interoperability scenarios.
