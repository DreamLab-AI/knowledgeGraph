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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Grokking

A training phenomenon in deep learning, first documented by Power et al. (2022) on algorithmic tasks, in which a network first memorises its training data — reaching perfect training accuracy while test accuracy stays at chance — and then, after continued training far beyond apparent convergence, abruptly transitions to near-perfect generalisation; interpreted as a delayed phase change from a memorising solution to a simpler, structured circuit, typically induced by regularisation such as weight decay.
