---
okf_version: "0.2"
type: Class
title: Kernel Fusion
resource: urn:ngm:class:kernel-fusion
domain: artificial-intelligence
description: Kernel fusion is a compiler and runtime optimisation that merges several adjacent GPU or accelerator operations into a single executable kernel. By combining elementwise, reduction and other operators, it eliminates intermediate memory writes, reduces kernel-launch overhead and improves arithmetic intensity. It is a key technique for accelerating deep-learning training and inference on memory-band
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:gpu-acceleration
requires:
  - urn:ngm:class:computation-graph
enables:
  - urn:ngm:class:inference-optimisation
dependsOn:
  - urn:ngm:class:memory-bandwidth
implements:
  - urn:ngm:class:operator-fusion
contrastsWith:
  - urn:ngm:class:pruning
bridgesTo:
  - urn:ngm:class:parallel-computing
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:computation-graph
  - urn:ngm:class:tensor-core
supports:
  - urn:ngm:class:inference-optimisation
partOf:
  - urn:ngm:class:gpu-acceleration
relatedTo:
  - urn:ngm:class:tensor-core
  - urn:ngm:class:throughput
  - urn:ngm:class:latency
  - urn:ngm:class:transformer-architecture
---

# Kernel Fusion

Kernel fusion is a compiler and runtime optimisation that merges several adjacent GPU or accelerator operations into a single executable kernel. By combining elementwise, reduction and other operators, it eliminates intermediate memory writes, reduces kernel-launch overhead and improves arithmetic intensity. It is a key technique for accelerating deep-learning training and inference on memory-bandwidth-bound hardware.
