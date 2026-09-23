---
okf_version: "0.2"
type: Class
title: Objective Function
resource: urn:ngm:class:objective-function
domain: machine-learning
description: "An objective function is a scalar-valued function that quantifies the quality of a candidate solution, which an optimisation or learning process seeks to minimise or maximise. In machine learning it formalises the goal of training — for example minimising prediction error or maximising likelihood — so that algorithms can adjust parameters to improve it. The choice of objective function determines "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:optimisation
requires:
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:evaluation-metric
enables:
  - urn:ngm:class:learning-algorithm
dependsOn:
  - urn:ngm:class:optimisation
  - urn:ngm:class:evaluation-metric
implements:
  - urn:ngm:class:optimisation
contrastsWith:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:loss-function
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:hyperparameter-tuning
partOf:
  - urn:ngm:class:optimisation
relatedTo:
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:optimisation-algorithm
---

# Objective Function

An objective function is a scalar-valued function that quantifies the quality of a candidate solution, which an optimisation or learning process seeks to minimise or maximise. In machine learning it formalises the goal of training — for example minimising prediction error or maximising likelihood — so that algorithms can adjust parameters to improve it. The choice of objective function determines what a model is rewarded for, shaping its behaviour, biases and generalisation.
