---
okf_version: "0.2"
type: Class
title: Timelock
resource: urn:ngm:class:timelock
domain: blockchain
description: A timelock is a cryptographic or smart-contract mechanism that prevents a transaction, function call, or asset transfer from executing until a specified block height or Unix timestamp has been reached. Timelocks enforce temporal constraints on blockchain operations, separating the proposal of an action from its execution to allow inspection, challenge, or cancellation during a mandatory delay wind
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:operation-queue
requires:
  - urn:ngm:class:block-timestamp
  - urn:ngm:class:access-control-module
  - urn:ngm:class:consensus
enables:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:optimistic-governance
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:role-based-access-control
implements:
  - urn:ngm:class:bitcoin-script
contrastsWith:
  - urn:ngm:class:multisignature
bridgesTo:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:rollup
  - urn:ngm:class:hashed-timelock-contract
  - urn:ngm:class:decentralised-autonomous-organisation
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:multisignature
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:transaction
partOf:
  - urn:ngm:class:dao-treasury
  - urn:ngm:class:bitcoin-script
relatedTo:
  - urn:ngm:class:htlc
  - urn:ngm:class:vesting-schedule
  - urn:ngm:class:escrow-system
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:governance-token
  - urn:ngm:class:lightning-network
  - urn:ngm:class:governance
---

# Timelock

A timelock is a cryptographic or smart-contract mechanism that prevents a transaction, function call, or asset transfer from executing until a specified block height or Unix timestamp has been reached. Timelocks enforce temporal constraints on blockchain operations, separating the proposal of an action from its execution to allow inspection, challenge, or cancellation during a mandatory delay window.
