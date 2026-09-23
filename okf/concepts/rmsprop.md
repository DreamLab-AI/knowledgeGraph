---
okf_version: "0.2"
type: Class
title: RMSProp
resource: urn:ngm:class:rmsprop
domain: machine-learning
description: A stochastic gradient descent variant, proposed by Geoffrey Hinton in his 2012 Coursera lectures, that divides each parameter's update by the root of an exponentially weighted moving average of its squared gradients, giving every parameter its own adaptive step size; it cured AdaGrad's vanishing learning rate, made recurrent networks practical to train, and supplied the second-moment machinery lat
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:optimisation-algorithm
implements:
  - urn:ngm:class:adaptive-learning-rate
contrastsWith:
  - urn:ngm:class:adam-optimiser
uses:
  - urn:ngm:class:stochastic-gradient-descent
relatedTo:
  - urn:ngm:class:momentum
  - urn:ngm:class:learning-rate
  - urn:ngm:class:gradient-descent
---

# RMSProp

A stochastic gradient descent variant, proposed by Geoffrey Hinton in his 2012 Coursera lectures, that divides each parameter's update by the root of an exponentially weighted moving average of its squared gradients, giving every parameter its own adaptive step size; it cured AdaGrad's vanishing learning rate, made recurrent networks practical to train, and supplied the second-moment machinery later absorbed into Adam.
