---
okf_version: "0.2"
type: Class
title: Actor Model
resource: urn:ngm:class:actor-model
domain: infrastructure
description: The actor model is a mathematical model of concurrent computation in which the universal primitive is the actor, an independent entity that has private state and communicates only by sending asynchronous messages. In response to a message an actor can update its state, send messages to other actors and create new actors. Because actors share nothing and process one message at a time, the model avo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:concurrency
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:concurrency-model
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-computing
implements:
  - urn:ngm:class:message-passing
  - urn:ngm:class:asynchronous-messaging
contrastsWith:
  - urn:ngm:class:shared-nothing-architecture
uses:
  - urn:ngm:class:message-passing
  - urn:ngm:class:event-driven-architecture
supports:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:load-balancing
relatedTo:
  - urn:ngm:class:reactive-systems
  - urn:ngm:class:flow-control
  - urn:ngm:class:distributed-system
---

# Actor Model

The actor model is a mathematical model of concurrent computation in which the universal primitive is the actor, an independent entity that has private state and communicates only by sending asynchronous messages. In response to a message an actor can update its state, send messages to other actors and create new actors. Because actors share nothing and process one message at a time, the model avoids shared-memory data races and provides a foundation for scalable, fault-tolerant distributed systems.
