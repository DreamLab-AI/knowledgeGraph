---
okf_version: "0.2"
type: Class
title: Publish-Subscribe Pattern
resource: urn:ngm:class:publish-subscribe-pattern
domain: infrastructure
description: A messaging design pattern in which message producers (publishers) emit typed events to named topics or channels without direct knowledge of consumers, and message consumers (subscribers) declare interest in specific topics to receive matching events asynchronously. A broker or event bus mediates delivery, fully decoupling senders from receivers in space, time, and control flow. This architectural
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:message-broker
  - urn:ngm:class:event-channel
  - urn:ngm:class:topic
requires:
  - urn:ngm:class:message-broker
  - urn:ngm:class:network-transport
enables:
  - urn:ngm:class:loose-coupling
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:stream-processing
  - urn:ngm:class:reactive-systems
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:message-queue
implements:
  - urn:ngm:class:observer-pattern
contrastsWith:
  - urn:ngm:class:point-to-point-messaging
  - urn:ngm:class:request-reply-pattern
  - urn:ngm:class:polling-pattern
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:serialisation
  - urn:ngm:class:content-based-routing
supports:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:iot-architecture
standardizedBy:
  - urn:ngm:class:mqtt
  - urn:ngm:class:amqp
  - urn:ngm:class:apache-kafka
partOf:
  - urn:ngm:class:event-driven-architecture
relatedTo:
  - urn:ngm:class:software-architecture
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:cqrs
---

# Publish-Subscribe Pattern

A messaging design pattern in which message producers (publishers) emit typed events to named topics or channels without direct knowledge of consumers, and message consumers (subscribers) declare interest in specific topics to receive matching events asynchronously. A broker or event bus mediates delivery, fully decoupling senders from receivers in space, time, and control flow. This architectural separation enables independent scaling, fault isolation, and runtime addition or removal of participants without coordination. Pub/Sub underpins event-driven architectures, stream processing systems, and reactive microservices.
