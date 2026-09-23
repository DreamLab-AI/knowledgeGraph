---
okf_version: "0.2"
type: Class
title: Slashing
resource: urn:ngm:class:slashing
domain: blockchain
description: Slashing is an automated penalty mechanism in proof-of-stake and delegated proof-of-stake blockchain networks that permanently destroys or confiscates a portion of a validator's bonded stake when that validator commits a provably attributable protocol violation, such as double-signing conflicting blocks or surround voting. The mechanism converts the cost of Byzantine behaviour into a concrete fina
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:validator
  - urn:ngm:class:staking
  - urn:ngm:class:bonded-stake
  - urn:ngm:class:equivocation-detection
enables:
  - urn:ngm:class:economic-finality
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:validator-accountability
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptographic-proof
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:inactivity-leak
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:game-theory
  - urn:ngm:class:incentive-alignment
partOf:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:governance-token
  - urn:ngm:class:network-security
  - urn:ngm:class:attestation
  - urn:ngm:class:block-production
  - urn:ngm:class:unbonding-period
---

# Slashing

Slashing is an automated penalty mechanism in proof-of-stake and delegated proof-of-stake blockchain networks that permanently destroys or confiscates a portion of a validator's bonded stake when that validator commits a provably attributable protocol violation, such as double-signing conflicting blocks or surround voting. The mechanism converts the cost of Byzantine behaviour into a concrete financial loss, aligning validator incentives with honest participation and securing the network's economic finality. Slashing conditions and penalty magnitudes are encoded in the consensus rules of each network and are adjudicated deterministically by all full nodes.
