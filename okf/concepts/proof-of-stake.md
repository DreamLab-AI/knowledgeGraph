---
okf_version: "0.2"
type: Class
title: Proof of Stake
resource: urn:ngm:class:proof-of-stake
domain: blockchain
description: A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Validators are selected proportionally to their stake, replacing the energy-intensive mining of Proof of Work with a capital-cost security model that achieves deterministic or probabilistic finality.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:proof-based-consensus
hasPart:
  - urn:ngm:class:validator-node
  - urn:ngm:class:validator-set
  - urn:ngm:class:epoch
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:liquid-proof-of-stake
  - urn:ngm:class:slashing-condition
  - urn:ngm:class:staking-reward
requires:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:blockchain-sustainability
  - urn:ngm:class:sharding
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:on-chain-governance
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:public-key-cryptography
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-authority
  - urn:ngm:class:proof-of-history
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:carbon-footprint
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:sustainable-consensus
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:sybil-resistance
---

# Proof of Stake

A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Validators are selected proportionally to their stake, replacing the energy-intensive mining of Proof of Work with a capital-cost security model that achieves deterministic or probabilistic finality.
