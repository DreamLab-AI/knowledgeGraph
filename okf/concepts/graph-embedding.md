---
okf_version: "0.2"
type: Class
title: Graph Embedding
resource: urn:ngm:class:graph-embedding
domain: ai
description: Graph embedding is a family of representation-learning techniques that map the nodes, edges, or whole subgraphs of a graph into a continuous low-dimensional vector space while preserving structural and relational properties. The learned vectors place topologically or semantically similar elements close together, enabling machine-learning models to operate on graph-structured data. Methods range fr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:representation-learning
hasPart:
  - urn:ngm:class:random-walk
  - urn:ngm:class:embedding
enables:
  - urn:ngm:class:link-prediction
  - urn:ngm:class:node-classification
dependsOn:
  - urn:ngm:class:representation-learning
implements:
  - urn:ngm:class:dimensionality-reduction
contrastsWith:
  - urn:ngm:class:dimensionality-reduction
uses:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:random-walk
supports:
  - urn:ngm:class:network-analysis
partOf:
  - urn:ngm:class:network-analysis
relatedTo:
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:word-embedding
  - urn:ngm:class:knowledge-graph
---

# Graph Embedding

Graph embedding is a family of representation-learning techniques that map the nodes, edges, or whole subgraphs of a graph into a continuous low-dimensional vector space while preserving structural and relational properties. The learned vectors place topologically or semantically similar elements close together, enabling machine-learning models to operate on graph-structured data. Methods range from random-walk approaches to neural graph encoders.
