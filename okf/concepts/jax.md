---
okf_version: "0.2"
type: Class
title: JAX
resource: urn:ngm:class:jax
domain: machine-learning
description: A Python library from Google for high-performance numerical computing and machine learning research, combining NumPy-style array operations with automatic differentiation and just-in-time compilation targeting CPUs, GPUs, and TPUs via the XLA compiler.
maturity: growing
quality: 0.72
is-a:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:deep-learning-domain
requires:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:python
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:just-in-time-compilation
  - urn:ngm:class:vectorised-computation
  - urn:ngm:class:large-scale-model-training
  - urn:ngm:class:programming-language
contrastsWith:
  - urn:ngm:class:py-torch
  - urn:ngm:class:tensor-flow
bridgesTo:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:py-torch
uses:
  - urn:ngm:class:api
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:tensor-processing-unit
supports:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:numerical-computing
---

# JAX

A Python library from Google for high-performance numerical computing and machine learning research, combining NumPy-style array operations with automatic differentiation and just-in-time compilation targeting CPUs, GPUs, and TPUs via the XLA compiler.
