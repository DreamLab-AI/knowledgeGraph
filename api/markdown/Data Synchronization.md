
Data synchronization is the process of keeping data consistent across multiple devices, replicas or systems by propagating changes and reconciling conflicts. It may be one-way or bidirectional, real-time or batch, and relies on change tracking, versioning and conflict-resolution strategies. It is essential wherever distributed copies of data must converge, from device sync to collective-intelligence systems aggregating many participants.

- ### Content
  - Synchronisation uses change-data-capture, timestamps or vector clocks to detect divergence and merge updates, applying last-writer-wins or CRDT-based resolution. The chosen strategy governs how the system behaves under concurrent edits and intermittent connectivity.

