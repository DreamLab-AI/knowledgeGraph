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
  - urn:ngm:class:machine-learning-discipline
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
---

# Deep Knowledge Tracing

A machine-learning approach to modelling student knowledge, introduced by Piech et al. in 2015, that feeds a learner's full sequence of exercise interactions into a recurrent neural network which maintains a latent state of mastery and predicts the probability of answering the next item correctly, outperforming Bayesian Knowledge Tracing by learning inter-skill structure and forgetting dynamics directly from data at the cost of interpretability.
