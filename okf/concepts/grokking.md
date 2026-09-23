---
okf_version: "0.2"
type: Class
title: Grokking
resource: urn:ngm:class:grokking
domain: machine-learning
description: A training phenomenon in deep learning, first documented by Power et al. (2022) on algorithmic tasks, in which a network first memorises its training data — reaching perfect training accuracy while test accuracy stays at chance — and then, after continued training far beyond apparent convergence, abruptly transitions to near-perfect generalisation; interpreted as a delayed phase change from a memo
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:generalisation
dependsOn:
  - urn:ngm:class:regularisation
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:benign-overfitting
  - urn:ngm:class:emergent-capabilities
---

# Grokking

A training phenomenon in deep learning, first documented by Power et al. (2022) on algorithmic tasks, in which a network first memorises its training data — reaching perfect training accuracy while test accuracy stays at chance — and then, after continued training far beyond apparent convergence, abruptly transitions to near-perfect generalisation; interpreted as a delayed phase change from a memorising solution to a simpler, structured circuit, typically induced by regularisation such as weight decay.
