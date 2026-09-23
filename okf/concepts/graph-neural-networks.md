---
okf_version: "0.2"
type: Class
title: Graph Neural Networks
resource: urn:ngm:class:graph-neural-networks
domain: machine-learning
description: A family of neural network architectures that operate directly on graph-structured data, computing node, edge or graph representations by iteratively exchanging information along edges through message-passing schemes.
maturity: growing
quality: 0.72
is-a:
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:graph-convolutional-network
  - urn:ngm:class:graph-attention-network
requires:
  - urn:ngm:class:message-passing
  - urn:ngm:class:graph-theory
  - urn:ngm:class:adjacency-matrix
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:node-classification
  - urn:ngm:class:link-prediction
  - urn:ngm:class:graph-classification
  - urn:ngm:class:recommendation-systems
dependsOn:
  - urn:ngm:class:graph-structured-data
  - urn:ngm:class:embedding
contrastsWith:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer
bridgesTo:
  - urn:ngm:class:social-network-analysis
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:supply-chain-optimisation
  - urn:ngm:class:deep-learning-domain
uses:
  - urn:ngm:class:backpropagation
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:semi-supervised-learning
---

# Graph Neural Networks

A family of neural network architectures that operate directly on graph-structured data, computing node, edge or graph representations by iteratively exchanging information along edges through message-passing schemes.
