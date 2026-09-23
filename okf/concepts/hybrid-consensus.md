---
okf_version: "0.2"
type: Class
title: Hybrid Consensus
resource: urn:ngm:class:hybrid-consensus
domain: blockchain
description: A consensus mechanism that combines two or more distinct consensus approaches—typically pairing a proof-based method such as Proof of Work or Proof of Stake with a Byzantine Fault Tolerant finality layer—to balance security, throughput, and finality properties. Hybrid designs aim to capture the best characteristics of each constituent mechanism while mitigating their individual weaknesses.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:validator-set
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-scalability
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
relatedTo:
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:validator-node
  - urn:ngm:class:block-time
---

# Hybrid Consensus

A consensus mechanism that combines two or more distinct consensus approaches—typically pairing a proof-based method such as Proof of Work or Proof of Stake with a Byzantine Fault Tolerant finality layer—to balance security, throughput, and finality properties. Hybrid designs aim to capture the best characteristics of each constituent mechanism while mitigating their individual weaknesses.
