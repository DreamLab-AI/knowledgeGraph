---
okf_version: "0.2"
type: Class
title: Validator
resource: urn:ngm:class:validator
domain: blockchain
description: "A validator is a network participant in a proof-of-stake blockchain that is responsible for proposing new blocks, attesting to the validity of blocks proposed by others, and participating in the finality mechanism of the network. Validators commit a quantity of cryptocurrency as collateral (stake), which is subject to slashing — partial or total confiscation — if the validator behaves dishonestly "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:attestation
  - urn:ngm:class:block-proposal
  - urn:ngm:class:validator-committee
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:staking
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-key
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:finality
  - urn:ngm:class:decentralised-network
  - urn:ngm:class:finality
dependsOn:
  - urn:ngm:class:slashing
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:block
contrastsWith:
  - urn:ngm:class:miner
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:light-client
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:game-theory
  - urn:ngm:class:fault-tolerance
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:tokenomics
  - urn:ngm:class:de-fi
  - urn:ngm:class:governance
---

# Validator

A validator is a network participant in a proof-of-stake blockchain that is responsible for proposing new blocks, attesting to the validity of blocks proposed by others, and participating in the finality mechanism of the network. Validators commit a quantity of cryptocurrency as collateral (stake), which is subject to slashing — partial or total confiscation — if the validator behaves dishonestly or fails liveness requirements. Through their collective attestations and proposals, validators form the active set that drives consensus and maintains the canonical chain history.
