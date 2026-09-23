---
okf_version: "0.2"
type: Class
title: Heuristic Search
resource: urn:ngm:class:heuristic-search
domain: artificial-intelligence
description: Heuristic search is a family of search algorithms that use a problem-specific evaluation function to estimate the cost or promise of candidate states, focusing exploration on the most promising regions of a search space. By trading exhaustive coverage for informed guidance, heuristic methods such as A* and best-first search solve large combinatorial problems that are intractable for uninformed sea
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:search-algorithm
hasPart:
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:informed-search
enables:
  - urn:ngm:class:pathfinding
  - urn:ngm:class:optimisation
contrastsWith:
  - urn:ngm:class:graph-search
  - urn:ngm:class:dijkstra-algorithm
bridgesTo:
  - urn:ngm:class:classical-planning
  - urn:ngm:class:motion-planning
uses:
  - urn:ngm:class:state-space-search
supports:
  - urn:ngm:class:game-playing
  - urn:ngm:class:robotics
partOf:
  - urn:ngm:class:search-algorithm
relatedTo:
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:artificial-intelligence
---

# Heuristic Search

Heuristic search is a family of search algorithms that use a problem-specific evaluation function to estimate the cost or promise of candidate states, focusing exploration on the most promising regions of a search space. By trading exhaustive coverage for informed guidance, heuristic methods such as A* and best-first search solve large combinatorial problems that are intractable for uninformed search. The quality of the heuristic determines both efficiency and, in admissible cases, optimality.
