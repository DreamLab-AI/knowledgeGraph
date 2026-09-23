---
okf_version: "0.2"
type: Class
title: Differentiable Architecture
resource: urn:ngm:class:differentiable-architecture
domain: artificial-intelligence
description: Differentiable Architecture refers to a neural network design paradigm, most prominently realised in Differentiable Architecture Search (DARTS), in which discrete structural choices — such as which operation to place at each edge of a candidate graph or how to connect layers — are relaxed to continuous mixture weights over a predefined set of operations. This relaxation renders the architecture se
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:neural-network-architecture
relatedTo:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:deep-learning
  - urn:ngm:class:knowledge-distillation
---

# Differentiable Architecture

Differentiable Architecture refers to a neural network design paradigm, most prominently realised in Differentiable Architecture Search (DARTS), in which discrete structural choices — such as which operation to place at each edge of a candidate graph or how to connect layers — are relaxed to continuous mixture weights over a predefined set of operations. This relaxation renders the architecture selection problem differentiable, allowing the architecture parameters to be optimised jointly with network weights via gradient descent on a validation loss. Once optimised, the continuous mixture is discretised to yield a final architecture, dramatically reducing the computational cost of neural architecture search compared to evolutionary or reinforcement learning methods.
