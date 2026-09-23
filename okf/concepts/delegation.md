---
okf_version: "0.2"
type: Class
title: Delegation
resource: urn:ngm:class:delegation
domain: blockchain
description: Delegation in blockchain systems is the act of assigning one's stake or voting rights to another participant who acts on one's behalf in consensus or governance, without transferring ownership of the underlying assets. In proof-of-stake networks token holders delegate stake to validators, sharing in rewards and slashing risk while the validator performs block production. In on-chain governance, de
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:proof-of-stake
hasPart:
  - urn:ngm:class:staking
  - urn:ngm:class:reward-distribution
requires:
  - urn:ngm:class:staking
  - urn:ngm:class:validator
enables:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:liquid-democracy
dependsOn:
  - urn:ngm:class:validator
  - urn:ngm:class:trust
implements:
  - urn:ngm:class:delegated-proof-of-stake
contrastsWith:
  - urn:ngm:class:slashing
uses:
  - urn:ngm:class:proof-of-stake
supports:
  - urn:ngm:class:dao
  - urn:ngm:class:consensus
relatedTo:
  - urn:ngm:class:governance
  - urn:ngm:class:reward-distribution
---

# Delegation

Delegation in blockchain systems is the act of assigning one's stake or voting rights to another participant who acts on one's behalf in consensus or governance, without transferring ownership of the underlying assets. In proof-of-stake networks token holders delegate stake to validators, sharing in rewards and slashing risk while the validator performs block production. In on-chain governance, delegation lets holders entrust their votes to representatives, a pattern formalised as liquid democracy. Delegation lowers the participation barrier for ordinary holders and concentrates operational responsibility with capable operators, while introducing trust and centralisation trade-offs.
