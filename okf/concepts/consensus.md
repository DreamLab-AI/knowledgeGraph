---
okf_version: "0.2"
type: Class
title: Consensus
resource: urn:ngm:class:consensus
domain: distributed-systems
description: The general problem of getting distributed processes to agree on a common value or decision despite failures, communication delays or adversarial behaviour.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:leader-election
  - urn:ngm:class:voting-round
requires:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:quorum
  - urn:ngm:class:message-passing
enables:
  - urn:ngm:class:consensus-mechanisms
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:atomic-broadcast
  - urn:ngm:class:distributed-databases
implements:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
  - urn:ngm:class:byzantine-fault-tolerance
contrastsWith:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:cap-theorem
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:tendermint
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:tendermint
  - urn:ngm:class:byzantine-generals-problem
  - urn:ngm:class:partial-synchrony
---

# Consensus

The general problem of getting distributed processes to agree on a common value or decision despite failures, communication delays or adversarial behaviour.
