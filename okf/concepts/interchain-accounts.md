---
okf_version: "0.2"
type: Class
title: Interchain Accounts
resource: urn:ngm:class:interchain-accounts
domain: blockchain
description: Interchain Accounts (ICA) is an Inter-Blockchain Communication protocol extension that lets an account on one Cosmos SDK chain control an account on another chain over IBC, without needing a local key or a bridge contract on the counterparty chain. It enables cross-chain operations, such as staking, voting or trading, to be initiated on a home chain and executed remotely by an owned account elsewh
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:cosmos-ibc
partOf:
  - urn:ngm:class:cosmos-ibc
relatedTo:
  - urn:ngm:class:cosmos
---

# Interchain Accounts

Interchain Accounts (ICA) is an Inter-Blockchain Communication protocol extension that lets an account on one Cosmos SDK chain control an account on another chain over IBC, without needing a local key or a bridge contract on the counterparty chain. It enables cross-chain operations, such as staking, voting or trading, to be initiated on a home chain and executed remotely by an owned account elsewhere in the Cosmos ecosystem. It is a standard module built on top of the Cosmos IBC transport, authentication and ordering layers.
