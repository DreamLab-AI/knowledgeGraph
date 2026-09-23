---
okf_version: "0.2"
type: Class
title: Weighted Graph
resource: urn:ngm:class:weighted-graph
domain: data
description: A weighted graph is a graph in which each edge carries a numeric weight representing cost, distance, capacity or another quantity relevant to the traversal or connection it models. Weights generalise simple adjacency into a richer structure that supports shortest-path, minimum-spanning-tree and flow algorithms. Search algorithms such as A* use edge weights together with a heuristic to find least-c
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:graph-theory
enables:
  - urn:ngm:class:a-star-algorithm
partOf:
  - urn:ngm:class:graph-theory
---

# Weighted Graph

A weighted graph is a graph in which each edge carries a numeric weight representing cost, distance, capacity or another quantity relevant to the traversal or connection it models. Weights generalise simple adjacency into a richer structure that supports shortest-path, minimum-spanning-tree and flow algorithms. Search algorithms such as A* use edge weights together with a heuristic to find least-cost paths efficiently.
