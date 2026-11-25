---
okf_version: "0.2"
type: Class
title: Support Vector Machine
resource: urn:ngm:class:support-vector-machine
domain: machine-learning
description: A support vector machine (SVM) is a supervised learning model that finds the hyperplane separating classes with the maximum margin between the nearest training examples, called support vectors. Through the kernel trick it can construct non-linear decision boundaries by implicitly mapping inputs into higher-dimensional feature spaces. SVMs are grounded in statistical learning theory and are effecti
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:supervised-learning
requires:
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:model-evaluation
implements:
  - urn:ngm:class:classification
  - urn:ngm:class:regression
contrastsWith:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:optimisation-algorithm
supports:
  - urn:ngm:class:machine-learning
partOf:
  - urn:ngm:class:supervised-learning
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:classification
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Support Vector Machine

A support vector machine (SVM) is a supervised learning model that finds the hyperplane separating classes with the maximum margin between the nearest training examples, called support vectors. Through the kernel trick it can construct non-linear decision boundaries by implicitly mapping inputs into higher-dimensional feature spaces. SVMs are grounded in statistical learning theory and are effective for classification and regression on small to medium, high-dimensional datasets.
