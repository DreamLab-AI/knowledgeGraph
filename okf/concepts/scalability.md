---
okf_version: "0.2"
type: Class
title: Scalability
resource: urn:ngm:class:scalability
domain: infrastructure
description: Scalability is the fundamental system property describing the capacity to handle increasing workloads—in throughput, data volume, concurrency, or geographic reach—by adding resources without proportionate degradation in performance, cost efficiency, or reliability. It encompasses both vertical scaling (augmenting the capacity of existing nodes) and horizontal scaling (adding more nodes to a distri
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:data-partitioning
  - urn:ngm:class:load-balancing
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:vertical-scaling
requires:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:data-partitioning
  - urn:ngm:class:stateless-architecture
enables:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:elastic-computing
  - urn:ngm:class:global-deployments
dependsOn:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:network-infrastructure
contrastsWith:
  - urn:ngm:class:monolithic-architecture
  - urn:ngm:class:vertical-integration
bridgesTo:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:ai-model-scaling
uses:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:kubernetes
  - urn:ngm:class:consistent-hashing
  - urn:ngm:class:caching
  - urn:ngm:class:message-queuing
supports:
  - urn:ngm:class:cloud-native-architecture
  - urn:ngm:class:edge-computing
  - urn:ngm:class:ai-inference
relatedTo:
  - urn:ngm:class:scalability-pattern
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:resilience
  - urn:ngm:class:distributed-architecture
  - urn:ngm:class:availability
---

# Scalability

Scalability is the fundamental system property describing the capacity to handle increasing workloads—in throughput, data volume, concurrency, or geographic reach—by adding resources without proportionate degradation in performance, cost efficiency, or reliability. It encompasses both vertical scaling (augmenting the capacity of existing nodes) and horizontal scaling (adding more nodes to a distributed cluster), each with distinct architectural implications governed by coordination overhead, data partitioning strategies, and consistency trade-offs. In distributed systems, achieving linear or near-linear scalability requires careful attention to the CAP theorem and its practical refinement, PACELC, which explicitly models the latency–consistency tension even in partition-free conditions. Scalability is a first-order design concern in cloud-native architectures, blockchain networks, edge computing platforms, and AI inference pipelines serving large or rapidly growing user populations.
