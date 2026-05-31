- ### Definition
  - The Communication Layer is the stratum that governs the exchange of messages between components or participants. It sits above the Transport Layer that delivers bytes and below the coordination and application strata that rely on conversation. It contains messaging patterns, encoding, addressing, and delivery semantics.

- ### Semantic Classification
  - owl-class:: comm:CommunicationLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Publish-Subscribe]], [[Message Passing]]
  - requires:: [[Transport Layer]]
  - enables:: [[Coordination Layer]], [[Integration Layer]]

- ### Content
  - The Communication Layer defines how components address, encode, and exchange messages with defined delivery semantics. Typical members include messaging patterns such as request-response and publish-subscribe, serialisation formats, addressing schemes, and guarantees about ordering and duplication. It structures conversation on top of raw transport.
  - It requires the Transport Layer to move bytes reliably between endpoints, and it enables the Coordination and Integration Layers, which depend on dependable messaging to synchronise and connect systems. The patterns chosen here determine coupling and resilience above.
  - The layer bridges to publish-subscribe and message passing, models that decouple senders from receivers in time and space. Delivery guarantees defined here, at-most-once or at-least-once, dictate how higher layers must reason about messages.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z