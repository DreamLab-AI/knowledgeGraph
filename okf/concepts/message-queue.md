---
okf_version: "0.2"
type: Class
title: Message Queue
resource: urn:ngm:class:message-queue
domain: infrastructure
description: A Message Queue is a durable, ordered buffer that mediates asynchronous inter-process communication, allowing producers to enqueue messages independently of consumers reading them, thereby decoupling components in both time and topology. Messages are persisted by a broker until a consumer retrieves and acknowledges them, with delivery semantics ranging from at-most-once through at-least-once to ex
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:message-broker
  - urn:ngm:class:consumer-group
  - urn:ngm:class:message-queue
requires:
  - urn:ngm:class:message-broker
  - urn:ngm:class:persistence-layer
enables:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:backpressure-management
  - urn:ngm:class:load-levelling
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:network-protocol
implements:
  - urn:ngm:class:producer-consumer-pattern
  - urn:ngm:class:competing-consumers-pattern
contrastsWith:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:synchronous-communication
bridgesTo:
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:stream-processing
uses:
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:serialisation
supports:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:service-decoupling
relatedTo:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:rabbitmq
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:data-integration
---

# Message Queue

A Message Queue is a durable, ordered buffer that mediates asynchronous inter-process communication, allowing producers to enqueue messages independently of consumers reading them, thereby decoupling components in both time and topology. Messages are persisted by a broker until a consumer retrieves and acknowledges them, with delivery semantics ranging from at-most-once through at-least-once to exactly-once, each trading throughput for reliability. Message queues are foundational to event-driven architectures, microservices integration, and distributed data pipelines, absorbing traffic spikes, enabling backpressure management, and improving system resilience against partial failures. Implementations range from lightweight in-process task queues to enterprise-grade distributed log brokers such as Apache Kafka, RabbitMQ, and Amazon SQS.
