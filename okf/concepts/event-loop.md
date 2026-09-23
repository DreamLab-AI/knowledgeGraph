---
okf_version: "0.2"
type: Class
title: Event Loop
resource: urn:ngm:class:event-loop
domain: infrastructure
description: An event loop is a programming construct that waits for and dispatches events or messages within a single-threaded execution model, repeatedly polling a queue of pending tasks and invoking their associated handlers. It is the engine of asynchronous, non-blocking programming, allowing a program to perform I/O and respond to many concurrent events without spawning a thread per operation. Event loops
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:concurrency
  - urn:ngm:class:execution-model
hasPart:
  - urn:ngm:class:message-queue
requires:
  - urn:ngm:class:runtime-environment
enables:
  - urn:ngm:class:asynchronous-programming
implements:
  - urn:ngm:class:concurrency
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:message-queue
supports:
  - urn:ngm:class:asynchronous-programming
partOf:
  - urn:ngm:class:concurrency
  - urn:ngm:class:runtime-environment
relatedTo:
  - urn:ngm:class:asynchronous-programming
  - urn:ngm:class:runtime-environment
---

# Event Loop

An event loop is a programming construct that waits for and dispatches events or messages within a single-threaded execution model, repeatedly polling a queue of pending tasks and invoking their associated handlers. It is the engine of asynchronous, non-blocking programming, allowing a program to perform I/O and respond to many concurrent events without spawning a thread per operation. Event loops underpin runtime environments, user-interface frameworks, and high-concurrency network servers.
