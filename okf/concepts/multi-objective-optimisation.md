---
okf_version: "0.2"
type: Class
title: Multi Objective Optimisation
resource: urn:ngm:class:multi-objective-optimisation
domain: machine-learning
description: Multi-objective optimisation is the discipline of optimising two or more conflicting objective functions simultaneously, where improving one objective typically degrades another. Rather than a single optimum it yields a Pareto front of non-dominated trade-off solutions, from which a decision-maker selects according to preferences. It is solved with scalarisation, evolutionary, and gradient-based m
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:optimisation
requires:
  - urn:ngm:class:optimisation
enables:
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:neural-architecture-search
dependsOn:
  - urn:ngm:class:genetic-algorithm
implements:
  - urn:ngm:class:optimisation
uses:
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:genetic-algorithm
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:model-comparison
  - urn:ngm:class:decision-making
partOf:
  - urn:ngm:class:optimisation
relatedTo:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:simulated-annealing
---

# Multi Objective Optimisation

Multi-objective optimisation is the discipline of optimising two or more conflicting objective functions simultaneously, where improving one objective typically degrades another. Rather than a single optimum it yields a Pareto front of non-dominated trade-off solutions, from which a decision-maker selects according to preferences. It is solved with scalarisation, evolutionary, and gradient-based methods and is pervasive in engineering design, machine learning, and resource allocation.
