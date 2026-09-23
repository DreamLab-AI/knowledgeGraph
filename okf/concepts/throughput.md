---
okf_version: "0.2"
type: Class
title: Throughput
resource: urn:ngm:class:throughput
domain: machine-learning
description: "Throughput is the rate at which a system completes useful work over a unit of time, such as requests served per second, tokens generated per second or bytes transferred per second. It measures sustained productive capacity rather than the time to complete a single operation. In machine learning serving it captures how many inferences or training samples a system can process under load. Maximising "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:request-rate
  - urn:ngm:class:batch-size
requires:
  - urn:ngm:class:parallel-processing
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:resource-utilization
contrastsWith:
  - urn:ngm:class:latency
  - urn:ngm:class:response-time
uses:
  - urn:ngm:class:batching
  - urn:ngm:class:load-balancing
supports:
  - urn:ngm:class:model-serving
  - urn:ngm:class:performance-optimization
relatedTo:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:benchmarking
---

# Throughput

Throughput is the rate at which a system completes useful work over a unit of time, such as requests served per second, tokens generated per second or bytes transferred per second. It measures sustained productive capacity rather than the time to complete a single operation. In machine learning serving it captures how many inferences or training samples a system can process under load. Maximising throughput typically involves batching, parallelism and resource utilisation, often trading off against per-request latency.
