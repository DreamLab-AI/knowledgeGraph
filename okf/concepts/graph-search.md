---
okf_version: "0.2"
type: Class
title: Graph Search
resource: urn:ngm:class:graph-search
domain: artificial-intelligence
description: Graph search encompasses algorithms that systematically traverse graph-structured state spaces — sets of nodes (states) connected by edges (transitions) — to discover paths, optimal solutions, or reachable configurations satisfying given criteria. Classical uninformed methods (Breadth-First Search, Depth-First Search, Dijkstra) provide completeness and optimality guarantees on finite discrete grap
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:graph-algorithms
hasPart:
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:depth-first-search
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:search-algorithm
requires:
  - urn:ngm:class:data-structure
  - urn:ngm:class:heuristic-function
  - urn:ngm:class:data-structure
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:navigation
  - urn:ngm:class:route-planning
  - urn:ngm:class:game-tree-search
dependsOn:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:data-structure
  - urn:ngm:class:data-structure
contrastsWith:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:evolutionary-algorithm
bridgesTo:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:spatial-index
  - urn:ngm:class:spatial-index
uses:
  - urn:ngm:class:heuristic-function
  - urn:ngm:class:priority-queue
  - urn:ngm:class:dynamic-programming
supports:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:automated-planning
partOf:
  - urn:ngm:class:graph-algorithms
  - urn:ngm:class:combinatorial-optimisation
relatedTo:
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:satisfiability
---

# Graph Search

Graph search encompasses algorithms that systematically traverse graph-structured state spaces — sets of nodes (states) connected by edges (transitions) — to discover paths, optimal solutions, or reachable configurations satisfying given criteria. Classical uninformed methods (Breadth-First Search, Depth-First Search, Dijkstra) provide completeness and optimality guarantees on finite discrete graphs; informed heuristic methods (A*, IDA*, weighted A*) accelerate search using problem-specific cost estimates; sampling-based planners (RRT, PRM, RRT*) extend graph search to high-dimensional continuous configuration spaces by building implicit graphs from random samples. Graph search is the algorithmic backbone of robot motion planning, AI planning, knowledge graph querying, route navigation, and game-tree evaluation.
