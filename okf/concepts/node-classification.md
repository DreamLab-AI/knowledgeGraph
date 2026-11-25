---
okf_version: "0.2"
type: Class
title: Node Classification
resource: urn:ngm:class:node-classification
domain: machine-learning
description: Node classification is a graph machine learning task that predicts a categorical label for each vertex in a graph, typically using the graph's structure together with node and edge features. It is commonly solved with graph neural networks, which propagate and aggregate neighbourhood information across message-passing layers to produce per-node predictions. Applications include fraud detection, ci
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:classification
requires:
  - urn:ngm:class:graph-neural-network
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Node Classification

Node classification is a graph machine learning task that predicts a categorical label for each vertex in a graph, typically using the graph's structure together with node and edge features. It is commonly solved with graph neural networks, which propagate and aggregate neighbourhood information across message-passing layers to produce per-node predictions. Applications include fraud detection, citation-network labelling and social-network role inference.
