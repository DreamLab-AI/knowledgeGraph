---
okf_version: "0.2"
type: Class
title: Censorship Resistance
resource: urn:ngm:class:censorship-resistance
domain: blockchain
description: Property of blockchain networks guaranteeing that any valid transaction submitted by any participant will eventually be included in the canonical chain, preventing miners, validators, or any coordinated group from systematically excluding transactions. Achieved through decentralised consensus, permissionless participation, and economic incentive alignment.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:permissionless-participation
  - urn:ngm:class:decentralisation
enables:
  - urn:ngm:class:immutability
  - urn:ngm:class:decentralized-governance
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:trustless-transaction
dependsOn:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:economic-model
implements:
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:mempool
contrastsWith:
  - urn:ngm:class:permissioned-blockchain
  - urn:ngm:class:transaction
  - urn:ngm:class:ofac-compliance
bridgesTo:
  - urn:ngm:class:freedom-of-speech
  - urn:ngm:class:information-security
relatedTo:
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:double-spending
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:miner-extractable-value
  - urn:ngm:class:51-attack
---

# Censorship Resistance

Property of blockchain networks guaranteeing that any valid transaction submitted by any participant will eventually be included in the canonical chain, preventing miners, validators, or any coordinated group from systematically excluding transactions. Achieved through decentralised consensus, permissionless participation, and economic incentive alignment.
