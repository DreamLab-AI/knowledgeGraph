---
okf_version: "0.2"
type: Class
title: Nominated Proof of Stake
resource: urn:ngm:class:nominated-proof-of-stake
domain: blockchain
description: Nominated Proof of Stake (NPoS) is a consensus mechanism variant in which token holders nominate a set of validator candidates; an election algorithm selects the active validator set to maximise stake distribution while satisfying security constraints. Elected validators produce and finalise blocks, while nominators share both block rewards and slashing penalties, aligning incentives across the br
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-of-stake
requires:
  - urn:ngm:class:validator-node
  - urn:ngm:class:validator-set
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:block-reward
  - urn:ngm:class:deterministic-finality
contrastsWith:
  - urn:ngm:class:pure-proof-of-stake
uses:
  - urn:ngm:class:consensus-algorithm
relatedTo:
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:liquid-proof-of-stake
  - urn:ngm:class:polkadot-parachains
  - urn:ngm:class:blockchain-protocol
---

# Nominated Proof of Stake

Nominated Proof of Stake (NPoS) is a consensus mechanism variant in which token holders nominate a set of validator candidates; an election algorithm selects the active validator set to maximise stake distribution while satisfying security constraints. Elected validators produce and finalise blocks, while nominators share both block rewards and slashing penalties, aligning incentives across the broader token holder community.
