---
okf_version: "0.2"
type: Class
title: Deterministic Finality
resource: urn:ngm:class:deterministic-finality
domain: blockchain
description: Transaction finality achieved through explicit protocol mechanisms in BFT-based consensus systems, providing absolute mathematical guarantee that finalized blocks cannot be reverted once a supermajority of validators has committed to them.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:validator-set
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:proof-of-stake
enables:
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:cross-chain-bridge
implements:
  - urn:ngm:class:tendermint
  - urn:ngm:class:casper-ffg
contrastsWith:
  - urn:ngm:class:probabilistic-finality
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:longest-chain-rule
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:de-fi
  - urn:ngm:class:virtual-economy
uses:
  - urn:ngm:class:bls-signature
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:slashing
  - urn:ngm:class:byzantine-fault-tolerance
partOf:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:validator
  - urn:ngm:class:economic-finality
---

# Deterministic Finality

Transaction finality achieved through explicit protocol mechanisms in BFT-based consensus systems, providing absolute mathematical guarantee that finalized blocks cannot be reverted once a supermajority of validators has committed to them.
