---
okf_version: "0.2"
type: Class
title: Integrated Gradients
resource: urn:ngm:class:integrated-gradients
domain: machine-learning
description: A gradient-based feature attribution method for differentiable models, introduced by Sundararajan, Taly, and Yan (2017), that assigns each input feature a contribution equal to the path integral of the model's gradient along the straight line from a neutral baseline input to the actual input; it uniquely satisfies the axioms of sensitivity and implementation invariance among path methods, its attr
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:feature-attribution
requires:
  - urn:ngm:class:gradient
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:interpretability
contrastsWith:
  - urn:ngm:class:lime
  - urn:ngm:class:shap
partOf:
  - urn:ngm:class:explainable-ai
---

# Integrated Gradients

A gradient-based feature attribution method for differentiable models, introduced by Sundararajan, Taly, and Yan (2017), that assigns each input feature a contribution equal to the path integral of the model's gradient along the straight line from a neutral baseline input to the actual input; it uniquely satisfies the axioms of sensitivity and implementation invariance among path methods, its attributions sum exactly to the difference between the model's output and the baseline output (completeness), and it requires only gradient access rather than model retraining or sampling.
