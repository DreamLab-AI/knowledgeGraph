---
okf_version: "0.2"
type: Class
title: Parameter
resource: urn:ngm:class:parameter
domain: artificial-intelligence
description: A Parameter in machine learning and AI is a learnable variable internal to a model whose values are adjusted during training to minimise a loss function, as distinguished from hyperparameters, which are configuration choices set before training begins. In neural networks, parameters encompass weight matrices and bias vectors in each layer; the total parameter count (ranging from thousands in small
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:model-training
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:deep-learning
contrastsWith:
  - urn:ngm:class:hyperparameter
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
  - urn:ngm:class:dropout
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:transformer
  - urn:ngm:class:fine-tuning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Parameter

A Parameter in machine learning and AI is a learnable variable internal to a model whose values are adjusted during training to minimise a loss function, as distinguished from hyperparameters, which are configuration choices set before training begins. In neural networks, parameters encompass weight matrices and bias vectors in each layer; the total parameter count (ranging from thousands in small models to hundreds of billions in large language models) is a primary indicator of model capacity and computational cost. Parameters are initialised randomly or via transfer learning, then updated iteratively through gradient-based optimisation algorithms such as stochastic gradient descent, encoding learned representations of the training distribution.
