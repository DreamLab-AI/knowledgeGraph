---
okf_version: "0.2"
type: Class
title: Quadratic Funding
resource: urn:ngm:class:quadratic-funding
domain: blockchain
description: "Quadratic Funding (QF) is a mechanism-design method for subsidising public goods in which a matching pool is distributed proportionally to the square of the sum of square roots of individual contributions to each project, ensuring that projects with many small donors receive proportionally greater matching than projects with few large donors. Formalised by Vitalik Buterin, Zoe Hitzig, and E. Glen "
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:mechanism-design
requires:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:public-goods-funding
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:dao
  - urn:ngm:class:dao-governance
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:open-source-sustainability
  - urn:ngm:class:democratic-resource-allocation
contrastsWith:
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:one-person-one-vote
  - urn:ngm:class:plutocratic-voting
  - urn:ngm:class:linear-matching
bridgesTo:
  - urn:ngm:class:cooperative-game-theory
  - urn:ngm:class:social-choice-theory
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:welfare-economics
  - urn:ngm:class:matching-funds
  - urn:ngm:class:on-chain-governance
partOf:
  - urn:ngm:class:bc-defi-and-economics
relatedTo:
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:governance-token
  - urn:ngm:class:gitcoin-grants
  - urn:ngm:class:collective-action
  - urn:ngm:class:public-goods
  - urn:ngm:class:liberal-radicalism
  - urn:ngm:class:collective-action
---

# Quadratic Funding

Quadratic Funding (QF) is a mechanism-design method for subsidising public goods in which a matching pool is distributed proportionally to the square of the sum of square roots of individual contributions to each project, ensuring that projects with many small donors receive proportionally greater matching than projects with few large donors. Formalised by Vitalik Buterin, Zoe Hitzig, and E. Glen Weyl in the 2018 paper 'Liberal Radicalism', QF is derived from welfare-economics theory as an approximation to the socially optimal provision of public goods under privately observed preferences. It has been deployed on-chain via Gitcoin Grants, where smart contracts automate matching calculations against a community-funded subsidy pool, though it requires robust Sybil resistance mechanisms such as decentralised identity verification to prevent gaming.
