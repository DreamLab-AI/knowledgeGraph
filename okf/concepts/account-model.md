---
okf_version: "0.2"
type: Class
title: Account Model
resource: urn:ngm:class:account-model
domain: blockchain
description: The Account Model is a balance-based ledger paradigm in which each address maintains a persistent balance that is updated in-place when transactions execute. Unlike the UTXO model, accounts hold state across transactions, simplifying smart contract programming while introducing challenges around replay protection and nonce management.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:transaction
  - urn:ngm:class:wallet
  - urn:ngm:class:nonce
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:transaction-processing
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:token-standard
dependsOn:
  - urn:ngm:class:merkle-patricia-trie
  - urn:ngm:class:state-root
implements:
  - urn:ngm:class:ledger
contrastsWith:
  - urn:ngm:class:utxo-model
bridgesTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:de-fi
supports:
  - urn:ngm:class:gas-mechanism
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:double-spending
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:externally-owned-account
---

# Account Model

The Account Model is a balance-based ledger paradigm in which each address maintains a persistent balance that is updated in-place when transactions execute. Unlike the UTXO model, accounts hold state across transactions, simplifying smart contract programming while introducing challenges around replay protection and nonce management.
