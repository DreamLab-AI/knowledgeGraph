---
okf_version: "0.2"
type: Class
title: RAFT Consensus
resource: urn:ngm:class:raft-consensus
domain: blockchain
description: "Raft is a distributed consensus algorithm designed as a more understandable alternative to Paxos, decomposing consensus into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster elects a single leader by majority vote during which followers grant a term-limited mandate; the leader receives all client writes, appends them to its log, and replicates"
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:distributed-system
enables:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerance
relatedTo:
  - urn:ngm:class:distributed-ledger
---

# RAFT Consensus

Raft is a distributed consensus algorithm designed as a more understandable alternative to Paxos, decomposing consensus into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster elects a single leader by majority vote during which followers grant a term-limited mandate; the leader receives all client writes, appends them to its log, and replicates them to followers, committing entries once a quorum acknowledges receipt. Raft guarantees that committed entries are never lost as long as a majority of nodes remain connected, providing crash fault tolerance but not Byzantine fault tolerance.
