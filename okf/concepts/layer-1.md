---
okf_version: "0.2"
type: Class
title: Layer 1
resource: urn:ngm:class:layer-1
domain: blockchain
description: Layer 1 is the foundational base protocol of a blockchain network that maintains its own independently verified state, executes a native consensus mechanism, and provides cryptographically final transaction ordering without relying on any external chain. It defines the canonical ledger, enforces network rules (including token issuance schedules and validity criteria), and serves as the trust ancho
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:mempool
  - urn:ngm:class:block
  - urn:ngm:class:native-token
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:layer-2-networks
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
contrastsWith:
  - urn:ngm:class:layer-2-networks
  - urn:ngm:class:sidechain
  - urn:ngm:class:centralised-database
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-identity
  - urn:ngm:class:data-provenance
standardizedBy:
  - urn:ngm:class:eip
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
partOf:
  - urn:ngm:class:blockchain-domain
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:finality
  - urn:ngm:class:sharding
  - urn:ngm:class:blockchain-scalability
---

# Layer 1

Layer 1 is the foundational base protocol of a blockchain network that maintains its own independently verified state, executes a native consensus mechanism, and provides cryptographically final transaction ordering without relying on any external chain. It defines the canonical ledger, enforces network rules (including token issuance schedules and validity criteria), and serves as the trust anchor from which all higher-order protocols derive their security guarantees. Notable examples include Bitcoin, Ethereum, Solana, Cardano, and Avalanche, each differing in their consensus approach, throughput characteristics, and programmability.
