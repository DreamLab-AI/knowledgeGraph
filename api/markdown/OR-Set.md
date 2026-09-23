
An OR-Set (Observed-Remove Set) is a conflict-free replicated data type (CRDT) that supports concurrent add and remove operations on a set while guaranteeing eventual consistency across replicas. Each added element is tagged with a unique identifier so that concurrent adds and removes resolve deterministically, with adds winning over concurrent removes of unobserved tags. It is a foundational structure for collaborative applications that must merge edits without central coordination.

- ### Content
  - Elements carry unique tags so that concurrent operations resolve deterministically, typically with adds winning over removes of tags a replica has not yet observed. This lets distributed replicas converge without coordination, making OR-Sets a building block for offline-capable collaborative tools.

