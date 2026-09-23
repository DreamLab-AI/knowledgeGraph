---
okf_version: "0.2"
type: Class
title: Threshold Optimisation
resource: urn:ngm:class:threshold-optimisation
domain: artificial-intelligence
description: Threshold optimisation is the process of selecting the decision boundary applied to a model's continuous scores so that discrete predictions best satisfy a chosen objective. By tuning where a probability or score is converted into a class label, practitioners trade off precision against recall, manage class imbalance, and satisfy fairness or cost constraints. It is a post-hoc technique that adjust
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:performance-metrics
hasPart:
  - urn:ngm:class:classification-threshold
  - urn:ngm:class:decision-threshold
enables:
  - urn:ngm:class:fairness-metrics
  - urn:ngm:class:bias-mitigation-techniques
dependsOn:
  - urn:ngm:class:model-calibration
implements:
  - urn:ngm:class:bias-mitigation-techniques
contrastsWith:
  - urn:ngm:class:equalized-odds
bridgesTo:
  - urn:ngm:class:fairness-in-machine-learning
uses:
  - urn:ngm:class:roc-curve
  - urn:ngm:class:model-calibration
supports:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:classification-threshold
  - urn:ngm:class:machine-learning-model
---

# Threshold Optimisation

Threshold optimisation is the process of selecting the decision boundary applied to a model's continuous scores so that discrete predictions best satisfy a chosen objective. By tuning where a probability or score is converted into a class label, practitioners trade off precision against recall, manage class imbalance, and satisfy fairness or cost constraints. It is a post-hoc technique that adjusts operating points without retraining the underlying model.
