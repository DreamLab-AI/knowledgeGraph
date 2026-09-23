---
okf_version: "0.2"
type: Class
title: Search Algorithm
resource: urn:ngm:class:search-algorithm
domain: artificial-intelligence
description: Search Algorithms in AI systematically explore solution spaces to find optimal or satisfactory solutions to problems. Classical algorithms include uninformed search (breadth-first, depth-first, uniform-cost) and informed search (A*, greedy best-first, beam search). Advanced techniques incorporate heuristics, pruning, bidirectional search, and iterative deepening. Modern AI integrates learning-base
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:informed-search
requires:
  - urn:ngm:class:state-space
enables:
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:navigation
  - urn:ngm:class:planning
  - urn:ngm:class:game-playing
  - urn:ngm:class:constraint-satisfaction
implements:
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:depth-first-search
  - urn:ngm:class:beam-search
contrastsWith:
  - urn:ngm:class:random-sampling
  - urn:ngm:class:gradient-descent
bridgesTo:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:route-planning
uses:
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:graph-search
  - urn:ngm:class:priority-queue
  - urn:ngm:class:dynamic-programming
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:constraint
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:computational-complexity-theory
---

# Search Algorithm

Search Algorithms in AI systematically explore solution spaces to find optimal or satisfactory solutions to problems. Classical algorithms include uninformed search (breadth-first, depth-first, uniform-cost) and informed search (A*, greedy best-first, beam search). Advanced techniques incorporate heuristics, pruning, bidirectional search, and iterative deepening. Modern AI integrates learning-based search (Monte Carlo Tree Search with neural networks, learned heuristics) and continuous optimisation methods.
