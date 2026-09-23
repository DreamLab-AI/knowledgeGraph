---
okf_version: "0.2"
type: Class
title: Distributed Communication
resource: urn:ngm:class:distributed-communication
domain: infrastructure
description: Distributed communication is the exchange of messages between processes running on separate machines across a network, forming the substrate of distributed systems. It encompasses paradigms such as remote procedure calls, message queues, publish-subscribe, and streaming, each managing serialisation, addressing, ordering, and failure handling. Middleware abstracts these mechanics so application com
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:middleware
  - urn:ngm:class:infra-network-and-comms
---

# Distributed Communication

Distributed communication is the exchange of messages between processes running on separate machines across a network, forming the substrate of distributed systems. It encompasses paradigms such as remote procedure calls, message queues, publish-subscribe, and streaming, each managing serialisation, addressing, ordering, and failure handling. Middleware abstracts these mechanics so application components can interact reliably despite network partitions and latency.
