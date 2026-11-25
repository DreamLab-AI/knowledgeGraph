---
okf_version: "0.2"
type: Class
title: Uniswap Governance
resource: urn:ngm:class:uniswap-governance
domain: blockchain
description: Uniswap Governance is the on-chain and off-chain decision-making system by which UNI token holders collectively control the parameters, treasury, and development direction of the Uniswap decentralised exchange protocol. Governance proposals traverse a structured lifecycle of temperature checks, consensus checks, and on-chain votes executed through the Governor Bravo contract, with a quorum thresho
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:on-chain-governance
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:compound-governor-bravo
  - urn:ngm:class:snapshot-voting
partOf:
  - urn:ngm:class:uniswap
relatedTo:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:concentrated-liquidity
  - urn:ngm:class:decentralized-exchange-dex
  - urn:ngm:class:automated-market-maker
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Uniswap Governance

Uniswap Governance is the on-chain and off-chain decision-making system by which UNI token holders collectively control the parameters, treasury, and development direction of the Uniswap decentralised exchange protocol. Governance proposals traverse a structured lifecycle of temperature checks, consensus checks, and on-chain votes executed through the Governor Bravo contract, with a quorum threshold and timelock delay before execution. UNI holders may delegate their voting power to representatives, enabling liquid democracy patterns in protocol management. Uniswap Governance controls protocol fee switches, liquidity mining programs, grant allocations from the UNI treasury, and deployment of the protocol to new networks.
