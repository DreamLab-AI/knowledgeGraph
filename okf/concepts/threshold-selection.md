---
okf_version: "0.2"
type: Class
title: Threshold Selection
resource: urn:ngm:class:threshold-selection
domain: machine-learning
description: Threshold selection is the process of choosing the decision boundary that converts a classifier's continuous scores or probabilities into discrete class labels. The chosen threshold trades off competing error types, moving along the trade-off captured by the ROC and precision-recall curves. Appropriate selection depends on the relative costs of false positives and false negatives and on class prev
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:classification
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:specificity
bridgesTo:
  - urn:ngm:class:statistical-inference
uses:
  - urn:ngm:class:roc-curve
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:confusion-matrix
supports:
  - urn:ngm:class:supervised-learning
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:f1-score
  - urn:ngm:class:evaluation-metric
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Threshold Selection

Threshold selection is the process of choosing the decision boundary that converts a classifier's continuous scores or probabilities into discrete class labels. The chosen threshold trades off competing error types, moving along the trade-off captured by the ROC and precision-recall curves. Appropriate selection depends on the relative costs of false positives and false negatives and on class prevalence in the deployment setting.
