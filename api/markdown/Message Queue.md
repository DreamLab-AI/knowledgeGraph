public:: true

# Message Queue
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:message-queue",
  "@type": "Page",
  "vc:slug": "message-queue",
  "title": "Message Queue",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:message-queue",
  "@type": "Class",
  "label": "Message Queue",
  "definition": "A Message Queue is a form of asynchronous inter-process communication that allows software components to exchange messages by placing them in a durable, ordered buffer, decoupling producers from consumers in time and space. Messages are persisted in the queue until a consumer retrieves and acknowledges them, providing at-least-once delivery guarantees and enabling load levelling across heterogeneous processing rates. Message queues are foundational to event-driven architectures, microservices integration, and distributed data pipelines, where they absorb traffic spikes and improve system resilience. Implementations range from lightweight in-process queues to enterprise-grade distributed brokers such as Apache Kafka and RabbitMQ.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:apache-kafka", "label": "Apache Kafka"},
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"},
      {"@id": "urn:ngm:class:asynchronous-execution", "label": "Asynchronous Execution"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"},
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"},
      {"@id": "urn:ngm:class:event-management", "label": "Event Management"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Message Queue is an [[Asynchronous Communication]] infrastructure component that buffers messages between producers and consumers, enabling [[Event Driven Architecture]] without tight temporal coupling between system components.
- ### Relationships
  - Message Queues are the backbone of [[Microservices Architecture]], allowing each service to operate independently and at its own pace. [[Apache Kafka]] is the dominant distributed log implementation, providing high-throughput, ordered message delivery with long-term retention suitable for [[Data Pipeline]] replay. [[Asynchronous Execution]] of background jobs, such as email dispatch or image processing, commonly relies on simpler task queues. [[Agent Event Stream]] patterns extend message queue semantics to AI agent coordination. The technology underpins [[Event Management]] systems in observability platforms and scales efficiently on [[Cloud Computing]] infrastructure through managed broker services.
- ### Content
  - A message queue operates on a producer–consumer model: producers write messages without waiting for consumers to be ready, and consumers read at their own pace with optional acknowledgement back to the broker. This decoupling enables systems to tolerate downstream slowness or temporary unavailability without cascading failures, a property sometimes called backpressure management.

  - Delivery semantics vary by implementation. At-most-once delivery drops messages if the consumer fails, prioritising throughput. At-least-once delivery retains messages until acknowledged, risking duplicates. Exactly-once semantics, achievable in some brokers through transactional commits, are the most demanding but prevent double-processing in financial and inventory systems.

  - [[Apache Kafka]] reimagines the queue as an immutable append-only log with configurable retention, enabling both real-time streaming and historical replay. Topics are partitioned across brokers for horizontal scalability, and consumer groups allow parallel processing whilst preserving per-partition ordering. This architecture makes Kafka suitable for both [[Data Pipeline]] ingestion and [[Event Driven Architecture]] at internet scale.

  - Dead-letter queues capture messages that repeatedly fail processing, allowing operators to inspect and requeue them without losing data. Combined with circuit-breaker patterns, message queues contribute to robust distributed system design by containing failure blast radius and enabling graceful degradation when downstream services are impaired.
