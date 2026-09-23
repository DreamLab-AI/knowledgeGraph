---
okf_version: "0.2"
type: Class
title: Partial Synchrony
resource: urn:ngm:class:partial-synchrony
domain: distributed-systems
description: "Partial synchrony is a timing model for distributed systems that sits between the fully synchronous model, where message delays are bounded and known, and the fully asynchronous model, where delays are unbounded. In the partially synchronous model there exists an unknown bound on message delay that eventually holds after some unknown global stabilisation time (GST), or alternatively a known bound "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:consensus-protocol
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:leader-election
enables:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:flp-impossibility
uses:
  - urn:ngm:class:gossip-protocol
supports:
  - urn:ngm:class:tendermint
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
relatedTo:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:quorum
  - urn:ngm:class:distributed-computing
---

# Partial Synchrony

Partial synchrony is a timing model for distributed systems that sits between the fully synchronous model, where message delays are bounded and known, and the fully asynchronous model, where delays are unbounded. In the partially synchronous model there exists an unknown bound on message delay that eventually holds after some unknown global stabilisation time (GST), or alternatively a known bound that holds only after GST. This model is the theoretical foundation for practical Byzantine fault-tolerant consensus protocols, allowing them to circumvent the FLP impossibility result by guaranteeing safety always and liveness once the network behaves synchronously.
