---
okf_version: "0.2"
type: Class
title: Adaptive Learning Rate
resource: urn:ngm:class:adaptive-learning-rate
domain: machine-learning
description: A family of optimisation techniques in which the step size of gradient descent is adjusted automatically during training — typically per parameter, from running statistics of past gradients — so that parameters with large or frequent gradients take smaller steps and rarely-updated parameters take larger ones, as implemented by AdaGrad, RMSProp, and Adam, reducing sensitivity to the manually chosen
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:learning-rate
enables:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:gradient-descent
partOf:
  - urn:ngm:class:optimisation-algorithm
relatedTo:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:rmsprop
  - urn:ngm:class:momentum
  - urn:ngm:class:stochastic-gradient-descent
---

# Adaptive Learning Rate

A family of optimisation techniques in which the step size of gradient descent is adjusted automatically during training — typically per parameter, from running statistics of past gradients — so that parameters with large or frequent gradients take smaller steps and rarely-updated parameters take larger ones, as implemented by AdaGrad, RMSProp, and Adam, reducing sensitivity to the manually chosen global learning rate.
