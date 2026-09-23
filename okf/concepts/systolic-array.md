---
okf_version: "0.2"
type: Class
title: Systolic Array
resource: urn:ngm:class:systolic-array
domain: infrastructure
description: A Systolic Array is a specialised parallel computing architecture composed of a homogeneous network of processing elements (PEs) that rhythmically compute and pass data through the array in a pipelined fashion, analogous to the rhythmic pumping of the heart. Each PE performs a fixed local computation and passes results to neighbours without centralised control or global memory access. This archite
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:ai-hardware
hasPart:
  - urn:ngm:class:processing-element
  - urn:ngm:class:matrix-multiply-accumulate
enables:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network-inference
dependsOn:
  - urn:ngm:class:silicon-chip
contrastsWith:
  - urn:ngm:class:von-neumann-architecture
bridgesTo:
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:data-flow-architecture
  - urn:ngm:class:hardware-accelerator
supports:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:field-programmable-gate-array
  - urn:ngm:class:tensor-processing-unit
---

# Systolic Array

A Systolic Array is a specialised parallel computing architecture composed of a homogeneous network of processing elements (PEs) that rhythmically compute and pass data through the array in a pipelined fashion, analogous to the rhythmic pumping of the heart. Each PE performs a fixed local computation and passes results to neighbours without centralised control or global memory access. This architecture is highly efficient for matrix multiplication and convolution operations, making it the dominant microarchitecture in modern AI accelerators such as Google's Tensor Processing Units.
