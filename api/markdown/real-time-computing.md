- ### Definition
  - Computing in which correctness depends not only on the logical result but also on meeting timing deadlines. Systems are classified as hard, firm, or soft real-time according to the consequences of missing a deadline.

- ### Semantic Classification
  - owl-class:: computing:RealTimeComputing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Latency]]
  - requires:: [[Real-Time Operating System]]
  - enables:: [[Embedded Systems]]

- ### Content
  - Real-time computing requires operations to complete within defined time bounds. In hard real-time systems a missed deadline is a failure, as in flight control, whereas soft real-time systems tolerate occasional lateness with degraded quality.
  - Such systems rely on predictable scheduling, bounded latency, and often real-time operating systems. They are common in embedded control, robotics, telecommunications, and multimedia.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z