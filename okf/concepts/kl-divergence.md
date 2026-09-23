---
okf_version: "0.2"
type: Class
title: Kl Divergence
resource: urn:ngm:class:kl-divergence
domain: artificial-intelligence
description: Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how one probability distribution differs from a second reference distribution, expressed as the expected excess surprise from using the wrong distribution. It is non-negative and zero only when the two distributions coincide, but it is asymmetric and does not satisfy the triangle inequality, so it is not a true m
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:information-theory
requires:
  - urn:ngm:class:probability-distribution
enables:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:direct-preference-optimisation
implements:
  - urn:ngm:class:loss-function
contrastsWith:
  - urn:ngm:class:entropy
bridgesTo:
  - urn:ngm:class:variational-inference
uses:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:entropy
supports:
  - urn:ngm:class:loss-function
  - urn:ngm:class:reinforcement-learning-from-human-feedback
partOf:
  - urn:ngm:class:information-theory
relatedTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:generative-model
  - urn:ngm:class:entropy
---

# Kl Divergence

Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how one probability distribution differs from a second reference distribution, expressed as the expected excess surprise from using the wrong distribution. It is non-negative and zero only when the two distributions coincide, but it is asymmetric and does not satisfy the triangle inequality, so it is not a true metric. KL divergence is central to maximum-likelihood estimation, variational inference and many machine-learning objectives, where minimising it aligns a model distribution with a target. In reinforcement learning from human feedback it acts as a regulariser that keeps a fine-tuned policy close to its reference.
