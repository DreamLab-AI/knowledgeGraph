---
okf_version: "0.2"
type: Class
title: Breadth-First Search
resource: urn:ngm:class:breadth-first-search
domain: artificial-intelligence
description: Breadth-first search (BFS) is a graph and tree traversal algorithm that explores all neighbours of a node before moving to nodes at the next depth level, expanding the search frontier in order of increasing distance from the source. It is implemented with a first-in-first-out queue and, on unweighted graphs, finds the shortest path in terms of edge count from the start vertex to every reachable ve
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graph-algorithms
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:graph-search
  - urn:ngm:class:uninformed-search
hasPart:
  - urn:ngm:class:queue-data-structure
  - urn:ngm:class:visited-set
  - urn:ngm:class:frontier
  - urn:ngm:class:distance-array
  - urn:ngm:class:parent-pointer-array
  - urn:ngm:class:adjacency-representation
requires:
  - urn:ngm:class:data-structure
  - urn:ngm:class:queue-data-structure
  - urn:ngm:class:graph-theory
  - urn:ngm:class:adjacency-list
  - urn:ngm:class:visited-marker
enables:
  - urn:ngm:class:pathfinding
  - urn:ngm:class:path-planning
  - urn:ngm:class:connected-components
  - urn:ngm:class:bipartite-graph-detection
  - urn:ngm:class:web-crawling
  - urn:ngm:class:social-network-analysis
  - urn:ngm:class:level-order-traversal
  - urn:ngm:class:topological-sort
  - urn:ngm:class:reachability-analysis
dependsOn:
  - urn:ngm:class:queue-data-structure
  - urn:ngm:class:graph-representation
  - urn:ngm:class:adjacency-list
  - urn:ngm:class:visited-set
  - urn:ngm:class:graph-theory
implements:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:graph-search
  - urn:ngm:class:uninformed-search
  - urn:ngm:class:level-order-traversal
  - urn:ngm:class:complete-search
contrastsWith:
  - urn:ngm:class:depth-first-search
  - urn:ngm:class:iterative-deepening-dfs
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:greedy-best-first-search
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:beam-search-decoding
uses:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:algorithm
  - urn:ngm:class:queue-data-structure
  - urn:ngm:class:adjacency-representation
  - urn:ngm:class:bfs-tree
supports:
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:prim-algorithm
  - urn:ngm:class:kahn-algorithm
  - urn:ngm:class:hopcroft-karp-algorithm
  - urn:ngm:class:network-flow
  - urn:ngm:class:beam-search
standardizedBy:
  - urn:ngm:class:clrs-introduction-to-algorithms
  - urn:ngm:class:knuth-art-of-computer-programming
partOf:
  - urn:ngm:class:graph-algorithms
relatedTo:
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:search-algorithms
  - urn:ngm:class:node
  - urn:ngm:class:ai-search
  - urn:ngm:class:computer-science
  - urn:ngm:class:path-planning
  - urn:ngm:class:pathfinding
  - urn:ngm:class:state-space-search
  - urn:ngm:class:beam-search
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:graph-neural-network
---

# Breadth-First Search

Breadth-first search (BFS) is a graph and tree traversal algorithm that explores all neighbours of a node before moving to nodes at the next depth level, expanding the search frontier in order of increasing distance from the source. It is implemented with a first-in-first-out queue and, on unweighted graphs, finds the shortest path in terms of edge count from the start vertex to every reachable vertex. BFS runs in time linear in the number of vertices and edges and is foundational to pathfinding, connectivity analysis and level-order processing.
