---
okf_version: "0.2"
type: Class
title: Gauge Voting
resource: urn:ngm:class:gauge-voting
domain: blockchain
description: Gauge voting is a mechanism in DeFi protocols such as Curve where token holders allocate weights to liquidity pool gauges, determining how reward emissions are distributed across pools each epoch. Voting power is typically proportional to vote-escrowed (veToken) balances, creating direct economic incentives for bribe markets and liquidity direction.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:governance-token
hasPart:
  - urn:ngm:class:epoch
requires:
  - urn:ngm:class:curve-finance
  - urn:ngm:class:vote-escrow
  - urn:ngm:class:liquidity-pool
enables:
  - urn:ngm:class:votium
  - urn:ngm:class:hidden-hand
  - urn:ngm:class:bribe-market
dependsOn:
  - urn:ngm:class:dao
implements:
  - urn:ngm:class:tokenomics
contrastsWith:
  - urn:ngm:class:quadratic-voting
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenomics
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:automated-market-maker
relatedTo:
  - urn:ngm:class:curve-wars
  - urn:ngm:class:convex-finance
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:protocol-owned-liquidity
---

# Gauge Voting

Gauge voting is a mechanism in DeFi protocols such as Curve where token holders allocate weights to liquidity pool gauges, determining how reward emissions are distributed across pools each epoch. Voting power is typically proportional to vote-escrowed (veToken) balances, creating direct economic incentives for bribe markets and liquidity direction.
