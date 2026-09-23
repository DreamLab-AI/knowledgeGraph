---
okf_version: "0.2"
type: Class
title: Vanishing Gradient Problem
resource: urn:ngm:class:vanishing-gradient-problem
domain: machine-learning
description: The vanishing gradient problem is a difficulty in training deep or recurrent neural networks in which error gradients shrink exponentially as they are propagated backwards through many layers or time steps, leaving early parameters with negligible updates. It arises because repeated multiplication by small derivative terms, characteristic of saturating activation functions, drives the gradient tow
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
requires:
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:residual-connection
dependsOn:
  - urn:ngm:class:backpropagation
implements:
  - urn:ngm:class:weight-initialisation
contrastsWith:
  - urn:ngm:class:residual-connection
bridgesTo:
  - urn:ngm:class:lstm
  - urn:ngm:class:batch-normalisation
uses:
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:lstm
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:deep-learning
---

# Vanishing Gradient Problem

The vanishing gradient problem is a difficulty in training deep or recurrent neural networks in which error gradients shrink exponentially as they are propagated backwards through many layers or time steps, leaving early parameters with negligible updates. It arises because repeated multiplication by small derivative terms, characteristic of saturating activation functions, drives the gradient towards zero. The effect severely impedes learning of long-range dependencies and was a central obstacle to deep learning before mitigations emerged. Remedies include non-saturating activations, careful weight initialisation, normalisation, residual connections and gated recurrent architectures such as the LSTM.
