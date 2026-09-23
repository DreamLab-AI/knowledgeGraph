---
okf_version: "0.2"
type: Class
title: Inter Process Communication
resource: urn:ngm:class:inter-process-communication
domain: infrastructure
description: Inter-process communication (IPC) is the set of mechanisms an operating system provides for separate processes to exchange data and coordinate their actions despite running in isolated address spaces. Common mechanisms include pipes, message queues, shared memory, sockets and remote procedure calls, each trading off speed, structure and scope. IPC is foundational to modular system design, microser
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:operating-system
requires:
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:middleware
dependsOn:
  - urn:ngm:class:operating-system
  - urn:ngm:class:scheduler
implements:
  - urn:ngm:class:message-passing
contrastsWith:
  - urn:ngm:class:multithreading
uses:
  - urn:ngm:class:shared-memory
  - urn:ngm:class:remote-procedure-call
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:distributed-systems
partOf:
  - urn:ngm:class:operating-system
relatedTo:
  - urn:ngm:class:message-passing
  - urn:ngm:class:shared-memory
  - urn:ngm:class:process
---

# Inter Process Communication

Inter-process communication (IPC) is the set of mechanisms an operating system provides for separate processes to exchange data and coordinate their actions despite running in isolated address spaces. Common mechanisms include pipes, message queues, shared memory, sockets and remote procedure calls, each trading off speed, structure and scope. IPC is foundational to modular system design, microservices and any architecture composed of cooperating processes.
