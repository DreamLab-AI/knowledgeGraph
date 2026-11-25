---
okf_version: "0.2"
type: Class
title: Boosting
resource: urn:ngm:class:boosting
domain: artificial-intelligence
description: A sequential ensemble learning technique that combines multiple weak learners into a strong predictor by iteratively training each new model to correct the errors of its predecessors. Instance weights are adjusted after each round so that misclassified examples receive more attention; the final prediction is a weighted vote across all weak learners. Key algorithms include AdaBoost, Gradient Boosti
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:ensemble-methods
requires:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:overfitting
contrastsWith:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:regularisation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Boosting

A sequential ensemble learning technique that combines multiple weak learners into a strong predictor by iteratively training each new model to correct the errors of its predecessors. Instance weights are adjusted after each round so that misclassified examples receive more attention; the final prediction is a weighted vote across all weak learners. Key algorithms include AdaBoost, Gradient Boosting, XGBoost, LightGBM, and CatBoost.
