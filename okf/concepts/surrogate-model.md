---
okf_version: "0.2"
type: Class
title: Surrogate Model
resource: urn:ngm:class:surrogate-model
domain: artificial-intelligence
description: A surrogate model (or metamodel) is an inexpensive, data-driven approximation of an expensive-to-evaluate function, simulation or experiment, used to predict outcomes without running the full computation. It is fitted to a sample of evaluations and then queried cheaply to explore the design space, drive optimisation or quantify uncertainty. Surrogate models are central to Bayesian optimisation, wh
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:bayesian-optimisation
requires:
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:optimisation
  - urn:ngm:class:simulation
implements:
  - urn:ngm:class:regression
contrastsWith:
  - urn:ngm:class:simulation
uses:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:regression
supports:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:hyperparameter-optimisation
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:hyperparameter-optimisation
---

# Surrogate Model

A surrogate model (or metamodel) is an inexpensive, data-driven approximation of an expensive-to-evaluate function, simulation or experiment, used to predict outcomes without running the full computation. It is fitted to a sample of evaluations and then queried cheaply to explore the design space, drive optimisation or quantify uncertainty. Surrogate models are central to Bayesian optimisation, where a Gaussian process guides where to evaluate next.
