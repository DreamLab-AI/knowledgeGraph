---
okf_version: "0.2"
type: Class
title: Algorand
resource: urn:ngm:class:algorand
domain: blockchain
description: Algorand is a permissionless, pure proof-of-stake Layer 1 blockchain protocol designed by MIT cryptographer Silvio Micali, providing instant transaction finality, high throughput, and carbon-negative operation through a cryptographically random committee-selection consensus mechanism. It resolves the blockchain trilemma of security, scalability, and decentralisation without forks by ensuring all c
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-protocol
requires:
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:de-fi
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:non-fungible-token
implements:
  - urn:ngm:class:on-chain-governance
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:delegated-proof-of-stake
bridgesTo:
  - urn:ngm:class:financial-technology
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:pure-proof-of-stake
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:byzantine-agreement
  - urn:ngm:class:cryptographic-sortition
supports:
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:stablecoin
  - urn:ngm:class:real-world-asset-tokenisation
  - urn:ngm:class:zero-knowledge-proof
relatedTo:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:state-proof
  - urn:ngm:class:blockchain-interoperability
---

# Algorand

Algorand is a permissionless, pure proof-of-stake Layer 1 blockchain protocol designed by MIT cryptographer Silvio Micali, providing instant transaction finality, high throughput, and carbon-negative operation through a cryptographically random committee-selection consensus mechanism. It resolves the blockchain trilemma of security, scalability, and decentralisation without forks by ensuring all confirmed blocks are final. The Algorand Virtual Machine (AVM) supports smart contract execution in TEAL bytecode and, via ARC standards, enables NFTs, DeFi, and tokenised assets at scale.
