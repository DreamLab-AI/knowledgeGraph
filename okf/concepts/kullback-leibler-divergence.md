---
okf_version: "0.2"
type: Class
title: Kullback-Leibler Divergence
resource: urn:ngm:class:kullback-leibler-divergence
domain: machine-learning
description: The Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how much one probability distribution differs from a second, reference distribution, expressed as the expected excess number of bits required to encode samples from the first using a code optimised for the second. It is non-negative, equal to zero only when the two distributions are identical, and is asymmetr
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:information-theory
hasPart:
  - urn:ngm:class:entropy
requires:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:statistics
enables:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:model-training
implements:
  - urn:ngm:class:loss-function
uses:
  - urn:ngm:class:probability-theory
supports:
  - urn:ngm:class:vae
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:reinforcement-learning
partOf:
  - urn:ngm:class:information-theory
relatedTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:deep-learning
  - urn:ngm:class:generative-model
---

# Kullback-Leibler Divergence

The Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how much one probability distribution differs from a second, reference distribution, expressed as the expected excess number of bits required to encode samples from the first using a code optimised for the second. It is non-negative, equal to zero only when the two distributions are identical, and is asymmetric, so it is a divergence rather than a true metric. KL divergence is central to machine learning, appearing in cross-entropy loss, variational inference, the evidence lower bound of variational autoencoders, and regularisation of policy updates in reinforcement learning.
