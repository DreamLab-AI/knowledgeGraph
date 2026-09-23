---
okf_version: "0.2"
type: Class
title: Asynchronous Messaging
resource: urn:ngm:class:asynchronous-messaging
domain: infrastructure
description: Asynchronous Messaging is a communication pattern in which a sender dispatches a message to an intermediary and continues processing without waiting for the receiver to respond. Messages are buffered in queues or brokers and consumed when downstream services are ready, decoupling producers from consumers in time and load. This pattern improves resilience, scalability and fault tolerance in distrib
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:message-queue
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:resilience
  - urn:ngm:class:fault-tolerance
implements:
  - urn:ngm:class:rabbitmq
  - urn:ngm:class:apache-kafka
contrastsWith:
  - urn:ngm:class:synchronous-communication
uses:
  - urn:ngm:class:message-queue
  - urn:ngm:class:message-broker
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:webhook
standardizedBy:
  - urn:ngm:class:amqp
partOf:
  - urn:ngm:class:event-driven-architecture
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:rest-api
---

# Asynchronous Messaging

Asynchronous Messaging is a communication pattern in which a sender dispatches a message to an intermediary and continues processing without waiting for the receiver to respond. Messages are buffered in queues or brokers and consumed when downstream services are ready, decoupling producers from consumers in time and load. This pattern improves resilience, scalability and fault tolerance in distributed and event-driven architectures.
