---
okf_version: "0.2"
type: Class
title: Deterministic Execution
resource: urn:ngm:class:deterministic-execution
domain: infrastructure
description: Deterministic Execution guarantees that a computation produces identical outputs and state transitions whenever it is run on the same inputs in the same order, irrespective of host, timing, or scheduling. It is a prerequisite for state machine replication and blockchain smart contracts, where independent nodes must reach byte-identical results to agree on shared state. Achieving it demands elimina
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:state-machine-replication
requires:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:reproducibility
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:byzantine-fault-tolerance
implements:
  - urn:ngm:class:idempotency
contrastsWith:
  - urn:ngm:class:concurrency
bridgesTo:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:virtual-machine
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:replication
partOf:
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:reproducibility
---

# Deterministic Execution

Deterministic Execution guarantees that a computation produces identical outputs and state transitions whenever it is run on the same inputs in the same order, irrespective of host, timing, or scheduling. It is a prerequisite for state machine replication and blockchain smart contracts, where independent nodes must reach byte-identical results to agree on shared state. Achieving it demands eliminating sources of nondeterminism such as wall-clock time, unordered concurrency, and floating-point divergence.
