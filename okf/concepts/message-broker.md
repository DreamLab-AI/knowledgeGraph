---
okf_version: "0.2"
type: Class
title: Message Broker
resource: urn:ngm:class:message-broker
domain: infrastructure
description: A message broker is an intermediary software component that translates messages between disparate messaging protocols and routes them between producers and consumers, decoupling the two sides of a communication so that neither needs direct knowledge of the other. It typically provides guaranteed delivery, message queuing, routing rules, protocol translation, and persistence semantics.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:middleware
hasPart:
  - urn:ngm:class:message-queue
requires:
  - urn:ngm:class:persistent-storage
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:event-streaming
  - urn:ngm:class:asynchronous-messaging
  - urn:ngm:class:loose-coupling
  - urn:ngm:class:microservices-architecture
contrastsWith:
  - urn:ngm:class:enterprise-service-bus
  - urn:ngm:class:remote-procedure-call
bridgesTo:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:iot-platform
uses:
  - urn:ngm:class:message-queue
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:amqp
  - urn:ngm:class:mqtt
standardizedBy:
  - urn:ngm:class:amqp
relatedTo:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:rabbitmq
  - urn:ngm:class:apache-pulsar
  - urn:ngm:class:event-sourcing
---

# Message Broker

A message broker is an intermediary software component that translates messages between disparate messaging protocols and routes them between producers and consumers, decoupling the two sides of a communication so that neither needs direct knowledge of the other. It typically provides guaranteed delivery, message queuing, routing rules, protocol translation, and persistence semantics.
