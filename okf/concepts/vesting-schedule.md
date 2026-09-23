---
okf_version: "0.2"
type: Class
title: Vesting Schedule
resource: urn:ngm:class:vesting-schedule
domain: blockchain
description: "A vesting schedule is a contractually or programmatically enforced timetable that releases allocated digital assets or equity to recipients incrementally over a defined period, typically beginning after an initial cliff during which no release occurs. In blockchain and token-based systems, schedules are commonly encoded in smart contracts that autonomously unlock portions of a token allocation at "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:token-distribution
hasPart:
  - urn:ngm:class:cliff-period
  - urn:ngm:class:release-interval
  - urn:ngm:class:revocation-clause
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-allocation
enables:
  - urn:ngm:class:incentive-alignment
  - urn:ngm:class:supply-schedule
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:time-lock
implements:
  - urn:ngm:class:token
contrastsWith:
  - urn:ngm:class:airdrop
  - urn:ngm:class:immediate-token-release
bridgesTo:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:equity-vesting
uses:
  - urn:ngm:class:escrow-system
  - urn:ngm:class:multisig-wallet
  - urn:ngm:class:escrow-system
supports:
  - urn:ngm:class:governance-token
  - urn:ngm:class:dao
partOf:
  - urn:ngm:class:tokenomics
relatedTo:
  - urn:ngm:class:tokenomics-governance
  - urn:ngm:class:initial-coin-offering
  - urn:ngm:class:staking
  - urn:ngm:class:treasury-management
---

# Vesting Schedule

A vesting schedule is a contractually or programmatically enforced timetable that releases allocated digital assets or equity to recipients incrementally over a defined period, typically beginning after an initial cliff during which no release occurs. In blockchain and token-based systems, schedules are commonly encoded in smart contracts that autonomously unlock portions of a token allocation at fixed intervals or milestones, aligning the long-term incentives of founders, contributors, and investors with project health. The schedule's parameters — cliff length, total duration, release cadence, and revocation conditions — are a principal instrument of tokenomics design and governance risk management.
