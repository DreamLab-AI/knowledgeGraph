---
okf_version: "0.2"
type: Class
title: Miner Extractable Value
resource: urn:ngm:class:miner-extractable-value
domain: blockchain
description: Miner extractable value, now more broadly termed maximal extractable value, is the profit that block producers (miners or validators) and other actors can capture by reordering, inserting or censoring transactions within the blocks they produce. Because the producer controls transaction ordering, they can exploit pending transactions in the mempool through strategies such as front-running, back-ru
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-economics
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:flash-loan
dependsOn:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator
contrastsWith:
  - urn:ngm:class:censorship-resistance
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
supports:
  - urn:ngm:class:blockchain-economics
partOf:
  - urn:ngm:class:blockchain-economics
relatedTo:
  - urn:ngm:class:mev
  - urn:ngm:class:gas-fee
  - urn:ngm:class:eip-1559
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:ethereum
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Miner Extractable Value

Miner extractable value, now more broadly termed maximal extractable value, is the profit that block producers (miners or validators) and other actors can capture by reordering, inserting or censoring transactions within the blocks they produce. Because the producer controls transaction ordering, they can exploit pending transactions in the mempool through strategies such as front-running, back-running and sandwich attacks, especially around decentralised exchanges. MEV has significant implications for fairness, network economics, censorship resistance and protocol design.
