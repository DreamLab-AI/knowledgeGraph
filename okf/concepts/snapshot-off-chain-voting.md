---
okf_version: "0.2"
type: Class
title: Snapshot Off-Chain Voting
resource: urn:ngm:class:snapshot-off-chain-voting
domain: blockchain
description: A gasless governance platform that records votes off-chain by having participants sign messages, using token balances captured at a chosen block as voting weight. It avoids transaction fees while preserving a verifiable tally tied to on-chain holdings.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:decentralized-governance
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:token
enables:
  - urn:ngm:class:daogovernance
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:quadratic-voting
---

# Snapshot Off-Chain Voting

A gasless governance platform that records votes off-chain by having participants sign messages, using token balances captured at a chosen block as voting weight. It avoids transaction fees while preserving a verifiable tally tied to on-chain holdings.
