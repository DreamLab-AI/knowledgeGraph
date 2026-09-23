---
okf_version: "0.2"
type: Class
title: Hash Time-Locked Contract
resource: urn:ngm:class:hash-time-locked-contract
domain: blockchain
description: A Hash Time-Locked Contract (HTLC) is a type of smart contract that conditionally releases funds to a recipient only if they present a valid cryptographic preimage satisfying a specified hash condition within a defined time window; if the condition remains unmet before the timeout expires, the funds automatically revert to the sender. HTLCs combine two complementary mechanisms—a hashlock, which bi
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:timelock
  - urn:ngm:class:digital-signature
  - urn:ngm:class:blockchain
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:micropayments
  - urn:ngm:class:payment-channel
  - urn:ngm:class:trustless-transaction
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-transaction
implements:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:conditional-payment
contrastsWith:
  - urn:ngm:class:point-time-locked-contracts
  - urn:ngm:class:custodial-exchange
  - urn:ngm:class:trusted-third-party
  - urn:ngm:class:point-time-locked-contracts
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cryptography
uses:
  - urn:ngm:class:sha-256
  - urn:ngm:class:script
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:payment-system
  - urn:ngm:class:de-fi
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:adaptor-signature
---

# Hash Time-Locked Contract

A Hash Time-Locked Contract (HTLC) is a type of smart contract that conditionally releases funds to a recipient only if they present a valid cryptographic preimage satisfying a specified hash condition within a defined time window; if the condition remains unmet before the timeout expires, the funds automatically revert to the sender. HTLCs combine two complementary mechanisms—a hashlock, which binds settlement to knowledge of a secret, and a timelock, which enforces a bounded settlement window—to achieve trustless atomicity across one or more blockchain ledgers. They are foundational to payment channel networks such as the Lightning Network and to cross-chain atomic swap protocols, enabling conditional payment routing without custodial intermediaries or mutual trust. As a composable on-chain primitive, HTLCs underpin a wide range of decentralised finance and interoperability constructs.
