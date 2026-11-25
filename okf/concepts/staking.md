---
okf_version: "0.2"
type: Class
title: Staking
resource: urn:ngm:class:staking
domain: blockchain
description: The act of locking cryptocurrency as a stake to participate in a proof-of-stake network's validation process, earning rewards and risking penalties for misbehaviour. The staked amount aligns a validator's incentives with the network's correct operation.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:proof-of-stake
hasPart:
  - urn:ngm:class:slashing
  - urn:ngm:class:staking-reward
  - urn:ngm:class:delegation
requires:
  - urn:ngm:class:validator
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:native-token
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:network-security
  - urn:ngm:class:finality
  - urn:ngm:class:decentralised-governance
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-key
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining
bridgesTo:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:tokenomics
  - urn:ngm:class:consensus-mechanism
uses:
  - urn:ngm:class:token-bonding-curve
  - urn:ngm:class:liquid-staking
supports:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:economic-security
partOf:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:validator-set
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Staking

The act of locking cryptocurrency as a stake to participate in a proof-of-stake network's validation process, earning rewards and risking penalties for misbehaviour. The staked amount aligns a validator's incentives with the network's correct operation.
