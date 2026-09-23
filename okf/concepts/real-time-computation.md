---
okf_version: "0.2"
type: Class
title: Real-Time Computation
resource: urn:ngm:class:real-time-computation
domain: infrastructure
description: Real-time computation refers to computational processes that must produce correct outputs within specified, externally imposed time constraints—where the correctness of a result depends not only on its logical accuracy but on its delivery before a deadline. Hard real-time systems guarantee deadline satisfaction under all conditions, soft real-time systems tolerate occasional deadline misses, and f
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:real-time
enables:
  - urn:ngm:class:control-system
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:edge-computing
supports:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:digital-signal-processing
relatedTo:
  - urn:ngm:class:real-time-ai
  - urn:ngm:class:latency
  - urn:ngm:class:embedded-systems
---

# Real-Time Computation

Real-time computation refers to computational processes that must produce correct outputs within specified, externally imposed time constraints—where the correctness of a result depends not only on its logical accuracy but on its delivery before a deadline. Hard real-time systems guarantee deadline satisfaction under all conditions, soft real-time systems tolerate occasional deadline misses, and firm real-time systems discard late results as worthless. Applications span industrial control, autonomous vehicles, robotics, financial trading, and interactive media. Real-time computation requires deterministic execution paths, bounded memory allocation, and often specialised hardware or operating system schedulers.
