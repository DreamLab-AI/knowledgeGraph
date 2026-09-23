---
okf_version: "0.2"
type: Class
title: Genetic Algorithm
resource: urn:ngm:class:genetic-algorithm
domain: artificial-intelligence
description: A genetic algorithm is a population-based metaheuristic for optimisation and search inspired by Darwinian natural selection, in which candidate solutions are encoded as chromosomes and evolved across generations through selection, crossover, and mutation. A fitness function ranks individuals so that fitter solutions are preferentially recombined, gradually steering the population towards high-qual
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:evolutionary-algorithm
hasPart:
  - urn:ngm:class:crossover
  - urn:ngm:class:mutation
  - urn:ngm:class:selection
  - urn:ngm:class:fitness-function
enables:
  - urn:ngm:class:hyperparameter-optimisation
implements:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:optimisation-algorithm
contrastsWith:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:simulated-annealing
uses:
  - urn:ngm:class:population
  - urn:ngm:class:fitness-function
  - urn:ngm:class:sampling
partOf:
  - urn:ngm:class:evolutionary-algorithm
relatedTo:
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:simulated-annealing
---

# Genetic Algorithm

A genetic algorithm is a population-based metaheuristic for optimisation and search inspired by Darwinian natural selection, in which candidate solutions are encoded as chromosomes and evolved across generations through selection, crossover, and mutation. A fitness function ranks individuals so that fitter solutions are preferentially recombined, gradually steering the population towards high-quality regions of the search space without requiring gradient information. Genetic algorithms are well suited to combinatorial, non-convex, and black-box problems where the objective is rugged, discontinuous, or expensive to differentiate.
