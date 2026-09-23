---
okf_version: "0.2"
type: Class
title: Stochastic Optimisation
resource: urn:ngm:class:stochastic-optimisation
domain: machine-learning
description: The branch of mathematical optimisation concerned with minimising or maximising objectives that involve randomness — either because the objective and constraints are expectations over uncertain data, or because the algorithm itself deliberately injects randomness, as in stochastic gradient methods, simulated annealing, and evolutionary search. It provides the convergence theory and algorithmic mac
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:mathematical-optimisation
hasPart:
  - urn:ngm:class:stochastic-gradient-descent
uses:
  - urn:ngm:class:monte-carlo-methods
relatedTo:
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:random-search
---

# Stochastic Optimisation

The branch of mathematical optimisation concerned with minimising or maximising objectives that involve randomness — either because the objective and constraints are expectations over uncertain data, or because the algorithm itself deliberately injects randomness, as in stochastic gradient methods, simulated annealing, and evolutionary search. It provides the convergence theory and algorithmic machinery, from Robbins-Monro stochastic approximation to Adam, that makes training large-scale machine learning models on sampled mini-batches tractable.
