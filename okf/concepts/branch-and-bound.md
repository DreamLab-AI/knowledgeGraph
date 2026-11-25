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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Branch and Bound

An exact algorithmic paradigm for combinatorial optimisation that systematically explores a tree of candidate solution subsets, using bounds from relaxations of the problem to prune any branch that provably cannot contain a solution better than the best one found so far. Introduced by Land and Doig in 1960 for integer programming, branch and bound guarantees optimality while often avoiding exhaustive enumeration, and remains the backbone of modern mixed-integer programming and constraint solvers.
