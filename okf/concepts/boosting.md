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
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:overfitting
contrastsWith:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:regularisation
---

# Boosting

A sequential ensemble learning technique that combines multiple weak learners into a strong predictor by iteratively training each new model to correct the errors of its predecessors. Instance weights are adjusted after each round so that misclassified examples receive more attention; the final prediction is a weighted vote across all weak learners. Key algorithms include AdaBoost, Gradient Boosting, XGBoost, LightGBM, and CatBoost.
