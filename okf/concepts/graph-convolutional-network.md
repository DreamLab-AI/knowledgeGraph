---
okf_version: "0.2"
type: Class
title: Graph Convolutional Network
resource: urn:ngm:class:graph-convolutional-network
domain: machine-learning
description: "A graph neural network architecture that generalises convolution to graph-structured data: each layer updates every node's feature vector by aggregating the degree-normalised features of its neighbours and transforming them with a shared learned weight matrix, so stacked layers propagate information across progressively larger neighbourhoods; formalised by Kipf and Welling in 2017 as a first-order"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:graph-neural-network
contrastsWith:
  - urn:ngm:class:graph-attention-network
uses:
  - urn:ngm:class:neural-network
---

# Graph Convolutional Network

A graph neural network architecture that generalises convolution to graph-structured data: each layer updates every node's feature vector by aggregating the degree-normalised features of its neighbours and transforming them with a shared learned weight matrix, so stacked layers propagate information across progressively larger neighbourhoods; formalised by Kipf and Welling in 2017 as a first-order approximation of spectral graph convolution, the GCN is the canonical baseline for node classification, link prediction, and graph-level learning.
