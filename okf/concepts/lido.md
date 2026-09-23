---
okf_version: "0.2"
type: Class
title: Lido
resource: urn:ngm:class:lido
domain: blockchain
description: A liquid staking protocol that stakes users' assets with network validators and issues a transferable token representing the staked position and its accruing rewards, enabling holders to participate in DeFi while their principal remains staked.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:liquid-proof-of-stake
hasPart:
  - urn:ngm:class:lido-dao
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:de-fi
  - urn:ngm:class:yield-farming
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:liquid-staking-token
  - urn:ngm:class:reward-distribution
contrastsWith:
  - urn:ngm:class:staking
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:centralized-exchange
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:governance
  - urn:ngm:class:lido-dao
uses:
  - urn:ngm:class:dao
  - urn:ngm:class:oracle
  - urn:ngm:class:governance-token
relatedTo:
  - urn:ngm:class:decentralization
  - urn:ngm:class:staking
  - urn:ngm:class:token
---

# Lido

A liquid staking protocol that stakes users' assets with network validators and issues a transferable token representing the staked position and its accruing rewards, enabling holders to participate in DeFi while their principal remains staked.
