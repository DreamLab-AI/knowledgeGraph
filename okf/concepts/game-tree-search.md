---
okf_version: "0.2"
type: Class
title: Game Tree Search
resource: urn:ngm:class:game-tree-search
domain: artificial-intelligence
description: Game tree search is a family of algorithms that explore the tree of possible future game states branching from the current position, evaluating outcomes to choose the move that optimises a player's expected result against an adversary. Classical approaches such as minimax and alpha-beta pruning traverse the tree exhaustively or with heuristic bounds, while Monte Carlo tree search samples promising
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:search-algorithm
partOf:
  - urn:ngm:class:graph-search
---

# Game Tree Search

Game tree search is a family of algorithms that explore the tree of possible future game states branching from the current position, evaluating outcomes to choose the move that optimises a player's expected result against an adversary. Classical approaches such as minimax and alpha-beta pruning traverse the tree exhaustively or with heuristic bounds, while Monte Carlo tree search samples promising branches statistically to scale to games with very large branching factors. It is a foundational technique in adversarial game-playing AI, from classical board games to modern reinforcement-learning agents.
