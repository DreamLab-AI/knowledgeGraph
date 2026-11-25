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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Voting Round

A voting round is a discrete phase within a Byzantine fault-tolerant consensus protocol during which participating nodes exchange and tally votes on a proposed value or block. Multi-round protocols such as PBFT and Tendermint progress through prepare, pre-commit, and commit rounds to achieve agreement despite faulty or malicious participants. The round abstraction provides liveness via view changes and safety via supermajority thresholds.
