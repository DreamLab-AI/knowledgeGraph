---
okf_version: "0.2"
type: Class
title: Gradient Aggregation
resource: urn:ngm:class:gradient-aggregation
domain: machine-learning
description: Gradient aggregation is the step in distributed machine learning where gradients computed independently on different workers or data shards are combined into a single update for the shared model. Typically realised by summing or averaging local gradients, it lets parallel workers train a consistent global model despite operating on disjoint data. The aggregation strategy and its communication patt
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-training
hasPart:
  - urn:ngm:class:all-reduce
  - urn:ngm:class:collective-communication
requires:
  - urn:ngm:class:collective-communication
enables:
  - urn:ngm:class:federated-learning
dependsOn:
  - urn:ngm:class:parameter-server
implements:
  - urn:ngm:class:data-parallelism
contrastsWith:
  - urn:ngm:class:model-parallelism
bridgesTo:
  - urn:ngm:class:gradient-compression
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
supports:
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:data-parallelism
---

# Gradient Aggregation

Gradient aggregation is the step in distributed machine learning where gradients computed independently on different workers or data shards are combined into a single update for the shared model. Typically realised by summing or averaging local gradients, it lets parallel workers train a consistent global model despite operating on disjoint data. The aggregation strategy and its communication pattern strongly influence training throughput, convergence and, in federated settings, privacy.
