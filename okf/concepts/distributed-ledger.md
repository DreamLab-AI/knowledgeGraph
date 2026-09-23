---
okf_version: "0.2"
type: Class
title: Distributed Ledger
resource: urn:ngm:class:distributed-ledger
domain: blockchain
description: A Distributed Ledger (or Distributed Ledger Technology, DLT) is a cryptographically-secured, append-only data structure replicated across a set of independently-operated nodes that collectively reach agreement on the canonical sequence and validity of state transitions through a deterministic
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:data-structure
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:append-only-log
  - urn:ngm:class:distributed-system
  - urn:ngm:class:multi-party-database
hasPart:
  - urn:ngm:class:notary-service
  - urn:ngm:class:state-transition-function
  - urn:ngm:class:validator-set
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:transaction-pool
requires:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:node-software
  - urn:ngm:class:time-ordering
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:network-layer
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:cbdcs
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:immutable-record
  - urn:ngm:class:programmable-money
  - urn:ngm:class:real-time-gross-settlement
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:transaction-history
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:cbdcs
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:network-connectivity
  - urn:ngm:class:node-operators
  - urn:ngm:class:governance-framework
implements:
  - urn:ngm:class:channel-isolation-pattern
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:notary-service
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:notary-service
contrastsWith:
  - urn:ngm:class:blockchain
  - urn:ngm:class:traditional-database
  - urn:ngm:class:centralised-ledger
  - urn:ngm:class:federated-database
  - urn:ngm:class:cloud-database
uses:
  - urn:ngm:class:hash-pointers
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:retail-cbdc
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:supply-chain-provenance
  - urn:ngm:class:tokenised-deposits
  - urn:ngm:class:tokenised-real-world-assets
  - urn:ngm:class:trade-finance
  - urn:ngm:class:wholesale-cbdc
  - urn:ngm:class:identity-management
standardizedBy:
  - urn:ngm:class:eu-dlt-pilot-regime
  - urn:ngm:class:fatf-travel-rule
  - urn:ngm:class:ieee-p2418
  - urn:ngm:class:isda-common-domain-model
  - urn:ngm:class:iso-22739
  - urn:ngm:class:iso-tc-307
  - urn:ngm:class:iso-tr-23244
  - urn:ngm:class:iso-ts-23258
relatedTo:
  - urn:ngm:class:cbdcs
  - urn:ngm:class:de-fi
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:smart-contract
  - urn:ngm:class:stablecoin
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:web3
  - urn:ngm:class:cbdcs
---

# Distributed Ledger

A Distributed Ledger (or Distributed Ledger Technology, DLT) is a cryptographically-secured, append-only data structure replicated across a set of independently-operated nodes that collectively reach agreement on the canonical sequence and validity of state transitions through a deterministic
