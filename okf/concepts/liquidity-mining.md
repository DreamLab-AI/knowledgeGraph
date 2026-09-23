---
okf_version: "0.2"
type: Class
title: Liquidity Mining
resource: urn:ngm:class:liquidity-mining
domain: blockchain
description: "Liquidity mining is a decentralised finance incentive mechanism in which participants deposit assets into automated market maker pools or lending protocols and receive protocol-issued tokens as rewards proportional to their share of pooled liquidity. These reward tokens often confer governance rights and a share of trading-fee revenue, creating compounding yield incentives that attract capital to "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-defi-and-economics
requires:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-economics
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:dao
  - urn:ngm:class:protocol-bootstrapping
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:de-fi
  - urn:ngm:class:ethereum
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:order-book-exchange
  - urn:ngm:class:market-making
  - urn:ngm:class:market-making
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:game-theory
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:lp-token
  - urn:ngm:class:token-bonding-curve
  - urn:ngm:class:vote-escrow
  - urn:ngm:class:token-bonding-curve
relatedTo:
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:staking
  - urn:ngm:class:emission-schedule
  - urn:ngm:class:concentrated-liquidity
  - urn:ngm:class:emission-schedule
---

# Liquidity Mining

Liquidity mining is a decentralised finance incentive mechanism in which participants deposit assets into automated market maker pools or lending protocols and receive protocol-issued tokens as rewards proportional to their share of pooled liquidity. These reward tokens often confer governance rights and a share of trading-fee revenue, creating compounding yield incentives that attract capital to nascent protocols. The mechanism carries impermanent loss risk arising from divergence in the relative prices of deposited assets, and token inflation dynamics that must be governed through carefully designed emission schedules, vote-escrow models, or halving curves to sustain long-term protocol health.
