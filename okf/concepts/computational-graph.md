---
okf_version: "0.2"
type: Class
title: Computational Graph
resource: urn:ngm:class:computational-graph
domain: machine-learning
description: A computational graph is a directed acyclic graph in which nodes represent mathematical operations or variables and edges represent the flow of data (tensors) between them. It provides the structural backbone for evaluating composite functions and for computing gradients through automatic differentiation. Deep learning frameworks construct such graphs either statically ahead of execution or dynami
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:automatic-differentiation
hasPart:
  - urn:ngm:class:loss-function
requires:
  - urn:ngm:class:tensor
enables:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:automatic-differentiation
dependsOn:
  - urn:ngm:class:automatic-differentiation
implements:
  - urn:ngm:class:deep-learning-framework
contrastsWith:
  - urn:ngm:class:optimisation-algorithm
bridgesTo:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:tensor
supports:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
partOf:
  - urn:ngm:class:deep-learning-framework
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gradient
---

# Computational Graph

A computational graph is a directed acyclic graph in which nodes represent mathematical operations or variables and edges represent the flow of data (tensors) between them. It provides the structural backbone for evaluating composite functions and for computing gradients through automatic differentiation. Deep learning frameworks construct such graphs either statically ahead of execution or dynamically during the forward pass, then traverse them in reverse to propagate derivatives.
