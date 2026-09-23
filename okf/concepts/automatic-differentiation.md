---
okf_version: "0.2"
type: Class
title: Automatic Differentiation
resource: urn:ngm:class:automatic-differentiation
domain: machine-learning
description: "Automatic differentiation (AD) is a family of computational techniques for evaluating the derivative of a function specified by a computer program, by systematically applying the chain rule to elementary arithmetic operations rather than through symbolic algebra or finite-difference approximation. It operates in two principal modes: forward mode, which propagates tangent values alongside primal va"
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:optimisation
hasPart:
  - urn:ngm:class:forward-mode-differentiation
  - urn:ngm:class:computation-graph
  - urn:ngm:class:backpropagation
requires:
  - urn:ngm:class:chain-rule
  - urn:ngm:class:differentiable-function
  - urn:ngm:class:activation-function
  - urn:ngm:class:loss-function
  - urn:ngm:class:computation-graph
enables:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:deep-learning
  - urn:ngm:class:differentiable-programming
  - urn:ngm:class:neural-ordinary-differential-equation
  - urn:ngm:class:scientific-machine-learning
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:reinforcement-learning
dependsOn:
  - urn:ngm:class:computation-graph
  - urn:ngm:class:loss-function
implements:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
contrastsWith:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:forward-mode-differentiation
bridgesTo:
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:robotics-control
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:computation-graph
  - urn:ngm:class:jax
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:gradient-clipping
  - urn:ngm:class:gradient-accumulation
  - urn:ngm:class:batch-normalisation
supports:
  - urn:ngm:class:scientific-machine-learning
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
standardizedBy:
  - urn:ngm:class:machine-learning-discipline-framework
relatedTo:
  - urn:ngm:class:optimisation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:loss-function
  - urn:ngm:class:just-in-time-compilation
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:adam-optimiser
---

# Automatic Differentiation

Automatic differentiation (AD) is a family of computational techniques for evaluating the derivative of a function specified by a computer program, by systematically applying the chain rule to elementary arithmetic operations rather than through symbolic algebra or finite-difference approximation. It operates in two principal modes: forward mode, which propagates tangent values alongside primal values, and reverse mode (backpropagation), which accumulates gradients in a backward pass over a recorded computation graph. AD produces machine-precision derivatives at a cost linear in the number of program operations, making it the computational backbone of modern deep learning frameworks.
