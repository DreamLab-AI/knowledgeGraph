---
okf_version: "0.2"
type: Class
title: Mechanism Design
resource: urn:ngm:class:mechanism-design
domain: governance
description: Mechanism design, sometimes called reverse game theory, is a field of economics and game theory concerned with constructing the rules, incentive structures, and institutional frameworks of strategic interactions so that self-interested participants collectively produce socially desirable outcomes. Starting from a target social choice function rather than from a given game, the designer works backw
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:game-theory
hasPart:
  - urn:ngm:class:revelation-principle
  - urn:ngm:class:incentive-compatibility
  - urn:ngm:class:strategy-proofness
  - urn:ngm:class:social-choice-function
requires:
  - urn:ngm:class:game-theory
  - urn:ngm:class:information-asymmetry
  - urn:ngm:class:rational-agent
enables:
  - urn:ngm:class:tokenomics
  - urn:ngm:class:incentive-alignment
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:auction-theory
  - urn:ngm:class:quadratic-funding
implements:
  - urn:ngm:class:vickrey-clarke-groves-mechanism
  - urn:ngm:class:dominant-strategy-equilibrium
contrastsWith:
  - urn:ngm:class:algorithmic-game-theory
  - urn:ngm:class:behavioural-economics
  - urn:ngm:class:behavioural-economics
bridgesTo:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:cryptoeconomics
uses:
  - urn:ngm:class:nash-equilibrium
  - urn:ngm:class:bayesian-game
  - urn:ngm:class:contract-theory
relatedTo:
  - urn:ngm:class:token-economics
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:public-goods
  - urn:ngm:class:market-design
---

# Mechanism Design

Mechanism design, sometimes called reverse game theory, is a field of economics and game theory concerned with constructing the rules, incentive structures, and institutional frameworks of strategic interactions so that self-interested participants collectively produce socially desirable outcomes. Starting from a target social choice function rather than from a given game, the designer works backwards to identify what game structure (the mechanism) would implement that function as an equilibrium for rational agents. Mechanism design underpins auction theory, voting systems, market design, and cryptoeconomic protocol engineering, and has been central to Nobel-Prize-recognised work by Hurwicz, Maskin, and Myerson. Its principles govern token incentive structures, automated market makers, governance protocols, and public-goods funding schemes across decentralised systems.
