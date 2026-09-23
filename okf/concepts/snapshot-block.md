---
okf_version: "0.2"
type: Class
title: Snapshot Block
resource: urn:ngm:class:snapshot-block
domain: blockchain
description: A snapshot block is a specific block height at which token balances are recorded to determine voting weight in a governance proposal, freezing eligibility so that votes reflect holdings at one fixed moment rather than fluctuating balances. Using a past block prevents vote-buying or borrowing tokens after a proposal opens. It is a core primitive in off-chain and on-chain DAO voting systems.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-governance-and-regulation
relatedTo:
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:governance-token
---

# Snapshot Block

A snapshot block is a specific block height at which token balances are recorded to determine voting weight in a governance proposal, freezing eligibility so that votes reflect holdings at one fixed moment rather than fluctuating balances. Using a past block prevents vote-buying or borrowing tokens after a proposal opens. It is a core primitive in off-chain and on-chain DAO voting systems.
