---
okf_version: "0.2"
type: Class
title: Solo Mining
resource: urn:ngm:class:solo-mining
domain: blockchain
description: Solo Mining is a blockchain participation strategy in which an individual miner independently operates hashing hardware and attempts to discover valid blocks without joining a mining pool, retaining the full block reward upon success but accepting high variance in earnings proportional to the miner's share of total network hash rate. It contrasts with pool mining by preserving full decentralisatio
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:consensus-protocol
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:consensus-algorithm
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-scalability
contrastsWith:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:selfish-mining
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:block-reward
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:51-attack
---

# Solo Mining

Solo Mining is a blockchain participation strategy in which an individual miner independently operates hashing hardware and attempts to discover valid blocks without joining a mining pool, retaining the full block reward upon success but accepting high variance in earnings proportional to the miner's share of total network hash rate. It contrasts with pool mining by preserving full decentralisation of block production but is economically viable only when a miner controls a significant fraction of total hash power.
