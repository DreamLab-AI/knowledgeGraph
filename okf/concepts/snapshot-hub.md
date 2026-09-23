---
okf_version: "0.2"
type: Class
title: Snapshot Hub
resource: urn:ngm:class:snapshot-hub
domain: blockchain
description: "Snapshot Hub is the backend service of the Snapshot off-chain governance platform that stores proposals, collects signed votes, and computes results using token balances read at a chosen block height. Votes are signed messages that incur no gas, while the hub indexes and tallies them according to a configurable voting strategy. It lets DAOs run gasless, verifiable governance while final execution "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-component
relatedTo:
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:snapshot-block
---

# Snapshot Hub

Snapshot Hub is the backend service of the Snapshot off-chain governance platform that stores proposals, collects signed votes, and computes results using token balances read at a chosen block height. Votes are signed messages that incur no gas, while the hub indexes and tallies them according to a configurable voting strategy. It lets DAOs run gasless, verifiable governance while final execution remains optional and off-chain.
