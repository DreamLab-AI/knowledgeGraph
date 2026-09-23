---
okf_version: "0.2"
type: Class
title: Casper Ffg
resource: urn:ngm:class:casper-ffg
domain: blockchain
description: Casper FFG (the Friendly Finality Gadget) is a proof-of-stake finality mechanism that overlays a checkpoint-based voting protocol on an underlying block proposal chain. Validators stake deposits and vote in two rounds to justify and then finalise checkpoints, after which reverting them would require destroying at least one third of the total stake. It introduces economic finality with slashing pen
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:finality-gadget
requires:
  - urn:ngm:class:validator
  - urn:ngm:class:staking
enables:
  - urn:ngm:class:blockchain-security
implements:
  - urn:ngm:class:finality
  - urn:ngm:class:proof-of-stake
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerance
uses:
  - urn:ngm:class:slashing
  - urn:ngm:class:validator-set
supports:
  - urn:ngm:class:ethereum
  - urn:ngm:class:pos-consensus
  - urn:ngm:class:proof-of-stake
partOf:
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:ethereum
  - urn:ngm:class:slashing
---

# Casper Ffg

Casper FFG (the Friendly Finality Gadget) is a proof-of-stake finality mechanism that overlays a checkpoint-based voting protocol on an underlying block proposal chain. Validators stake deposits and vote in two rounds to justify and then finalise checkpoints, after which reverting them would require destroying at least one third of the total stake. It introduces economic finality with slashing penalties for equivocation, providing strong accountability without requiring a full consensus overhaul.
