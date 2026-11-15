---
okf_version: "0.2"
type: Class
title: Graph Classification
resource: urn:ngm:class:graph-classification
domain: machine-learning
description: Graph classification is the machine learning task of assigning a label to an entire graph, such as a molecule, social network or program dependency graph, based on its structure and node or edge attributes, in contrast to node classification which labels individual vertices. It is typically performed by a graph neural network that repeatedly aggregates neighbourhood information through message pas
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:classification
partOf:
  - urn:ngm:class:classification
relatedTo:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:node-classification
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Graph Classification

Graph classification is the machine learning task of assigning a label to an entire graph, such as a molecule, social network or program dependency graph, based on its structure and node or edge attributes, in contrast to node classification which labels individual vertices. It is typically performed by a graph neural network that repeatedly aggregates neighbourhood information through message passing before pooling node representations into a single graph-level embedding for classification. Graph classification is applied to problems such as molecular property prediction, protein function prediction and program analysis.
