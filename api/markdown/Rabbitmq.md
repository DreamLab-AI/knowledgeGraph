
RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP) and related messaging standards, routing messages between producers and consumers through exchanges, bindings, and queues. It supports flexible routing topologies, message acknowledgement, durability, and clustering for high availability. RabbitMQ is widely used to decouple services and enable reliable asynchronous communication in distributed systems.

- ### Overview
  - RabbitMQ is a broker-centric messaging system in which producers publish messages to exchanges, and exchanges route them to queues according to bindings and routing keys. Consumers then read from queues, optionally acknowledging delivery so the broker can guarantee at-least-once semantics.
  - Its flexible exchange types (direct, topic, fanout, headers) make it well suited to complex routing, work distribution, and request-reply patterns, distinguishing it from log-centric systems such as [[Apache Kafka]].
- ### Key aspects
  - Exchanges, bindings, routing keys, and queues as the core routing model.
  - Acknowledgements, redelivery, and dead-letter queues for reliability.
  - Durable queues and persistent messages for crash recovery.
  - Clustering, mirrored/quorum queues, and federation for [[Fault Tolerance]].
  - Plugins, management UI, and multi-protocol support (AMQP, MQTT, STOMP).
- ### Mechanisms
  - Publisher confirms and consumer acknowledgements for delivery guarantees.
  - Prefetch and flow control to balance consumer load.
  - Quorum queues using a consensus protocol for replicated durability.
  - Topic-based routing for selective message fan-out.
- ### Applications
  - Decoupling [[Microservices]] with reliable task queues.
  - Background job processing and work distribution.
  - Event distribution in [[Event Driven Architecture]].
  - Integration buses for heterogeneous enterprise systems.
- ### Provenance

