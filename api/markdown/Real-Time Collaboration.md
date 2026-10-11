Real-time collaboration is the practice and technology of multiple users working concurrently on shared content with changes propagated and merged with minimal latency. It relies on synchronisation algorithms that resolve concurrent edits while preserving each participant's intent. It underpins collaborative editors, shared design tools, and multi-user virtual environments.

### Overview

- The central challenge is that participants edit independently and their changes can conflict when interleaved.
- Synchronisation algorithms ensure all replicas converge to the same consistent state despite differing edit orders.
- Latency must stay low enough that collaboration feels immediate, which shapes the choice of transport and merge strategy.
- Presence and awareness features show who is editing what, reducing accidental conflicts.

### Mechanisms

- [[Operational Transformation]] rewrites concurrent operations so they can be applied in any order with identical results.
- [[CRDT]] structures guarantee convergence by design, requiring no central coordination.
- [[State Synchronisation]] reconciles replicas after disconnection or divergence.
- [[Real-Time Communication]] channels carry edits between participants with minimal delay.

### Key aspects

- Convergence: all replicas reach the same final state.
- Intention preservation: merged results reflect what each user meant to do.
- Latency tolerance: the system remains usable under variable network conditions.
- Awareness: presence cues coordinate human attention.

### Applications

- Collaborative document and code editors.
- Shared design and whiteboard tools.
- Multi-user virtual and [[Spatial Computing]] environments.
- Real-time data dashboards updated by many contributors.

### Provenance

