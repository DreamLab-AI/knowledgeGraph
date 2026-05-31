- ### Definition
  - The Integration Layer is the cross-cutting stratum that connects otherwise independent systems so they can exchange data and invoke each other's functions. It sits above transport and protocol concerns and below the applications that orchestrate combined behaviour. It contains adapters, connectors, message translation, and the routing that mediates between heterogeneous endpoints.

- ### Semantic Classification
  - owl-class:: int:IntegrationLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Enterprise Integration Patterns]], [[Message Queue]]
  - requires:: [[Transport Layer]], [[APILayer]]
  - enables:: [[Application Layer]], [[Coordination Layer]]

- ### Content
  - The Integration Layer reconciles differences between systems so that data and commands can flow across boundaries. Typical members include protocol and format adapters, message brokers, transformation pipelines, and routing rules that decouple producers from consumers. It hides heterogeneity behind a consistent interface.
  - It requires the Transport Layer for reliable delivery and the API Layer for the contracts it connects to. It enables the Application Layer, which composes integrated services, and the Coordination Layer, which sequences work across them. Decoupling introduced here lets systems evolve independently.
  - The layer bridges to enterprise integration patterns and to message queues, which codify reliable asynchronous exchange. Idempotency and delivery guarantees defined here govern how robust the combined system is to partial failure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z