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
  - urn:ngm:class:machine-learning-discipline-model
relatedTo:
  - urn:ngm:class:overfitting
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Stacking

Stacking (stacked generalisation) is a hierarchical ensemble method that trains multiple diverse base models then combines their predictions using a meta-model, which learns the optimal weighting of base model outputs. Unlike bagging and boosting, stacking uses cross-validated out-of-fold predictions to train the meta-model, reducing information leakage and typically achieving superior predictive performance over any single base learner.
