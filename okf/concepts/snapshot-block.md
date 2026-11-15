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
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Snapshot Block

A snapshot block is a specific block height at which token balances are recorded to determine voting weight in a governance proposal, freezing eligibility so that votes reflect holdings at one fixed moment rather than fluctuating balances. Using a past block prevents vote-buying or borrowing tokens after a proposal opens. It is a core primitive in off-chain and on-chain DAO voting systems.
