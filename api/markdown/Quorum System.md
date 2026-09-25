A quorum system is a collection of subsets of a distributed set of replicas, where any two subsets are guaranteed to intersect, used to coordinate read and write operations so that consistency is preserved despite failures. By requiring operations to gather acknowledgements from a quorum rather than every replica, the system tolerates a bounded number of faulty or unreachable nodes while still ensuring that conflicting operations observe one another. Quorum systems are foundational to distributed consensus, replicated databases, and Byzantine fault-tolerant protocols.

### Overview

- In a replicated system, requiring unanimity stalls whenever any node fails, while accepting any single acknowledgement risks inconsistency. Quorum systems strike the balance: an operation succeeds once it reaches an intersecting subset, preserving correctness while tolerating faults.
- The intersection property is the heart of the design. Because every pair of quorums shares at least one replica, that shared replica carries forward the latest committed state, preventing divergent histories and enabling linearisable behaviour.

### Mechanisms

- Majority quorums require more than half the replicas, tolerating a minority of crash failures.
- Byzantine quorums require larger overlaps to mask arbitrary or malicious replica behaviour.
- Weighted and grid quorums tune availability and load by assigning votes or geometric structures to replicas.
- Quorum reconfiguration safely changes membership as nodes join or leave.

### Applications

- Consensus protocols such as [[PBFT]] and [[Raft Consensus]] gather quorum acknowledgements to commit entries.
- Replicated and distributed databases use quorums to balance consistency and availability.
- Blockchain validator sets rely on quorum thresholds for finality.
- Coordination services manage leadership and configuration through quorum agreement.

### Provenance

