---
okf_version: "0.2"
type: Class
title: Fraud Proof
resource: urn:ngm:class:fraud-proof
domain: blockchain
description: A fraud proof is a cryptographic mechanism that allows any observer (a challenger) to demonstrate on-chain that a previously published off-chain state transition is invalid. It is the primary dispute mechanism for optimistic rollups, where sequencers post state roots optimistically and a challenge window allows watchers to submit a fraud proof if they detect an incorrect computation. Upon successf
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-proof
requires:
  - urn:ngm:class:data-availability
  - urn:ngm:class:dispute-window
  - urn:ngm:class:bonding
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:trustless-bridge
  - urn:ngm:class:state-root-verification
dependsOn:
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:sequencer
  - urn:ngm:class:interactive-verification-game
contrastsWith:
  - urn:ngm:class:validity-proof
  - urn:ngm:class:zk-proof
bridgesTo:
  - urn:ngm:class:game-theory
  - urn:ngm:class:formal-verification
partOf:
  - urn:ngm:class:optimistic-rollup
relatedTo:
  - urn:ngm:class:rollup
  - urn:ngm:class:layer-2-networks
  - urn:ngm:class:state-channel
  - urn:ngm:class:slashing
  - urn:ngm:class:challenge-period
---

# Fraud Proof

A fraud proof is a cryptographic mechanism that allows any observer (a challenger) to demonstrate on-chain that a previously published off-chain state transition is invalid. It is the primary dispute mechanism for optimistic rollups, where sequencers post state roots optimistically and a challenge window allows watchers to submit a fraud proof if they detect an incorrect computation. Upon successful verification of a fraud proof by the base layer, the invalid state root is reverted and the sequencer's bonded stake is slashed as a penalty.
