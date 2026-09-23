---
okf_version: "0.2"
type: Class
title: Fault Tolerance
resource: urn:ngm:class:fault-tolerance
domain: infrastructure
description: System property denoting the capability of a computing or distributed system to continue providing correct service in the presence of component failures, encompassing the formal failure-model taxonomy enumerated by Cristian (fail-stop, fail-silent, omission, crash-recovery, timing, Byzantine arbi...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:software-engineering
  - urn:ngm:class:dependability
  - urn:ngm:class:property
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:resilience
hasPart:
  - urn:ngm:class:failure-detector
  - urn:ngm:class:health-monitoring
  - urn:ngm:class:quorum
  - urn:ngm:class:redundancy
  - urn:ngm:class:replication
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:checkpointing
  - urn:ngm:class:recovery-procedure
  - urn:ngm:class:heartbeat
  - urn:ngm:class:write-ahead-logging
requires:
  - urn:ngm:class:idempotency
  - urn:ngm:class:monitoring-system
  - urn:ngm:class:time-synchronisation
  - urn:ngm:class:network-layer
  - urn:ngm:class:storage-infrastructure
  - urn:ngm:class:failure-model
enables:
  - urn:ngm:class:data-consistency
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:durability
  - urn:ngm:class:high-availability
  - urn:ngm:class:zero-downtime-deployment
  - urn:ngm:class:continued-operation
  - urn:ngm:class:automatic-recovery
dependsOn:
  - urn:ngm:class:distributed-systems-theory
  - urn:ngm:class:information-theory
  - urn:ngm:class:error-correcting-codes
  - urn:ngm:class:cryptography
  - urn:ngm:class:network-protocol
implements:
  - urn:ngm:class:hot-stuff
  - urn:ngm:class:paxos
  - urn:ngm:class:pbft
  - urn:ngm:class:raft
  - urn:ngm:class:tendermint
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:triple-modular-redundancy
  - urn:ngm:class:chain-replication
  - urn:ngm:class:primary-backup
  - urn:ngm:class:swim
  - urn:ngm:class:phi-accrual-detector
  - urn:ngm:class:n-version-programming
  - urn:ngm:class:recovery-blocks
  - urn:ngm:class:sagas
contrastsWith:
  - urn:ngm:class:best-effort-retry
  - urn:ngm:class:single-point-of-failure
  - urn:ngm:class:simple-replication
  - urn:ngm:class:high-availability-without-byzantine-resilience
  - urn:ngm:class:crash-only-recovery-without-consensus
bridgesTo:
  - urn:ngm:class:reliability-engineering
uses:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:hamming-codes
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:vector-clocks
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:heartbeat-protocol
  - urn:ngm:class:lamport-clocks
  - urn:ngm:class:reed-solomon-codes
supports:
  - urn:ngm:class:avionics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:distributed-training
  - urn:ngm:class:financial-trading
  - urn:ngm:class:medical-devices
  - urn:ngm:class:blockchain
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:avionics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:financial-trading
standardizedBy:
  - urn:ngm:class:arp4754-a
  - urn:ngm:class:do-178-c
  - urn:ngm:class:iec-61508
  - urn:ngm:class:iso-26262
  - urn:ngm:class:nist-sp-800-160
  - urn:ngm:class:ieee-1633
relatedTo:
  - urn:ngm:class:byzantine-generals-problem
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:flp-impossibility
  - urn:ngm:class:linearizability
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:linearizability
---

# Fault Tolerance

System property denoting the capability of a computing or distributed system to continue providing correct service in the presence of component failures, encompassing the formal failure-model taxonomy enumerated by Cristian (fail-stop, fail-silent, omission, crash-recovery, timing, Byzantine arbi...
