---
okf_version: "0.2"
type: Class
title: Computation Graph
resource: urn:ngm:class:computation-graph
domain: machine-learning
description: A Computation Graph is a directed graph in which nodes represent operations or variables and edges represent the flow of data (typically tensors) between them. It is the central abstraction in modern machine learning frameworks, where a model's forward pass is expressed as a graph and gradients are computed by traversing it in reverse via automatic differentiation. Graphs may be built statically a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:directed-acyclic-graph
hasPart:
  - urn:ngm:class:tensor
requires:
  - urn:ngm:class:automatic-differentiation
enables:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gpu-acceleration
dependsOn:
  - urn:ngm:class:machine-learning-discipline-framework
implements:
  - urn:ngm:class:neural-network
bridgesTo:
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:py-torch
uses:
  - urn:ngm:class:directed-acyclic-graph
supports:
  - urn:ngm:class:model-training
  - urn:ngm:class:gradient-descent
standardizedBy:
  - urn:ngm:class:onnx
partOf:
  - urn:ngm:class:deep-learning-framework
relatedTo:
  - urn:ngm:class:deep-learning
---

# Computation Graph

A Computation Graph is a directed graph in which nodes represent operations or variables and edges represent the flow of data (typically tensors) between them. It is the central abstraction in modern machine learning frameworks, where a model's forward pass is expressed as a graph and gradients are computed by traversing it in reverse via automatic differentiation. Graphs may be built statically ahead of execution or dynamically as code runs, and they enable optimisation, scheduling and hardware acceleration.
