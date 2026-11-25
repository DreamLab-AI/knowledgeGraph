---
okf_version: "0.2"
type: Class
title: Gradient Boosted Trees
resource: urn:ngm:class:gradient-boosted-trees
domain: ai
description: Gradient boosted trees are an ensemble learning method that builds a strong predictor by sequentially adding shallow decision trees, each fitted to the negative gradient of a differentiable loss with respect to the current model's predictions. By combining many weak learners in an additive, stage-wise manner, the method achieves high accuracy on structured and tabular data while controlling overfi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:boosting
hasPart:
  - urn:ngm:class:decision-tree
  - urn:ngm:class:loss-function
requires:
  - urn:ngm:class:loss-function
  - urn:ngm:class:supervised-learning
enables:
  - urn:ngm:class:regression
  - urn:ngm:class:classification
implements:
  - urn:ngm:class:boosting
  - urn:ngm:class:supervised-learning
contrastsWith:
  - urn:ngm:class:random-forest
uses:
  - urn:ngm:class:decision-tree
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:feature-importance
partOf:
  - urn:ngm:class:machine-learning
relatedTo:
  - urn:ngm:class:boosting
  - urn:ngm:class:machine-learning
  - urn:ngm:class:feature-importance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Gradient Boosted Trees

Gradient boosted trees are an ensemble learning method that builds a strong predictor by sequentially adding shallow decision trees, each fitted to the negative gradient of a differentiable loss with respect to the current model's predictions. By combining many weak learners in an additive, stage-wise manner, the method achieves high accuracy on structured and tabular data while controlling overfitting through regularisation, shrinkage and subsampling. It is among the most effective approaches for supervised regression and classification on heterogeneous features.
