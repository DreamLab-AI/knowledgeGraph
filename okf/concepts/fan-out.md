---
okf_version: "0.2"
type: Class
title: Fan-Out
resource: urn:ngm:class:fan-out
domain: distributed-systems
description: A concurrency and orchestration pattern in which a single request or task is split into many independent sub-tasks that are dispatched simultaneously to multiple workers, agents, or services, then optionally recombined by a downstream fan-in step. Fan-out trades higher aggregate resource consumption for reduced wall-clock latency and throughput, and is the structural basis for parallel sub-agent e
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:design-pattern
  - urn:ngm:class:designpattern
enables:
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:multiagentorchestration
uses:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:distributedcomputing
relatedTo:
  - urn:ngm:class:task-delegation
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:taskdelegation
  - urn:ngm:class:dataparallelism
---

# Fan-Out

A concurrency and orchestration pattern in which a single request or task is split into many independent sub-tasks that are dispatched simultaneously to multiple workers, agents, or services, then optionally recombined by a downstream fan-in step. Fan-out trades higher aggregate resource consumption for reduced wall-clock latency and throughput, and is the structural basis for parallel sub-agent execution, scatter-gather search, and map-style batch processing in agent systems.
