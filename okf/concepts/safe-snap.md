---
okf_version: "0.2"
type: Class
title: SafeSnap
resource: urn:ngm:class:safe-snap
domain: blockchain
description: SafeSnap is a tool that connects off-chain Snapshot governance votes to on-chain execution through a Gnosis Safe and the Reality.eth oracle. It lets DAOs enact decisions without paying gas to vote.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:dao-governance
requires:
  - urn:ngm:class:snapshot
  - urn:ngm:class:reality-eth
enables:
  - urn:ngm:class:dao
bridgesTo:
  - urn:ngm:class:smart-contract
---

# SafeSnap

SafeSnap is a tool that connects off-chain Snapshot governance votes to on-chain execution through a Gnosis Safe and the Reality.eth oracle. It lets DAOs enact decisions without paying gas to vote.
