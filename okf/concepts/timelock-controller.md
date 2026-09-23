---
okf_version: "0.2"
type: Class
title: Timelock Controller
resource: urn:ngm:class:timelock-controller
domain: blockchain
description: A timelock controller is a smart contract governance primitive that enforces a mandatory waiting period — the timelock delay — between the scheduling of an on-chain operation (such as a protocol upgrade, parameter change, or treasury disbursement) and its execution, giving token holders, security researchers, and affected parties an opportunity to review, object to, or exit before the change takes
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:on-chain-governance
requires:
  - urn:ngm:class:governance-token
enables:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:blockchain-governance
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:proposal-system
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:operation-queue
  - urn:ngm:class:cryptographic-hash-function
supports:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:treasury-management
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:open-zeppelin-governor
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:smart-contract
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:multisignature-wallets
  - urn:ngm:class:protocol-upgrades
---

# Timelock Controller

A timelock controller is a smart contract governance primitive that enforces a mandatory waiting period — the timelock delay — between the scheduling of an on-chain operation (such as a protocol upgrade, parameter change, or treasury disbursement) and its execution, giving token holders, security researchers, and affected parties an opportunity to review, object to, or exit before the change takes effect. Operations must be queued with their full parameters, remain in the queue for the configured delay, and then be explicitly executed; they may also be cancelled by authorised roles during the waiting period. Timelock controllers are a fundamental safety mechanism in DeFi and DAO governance, protecting against malicious or erroneous governance proposals.
