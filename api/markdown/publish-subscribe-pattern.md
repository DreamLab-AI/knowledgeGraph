- ### Definition
  - A messaging pattern in which senders, called publishers, categorise messages into topics without knowledge of which receivers, called subscribers, will consume them. A broker or event channel delivers messages to interested subscribers.

- ### Semantic Classification
  - owl-class:: software-architecture:PublishSubscribePattern
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Message Queue]]
  - bridges-to:: [[Software Architecture]]
  - requires:: [[Message Queue]]
  - enables:: [[Distributed Systems]]

- ### Content
  - The publish-subscribe pattern decouples producers and consumers of messages, allowing each to evolve independently and scale separately. Publishers emit events to named topics and subscribers register interest in those topics.
  - It is widely used in event-driven architectures and distributed systems, implemented by message brokers and streaming platforms. The decoupling improves modularity but introduces concerns around delivery guarantees and ordering.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z