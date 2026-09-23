---
okf_version: "0.2"
type: Class
title: Evolutionary Algorithm
resource: urn:ngm:class:evolutionary-algorithm
domain: machine-learning
description: An evolutionary algorithm is a population-based, stochastic optimisation method inspired by biological evolution, in which a population of candidate solutions is iteratively improved through selection, recombination (crossover) and mutation guided by a fitness function. Because they require only the ability to evaluate a fitness score, evolutionary algorithms are derivative-free and well suited to
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:optimisation
  - urn:ngm:class:mathematical-optimisation
  - urn:ngm:class:search-algorithm
hasPart:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:genetic-algorithm
  - urn:ngm:class:fitness-function
  - urn:ngm:class:selection
  - urn:ngm:class:crossover
  - urn:ngm:class:mutation
  - urn:ngm:class:population
  - urn:ngm:class:evolution-strategy
  - urn:ngm:class:genetic-programming
  - urn:ngm:class:neuroevolution
  - urn:ngm:class:differential-evolution
  - urn:ngm:class:quality-diversity-algorithm
requires:
  - urn:ngm:class:fitness-function
  - urn:ngm:class:sampling
  - urn:ngm:class:population-representation
  - urn:ngm:class:fitness-landscape
enables:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:multi-objective-optimisation
  - urn:ngm:class:auto-ml
  - urn:ngm:class:neuroevolution
  - urn:ngm:class:algorithm-design
dependsOn:
  - urn:ngm:class:sampling
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:fitness-landscape
  - urn:ngm:class:population-diversity
implements:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:metaheuristic
contrastsWith:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:simulated-annealing
  - urn:ngm:class:backpropagation
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:recombination
  - urn:ngm:class:mutation-operator
  - urn:ngm:class:selection-pressure
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-reinforcement-learning
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:material-science
standardizedBy:
  - urn:ngm:class:ieee-transactions-on-evolutionary-computation
  - urn:ngm:class:gecco
  - urn:ngm:class:ppsn
partOf:
  - urn:ngm:class:optimisation
relatedTo:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:particle-swarm-optimisation
  - urn:ngm:class:ant-colony-optimisation
  - urn:ngm:class:large-language-model
  - urn:ngm:class:auto-ml
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:transfer-learning
---

# Evolutionary Algorithm

An evolutionary algorithm is a population-based, stochastic optimisation method inspired by biological evolution, in which a population of candidate solutions is iteratively improved through selection, recombination (crossover) and mutation guided by a fitness function. Because they require only the ability to evaluate a fitness score, evolutionary algorithms are derivative-free and well suited to non-differentiable, noisy, multimodal or black-box optimisation problems where gradient methods struggle.
