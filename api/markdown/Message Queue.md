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
  "definition": "A Message Queue is a durable, ordered buffer that mediates asynchronous inter-process communication, allowing producers to enqueue messages independently of consumers reading them, thereby decoupling components in both time and topology. Messages are persisted by a broker until a consumer retrieves and acknowledges them, with delivery semantics ranging from at-most-once through at-least-once to exactly-once, each trading throughput for reliability. Message queues are foundational to event-driven architectures, microservices integration, and distributed data pipelines, absorbing traffic spikes, enabling backpressure management, and improving system resilience against partial failures. Implementations range from lightweight in-process task queues to enterprise-grade distributed log brokers such as Apache Kafka, RabbitMQ, and Amazon SQS.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:message-broker", "label": "Message Broker"},
      {"@id": "urn:ngm:class:dead-letter-queue", "label": "Dead Letter Queue"},
      {"@id": "urn:ngm:class:consumer-group", "label": "Consumer Group"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:message-broker", "label": "Message Broker"},
      {"@id": "urn:ngm:class:persistence-layer", "label": "Persistence Layer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:backpressure-management", "label": "Backpressure Management"},
      {"@id": "urn:ngm:class:load-levelling", "label": "Load Levelling"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"},
      {"@id": "urn:ngm:class:publish-subscribe-pattern", "label": "Publish-Subscribe Pattern"},
      {"@id": "urn:ngm:class:serialisation", "label": "Serialisation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:producer-consumer-pattern", "label": "Producer Consumer Pattern"},
      {"@id": "urn:ngm:class:competing-consumers-pattern", "label": "Competing Consumers Pattern"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:horizontal-scalability", "label": "Horizontal Scalability"},
      {"@id": "urn:ngm:class:service-decoupling", "label": "Service Decoupling"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:remote-procedure-call", "label": "Remote Procedure Call"},
      {"@id": "urn:ngm:class:synchronous-communication", "label": "Synchronous Communication"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"},
      {"@id": "urn:ngm:class:stream-processing", "label": "Stream Processing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:apache-kafka", "label": "Apache Kafka"},
      {"@id": "urn:ngm:class:rabbitmq", "label": "RabbitMQ"},
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:event-sourcing", "label": "Event Sourcing"},
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:message-buffer", "label": "Message Buffer"},
    {"@id": "urn:ngm:class:task-queue", "label": "Task Queue"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Message Queue** is a durable, ordered buffer mediating [[Asynchronous Communication]] between software components, allowing [[Producer Consumer Pattern]] decoupling so that producers enqueue messages independently of consumers reading them. Brokers such as [[Apache Kafka]], [[RabbitMQ]], and Amazon SQS persist messages until acknowledged, enabling [[Fault Tolerance]] against transient downstream failures and supporting [[Event Driven Architecture]] across heterogeneous processing rates. The pattern underpins [[Microservices Architecture]] integration, [[Data Pipeline]] ingestion, and multi-agent coordination via [[Agent Event Stream]] abstractions, making it one of the most broadly deployed primitives in modern distributed software engineering.

- ### Overview
  - Message queues solve the fundamental mismatch in pace, availability, and location between communicating services.
  - Without a queue, a fast producer must wait for a slow consumer, creating tight temporal coupling that cascades failures and limits throughput.
  - By interposing a durable buffer, the producer can continue at full speed while the consumer processes at its own sustainable rate — a property called [[Backpressure Management]].
  - The broker guarantees that no message is lost even if the consumer is temporarily offline, restarting, or being scaled horizontally.
  - This fundamentally improves [[Horizontal Scalability]] and [[Fault Tolerance]] compared to [[Synchronous Communication]] approaches such as [[Remote Procedure Call]].
  - Message queues predate modern cloud computing, descending from IBM MQ (formerly MQSeries, 1993) and the AMQP protocol (2003), and are now embedded in virtually every large distributed system.

- ### Key Components
  - **Producer** — the application or service that creates and enqueues messages without waiting for a response.
  - **Message Broker** — the [[Message Broker]] server that accepts, stores, routes, and delivers messages; examples include [[Apache Kafka]], [[RabbitMQ]], ActiveMQ, and Amazon SQS.
  - **Queue / Topic** — the logical channel holding messages. Queues use point-to-point semantics (one consumer per message); topics use [[Publish Subscribe Pattern]] semantics (multiple subscriber groups).
  - **Consumer / Subscriber** — the service that reads and processes messages, optionally acknowledging receipt to the broker.
  - **Consumer Group** — a named set of consumers that collectively read a partitioned topic, enabling parallel processing while preserving per-partition ordering (as in [[Apache Kafka]]).
  - **Dead Letter Queue** — a [[Dead Letter Queue]] that captures messages exceeding retry limits, isolating poison messages for inspection without blocking the main flow.
  - **Acknowledgement** — a signal from the consumer confirming successful processing; unacknowledged messages are redelivered according to configured retry policy.
  - **Persistence Layer** — the [[Persistence Layer]] (disk, replicated log, or in-memory store) that retains messages across broker restarts, ranging from WAL-backed logs in Kafka to in-memory-only modes in Redis Streams.
  - **Serialisation** — messages are serialised (JSON, Avro, Protobuf) before enqueuing; [[Serialisation]] format choice affects schema evolution and throughput.

- ### Delivery Semantics
  - Delivery guarantees are a core design axis, with three canonical modes:
    - **At-most-once** — messages may be lost on consumer failure; highest throughput, zero redelivery overhead; appropriate for ephemeral telemetry.
    - **At-least-once** — messages are redelivered until acknowledged; duplicates are possible; consumers must be idempotent; the default in most production systems.
    - **Exactly-once** — achieved via transactional commits (e.g. Kafka transactions, AWS SQS FIFO with deduplication IDs); most costly but prevents double-processing in financial and inventory contexts.
  - The choice of delivery semantic directly shapes consumer design and downstream [[Data Integration]] correctness.

- ### Messaging Patterns
  - **Point-to-point (Queue)** — a message is consumed by exactly one consumer; used for task offloading, job scheduling, and work distribution.
  - **[[Publish Subscribe Pattern]] (Topic/Fan-out)** — a message is delivered to all subscribed consumer groups; used for event notification, cache invalidation, and audit log fanout.
  - **[[Competing Consumers Pattern]]** — multiple consumer instances read from the same queue, achieving [[Load Levelling]] and [[Horizontal Scalability]] without coordination logic.
  - **Priority Queue** — messages carry a priority tag; the broker delivers higher-priority messages first, used in real-time bidding and emergency alerting.
  - **Delayed / Scheduled Queue** — messages are held until a specified time; used for reminder systems, rate-limited retries, and workflow orchestration.
  - **[[Event Sourcing]]** — Kafka's immutable append-only log enables the queue to serve as the system of record, with consumers replaying history to rebuild state.

- ### Applications and Use Cases
  - **Microservices integration** — [[Microservices Architecture]] services communicate via queues to avoid synchronous coupling; order placement, payment processing, and inventory updates flow through separate topics.
  - **Background job processing** — email dispatch, PDF generation, video transcoding, and notification delivery are offloaded to task queues (Celery, Sidekiq, BullMQ) so HTTP responses remain fast.
  - **[[Data Pipeline]] ingestion** — change data capture events, clickstream data, and IoT sensor readings are queued for downstream analytics, ETL, and warehousing.
  - **[[Stream Processing]]** — Kafka Streams, Apache Flink, and Spark Structured Streaming read from queues to compute real-time aggregations, anomaly detection, and ML feature generation.
  - **[[Agent Event Stream]] coordination** — multi-agent AI systems route observations, tool calls, and inter-agent messages through queues, enabling asynchronous, auditable agent workflows.
  - **Log and metrics aggregation** — observability platforms (Elastic, Datadog, OpenTelemetry collectors) use queues to absorb bursty log volumes without dropping data.
  - **Workflow orchestration** — durable workflow engines (Temporal, AWS Step Functions) use queues as the scheduling substrate for long-running, fault-tolerant processes.
  - **Financial transaction processing** — banking systems use queues with exactly-once semantics for payment ledger updates, ensuring correctness under failures.

- ### Notable Implementations
  - **[[Apache Kafka]]** — distributed, partitioned, replicated immutable log; designed for high throughput and long retention; supports [[Event Sourcing]] and [[Stream Processing]] natively.
  - **[[RabbitMQ]]** — AMQP-native broker with flexible routing via exchanges and bindings; strong at complex routing topologies and priority queues.
  - **Amazon SQS** — fully managed [[Cloud Computing]] queue service with standard (best-effort ordering) and FIFO (strict ordering, deduplication) variants; zero-ops.
  - **Azure Service Bus** — enterprise messaging with sessions, transactions, and dead-letter support; integrates with Azure Event Grid for [[Publish Subscribe Pattern]].
  - **Google Cloud Pub/Sub** — global, serverless message bus with push and pull delivery; used for inter-region event fan-out.
  - **Redis Streams** — lightweight append-only log built into Redis; suitable for lower-throughput use cases requiring in-memory speed.
  - **NATS JetStream** — cloud-native, high-performance messaging with optional persistence; popular in Kubernetes-native architectures.
  - **ActiveMQ Artemis** — JMS-compliant broker; widely used in Java enterprise ecosystems and financial services.

- ### Relationships
  - hasPart:: [[Message Broker]]
  - hasPart:: [[Dead Letter Queue]]
  - hasPart:: [[Consumer Group]]
  - requires:: [[Message Broker]]
  - requires:: [[Persistence Layer]]
  - enables:: [[Event Driven Architecture]]
  - enables:: [[Microservices Architecture]]
  - enables:: [[Data Pipeline]]
  - enables:: [[Backpressure Management]]
  - enables:: [[Load Levelling]]
  - uses:: [[Asynchronous Communication]]
  - uses:: [[Publish Subscribe Pattern]]
  - uses:: [[Serialisation]]
  - implements:: [[Producer Consumer Pattern]]
  - implements:: [[Competing Consumers Pattern]]
  - dependsOn:: [[Distributed Systems]]
  - dependsOn:: [[Network Protocol]]
  - supports:: [[Fault Tolerance]]
  - supports:: [[Horizontal Scalability]]
  - supports:: [[Service Decoupling]]
  - contrastsWith:: [[Remote Procedure Call]]
  - contrastsWith:: [[Synchronous Communication]]
  - bridges-to:: [[Agent Event Stream]]
  - bridges-to:: [[Stream Processing]]
  - relatedTo:: [[Apache Kafka]]
  - relatedTo:: [[RabbitMQ]]
  - relatedTo:: [[Cloud Computing]]
  - relatedTo:: [[Event Sourcing]]
  - relatedTo:: [[Data Integration]]

- ### Standards and Context
  - **AMQP 0-9-1 / 1.0** — Advanced Message Queuing Protocol; the primary open wire protocol for [[RabbitMQ]] and Azure Service Bus; defines queue, exchange, and binding semantics.
  - **JMS (Java Message Service)** — Java EE API abstracting queue and topic access; implemented by ActiveMQ, HornetQ, IBM MQ; enables portable Java messaging code.
  - **MQTT** — lightweight publish-subscribe protocol for IoT and constrained devices; used with brokers such as Mosquitto and HiveMQ; overlaps with message queue use cases at the edge.
  - **OpenTelemetry** — defines semantic conventions for messaging spans, enabling distributed tracing across producer→broker→consumer hops.
  - **Cloud Events (CNCF)** — a standardised event envelope format applicable to message payloads, improving interoperability across brokers and cloud providers.
  - **Kafka Improvement Proposals (KIPs)** — the community governance mechanism for evolving the Apache Kafka specification; key KIPs cover transactions (KIP-98), exactly-once semantics, and tiered storage.

- ### Design Considerations
  - **Idempotency** — consumers must handle duplicate delivery gracefully when using at-least-once semantics; common strategies include deduplication keys and idempotent database upserts.
  - **Message ordering** — global ordering across partitions is expensive; Kafka guarantees per-partition ordering; applications that require global ordering must use a single partition or external sequencing.
  - **Schema evolution** — evolving message schemas without breaking consumers requires backward-compatible serialisation (Avro with Schema Registry, Protobuf field addition rules).
  - **Security** — queues should enforce TLS in transit, authentication (mTLS, SASL, IAM), and topic-level authorisation to prevent message injection or eavesdropping.
  - **Monitoring** — key metrics include queue depth (lag), consumer offset lag, throughput (msgs/s), and error/DLQ rates; exposed via JMX, Prometheus exporters, or cloud-native dashboards.
  - **Backpressure** — producers should implement [[Backpressure Management]] when the broker signals high lag, using flow-control APIs or adaptive rate limiting.

- ### Provenance
  - sources:: IBM MQ product history (IBM, 1993); AMQP specification (OASIS, 2012); Apache Kafka documentation (Apache Software Foundation); RabbitMQ documentation (VMware/Broadcom); AWS SQS documentation; "Enterprise Integration Patterns" (Hohpe & Woolf, 2003); CNCF Cloud Events specification.
  - updated:: 2026-06-13
