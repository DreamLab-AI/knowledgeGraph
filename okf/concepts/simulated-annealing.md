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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Simulated Annealing

A stochastic metaheuristic for global optimisation, inspired by the annealing of metals, that explores a solution space via local moves while accepting worsening solutions with a probability governed by a gradually decreasing temperature parameter, allowing early escape from local optima and increasingly greedy refinement as the temperature cools; widely applied to combinatorial problems such as travelling salesman routing, chip placement, scheduling and logistics.
