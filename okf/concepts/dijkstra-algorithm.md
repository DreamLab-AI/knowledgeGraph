---
okf_version: "0.2"
type: Class
title: Dijkstra Algorithm
resource: urn:ngm:class:dijkstra-algorithm
domain: robotics
description: A graph search algorithm that finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights. It systematically explores nodes in order of increasing distance from the source, guaranteeing optimal solutions.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:graph-search
  - urn:ngm:class:graph-search-algorithm
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:bellman-ford-algorithm
requires:
  - urn:ngm:class:non-negative-weights
  - urn:ngm:class:weighted-graph
contrastsWith:
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:a-star-algorithm
bridgesTo:
  - urn:ngm:class:graph-search
  - urn:ngm:class:spatial-computing-paradigm
uses:
  - urn:ngm:class:graph-representation
  - urn:ngm:class:priority-queue
---

# Dijkstra Algorithm

A graph search algorithm that finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights. It systematically explores nodes in order of increasing distance from the source, guaranteeing optimal solutions.
