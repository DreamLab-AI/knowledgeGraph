---
okf_version: "0.2"
type: Class
title: Aragon
resource: urn:ngm:class:aragon
domain: governance
description: A framework and set of smart contracts for creating and operating decentralised autonomous organisations on Ethereum, providing modular governance, treasury and permission components.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:dao-tooling
requires:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:governance
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:treasury-management
  - urn:ngm:class:decentralised-governance
implements:
  - urn:ngm:class:dao-governance
contrastsWith:
  - urn:ngm:class:governance
  - urn:ngm:class:moloch-dao
  - urn:ngm:class:snapshot
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:infrastructure
  - urn:ngm:class:dao
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:proxy-pattern
  - urn:ngm:class:multisig-wallet
relatedTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:ethereum
---

# Aragon

A framework and set of smart contracts for creating and operating decentralised autonomous organisations on Ethereum, providing modular governance, treasury and permission components.
