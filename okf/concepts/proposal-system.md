---
okf_version: "0.2"
type: Class
title: Proposal System
resource: urn:ngm:class:proposal-system
domain: blockchain
description: Multi-stage governance workflow mechanism enabling DAO community members to initiate, discuss, deliberate, vote upon, and execute protocol changes through structured processes that combine off-chain deliberation (forums, governance calls), cryptographic signalling via off-chain snapshot votes, and binding on-chain execution through smart contracts, with threshold requirements (token holdings, quor
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:bc-governance-and-regulation
hasPart:
  - urn:ngm:class:timelock
  - urn:ngm:class:proposal-lifecycle
  - urn:ngm:class:quorum-requirement
requires:
  - urn:ngm:class:snapshot
  - urn:ngm:class:governance-token
  - urn:ngm:class:smart-contract
  - urn:ngm:class:vote-delegation
enables:
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:treasury-management
  - urn:ngm:class:on-chain-voting
dependsOn:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:eip-712
  - urn:ngm:class:ipfs
implements:
  - urn:ngm:class:compound-governor-bravo
  - urn:ngm:class:decentralized-governance
contrastsWith:
  - urn:ngm:class:corporate-governance
bridgesTo:
  - urn:ngm:class:digital-democracy
  - urn:ngm:class:collective-decision-making
uses:
  - urn:ngm:class:tally
  - urn:ngm:class:multisig-wallet
supports:
  - urn:ngm:class:community-participation
partOf:
  - urn:ngm:class:dao
  - urn:ngm:class:dao-governance
relatedTo:
  - urn:ngm:class:sybil-resistance
---

# Proposal System

Multi-stage governance workflow mechanism enabling DAO community members to initiate, discuss, deliberate, vote upon, and execute protocol changes through structured processes that combine off-chain deliberation (forums, governance calls), cryptographic signalling via off-chain snapshot votes, and binding on-chain execution through smart contracts, with threshold requirements (token holdings, quorum) balancing permissionless participation against governance efficiency.
