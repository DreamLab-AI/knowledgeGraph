---
okf_version: "0.2"
type: Class
title: Training Instability
resource: urn:ngm:class:training-instability
domain: artificial-intelligence
description: A set of pathological behaviours during neural network optimisation — including exploding gradients, vanishing gradients, loss divergence, and oscillating loss curves — that prevent a model from converging to a useful solution. Training instability arises from interactions between architecture depth, learning rate, batch size, and numerical precision, and is mitigated through techniques such as gr
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:gradient-clipping
  - urn:ngm:class:gradient-descent
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:loss-function
  - urn:ngm:class:hyperparameter
contrastsWith:
  - urn:ngm:class:overfitting
uses:
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:model-training
  - urn:ngm:class:deep-learning
  - urn:ngm:class:mixed-precision-training
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Training Instability

A set of pathological behaviours during neural network optimisation — including exploding gradients, vanishing gradients, loss divergence, and oscillating loss curves — that prevent a model from converging to a useful solution. Training instability arises from interactions between architecture depth, learning rate, batch size, and numerical precision, and is mitigated through techniques such as gradient clipping, mixed-precision training, careful initialisation, and adaptive optimisers.
