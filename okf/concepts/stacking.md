---
okf_version: "0.2"
type: Class
title: Stacking
resource: urn:ngm:class:stacking
domain: artificial-intelligence
description: "Stacking (stacked generalisation) is a hierarchical ensemble method that trains multiple diverse base models then combines their predictions using a meta-model, which learns the optimal weighting of base model outputs. Unlike bagging and boosting, stacking uses cross-validated out-of-fold predictions to train the meta-model, reducing information leakage and typically achieving superior predictive "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:ensemble-methods
requires:
  - urn:ngm:class:ensemble-methods
contrastsWith:
  - urn:ngm:class:bagging
  - urn:ngm:class:boosting
uses:
  - urn:ngm:class:machine-learning-model
relatedTo:
  - urn:ngm:class:overfitting
---

# Stacking

Stacking (stacked generalisation) is a hierarchical ensemble method that trains multiple diverse base models then combines their predictions using a meta-model, which learns the optimal weighting of base model outputs. Unlike bagging and boosting, stacking uses cross-validated out-of-fold predictions to train the meta-model, reducing information leakage and typically achieving superior predictive performance over any single base learner.
