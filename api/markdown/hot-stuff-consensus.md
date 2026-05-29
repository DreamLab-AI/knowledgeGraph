- ### Definition
  A Byzantine fault-tolerant state machine replication protocol achieving linear message complexity, optimistic responsiveness, and a simple three-phase voting pipeline simultaneously. Replaces PBFT's quadratic message complexity with threshold signature aggregation, enabling O(n) view changes and forming the foundation for DiemBFT/LibraBFT and Aptos consensus.

- ### Relationships
  HotStuff **implements** State Machine Replication and Consensus Algorithm at its core. It **requires** Fault Tolerance properties (tolerating up to f < n/3 Byzantine faults) and Distributed System infrastructure. It **enables** deterministic Finality (blocks are final once committed) and Blockchain Scalability through its linear communication overhead. It **contrasts with** RAFT Consensus (which is crash-fault-tolerant only) and Tendermint Consensus (a related but distinct BFT protocol). It is **related to** Sybil Resistance (the broader challenge HotStuff presupposes is solved by PoS/identity) and Distributed Ledger (its primary application domain).

- ### Content

  HotStuff was introduced by Yin et al. in 2018 and subsequently published at PODC 2019. It addresses a long-standing tension in Byzantine fault-tolerant consensus: PBFT achieved optimal resilience (tolerating f < n/3 Byzantine nodes) but required O(n²) messages during view changes, preventing deployment in networks with more than a few dozen validators.

  HotStuff's key innovation is a chained three-phase commit protocol combined with threshold signatures. In each view (a leader-driven round), the leader proposes a block and collects n-f votes aggregated into a quorum certificate (QC) using a threshold signature scheme. Three consecutive QCs — Prepare, Pre-Commit, and Commit — establish finality for a block. This linear structure means view changes require only O(n) messages: the new leader broadcasts the highest known QC and validators respond with a single message each.

  Optimistic responsiveness means the protocol proceeds at the speed of actual network latency (not a conservative timeout bound) when the leader is honest, achieving high throughput in practice. A pipelined variant (Chained HotStuff) overlaps phases across consecutive blocks, further reducing latency.

  DiemBFT (formerly LibraBFT) — the consensus protocol for Meta's Diem blockchain — is a production variant of HotStuff with additions for leader rotation, liveness under partial synchrony, and integration with validator staking. The Aptos blockchain also uses a HotStuff-derived protocol (AptosBFT) with improvements to leader reputation and pacemaker design.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z