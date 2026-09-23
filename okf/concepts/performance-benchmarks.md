---
okf_version: "0.2"
type: Class
title: Performance Benchmarks
resource: urn:ngm:class:performance-benchmarks
domain: infrastructure
description: Performance benchmarks are standardised, reproducible test suites and associated metric sets used to measure, compare, and rank the behavioural characteristics of software systems, hardware platforms, algorithms, or AI models under controlled or representative workload conditions. They quantify dimensions such as latency, throughput, resource utilisation, scalability, accuracy, and energy efficien
maturity: mature
quality: 0.73
is-a:
  - urn:ngm:class:software-testing
hasPart:
  - urn:ngm:class:latency
  - urn:ngm:class:resource-efficiency
  - urn:ngm:class:latency
  - urn:ngm:class:throughput-measurement
  - urn:ngm:class:resource-efficiency
  - urn:ngm:class:workload-profiling
requires:
  - urn:ngm:class:testing
  - urn:ngm:class:observability
  - urn:ngm:class:profiling
  - urn:ngm:class:testing
enables:
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:capacity-planning
  - urn:ngm:class:vendor-evaluation
dependsOn:
  - urn:ngm:class:metrics-collection
  - urn:ngm:class:statistical-analysis
implements:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:mlperf
  - urn:ngm:class:benchmarks
contrastsWith:
  - urn:ngm:class:stress-testing
  - urn:ngm:class:unit-testing
bridgesTo:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:model-evaluation
uses:
  - urn:ngm:class:time-series-data
  - urn:ngm:class:reproducible-research
  - urn:ngm:class:reproducible-experiments
standardizedBy:
  - urn:ngm:class:mlcommons
  - urn:ngm:class:spec
  - urn:ngm:class:tpc
partOf:
  - urn:ngm:class:software-testing
  - urn:ngm:class:quality-assurance
relatedTo:
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:service-level-objective
---

# Performance Benchmarks

Performance benchmarks are standardised, reproducible test suites and associated metric sets used to measure, compare, and rank the behavioural characteristics of software systems, hardware platforms, algorithms, or AI models under controlled or representative workload conditions. They quantify dimensions such as latency, throughput, resource utilisation, scalability, accuracy, and energy efficiency, enabling objective evaluation across vendors, versions, and deployment environments. Benchmark suites range from micro-benchmarks targeting isolated components to macro-benchmarks simulating realistic end-to-end workloads. Formal benchmark governance — through bodies such as SPEC, MLCommons, and TPC — establishes methodology rules, disclosure requirements, and result auditing to prevent benchmark gaming.
