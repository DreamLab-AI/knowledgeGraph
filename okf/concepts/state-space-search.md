---
okf_version: "0.2"
type: Class
title: State Space Search
resource: urn:ngm:class:state-space-search
domain: artificial-intelligence
description: State space search is a foundational problem-solving paradigm in artificial intelligence in which a problem is formalised as an initial state, a set of operators that transform states, and a goal test; solving the problem means finding a path through the implicit graph of reachable states from the initial state to a goal state. Uninformed strategies such as breadth-first and depth-first search enu
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:search-algorithm
hasPart:
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:depth-first-search
dependsOn:
  - urn:ngm:class:state-space
partOf:
  - urn:ngm:class:automated-planning
  - urn:ngm:class:classical-planning
relatedTo:
  - urn:ngm:class:heuristic-search
  - urn:ngm:class:graph-search
  - urn:ngm:class:planning-and-scheduling
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# State Space Search

State space search is a foundational problem-solving paradigm in artificial intelligence in which a problem is formalised as an initial state, a set of operators that transform states, and a goal test; solving the problem means finding a path through the implicit graph of reachable states from the initial state to a goal state. Uninformed strategies such as breadth-first and depth-first search enumerate states systematically, whilst informed strategies exploit heuristic estimates to focus effort, underpinning classical planning, game playing and combinatorial optimisation.
