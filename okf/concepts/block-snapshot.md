---
okf_version: "0.2"
type: Class
title: Block Snapshot
resource: urn:ngm:class:block-snapshot
domain: blockchain
description: A block snapshot is a record of on-chain state, typically token balances or governance weights, captured at a specific block height. In decentralised governance it freezes voting power at a chosen block so that token holdings used to weight votes cannot be manipulated by transfers during the voting window. Snapshots underpin gasless off-chain voting systems and fair airdrop distributions by provid
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-governance-and-regulation
relatedTo:
  - urn:ngm:class:on-chain-voting
---

# Block Snapshot

A block snapshot is a record of on-chain state, typically token balances or governance weights, captured at a specific block height. In decentralised governance it freezes voting power at a chosen block so that token holdings used to weight votes cannot be manipulated by transfers during the voting window. Snapshots underpin gasless off-chain voting systems and fair airdrop distributions by providing a tamper-evident, reproducible baseline state.
