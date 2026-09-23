---
okf_version: "0.2"
type: Class
title: A Star Algorithm
resource: urn:ngm:class:a-star-algorithm
domain: artificial-intelligence
description: The A* algorithm is an informed best-first graph-search method that finds a least-cost path from a start node to a goal node by evaluating each candidate node n with the function f(n) = g(n) + h(n), where g(n) is the exact cost accumulated from the start node to n and h(n) is an admissible heuristic estimating the remaining cost from n to the goal. By always expanding the open-list node with the l
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:informed-search
  - urn:ngm:class:graph-search
  - urn:ngm:class:pathfinding
hasPart:
  - urn:ngm:class:cost-function
  - urn:ngm:class:priority-queue
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:admissibility
  - urn:ngm:class:consistency
  - urn:ngm:class:path-planning
requires:
  - urn:ngm:class:state-space
  - urn:ngm:class:graph-representation
  - urn:ngm:class:weighted-graph
  - urn:ngm:class:admissibility
  - urn:ngm:class:graph-theory
enables:
  - urn:ngm:class:pathfinding
  - urn:ngm:class:path-planning
  - urn:ngm:class:motion-planning
  - urn:ngm:class:shortest-path
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:navigation
  - urn:ngm:class:network-routing
dependsOn:
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:graph-search
  - urn:ngm:class:optimality
implements:
  - urn:ngm:class:informed-search
  - urn:ngm:class:graph-search
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:optimisation
contrastsWith:
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:monte-carlo-tree-search
uses:
  - urn:ngm:class:cost-function
  - urn:ngm:class:graph-search
  - urn:ngm:class:priority-queue
  - urn:ngm:class:weighted-graph
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:state-space
  - urn:ngm:class:graph-representation
  - urn:ngm:class:graph-theory
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:game-ai
  - urn:ngm:class:logistics
  - urn:ngm:class:network-routing
  - urn:ngm:class:gps-systems
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:path-planning
standardizedBy:
  - urn:ngm:class:search-algorithm
relatedTo:
  - urn:ngm:class:optimisation
  - urn:ngm:class:graph-theory
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:ida-star
  - urn:ngm:class:jump-point-search
  - urn:ngm:class:theta-star
  - urn:ngm:class:d-star
  - urn:ngm:class:bidirectional-search
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:ida
  - urn:ngm:class:theta
  - urn:ngm:class:d
  - urn:ngm:class:completeness
  - urn:ngm:class:optimality
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:motion-planning
---

# A Star Algorithm

The A* algorithm is an informed best-first graph-search method that finds a least-cost path from a start node to a goal node by evaluating each candidate node n with the function f(n) = g(n) + h(n), where g(n) is the exact cost accumulated from the start node to n and h(n) is an admissible heuristic estimating the remaining cost from n to the goal. By always expanding the open-list node with the lowest f-value, A* is guaranteed to find the optimal path when h is admissible (never overestimates) and is also consistent (satisfies the triangle inequality h(n) ≤ c(n,n') + h(n') for every edge (n,n')). A* generalises Dijkstra's algorithm by adding goal-directed heuristic guidance, and subsumes greedy best-first search as the special case g(n)=0. First described by Peter Hart, Nils Nilsson, and Bertram Raphael at the Stanford Research Institute in 1968, A* remains the most widely deployed optimal graph-search algorithm in artificial intelligence, robotics, game development, and logistics.
