---
okf_version: "0.2"
type: Class
title: Monte Carlo Tree Search
resource: urn:ngm:class:monte-carlo-tree-search
domain: artificial-intelligence
description: Monte Carlo Tree Search (MCTS) is a heuristic search algorithm for sequential decision-making that builds a game tree incrementally through random simulations, balancing exploration and exploitation via the Upper Confidence Bound (UCB) formula. It enables strong play in games with large branching factors and generalises to planning under uncertainty.
maturity: draft
quality: 0.65
is-a:
  - urn:ngm:class:search-algorithms
hasPart:
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:game-ai
  - urn:ngm:class:game-ai
dependsOn:
  - urn:ngm:class:data-structure
  - urn:ngm:class:random-number-generation
contrastsWith:
  - urn:ngm:class:minimax-algorithm
  - urn:ngm:class:dynamic-programming
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:deep-neural-network
uses:
  - urn:ngm:class:exploration-exploitation-tradeoff
supports:
  - urn:ngm:class:alphago
partOf:
  - urn:ngm:class:game-tree-search
relatedTo:
  - urn:ngm:class:beam-search
---

# Monte Carlo Tree Search

Monte Carlo Tree Search (MCTS) is a heuristic search algorithm for sequential decision-making that builds a game tree incrementally through random simulations, balancing exploration and exploitation via the Upper Confidence Bound (UCB) formula. It enables strong play in games with large branching factors and generalises to planning under uncertainty.
