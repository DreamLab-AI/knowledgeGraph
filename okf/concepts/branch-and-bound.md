---
okf_version: "0.2"
type: Class
title: Branch and Bound
resource: urn:ngm:class:branch-and-bound
domain: artificial-intelligence
description: An exact algorithmic paradigm for combinatorial optimisation that systematically explores a tree of candidate solution subsets, using bounds from relaxations of the problem to prune any branch that provably cannot contain a solution better than the best one found so far. Introduced by Land and Doig in 1960 for integer programming, branch and bound guarantees optimality while often avoiding exhaust
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:search-algorithm
contrastsWith:
  - urn:ngm:class:dynamic-programming
partOf:
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:constraint-solver
relatedTo:
  - urn:ngm:class:constraint-satisfaction
---

# Branch and Bound

An exact algorithmic paradigm for combinatorial optimisation that systematically explores a tree of candidate solution subsets, using bounds from relaxations of the problem to prune any branch that provably cannot contain a solution better than the best one found so far. Introduced by Land and Doig in 1960 for integer programming, branch and bound guarantees optimality while often avoiding exhaustive enumeration, and remains the backbone of modern mixed-integer programming and constraint solvers.
