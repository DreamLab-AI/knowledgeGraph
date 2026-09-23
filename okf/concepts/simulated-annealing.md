---
okf_version: "0.2"
type: Class
title: Simulated Annealing
resource: urn:ngm:class:simulated-annealing
domain: artificial-intelligence
description: A stochastic metaheuristic for global optimisation, inspired by the annealing of metals, that explores a solution space via local moves while accepting worsening solutions with a probability governed by a gradually decreasing temperature parameter, allowing early escape from local optima and increasingly greedy refinement as the temperature cools; widely applied to combinatorial problems such as t
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:heuristic-methods
uses:
  - urn:ngm:class:local-search
relatedTo:
  - urn:ngm:class:combinatorial-optimisation
---

# Simulated Annealing

A stochastic metaheuristic for global optimisation, inspired by the annealing of metals, that explores a solution space via local moves while accepting worsening solutions with a probability governed by a gradually decreasing temperature parameter, allowing early escape from local optima and increasingly greedy refinement as the temperature cools; widely applied to combinatorial problems such as travelling salesman routing, chip placement, scheduling and logistics.
