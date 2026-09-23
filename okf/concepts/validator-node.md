---
okf_version: "0.2"
type: Class
title: Validator Node
resource: urn:ngm:class:validator-node
domain: blockchain
description: A network participant in a Proof of Stake or similar blockchain that locks collateral (stake) to earn the right to propose and attest to blocks, and is subject to slashing penalties for equivocation or liveness failures. Validator nodes form the security backbone of staking-based consensus, replacing the hash-rate competition of mining.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:slashing-condition
  - urn:ngm:class:bls-signature
enables:
  - urn:ngm:class:block
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:staking-reward
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:epoch
  - urn:ngm:class:validator-selection
implements:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
contrastsWith:
  - urn:ngm:class:mining-node
  - urn:ngm:class:full-node
bridgesTo:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:tee
uses:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:network-security
  - urn:ngm:class:decentralization
partOf:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-set
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:sybil-resistance
---

# Validator Node

A network participant in a Proof of Stake or similar blockchain that locks collateral (stake) to earn the right to propose and attest to blocks, and is subject to slashing penalties for equivocation or liveness failures. Validator nodes form the security backbone of staking-based consensus, replacing the hash-rate competition of mining.
