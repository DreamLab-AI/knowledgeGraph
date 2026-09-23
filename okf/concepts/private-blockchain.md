---
okf_version: "0.2"
type: Class
title: Private Blockchain
resource: urn:ngm:class:private-blockchain
domain: blockchain
description: A private blockchain is a permissioned distributed ledger in which access, participation, and validation rights are restricted to a pre-approved set of known entities, typically operated by a single organisation or a closed consortium. Unlike public blockchains, private blockchains prioritise throughput, deterministic finality, and data confidentiality over open participation, relying on governanc
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:access-control
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:permissioned-network
  - urn:ngm:class:blockchain-compliance
enables:
  - urn:ngm:class:enterprise-blockchain
  - urn:ngm:class:supply-chain-blockchain
  - urn:ngm:class:blockchain-interoperability
contrastsWith:
  - urn:ngm:class:public-blockchain
  - urn:ngm:class:consortium-blockchain
uses:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:hyperledger-besu
  - urn:ngm:class:byzantine-fault-tolerance
relatedTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:deterministic-finality
---

# Private Blockchain

A private blockchain is a permissioned distributed ledger in which access, participation, and validation rights are restricted to a pre-approved set of known entities, typically operated by a single organisation or a closed consortium. Unlike public blockchains, private blockchains prioritise throughput, deterministic finality, and data confidentiality over open participation, relying on governance frameworks and identity management rather than anonymous proof-of-work mining to secure the network.
