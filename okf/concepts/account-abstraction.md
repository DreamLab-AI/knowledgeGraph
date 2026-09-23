---
okf_version: "0.2"
type: Class
title: Account Abstraction
resource: urn:ngm:class:account-abstraction
domain: blockchain
description: A paradigm shift in ereum account architecture standardized through ERC-4337 (March 2023) enabling smart contract wallets with programmable transaction validation logic, decoupled gas payment mechanisms, and flexible account recovery, eliminating the distinction between externally owned accounts ...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:bundler
  - urn:ngm:class:useroperation
  - urn:ngm:class:entrypoint-contract
  - urn:ngm:class:paymaster-contract
  - urn:ngm:class:account-factory
  - urn:ngm:class:signature-aggregator
requires:
  - urn:ngm:class:evm
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:smart-contract
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:gas-abstraction
enables:
  - urn:ngm:class:social-recovery
  - urn:ngm:class:gasless-transactions
  - urn:ngm:class:batch-operations
  - urn:ngm:class:session-keys
  - urn:ngm:class:programmable-validation
  - urn:ngm:class:account-recovery
dependsOn:
  - urn:ngm:class:erc-4337
  - urn:ngm:class:bundler-network
  - urn:ngm:class:paymaster-infrastructure
  - urn:ngm:class:entrypoint-singleton
implements:
  - urn:ngm:class:erc-4337
  - urn:ngm:class:mempool
  - urn:ngm:class:account-model
  - urn:ngm:class:mempool
  - urn:ngm:class:gas-sponsorship
bridgesTo:
  - urn:ngm:class:ai-agent-system
---

# Account Abstraction

A paradigm shift in ereum account architecture standardized through ERC-4337 (March 2023) enabling smart contract wallets with programmable transaction validation logic, decoupled gas payment mechanisms, and flexible account recovery, eliminating the distinction between externally owned accounts ...
