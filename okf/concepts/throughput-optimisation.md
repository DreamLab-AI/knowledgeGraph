---
okf_version: "0.2"
type: Class
title: Throughput Optimisation
resource: urn:ngm:class:throughput-optimisation
domain: machine-learning
description: The systems discipline of maximising useful work completed per unit time — requests, tokens, or samples per second — on fixed hardware, typically by batching to raise arithmetic intensity, keeping accelerators saturated through scheduling and overlap, and managing memory so that capacity rather than stalls bounds concurrency, usually traded off explicitly against per-request latency.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:inference-optimisation
enables:
  - urn:ngm:class:model-serving
uses:
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:kv-cache
  - urn:ngm:class:batch-inference
relatedTo:
  - urn:ngm:class:gpu-acceleration
---

# Throughput Optimisation

The systems discipline of maximising useful work completed per unit time — requests, tokens, or samples per second — on fixed hardware, typically by batching to raise arithmetic intensity, keeping accelerators saturated through scheduling and overlap, and managing memory so that capacity rather than stalls bounds concurrency, usually traded off explicitly against per-request latency.
