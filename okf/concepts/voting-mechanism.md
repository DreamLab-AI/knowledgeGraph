---
okf_version: "0.2"
type: Class
title: Voting Mechanism
resource: urn:ngm:class:voting-mechanism
domain: blockchain
description: A voting mechanism is a formalised procedure by which participants in a collective system — such as token holders in a decentralised protocol, members of a cooperative, or delegates in a representative body — express preferences or binding decisions on resource allocation, parameter changes, protocol upgrades, or dispute resolution. The design of a voting mechanism encodes trade-offs between parti
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-governance-and-regulation
hasPart:
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:snapshot-off-chain-voting
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:conviction-voting
  - urn:ngm:class:liquid-democracy
  - urn:ngm:class:snapshot-off-chain-voting
requires:
  - urn:ngm:class:governance-token
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:quorum
enables:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:dao-governance
  - urn:ngm:class:decentralised-decision-making
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:protocol-upgrade
contrastsWith:
  - urn:ngm:class:governance
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:governance
bridgesTo:
  - urn:ngm:class:collective-intelligence
  - urn:ngm:class:multi-agent-systems
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:timelock
  - urn:ngm:class:multisig
relatedTo:
  - urn:ngm:class:social-choice-theory
  - urn:ngm:class:game-theory
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:treasury-management
  - urn:ngm:class:governance-attack
---

# Voting Mechanism

A voting mechanism is a formalised procedure by which participants in a collective system — such as token holders in a decentralised protocol, members of a cooperative, or delegates in a representative body — express preferences or binding decisions on resource allocation, parameter changes, protocol upgrades, or dispute resolution. The design of a voting mechanism encodes trade-offs between participation breadth, sybil resistance, plutocracy risk, voter apathy, and decisional legitimacy; canonical variants include token-weighted voting, quadratic voting, conviction voting, ranked-choice voting, and delegated liquid democracy. The chosen mechanism directly shapes the security, fairness, and perceived legitimacy of governance outcomes in both on-chain and off-chain contexts.
