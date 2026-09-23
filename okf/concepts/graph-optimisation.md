---
okf_version: "0.2"
type: Class
title: Graph Optimisation
resource: urn:ngm:class:graph-optimisation
domain: ai
description: Graph optimisation is the set of compiler transformations applied to a model's computation graph to reduce latency, memory footprint and energy use without altering the model's semantics. Typical passes include operator fusion, constant folding, dead-node elimination, layout reordering and kernel selection. It is performed by inference runtimes and ahead-of-time compilers as a precursor to deploym
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:inference-optimisation
requires:
  - urn:ngm:class:computation-graph
enables:
  - urn:ngm:class:model-inference
  - urn:ngm:class:inference-serving
dependsOn:
  - urn:ngm:class:compiler
implements:
  - urn:ngm:class:computation-graph
  - urn:ngm:class:compiler
contrastsWith:
  - urn:ngm:class:model-quantization
uses:
  - urn:ngm:class:optimisation
  - urn:ngm:class:convex-optimisation
supports:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:gpu-acceleration
standardizedBy:
  - urn:ngm:class:onnx
partOf:
  - urn:ngm:class:model-optimisation-and-performance
relatedTo:
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:tensor-rt
  - urn:ngm:class:model-compression
---

# Graph Optimisation

Graph optimisation is the set of compiler transformations applied to a model's computation graph to reduce latency, memory footprint and energy use without altering the model's semantics. Typical passes include operator fusion, constant folding, dead-node elimination, layout reordering and kernel selection. It is performed by inference runtimes and ahead-of-time compilers as a precursor to deployment on a target accelerator.
