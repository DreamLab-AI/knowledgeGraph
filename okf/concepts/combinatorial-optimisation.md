---
okf_version: "0.2"
type: Class
title: Combinatorial Optimisation
resource: urn:ngm:class:combinatorial-optimisation
domain: artificial-intelligence
description: Combinatorial optimisation is the study of finding an optimal object from a finite but typically enormous set of discrete candidate solutions. Problems are defined over discrete structures such as graphs, permutations and integer assignments, and many are NP-hard, meaning no known algorithm solves all instances efficiently. Practical approaches combine exact methods, approximation algorithms and m
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:optimisation
  - urn:ngm:class:mathematical-optimisation
hasPart:
  - urn:ngm:class:branch-and-bound
  - urn:ngm:class:approximation-algorithm
  - urn:ngm:class:metaheuristic
  - urn:ngm:class:local-search
  - urn:ngm:class:dynamic-programming
requires:
  - urn:ngm:class:optimisation
  - urn:ngm:class:graph-theory
  - urn:ngm:class:algorithm
  - urn:ngm:class:computational-complexity-theory
enables:
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:logistics
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:supply-chain
  - urn:ngm:class:network-design
dependsOn:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:algorithm
  - urn:ngm:class:computational-complexity
  - urn:ngm:class:np-hardness
implements:
  - urn:ngm:class:heuristic-search
  - urn:ngm:class:integer-programming
contrastsWith:
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:bayesian-optimisation
uses:
  - urn:ngm:class:integer-programming
  - urn:ngm:class:linear-programming
  - urn:ngm:class:genetic-algorithm
  - urn:ngm:class:simulated-annealing
  - urn:ngm:class:tabu-search
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:dynamic-programming
supports:
  - urn:ngm:class:decision-making
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:neural-architecture-search
standardizedBy:
  - urn:ngm:class:operations-research
partOf:
  - urn:ngm:class:optimisation
  - urn:ngm:class:operations-research
  - urn:ngm:class:mathematical-optimisation
relatedTo:
  - urn:ngm:class:mathematical-optimisation
  - urn:ngm:class:multi-objective-optimisation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:constraint-solver
---

# Combinatorial Optimisation

Combinatorial optimisation is the study of finding an optimal object from a finite but typically enormous set of discrete candidate solutions. Problems are defined over discrete structures such as graphs, permutations and integer assignments, and many are NP-hard, meaning no known algorithm solves all instances efficiently. Practical approaches combine exact methods, approximation algorithms and metaheuristics to obtain good solutions within acceptable time bounds.
