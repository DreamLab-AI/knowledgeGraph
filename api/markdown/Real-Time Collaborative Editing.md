Real-time collaborative editing is the capability for multiple users to concurrently modify a shared document or data structure and see each other's changes near-instantaneously with automatic conflict resolution. It depends on synchronisation algorithms such as operational transformation or conflict-free replicated data types to maintain a consistent merged state across replicas. It underpins shared documents, whiteboards, and collaborative virtual workspaces.

### Content

- Two dominant approaches exist: operational transformation, which rewrites concurrent operations against each other, and CRDTs, which define commutative merge semantics so replicas converge regardless of operation order. CRDT-based designs suit peer-to-peer and offline-first editing, while OT is common in centralised document services.

