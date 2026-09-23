---
okf_version: "0.2"
type: Class
title: Ledger
resource: urn:ngm:class:ledger
domain: blockchain
description: A ledger is a structured, authoritative record of financial transactions or state changes, historically maintained as a physical or centralised book of accounts and now realised as a distributed, cryptographically secured data structure in blockchain systems. In the distributed-ledger paradigm, every participating node holds a replica of the same append-only log, with consensus mechanisms ensuring
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:distributed-ledger-technology
hasPart:
  - urn:ngm:class:transaction-record
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:block
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:private-key
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:digital-asset
  - urn:ngm:class:smart-contract
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
dependsOn:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:public-key-cryptography
implements:
  - urn:ngm:class:double-entry-bookkeeping
contrastsWith:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:custodial-wallet
bridgesTo:
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:data-provenance
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:key-management
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:central-bank-digital-currency-cbdc
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:utxo
  - urn:ngm:class:account-model
---

# Ledger

A ledger is a structured, authoritative record of financial transactions or state changes, historically maintained as a physical or centralised book of accounts and now realised as a distributed, cryptographically secured data structure in blockchain systems. In the distributed-ledger paradigm, every participating node holds a replica of the same append-only log, with consensus mechanisms ensuring that all copies remain consistent and tamper-evident. The concept spans traditional double-entry bookkeeping, centralised database ledgers (as in banking core systems), and fully decentralised [[Distributed Ledger Technology]] implementations such as [[Bitcoin]] and [[Ethereum]]. Ledger (the company, Ledger SAS) is a notable specific instantiation of hardware-wallet technology designed to protect the cryptographic keys that authorise writes to a blockchain ledger.
