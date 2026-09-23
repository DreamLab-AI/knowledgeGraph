---
okf_version: "0.2"
type: Class
title: Rabbitmq
resource: urn:ngm:class:rabbitmq
domain: infrastructure
description: RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP) and related messaging standards, routing messages between producers and consumers through exchanges, bindings, and queues. It supports flexible routing topologies, message acknowledgement, durability, and clustering for high availability. RabbitMQ is widely used to decouple services and enable re
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:message-broker
requires:
  - urn:ngm:class:reliability
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:asynchronous-messaging
  - urn:ngm:class:loose-coupling
implements:
  - urn:ngm:class:amqp
contrastsWith:
  - urn:ngm:class:apache-kafka
uses:
  - urn:ngm:class:message-queue
  - urn:ngm:class:routing-protocol
supports:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:message-broker
relatedTo:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:message-passing
---

# Rabbitmq

RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP) and related messaging standards, routing messages between producers and consumers through exchanges, bindings, and queues. It supports flexible routing topologies, message acknowledgement, durability, and clustering for high availability. RabbitMQ is widely used to decouple services and enable reliable asynchronous communication in distributed systems.
