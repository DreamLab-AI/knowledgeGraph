---
okf_version: "0.2"
type: Class
title: Voting Round
resource: urn:ngm:class:voting-round
domain: blockchain
description: A voting round is a discrete phase within a Byzantine fault-tolerant consensus protocol during which participating nodes exchange and tally votes on a proposed value or block. Multi-round protocols such as PBFT and Tendermint progress through prepare, pre-commit, and commit rounds to achieve agreement despite faulty or malicious participants. The round abstraction provides liveness via view change
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-protocol
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:consensus-mechanism
---

# Voting Round

A voting round is a discrete phase within a Byzantine fault-tolerant consensus protocol during which participating nodes exchange and tally votes on a proposed value or block. Multi-round protocols such as PBFT and Tendermint progress through prepare, pre-commit, and commit rounds to achieve agreement despite faulty or malicious participants. The round abstraction provides liveness via view changes and safety via supermajority thresholds.
