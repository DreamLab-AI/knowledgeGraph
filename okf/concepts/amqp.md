---
okf_version: "0.2"
type: Class
title: AMQP
resource: urn:ngm:class:amqp
domain: infrastructure
description: AMQP (Advanced Message Queuing Protocol) is an open, binary application-layer protocol for message-oriented middleware that defines wire-level framing, message routing and reliable delivery between brokers and clients regardless of vendor or platform. It models messaging through exchanges, queues and bindings that decouple producers from consumers and support routing patterns including direct, top
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:api-gateway
implements:
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:asynchronous-communication
contrastsWith:
  - urn:ngm:class:mqtt
bridgesTo:
  - urn:ngm:class:event-sourcing
uses:
  - urn:ngm:class:message-queue
  - urn:ngm:class:message-broker
supports:
  - urn:ngm:class:network-protocol
standardizedBy:
  - urn:ngm:class:oasis
partOf:
  - urn:ngm:class:middleware
relatedTo:
  - urn:ngm:class:cloud-computing
---

# AMQP

AMQP (Advanced Message Queuing Protocol) is an open, binary application-layer protocol for message-oriented middleware that defines wire-level framing, message routing and reliable delivery between brokers and clients regardless of vendor or platform. It models messaging through exchanges, queues and bindings that decouple producers from consumers and support routing patterns including direct, topic, fanout and headers exchanges. AMQP 1.0 is standardised by OASIS and ISO/IEC 19464, while the earlier AMQP 0-9-1 specification remains widely deployed in broker implementations.
