---
okf_version: "0.2"
type: Class
title: Parallel Programming Model
resource: urn:ngm:class:parallel-programming-model
domain: infrastructure
description: "A parallel programming model is an abstraction that defines how a program expresses concurrent computation and how that computation maps onto parallel hardware, covering concerns such as task decomposition, data sharing, and synchronisation. Examples include the SIMT model used by GPU architectures, shared-memory threading, and message-passing between distributed processes. The choice of parallel "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:parallel-computing
---

# Parallel Programming Model

A parallel programming model is an abstraction that defines how a program expresses concurrent computation and how that computation maps onto parallel hardware, covering concerns such as task decomposition, data sharing, and synchronisation. Examples include the SIMT model used by GPU architectures, shared-memory threading, and message-passing between distributed processes. The choice of parallel programming model determines how effectively an application can exploit hardware such as GPUs to accelerate throughput.
