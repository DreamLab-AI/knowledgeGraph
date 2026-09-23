---
okf_version: "0.2"
type: Class
title: Message Passing
resource: urn:ngm:class:message-passing
domain: distributed-systems
description: Message passing is a foundational communication paradigm in which processes, objects, or distributed agents interact exclusively by sending and receiving discrete, self-contained messages rather than accessing shared memory. It underlies actor-model concurrency, microservice architectures, and distributed AI agent frameworks, providing loose coupling, location transparency, and inherent support fo
maturity: mature
quality: 0.73
is-a:
  - urn:ngm:class:communication-protocol
hasPart:
  - urn:ngm:class:message-queue
  - urn:ngm:class:message-broker
  - urn:ngm:class:message-channel
requires:
  - urn:ngm:class:serialisation
  - urn:ngm:class:network-transport
enables:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:actor-model
  - urn:ngm:class:microservices
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:shared-memory
  - urn:ngm:class:remote-procedure-call
bridgesTo:
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:model-context-protocol
uses:
  - urn:ngm:class:middleware
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:publish-subscribe-pattern
supports:
  - urn:ngm:class:distributed-architecture
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:concurrency
relatedTo:
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:process-calculus
---

# Message Passing

Message passing is a foundational communication paradigm in which processes, objects, or distributed agents interact exclusively by sending and receiving discrete, self-contained messages rather than accessing shared memory. It underlies actor-model concurrency, microservice architectures, and distributed AI agent frameworks, providing loose coupling, location transparency, and inherent support for asynchronous execution. Messages may traverse in-process channels, persistent message queues, or wide-area network transports, and may be delivered synchronously (blocking until acknowledgement) or asynchronously (fire-and-forget). Formal semantics are studied through process calculi such as the pi-calculus and CSP, and the paradigm has grown from Hewitt's 1973 Actor Model into the backbone of modern cloud-native and multi-agent AI systems.
