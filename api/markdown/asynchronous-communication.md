- ### Definition
  - Asynchronous communication is a messaging paradigm in which senders and receivers operate independently in time, with messages stored in a [[Message Queue]] or [[Message Broker]] until the consumer is ready to process them. The sender resumes immediately after dispatch, never blocking for a reply, which decouples the lifecycles of producer and consumer components. This contrasts with [[Synchronous Communication]] and [[Remote Procedure Call]] patterns where the caller must block until the callee responds. The technique is a cornerstone of [[Event Driven Architecture]], [[Stream Processing]], and resilient [[Cloud Native Architecture]].

- ### Overview
  - **What it is**: A communication model in which the passage of a message does not require simultaneous availability of sender and receiver. Messages are mediated by an intermediary — a queue, topic, log, or channel — that absorbs timing differences.
  - **Why it matters**: Eliminates temporal coupling, one of the most pervasive sources of fragility in distributed systems. If a downstream service is temporarily unavailable, messages accumulate rather than causing cascading failures, enabling [[Fault Tolerance]] and graceful degradation.
  - **How it works**:
    - A producer publishes a message to a durable intermediary (e.g. a [[Message Queue]] or log topic).
    - The intermediary persists the message, applying [[Message Durability]] semantics (at-most-once, at-least-once, exactly-once).
    - One or more consumers poll or subscribe, receiving messages at their own pace.
    - [[Backpressure]] mechanisms allow slow consumers to signal overload without blocking producers.
    - [[Delivery Guarantees]] specify the failure semantics when consumers crash mid-processing.
  - **Spectrum of asynchrony**: fully fire-and-forget, request with deferred callback, event notification, durable log replay, and [[Reactive Programming]] streams all represent points on this spectrum.

- ### Key Mechanisms
  - **[[Message Queue]]** — point-to-point channel with a single consumer group; guarantees ordered, exactly-once delivery within a partition (e.g. RabbitMQ, AWS SQS).
  - **[[Message Broker]]** — intermediary that routes, filters, and transforms messages between producers and consumers; often supports both queues and topics.
  - **[[Publish Subscribe Pattern]]** — fan-out model where one message is delivered to multiple independent subscribers, enabling loose coupling across services.
  - **Event logs and [[Stream Processing]]** — durable, ordered, replayable logs (e.g. Apache Kafka, AWS Kinesis) allow consumers to re-read historical events and enable time-travel debugging.
  - **[[Backpressure]]** — flow-control mechanism by which consumers signal capacity constraints upstream, preventing memory exhaustion and processing overload.
  - **[[Delivery Guarantees]]** — at-most-once (no duplicates, possible loss), at-least-once (no loss, possible duplicates), or exactly-once (strongest, highest overhead) semantics negotiated between broker and consumer.
  - **Dead-letter queues** — hold messages that cannot be delivered or processed, enabling observability and manual intervention without blocking the main flow.
  - **[[Protocol Buffers]] / serialisation formats** — binary serialisation (Protobuf, Avro, MessagePack) reduces message size and parse cost versus JSON in high-throughput scenarios.

- ### Applications and Use Cases
  - **Microservices integration** — [[Microservices Architecture]] teams decompose monoliths into services that communicate exclusively via asynchronous messages, avoiding direct inter-service HTTP calls and reducing blast radius of failures.
  - **Order processing and e-commerce** — payment, inventory, fulfilment, and notification services operate independently; a submitted order enqueues work items that each service processes at its own pace, ensuring no customer transaction is lost.
  - **IoT and [[Edge Computing]]** — sensors and actuators publish telemetry over [[MQTT]] to brokers; cloud consumers ingest, aggregate, and act on data without requiring always-on connectivity from devices.
  - **[[AI Infrastructure]] and ML pipelines** — data ingestion, feature engineering, model training jobs, and inference serving are chained as asynchronous tasks, enabling [[Parallel Processing]] of large datasets without blocking orchestrators.
  - **[[Federated Learning]]** — parameter updates from distributed edge nodes are aggregated asynchronously, tolerating variable node availability and network latency without halting global model convergence.
  - **[[Multi-Agent Systems]]** — autonomous agents coordinate via message-passing channels, allowing independent action cycles without synchronisation barriers, critical for real-time simulation and [[Distributed Collaboration]].
  - **Notification and alerting systems** — push notifications, email dispatches, and webhook deliveries are queued and retried independently of the user-facing request, improving UI responsiveness.
  - **Audit and event sourcing** — immutable event logs support compliance, debugging, and state reconstruction by replaying sequences of past events in order.

- ### Relationships
  - enables:: [[Asynchronous Execution]], [[Microservices Architecture]], [[Event Driven Architecture]], [[Stream Processing]], [[Distributed Collaboration]]
  - uses:: [[Message Queue]], [[Message Broker]], [[Publish Subscribe Pattern]], [[Protocol Buffers]]
  - supports:: [[Parallel Processing]], [[Edge Computing]], [[Fault Tolerance]], [[Backpressure]]
  - requires:: [[Message Durability]], [[Delivery Guarantees]]
  - contrastsWith:: [[Synchronous Communication]], [[Remote Procedure Call]]
  - relatedTo:: [[AI Infrastructure]], [[Cloud Native Architecture]], [[Eventual Consistency]], [[Reactive Programming]]
  - bridges-to:: [[Federated Learning]], [[Multi-Agent Systems]]
  - standardizedBy:: [[AMQP]], [[MQTT]]

- ### Standards and Context
  - **[[AMQP]]** (Advanced Message Queuing Protocol) — OASIS open standard defining wire-level protocol for message brokers; implemented by RabbitMQ, Azure Service Bus, and ActiveMQ.
  - **[[MQTT]]** (Message Queuing Telemetry Transport) — OASIS/ISO standard (ISO/IEC 20922) optimised for constrained devices and low-bandwidth networks; the de facto IoT messaging protocol.
  - **STOMP** (Simple Text Oriented Messaging Protocol) — text-based protocol for message brokers, accessible from any language with a socket library.
  - **Apache Kafka** — distributed event log, effectively a de facto standard for high-throughput stream ingestion and [[Eventual Consistency]] across large-scale distributed systems.
  - **CloudEvents** — CNCF specification for a common event envelope format, promoting interoperability between asynchronous event producers and consumers across cloud providers.
  - **Reactive Streams / Flow API** — JVM specification (adopted into Java 9 `java.util.concurrent.Flow`) standardising asynchronous stream processing with [[Backpressure]] across libraries.
  - **OpenTelemetry** — vendor-neutral observability standard enabling tracing of asynchronous message flows across service boundaries using propagated trace context in message headers.
  - **CNCF Landscape** — categorises asynchronous messaging under the Runtime layer of the cloud-native landscape, alongside service meshes and scheduling.

- ### Design Considerations and Trade-offs
  - **Eventual consistency** — because systems process messages at different rates, the global state is only [[Eventual Consistency|eventually consistent]]; designers must handle read-your-writes anomalies carefully.
  - **Ordering guarantees** — strict global ordering is expensive; partitioned topics provide per-partition ordering, which is often sufficient if messages are partitioned by entity key.
  - **Idempotency** — at-least-once delivery requires consumers to handle duplicate messages gracefully; idempotency keys or deduplication caches are standard mitigations.
  - **Observability gaps** — call stacks do not cross message boundaries, so distributed tracing (OpenTelemetry) and correlation IDs must be embedded in message headers explicitly.
  - **Schema evolution** — producers and consumers evolve independently, requiring backward/forward-compatible schema management (Avro schema registry, Protobuf field rules).
  - **Latency vs throughput** — batching increases throughput but adds latency; tuning batch size, linger time, and flush intervals requires careful profiling per workload.
  - **Security** — message payloads in transit must be encrypted (TLS at the transport layer); at-rest encryption and fine-grained ACLs are essential for sensitive workloads.

- ### Provenance
  - sources:: AMQP 1.0 OASIS Standard; MQTT 5.0 OASIS Standard; Apache Kafka Documentation; CNCF Cloud Native Landscape; Reactive Streams Specification; Enterprise Integration Patterns (Hohpe & Woolf, 2003)
  - updated:: 2026-06-13