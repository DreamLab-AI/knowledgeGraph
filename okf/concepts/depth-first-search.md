---
okf_version: "0.2"
type: Class
title: Depth-First Search
resource: urn:ngm:class:depth-first-search
domain: artificial-intelligence
description: Depth-first search (DFS) is a graph and tree traversal algorithm that explores as far as possible along each branch before backtracking, following one path to its end before considering alternatives. It is naturally expressed through recursion or an explicit last-in-first-out stack and runs in time linear in the number of vertices and edges. DFS underpins many algorithms including topological sort
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graph-algorithms
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:graph-search
  - urn:ngm:class:algorithm
hasPart:
  - urn:ngm:class:stack-data-structure
  - urn:ngm:class:visited-set
  - urn:ngm:class:dfs-tree
  - urn:ngm:class:edge-classification
  - urn:ngm:class:backtracking
  - urn:ngm:class:recursion
requires:
  - urn:ngm:class:data-structure
  - urn:ngm:class:graph-theory
  - urn:ngm:class:stack-data-structure
  - urn:ngm:class:visited-set
  - urn:ngm:class:graph-representation
enables:
  - urn:ngm:class:pathfinding
  - urn:ngm:class:topological-sort
  - urn:ngm:class:cycle-detection
  - urn:ngm:class:strongly-connected-components
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:biconnected-components
  - urn:ngm:class:articulation-point-detection
  - urn:ngm:class:formal-verification
  - urn:ngm:class:sat-solving
dependsOn:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:graph-representation
  - urn:ngm:class:stack-data-structure
  - urn:ngm:class:algorithm
implements:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:graph-search
  - urn:ngm:class:backtracking
  - urn:ngm:class:spanning-tree-construction
contrastsWith:
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:uniform-cost-search
uses:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:algorithm
  - urn:ngm:class:stack-data-structure
  - urn:ngm:class:recursion
  - urn:ngm:class:backtracking
supports:
  - urn:ngm:class:topological-sort
  - urn:ngm:class:ai-search
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:compiler-optimisation
  - urn:ngm:class:formal-verification
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:pathfinding
  - urn:ngm:class:game-ai
standardizedBy:
  - urn:ngm:class:clrs-introduction-to-algorithms
  - urn:ngm:class:acm-computing-classification-system
partOf:
  - urn:ngm:class:graph-algorithms
relatedTo:
  - urn:ngm:class:search-algorithms
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:ai-search
  - urn:ngm:class:computer-science
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:topological-sort
  - urn:ngm:class:strongly-connected-components
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:backtracking
  - urn:ngm:class:graph-theory
  - urn:ngm:class:ida-star
  - urn:ngm:class:tarjan-algorithm
  - urn:ngm:class:kosaraju-algorithm
---

# Depth-First Search

Depth-first search (DFS) is a graph and tree traversal algorithm that explores as far as possible along each branch before backtracking, following one path to its end before considering alternatives. It is naturally expressed through recursion or an explicit last-in-first-out stack and runs in time linear in the number of vertices and edges. DFS underpins many algorithms including topological sorting, cycle detection, finding connected components and solving maze and constraint problems through systematic backtracking.
