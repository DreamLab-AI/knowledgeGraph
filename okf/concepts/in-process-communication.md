---
okf_version: "0.2"
type: Class
title: In-Process Communication
resource: urn:ngm:class:in-process-communication
domain: distributed-systems
description: "In-process communication is the exchange of data and control between software components running inside a single operating-system process: direct function and method calls, shared objects on the heap, and in-memory events. Because callers and callees share one address space, invocation costs nanoseconds, arguments pass by reference without serialisation, and failures are shared — the defining comm"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:software-architecture
contrastsWith:
  - urn:ngm:class:inter-process-communication
  - urn:ngm:class:remote-procedure-call
uses:
  - urn:ngm:class:shared-memory
partOf:
  - urn:ngm:class:monolithic-architecture
relatedTo:
  - urn:ngm:class:message-passing
  - urn:ngm:class:concurrency
---

# In-Process Communication

In-process communication is the exchange of data and control between software components running inside a single operating-system process: direct function and method calls, shared objects on the heap, and in-memory events. Because callers and callees share one address space, invocation costs nanoseconds, arguments pass by reference without serialisation, and failures are shared — the defining communication style of monolithic architectures, and the deliberate opposite of inter-process communication, which crosses process boundaries via sockets, pipes, or messaging at the price of serialisation, latency, and partial-failure semantics.
