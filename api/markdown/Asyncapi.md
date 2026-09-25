AsyncAPI is an open specification for describing event-driven and message-based APIs in a machine-readable document, analogous to how OpenAPI describes request-response REST APIs. It defines channels, messages, payloads and the protocols and brokers used to exchange them, enabling documentation, code generation, validation and tooling for asynchronous systems. AsyncAPI standardises contracts for publish-subscribe and streaming architectures.

### Overview

- Where OpenAPI documents synchronous REST endpoints, AsyncAPI documents the asynchronous interactions of publish-subscribe, streaming and queue-based systems.
- An AsyncAPI document declares channels (topics or queues), the messages that flow over them, their payload schemas, and the servers and protocols (such as Kafka, MQTT or AMQP) that carry them.
- From this single contract, tooling can generate documentation, client and server stubs, and validation, reducing integration drift between producers and consumers.
- AsyncAPI brings the design-first discipline of REST API tooling to the event-driven world, improving discoverability and governance of message contracts.

### Key aspects

- Channels and operations describing where and how messages are exchanged.
- Message and payload definitions reusing JSON Schema.
- Protocol and server bindings for brokers and transports.
- Tooling for documentation, code generation and validation.
- Versioning and reuse via components and references.

### Applications

- Documenting Kafka and message-queue topologies.
- Generating producer and consumer stubs from a shared contract.
- Validating event payloads against declared schemas.
- Governing microservice event interfaces.

### Provenance

