- ### Definition
  - [[Message Passing]] is a foundational communication paradigm in which processes, objects, or distributed agents interact exclusively by sending and receiving discrete, self-contained messages rather than accessing [[Shared Memory]]. It provides loose coupling, location transparency, and inherent support for [[Asynchronous Communication]], and is the backbone of [[Actor Model]] concurrency, [[Microservices]] architectures, [[Event Driven Architecture]], and modern [[Multi-Agent System]] coordination. Formal semantics are captured in [[Process Calculus]] frameworks such as the pi-calculus and CSP.

- ### Overview
  - Message passing decouples the sender from the receiver: neither party needs to know the other's memory address, runtime state, or physical location. The sender constructs a message — a structured data unit containing a payload and routing metadata — and dispatches it to a named destination such as a mailbox, topic, queue, or channel. The receiver dequeues and processes the message independently.
  - This independence is the paradigm's defining advantage. Processes can be scaled, restarted, or migrated without modifying their peers, because the only coupling point is the agreed message schema. [[Fault Tolerance]] emerges naturally: a crashed receiver does not corrupt the sender's state, and persistent [[Message Queue]] infrastructure can retain messages until the receiver recovers.
  - Message passing supports two fundamental delivery modes:
    - **Synchronous (blocking)**: the sender suspends until the receiver acknowledges receipt or returns a reply, as in [[Remote Procedure Call]] semantics.
    - **Asynchronous (non-blocking)**: the sender dispatches the message and continues immediately, decoupling timing entirely. This is the canonical form in [[Actor Model]] systems and high-throughput pipelines.
  - The paradigm traces its formal origins to Carl Hewitt's Actor Model (1973), which stipulated that actors communicate exclusively via asynchronous messages and hold no shared mutable state. Erlang's BEAM runtime operationalised this model in the 1980s for telecoms, achieving nine-nines availability through isolated, message-passing processes.

- ### Key Mechanisms
  - **Point-to-Point Queuing**: messages are sent to a named queue and consumed by exactly one receiver. Used in task distribution, job scheduling, and command dispatching.
  - **[[Publish Subscribe]]**: senders (publishers) emit messages to a topic; multiple subscribers receive copies independently. Scales read fanout without coupling producers to consumers.
  - **[[Remote Procedure Call]] over messaging**: request-reply patterns impose RPC semantics on asynchronous primitives — the sender attaches a correlation ID and waits for a reply message on a callback address.
  - **Streaming**: ordered, persistent logs (as in [[Apache Kafka]]) allow consumers to replay messages from any offset, enabling event sourcing, audit trails, and temporal decoupling.
  - **In-Process Channels**: lightweight message passing within a single process or runtime (Go channels, Erlang mailboxes, Rust MPSC channels) avoids [[Network Transport]] overhead while preserving the same conceptual model.
  - **[[Serialisation]]**: messages must be encoded for transport across process or machine boundaries. Common formats include JSON, [[Protocol Buffer]] (protobuf), Avro, and MessagePack, each trading compactness, schema evolution, and human-readability differently.

- ### Architectural Roles
  - **[[Message Broker]]**: a dedicated intermediary (RabbitMQ, ActiveMQ, NATS) that accepts, routes, and delivers messages, handling persistence, acknowledgement, and dead-letter queuing.
  - **[[Middleware]]**: broader integration middleware (ESBs, service meshes) wraps message passing with transformation, routing rules, and protocol translation.
  - **[[Message Channel]]**: the logical conduit — a queue, topic, or exchange — through which messages flow between endpoints.
  - **[[Message Queue]]**: the persistent or in-memory buffer that holds messages until a consumer is ready to process them, absorbing load spikes and enabling backpressure.

- ### Applications and Use Cases
  - **[[Microservices]]**: services communicate exclusively via messages (events or commands), enabling independent deployment, technology heterogeneity, and horizontal scaling. Saga patterns use message passing to coordinate distributed transactions.
  - **[[Distributed Computing]] and Cloud Native**: serverless functions, container workloads, and data pipelines are stitched together through message buses (Amazon SQS/SNS, Google Pub/Sub, Azure Service Bus).
  - **[[Multi-Agent System]] and AI Orchestration**: agent frameworks such as AutoGen, CrewAI, and LangGraph route tool calls, observations, and inter-agent instructions through structured message buses. The [[Model Context Protocol]] standardises JSON-RPC message exchange between AI assistants and tool servers.
  - **[[Actor Model]] Runtimes**: Akka (JVM), Orleans (.NET), and Erlang/OTP implement the actor model, with each actor processing messages from its own mailbox sequentially, eliminating concurrency races.
  - **Real-Time Systems**: financial trading platforms and control systems use low-latency message passing (LMAX Disruptor, AERON) to achieve microsecond inter-component communication.
  - **[[Event Driven Architecture]]**: domain events are broadcast as messages, allowing downstream services to react asynchronously, enabling CQRS, event sourcing, and eventual consistency.
  - **Internet of Things (IoT)**: MQTT, AMQP, and CoAP carry sensor readings and commands across constrained networks using lightweight publish-subscribe message passing.
  - **Operating Systems**: POSIX pipes, Unix sockets, Windows Message Queue (MSMQ), and microkernel IPC (Mach, L4) implement message passing at the OS level for inter-process communication.

- ### Formal Foundations
  - **[[Process Calculus]]**: the pi-calculus, CSP (Communicating Sequential Processes), and CCS provide algebraic frameworks for reasoning about message-passing systems — compositionality, deadlock freedom, and bisimulation equivalence.
  - **Actor Model**: Hewitt's formalism defines a universe of actors, each with a unique address and a behaviour function over received messages, capable of creating new actors, sending messages, and updating local state.
  - **Session Types**: a type-theoretic approach that statically verifies communication protocols — ensuring that the sequence of message sends and receives between participants is well-formed and deadlock-free.
  - **Linearisability and Causal Consistency**: distributed message-passing systems must reconcile ordering guarantees with availability; vector clocks, logical timestamps, and causal broadcast protocols address this.

- ### Relationships
  - hasPart:: [[Message Queue]]
  - hasPart:: [[Message Broker]]
  - hasPart:: [[Message Channel]]
  - requires:: [[Serialisation]]
  - requires:: [[Network Transport]]
  - enables:: [[Distributed Computing]]
  - enables:: [[Actor Model]]
  - enables:: [[Microservices]]
  - enables:: [[Event Driven Architecture]]
  - enables:: [[Fault Tolerance]]
  - uses:: [[Middleware]]
  - uses:: [[Publish Subscribe]]
  - uses:: [[Remote Procedure Call]]
  - supports:: [[Distributed Architecture]]
  - supports:: [[Asynchronous Communication]]
  - supports:: [[Concurrency]]
  - contrastsWith:: [[Shared Memory]]
  - bridges-to:: [[Inter-Agent Communication]]
  - bridges-to:: [[Multi-Agent System]]
  - bridges-to:: [[Model Context Protocol]]
  - relatedTo:: [[Process Calculus]]
  - relatedTo:: [[Protocol Buffer]]
  - relatedTo:: [[Apache Kafka]]

- ### Standards and Context
  - **AMQP (Advanced Message Queuing Protocol)**: ISO/IEC 19464 open standard for message-oriented middleware interoperability, implemented by RabbitMQ, Azure Service Bus, and ActiveMQ.
  - **MQTT (Message Queuing Telemetry Transport)**: OASIS standard (ISO/IEC 20922) for lightweight publish-subscribe messaging over constrained networks, canonical in IoT.
  - **Apache Kafka**: de facto standard for high-throughput distributed event streaming; the Kafka Protocol governs client-broker message exchange.
  - **OpenTelemetry**: propagates trace context across message-passing boundaries, enabling end-to-end distributed tracing of message flows.
  - **[[Model Context Protocol]]**: Anthropic's JSON-RPC 2.0-based open standard (2024) for message exchange between AI assistants and external tool servers, extending message passing into the AI toolchain.
  - **W3C Activity Streams / ActivityPub**: message formats and federation protocol for social and collaborative applications built on message passing.

- ### Design Considerations and Trade-offs
  - **Ordering guarantees**: strictly ordered delivery (FIFO per partition in Kafka) conflicts with high availability; systems must choose their consistency model deliberately.
  - **Idempotency**: at-least-once delivery (common in durable brokers) requires receivers to handle duplicate messages safely; idempotent message handlers or deduplication keys address this.
  - **Schema evolution**: message schemas must evolve without breaking existing producers or consumers; forward/backward compatibility in [[Protocol Buffer]] or Avro schema registries is essential.
  - **Backpressure**: fast producers must not overwhelm slow consumers; bounded queues, rate limiting, and reactive streams protocols (Reactive Streams JVM specification) propagate backpressure upstream.
  - **Observability**: message flows are harder to trace than synchronous call stacks; distributed tracing (OpenTelemetry), message-level logging, and dead-letter queue monitoring are operational necessities.
  - **Latency vs throughput**: batching messages increases throughput but raises latency; tuning batch size, linger time, and acknowledgement mode is system-specific.

- ### Provenance
  - sources:: Hewitt, Bishop & Steiger (1973) IJCAI Actor Model paper; Erlang/OTP design principles; AMQP 1.0 ISO/IEC 19464; MQTT 5.0 OASIS standard; Apache Kafka documentation; Model Context Protocol specification (Anthropic, 2024); Hohpe & Woolf "Enterprise Integration Patterns" (2003)
  - updated:: 2026-06-13