
Local-first software is a design philosophy in which the primary copy of a user's data lives on their own device, with the network used for optional synchronisation rather than as a dependency. It prioritises offline availability, low latency, data ownership, and longevity while still supporting real-time collaboration via conflict-free merging. The approach typically relies on CRDTs to reconcile concurrent edits across devices without a central authority.

- ### Content
  - The model delivers instant local reads and writes, full offline capability, and resilience to server outages, while background sync propagates changes peer-to-peer or through relays. Conflict-free replicated data types provide deterministic merge semantics, eliminating the need for centralised locking or last-write-wins coordination.

