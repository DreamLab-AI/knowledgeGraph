---
okf_version: "0.2"
type: Class
title: Graph Attention Network
resource: urn:ngm:class:graph-attention-network
domain: machine-learning
description: A graph attention network is a graph neural network architecture that aggregates information from a node's neighbours using learned attention coefficients, allowing the model to weight each neighbour's contribution according to its relevance. By replacing fixed or degree-normalised aggregation with attention, it adapts to local structure without requiring knowledge of the full graph in advance. Mu
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graph-neural-network
hasPart:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:message-passing
requires:
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:node-classification
  - urn:ngm:class:link-prediction
implements:
  - urn:ngm:class:message-passing
contrastsWith:
  - urn:ngm:class:graph-convolutional-network
bridgesTo:
  - urn:ngm:class:attention-mechanism
uses:
  - urn:ngm:class:message-passing
  - urn:ngm:class:self-attention
supports:
  - urn:ngm:class:node-classification
partOf:
  - urn:ngm:class:graph-neural-network
relatedTo:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:graph-convolutional-network
  - urn:ngm:class:self-attention
---

# Graph Attention Network

A graph attention network is a graph neural network architecture that aggregates information from a node's neighbours using learned attention coefficients, allowing the model to weight each neighbour's contribution according to its relevance. By replacing fixed or degree-normalised aggregation with attention, it adapts to local structure without requiring knowledge of the full graph in advance. Multi-head attention stabilises learning and lets the model capture several relational patterns simultaneously.
