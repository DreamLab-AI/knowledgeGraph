---
okf_version: "0.2"
type: Class
title: Discriminative Model
resource: urn:ngm:class:discriminative-model
domain: machine-learning
description: A discriminative model is a class of machine learning model that directly learns the conditional probability of a target label given the observed input, rather than modelling how the data itself is generated. It focuses on the decision boundary that separates classes, which often yields strong predictive accuracy on classification and regression tasks. Discriminative models contrast with generativ
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:classification
dependsOn:
  - urn:ngm:class:model-training
implements:
  - urn:ngm:class:support-vector-machine
contrastsWith:
  - urn:ngm:class:generative-model
bridgesTo:
  - urn:ngm:class:generative-model
uses:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:feature-extraction
supports:
  - urn:ngm:class:classification
  - urn:ngm:class:decision-theory
partOf:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:machine-learning
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:probabilistic-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Discriminative Model

A discriminative model is a class of machine learning model that directly learns the conditional probability of a target label given the observed input, rather than modelling how the data itself is generated. It focuses on the decision boundary that separates classes, which often yields strong predictive accuracy on classification and regression tasks. Discriminative models contrast with generative models, which learn the joint distribution of inputs and outputs.
