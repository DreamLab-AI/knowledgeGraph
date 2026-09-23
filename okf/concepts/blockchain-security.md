---
okf_version: "0.2"
type: Class
title: Blockchain Security
resource: urn:ngm:class:blockchain-security
domain: blockchain
description: Blockchain security is the multidisciplinary field concerned with protecting distributed ledger systems against attacks on their consensus mechanisms, smart contract logic, cryptographic primitives, and network topology, while preserving the properties of immutability, censorship resistance, and trustless operation. It encompasses threat modelling, formal verification of on-chain code, cryptograph
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:smart-contract-audit
  - urn:ngm:class:consensus-security
  - urn:ngm:class:cryptographic-key-management
requires:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:formal-verification
enables:
  - urn:ngm:class:trustless-system
  - urn:ngm:class:de-fi
  - urn:ngm:class:immutability
contrastsWith:
  - urn:ngm:class:51-attack
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:double-spending
  - urn:ngm:class:reentrancy-attack
bridgesTo:
  - urn:ngm:class:ai-security
  - urn:ngm:class:post-quantum-cryptography
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:multi-signature
  - urn:ngm:class:oracle-network
  - urn:ngm:class:multi-signature
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
partOf:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:distributed-systems-security
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:miner-extractable-value
---

# Blockchain Security

Blockchain security is the multidisciplinary field concerned with protecting distributed ledger systems against attacks on their consensus mechanisms, smart contract logic, cryptographic primitives, and network topology, while preserving the properties of immutability, censorship resistance, and trustless operation. It encompasses threat modelling, formal verification of on-chain code, cryptographic auditing, and economic game-theory analysis to prevent incentive manipulation. The discipline extends across permissionless and permissioned blockchain architectures, addressing layer-specific attack surfaces from peer-to-peer networking through execution environments to cross-chain interoperability bridges.
