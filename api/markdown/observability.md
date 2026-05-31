- ### Definition
  - Observability is the property of a software system that allows its internal state to be inferred from external outputs such as logs, metrics, and traces.

- ### Semantic Classification
  - owl-class:: software-engineering:Observability
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Reliability Engineering]]
  - bridges-to:: [[Distributed Systems]]
  - requires:: [[performance]]
  - enables:: [[Site Reliability Engineering]]

- ### Content
  - Observability draws on three primary signal types: logs that record discrete events, metrics that aggregate numeric measurements over time, and distributed traces that follow a request across services.
  - The concept is associated with operating distributed systems where failures are difficult to reproduce, so engineers rely on collected telemetry to diagnose behaviour rather than reproducing problems directly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z