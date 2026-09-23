---
okf_version: "0.2"
type: Class
title: Operator Fusion
resource: urn:ngm:class:operator-fusion
domain: ai
description: Operator fusion is a compiler optimisation that combines several consecutive operations in a neural network computation graph into a single fused kernel. By merging operations such as a matrix multiply with its bias addition and activation function, fusion avoids writing intermediate tensors back to memory, reducing memory bandwidth pressure and kernel launch overhead. It is a core technique in ma
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-optimization
hasPart:
  - urn:ngm:class:hardware-acceleration
requires:
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:model-serving
dependsOn:
  - urn:ngm:class:memory-bandwidth
implements:
  - urn:ngm:class:hardware-acceleration
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:onnx
supports:
  - urn:ngm:class:inference
partOf:
  - urn:ngm:class:compiler
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:neural-network
---

# Operator Fusion

Operator fusion is a compiler optimisation that combines several consecutive operations in a neural network computation graph into a single fused kernel. By merging operations such as a matrix multiply with its bias addition and activation function, fusion avoids writing intermediate tensors back to memory, reducing memory bandwidth pressure and kernel launch overhead. It is a core technique in machine learning compilers and inference runtimes for improving throughput and latency on accelerators. Fusion trades increased kernel complexity for fewer round trips to global memory.
