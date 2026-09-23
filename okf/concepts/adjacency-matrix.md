---
okf_version: "0.2"
type: Class
title: Adjacency Matrix
resource: urn:ngm:class:adjacency-matrix
domain: data
description: An adjacency matrix is a square matrix representation of a graph in which the entry at row i and column j records whether, or how strongly, vertex i is connected to vertex j. For a graph of n vertices it is an n-by-n matrix, symmetric for undirected graphs and potentially weighted to encode edge costs. It is a foundational data structure for graph algorithms, spectral analysis and graph neural net
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graph-representation
requires:
  - urn:ngm:class:graph-theory
enables:
  - urn:ngm:class:network-analysis
  - urn:ngm:class:graph-neural-network
dependsOn:
  - urn:ngm:class:linear-algebra
implements:
  - urn:ngm:class:graph-representation
contrastsWith:
  - urn:ngm:class:sparse-matrix
bridgesTo:
  - urn:ngm:class:graph-neural-network
uses:
  - urn:ngm:class:matrix
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:pagerank
  - urn:ngm:class:shortest-path
partOf:
  - urn:ngm:class:graph-theory
relatedTo:
  - urn:ngm:class:sparse-matrix
  - urn:ngm:class:network-analysis
---

# Adjacency Matrix

An adjacency matrix is a square matrix representation of a graph in which the entry at row i and column j records whether, or how strongly, vertex i is connected to vertex j. For a graph of n vertices it is an n-by-n matrix, symmetric for undirected graphs and potentially weighted to encode edge costs. It is a foundational data structure for graph algorithms, spectral analysis and graph neural networks.
