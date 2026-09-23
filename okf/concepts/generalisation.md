---
okf_version: "0.2"
type: Class
title: Generalisation
resource: urn:ngm:class:generalisation
domain: machine-learning
description: Generalisation is the capacity of a machine-learning model to perform accurately on previously unseen data drawn from the same distribution as its training set, rather than merely memorising training examples. It is the central objective of supervised learning and is quantified by the gap between training and held-out performance. Good generalisation reflects a model that has captured the underlyi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-research-area
requires:
  - urn:ngm:class:regularisation
enables:
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:inductive-bias
contrastsWith:
  - urn:ngm:class:overfitting
bridgesTo:
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:cross-validation
supports:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:model-performance
  - urn:ngm:class:machine-learning-model
---

# Generalisation

Generalisation is the capacity of a machine-learning model to perform accurately on previously unseen data drawn from the same distribution as its training set, rather than merely memorising training examples. It is the central objective of supervised learning and is quantified by the gap between training and held-out performance. Good generalisation reflects a model that has captured the underlying regularities of a task instead of spurious correlations.
