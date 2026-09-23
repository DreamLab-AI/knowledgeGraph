---
okf_version: "0.2"
type: Class
title: Curve Wars
resource: urn:ngm:class:curve-wars
domain: blockchain
description: The Curve Wars refers to the competitive dynamic among decentralised finance protocols to accumulate vote-escrowed CRV (veCRV) governance power over Curve Finance, thereby gaining the ability to direct CRV token emissions (gauges) toward liquidity pools in which the protocol has a stake. By controlling gauge weights, protocols attract liquidity providers to their pools by offering higher yields, c
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:de-fi
hasPart:
  - urn:ngm:class:gauge-voting
  - urn:ngm:class:gauge-voting
  - urn:ngm:class:bribery-market
requires:
  - urn:ngm:class:vote-escrow-model
  - urn:ngm:class:governance-token
enables:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:yield-optimisation
dependsOn:
  - urn:ngm:class:curve-finance
  - urn:ngm:class:ethereum
  - urn:ngm:class:decentralised-autonomous-organisation
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:market-making
  - urn:ngm:class:market-making
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:game-theory
uses:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-emission
relatedTo:
  - urn:ngm:class:convex-finance
  - urn:ngm:class:liquid-staking
  - urn:ngm:class:tokenomics
  - urn:ngm:class:miner-extractable-value
  - urn:ngm:class:protocol-owned-liquidity
---

# Curve Wars

The Curve Wars refers to the competitive dynamic among decentralised finance protocols to accumulate vote-escrowed CRV (veCRV) governance power over Curve Finance, thereby gaining the ability to direct CRV token emissions (gauges) toward liquidity pools in which the protocol has a stake. By controlling gauge weights, protocols attract liquidity providers to their pools by offering higher yields, creating a recursive incentive structure. The conflict intensified with the emergence of vote-aggregation intermediaries such as Convex Finance, which pooled user CRV into a dominant veCRV position and issued its own liquid derivative tokens (cvxCRV, vlCVX) to further abstract the underlying governance asset.
