Collaborative editing is the capability for multiple people to view and modify a shared document simultaneously, with their changes merged consistently and surfaced to all participants in near real time. It relies on concurrency-control techniques such as operational transformation or conflict-free replicated data types to reconcile concurrent edits without conflicts. Combined with presence and cursor awareness, it makes co-authoring across distributed users feel immediate and coherent.

### Overview

- Collaborative editing reconciles concurrent edits from many participants so that all converge on the same document state.
- Operational transformation rewrites concurrent operations to preserve intent, while CRDTs encode merge rules that always converge.
- A real-time transport such as WebSocket propagates changes, and presence cues show who is editing where.
- The result is a fluid co-authoring experience used across documents, code, design canvases, and knowledge graphs.

### Mechanisms

- Operational transformation: transforming concurrent operations against each other to maintain consistency.
- Conflict-free replicated data types: data structures whose merges are commutative and convergent by construction.
- Change propagation: low-latency transport that streams edits to all participants.
- Presence and awareness: shared cursors, selections, and participant indicators.
- Convergence guarantees: eventual consistency so all replicas reach an identical state.

### Applications

- Real-time co-authoring of documents, spreadsheets, and presentations.
- Pair and mob programming in shared code editors.
- Multi-user editing of design and whiteboard canvases.
- Concurrent editing of knowledge graphs and structured notes.

### Provenance

