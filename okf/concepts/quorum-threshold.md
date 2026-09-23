---
okf_version: "0.2"
type: Class
title: Quorum Threshold
resource: urn:ngm:class:quorum-threshold
domain: blockchain
description: A quorum threshold is the minimum number or fraction of participants (nodes, validators, signatories, or voters) that must agree or respond for a distributed system or governance process to reach a valid decision. It is a foundational parameter in consensus protocols, distributed databases, and blockchain governance, balancing liveness (the system can make progress) against safety (decisions refle
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:consensus-mechanism
uses:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
supports:
  - urn:ngm:class:fault-tolerance
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:distributed-consensus
---

# Quorum Threshold

A quorum threshold is the minimum number or fraction of participants (nodes, validators, signatories, or voters) that must agree or respond for a distributed system or governance process to reach a valid decision. It is a foundational parameter in consensus protocols, distributed databases, and blockchain governance, balancing liveness (the system can make progress) against safety (decisions reflect genuine majority will).
