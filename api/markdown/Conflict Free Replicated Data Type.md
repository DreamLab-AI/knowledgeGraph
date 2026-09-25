A conflict-free replicated data type (CRDT) is a data structure that can be replicated across many nodes and updated independently, with mathematical guarantees that all replicas converge to the same state once they have exchanged updates. By designing operations to be commutative or merges to be monotonic, CRDTs avoid the need for coordination or central conflict resolution. They are a foundational technique for offline-first and real-time collaborative distributed systems.

### Overview

- CRDTs let each replica accept updates locally and merge them later without ever producing a conflict that needs manual resolution.
- They come in operation-based and state-based forms, both designed so concurrent updates commute or merge deterministically.
- Because no coordination is required on the critical path, they are well suited to networks that are slow, partitioned or offline.

### Mechanisms

- Commutative operations or join-semilattice merges that guarantee convergence.
- Causal metadata such as vector clocks to order related updates.
- Monotonic state growth so merges never lose committed information.
- Garbage collection of tombstones to bound storage overhead.

### Applications

- Real-time collaborative document and design editors.
- Offline-first mobile and edge applications that sync later.
- Distributed databases offering strong eventual consistency.
- Peer-to-peer and local-first software architectures.

### Provenance

- This class was materialised to resolve existing inbound references in the knowledge graph.

