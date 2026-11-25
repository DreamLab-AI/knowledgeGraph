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
  - urn:ngm:class:neural-network-quantisation
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Graph Optimisation

Graph optimisation is the set of compiler transformations applied to a model's computation graph to reduce latency, memory footprint and energy use without altering the model's semantics. Typical passes include operator fusion, constant folding, dead-node elimination, layout reordering and kernel selection. It is performed by inference runtimes and ahead-of-time compilers as a precursor to deployment on a target accelerator.
