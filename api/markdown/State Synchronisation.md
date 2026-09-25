State synchronisation is the process of ensuring that multiple distributed nodes or replicas of a system maintain consistent views of shared mutable state despite network partitions, concurrent updates, and node failures. It encompasses techniques including leader-based replication, consensus protocols, conflict-free replicated data types (CRDTs), and operational transformation to reconcile divergent states. State synchronisation defines the trade-off between consistency, availability, and partition tolerance as described by the CAP theorem, choosing different points on that spectrum depending on application requirements. It is fundamental to distributed databases, real-time collaboration tools, multiplayer games, and blockchain networks.

### Content

- The theoretical foundations of state synchronisation derive from Leslie Lamport's work on logical clocks and distributed system invariants in the 1970s and 1980s, culminating in the Paxos consensus algorithm (1989, published 1998). Fischer, Lynch, and Paterson's FLP impossibility result established that no asynchronous distributed system can guarantee both safety and liveness — a constraint that all practical synchronisation protocols must navigate.
- Practical synchronisation systems choose a position on the consistency-availability spectrum. Strongly consistent systems — using Multi-Paxos or the Raft protocol — serialise all writes through a leader, guaranteeing that all replicas see the same sequence of states at the cost of increased write latency and unavailability during leader election. Eventually consistent systems allow all replicas to accept writes concurrently and merge them later, using vector clocks, version vectors, or CRDTs to detect and resolve conflicts.
- CRDTs (conflict-free replicated data types) represent a major advance for offline-capable and high-availability applications: their algebraic properties guarantee that any set of concurrent updates can be merged in any order to produce a consistent result, enabling applications such as collaborative text editors, distributed counters, and real-time multiplayer state to operate without coordination. Automerge and Yjs are widely used CRDT libraries underpinning tools including Figma, Notion, and various metaverse platforms.
- In 2024-2025, state synchronisation is increasingly important in multi-agent AI systems where agents maintain shared world models, and in metaverse platforms where thousands of participants need consistent spatial state with sub-100-millisecond latency. Blockchain consensus protocols continue to evolve, with Ethereum's Gasper and Solana's Tower BFT representing contrasting approaches to validator-set synchronisation. Edge computing and IoT deployments are driving interest in lightweight synchronisation protocols tolerant of intermittent connectivity.

### Semantic Classification

### Current Landscape (2026)

- The bandwidth problem of state-based CRDT synchronisation was directly attacked by ConflictSync (arXiv:2505.01144, May 2025), the first digest-driven sync algorithm that reframes CRDT reconciliation as rateless set reconciliation (Bloom filters plus rateless IBLTs), cutting total data transfer by up to 18x versus naive full-state transmission.
- Automerge reached version 3.0 in late 2025 with a columnar binary storage format that shrinks documents roughly 10x (a Moby Dick-sized doc dropping from about 700 MB in v2 to 1.3 MB), sub-millisecond merges, a native Rust core with Swift/Kotlin/JS bindings, and built-in presence and git-like document branching.
- Loro 1.0 emerged as a Rust-native CRDT contender offering movable trees and rich-text semantics, joining Yjs (still the de facto standard for collaborative editing via TipTap, BlockNote and ProseMirror) as the main library choices.
- The sync-engine layer consolidated around SQLite/Postgres-backed approaches: Rocicorp's Zero (successor to Replicache, launched late 2024) became the 2025-2026 DX frontrunner, alongside ElectricSQL, PowerSync, Triplit and Jazz.tools, positioning local-first as an emerging default for new SaaS.
- Platform-level support arrived when Apple announced CRDT primitives for CloudKit at WWDC 2025, exposing CKCRDTRecord types with LWW registers, G/PN-Counters and OR-Sets that merge automatically across devices.
- Academic work pushed beyond pure eventual consistency, including "Making CRDTs Not So Eventual" (VLDB, Feb 2025) and research adding Byzantine fault tolerance to CRDTs via cryptographic hash graphs and Blocklace structures, reflecting demand for stronger guarantees.
- A notable frontier is applying CRDT-based state synchronisation to multi-agent AI systems for coordinator-free shared state, and to peer-to-peer VR (e.g. WebRTC-channel prototypes achieving ~50 ms latency), though metadata garbage collection, tombstone growth and semantic (not just structural) conflict resolution remain open challenges as of 2026.

### References

- 1. Gomes, P. et al. (2025). ConflictSync: Bandwidth Efficient Synchronization of Divergent State. https://arxiv.org/pdf/2505.01144.pdf
- 2. Salient / Verity Research (2026). Local-First Software in 2026. https://verity.salient.community/research/local-first-software-in-2026.html
- 3. Youngju (2026). Real-time Collaboration Engines & Sync 2026 Deep Dive (Liveblocks, Yjs, Automerge, ElectricSQL, Zero). https://www.youngju.dev/blog/culture/2026-05-16-realtime-collaboration-engines-sync-2026-liveblocks-partykit-yjs-automerge-electricsql-replicache-zero-jazz-tools-deep-dive.en
- 4. Mao, Y. et al. (2025). Making CRDTs Not So Eventual. Proceedings of the VLDB Endowment 18(2). https://dl.acm.org/doi/10.14778/3705829.3705850
- 5. Velt (2025). Best CRDT Libraries 2025: Real-Time Data Sync Guide. https://velt.dev/blog/top-crdt-libraries-for-real-time-data-sync
- 6. Zylos AI (2026). CRDTs and Distributed State Synchronization for Multi-Agent AI Systems. https://zylos.ai/research/2026-03-17-crdts-distributed-state-sync-multi-agent-systems/

### Provenance

