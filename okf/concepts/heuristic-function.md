---
okf_version: "0.2"
type: Class
title: Heuristic Function
resource: urn:ngm:class:heuristic-function
domain: artificial-intelligence
description: "A heuristic function is an estimating function used in search and optimisation that approximates the cost or distance from a given state to a goal state. It guides informed search algorithms by prioritising the exploration of states that appear most promising, trading guaranteed optimality for improved efficiency. A heuristic is admissible when it never overestimates the true cost, and consistent "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:search-algorithm
requires:
  - urn:ngm:class:artificial-intelligence
enables:
  - urn:ngm:class:pathfinding
  - urn:ngm:class:decision-making
dependsOn:
  - urn:ngm:class:optimisation
  - urn:ngm:class:state-space
contrastsWith:
  - urn:ngm:class:constraint-satisfaction
uses:
  - urn:ngm:class:cost-function
  - urn:ngm:class:algorithm
supports:
  - urn:ngm:class:task-planning
  - urn:ngm:class:planning
partOf:
  - urn:ngm:class:informed-search
  - urn:ngm:class:search-algorithm
relatedTo:
  - urn:ngm:class:graph-theory
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Heuristic Function

A heuristic function is an estimating function used in search and optimisation that approximates the cost or distance from a given state to a goal state. It guides informed search algorithms by prioritising the exploration of states that appear most promising, trading guaranteed optimality for improved efficiency. A heuristic is admissible when it never overestimates the true cost, and consistent when it satisfies the triangle inequality, properties that determine the optimality guarantees of algorithms that use it.
