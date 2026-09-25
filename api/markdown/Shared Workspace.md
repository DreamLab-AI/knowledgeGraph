A shared workspace is a common digital environment in which multiple people can view, edit and organise shared artefacts together, whether simultaneously or over time. It provides a persistent space holding documents, boards, tasks or models alongside cues about who is present and what they are doing. Shared workspaces are a core construct of collaborative and groupware systems, turning individual tools into venues for coordinated teamwork.

### Overview

- A workspace differs from a mere shared file by maintaining context: structure, history, membership and live activity rather than just content.
- It may support synchronous co-editing, asynchronous contribution, or both, depending on how it reconciles concurrent changes.
- Effective workspaces balance freedom to act independently with [[Awareness]] of others' actions, avoiding both isolation and constant interruption.
- They are the backbone of modern [[Remote Work]] and [[Remote Collaboration]], replacing the physical shared desk or whiteboard.

### Key aspects

- **Shared artefacts** — documents, canvases, task lists and models that all members can act upon.
- **Presence and awareness** — indicators of who is online, where they are working, and recent activity, drawing on [[Presence]] and [[Awareness]].
- **Concurrency control** — mechanisms such as [[Operational Transformation]] and [[CRDT]] reconcile simultaneous edits without conflict.
- **History and recovery** — [[Version Control]] preserves the evolution of artefacts and supports rollback.
- **Access and membership** — defined participants and permissions scope who can see and change what.

### Mechanisms

- State is replicated to each participant and kept consistent through [[Synchronisation]].
- Conflict-free merge strategies (CRDTs) or transformation of operations let many people edit the same object concurrently.
- Activity feeds and cursors broadcast fine-grained awareness of ongoing work.
- Persistence ensures the workspace survives sessions, so collaboration can pause and resume.

### Applications

- Collaborative document and spreadsheet editing across distributed teams.
- Shared whiteboards and design canvases for ideation and planning.
- Project and task boards coordinating distributed [[Remote Work]].
- Multi-user modelling and review environments in immersive collaboration.

### Provenance

