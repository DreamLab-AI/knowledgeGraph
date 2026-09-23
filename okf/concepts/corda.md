---
okf_version: "0.2"
type: Class
title: Corda
resource: urn:ngm:class:corda
domain: blockchain
description: "Corda is an open-source permissioned distributed ledger platform developed by R3 and purpose-built for regulated industries, where transaction data is shared exclusively between the counterparties involved rather than broadcast to all network participants. Unlike public blockchains, Corda structures its ledger as a directed acyclic graph of Unspent Transaction Outputs (UTXOs) called states, which "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:permissioned-blockchain
requires:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:notary-service
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:digital-asset
  - urn:ngm:class:trade-finance
dependsOn:
  - urn:ngm:class:identity-management
  - urn:ngm:class:network-map
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:zero-knowledge-proof
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:public-blockchain
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:central-bank-digital-currency-cbdc
uses:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:jvm-runtime
  - urn:ngm:class:kotlin
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:jvm-runtime
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-privacy
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:enterprise-blockchain
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-systems
---

# Corda

Corda is an open-source permissioned distributed ledger platform developed by R3 and purpose-built for regulated industries, where transaction data is shared exclusively between the counterparties involved rather than broadcast to all network participants. Unlike public blockchains, Corda structures its ledger as a directed acyclic graph of Unspent Transaction Outputs (UTXOs) called states, which are consumed and produced by atomic transactions validated by both smart contract code and legal prose. A notary cluster provides consensus on transaction uniqueness, preventing double-spend without revealing transaction details to uninvolved parties, making Corda particularly suited to financial services, trade finance, and healthcare interoperability scenarios.
