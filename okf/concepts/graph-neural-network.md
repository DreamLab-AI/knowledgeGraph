---
okf_version: "0.2"
type: Class
title: Graph Neural Network
resource: urn:ngm:class:graph-neural-network
domain: machine-learning
description: A Graph Neural Network (GNN) is a deep learning architecture that operates directly on graph-structured data by iteratively propagating and aggregating feature information across node neighbourhoods. GNNs generalise convolutional and attention mechanisms to non-Euclidean domains, learning node, edge, and graph-level representations suitable for tasks including node classification, link prediction,
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:graph-convolutional-network
  - urn:ngm:class:graph-attention-network
requires:
  - urn:ngm:class:graph-structured-data
  - urn:ngm:class:adjacency-matrix
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:link-prediction
  - urn:ngm:class:node-classification
  - urn:ngm:class:graph-classification
  - urn:ngm:class:recommendation-system
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:message-passing-neural-network
  - urn:ngm:class:spectral-graph-theory
contrastsWith:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:knowledge-graphing
  - urn:ngm:class:fraud-detection
uses:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:deep-learning
  - urn:ngm:class:message-passing
  - urn:ngm:class:graph-attention-mechanism
  - urn:ngm:class:node-embedding
supports:
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:social-network-analysis
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:graph-rag
---

# Graph Neural Network

A Graph Neural Network (GNN) is a deep learning architecture that operates directly on graph-structured data by iteratively propagating and aggregating feature information across node neighbourhoods. GNNs generalise convolutional and attention mechanisms to non-Euclidean domains, learning node, edge, and graph-level representations suitable for tasks including node classification, link prediction, and graph classification across domains such as knowledge graphs, social networks, molecular modelling, and recommendation systems.
