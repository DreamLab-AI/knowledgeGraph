
Log replication is the mechanism by which an ordered, append-only sequence of commands is copied consistently across the nodes of a distributed system so that each replica can apply the same operations in the same order. In leader-based consensus protocols such as Raft, the leader appends client commands to its log and replicates entries to followers, committing an entry once a quorum has durably stored it. By ensuring every replica converges on an identical log, it is the substrate for state machine replication and strong consistency. It must handle leader failover, log divergence, and consistency checks to keep replicas in agreement.

- Log replication copies an ordered, append-only command log consistently across replicas so each applies the same operations in order. It is the core of [[State Machine Replication]] in protocols such as [[Raft]] and [[Paxos]], built atop [[Leader Election]] and [[Quorum]] agreement to deliver [[Fault Tolerance]].
- ### Overview
- A replicated log is the canonical record of intended state transitions; if every node holds the same log and applies it deterministically, every node reaches the same state.
- Leader-based designs funnel all writes through one node that orders entries and pushes them to followers, committing once durably stored on a majority.
- Correctness hinges on consistency checks that reconcile divergent follower logs after failures.
- ### Mechanisms
- The leader appends client commands and assigns monotonic indices and terms.
- Entries are sent to followers; an AppendEntries-style RPC verifies log matching.
- An entry commits once replicated to a [[Quorum]], then is applied to the state machine.
- ### Applications
- Backbone of consensus stores like etcd and Consul.
- Distributed databases replicating write-ahead logs across regions.
- Coordination services providing strongly consistent configuration.
- ### Provenance

