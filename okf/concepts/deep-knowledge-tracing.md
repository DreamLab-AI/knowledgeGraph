---
okf_version: "0.2"
type: Class
title: Deep Knowledge Tracing
resource: urn:ngm:class:deep-knowledge-tracing
domain: machine-learning
description: A machine-learning approach to modelling student knowledge, introduced by Piech et al. in 2015, that feeds a learner's full sequence of exercise interactions into a recurrent neural network which maintains a latent state of mastery and predicts the probability of answering the next item correctly, outperforming Bayesian Knowledge Tracing by learning inter-skill structure and forgetting dynamics di
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning
enables:
  - urn:ngm:class:adaptive-learning
  - urn:ngm:class:intelligent-tutoring-system
contrastsWith:
  - urn:ngm:class:bayesian-knowledge-tracing
uses:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:lstm
relatedTo:
  - urn:ngm:class:educational-technology
  - urn:ngm:class:deep-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Deep Knowledge Tracing

A machine-learning approach to modelling student knowledge, introduced by Piech et al. in 2015, that feeds a learner's full sequence of exercise interactions into a recurrent neural network which maintains a latent state of mastery and predicts the probability of answering the next item correctly, outperforming Bayesian Knowledge Tracing by learning inter-skill structure and forgetting dynamics directly from data at the cost of interpretability.
