---
okf_version: "0.2"
type: Class
title: Mixup
resource: urn:ngm:class:mixup
domain: artificial-intelligence
description: A data augmentation technique that creates virtual training samples by computing convex linear combinations of input pairs and their corresponding labels, parameterised by a mixing coefficient drawn from a Beta distribution. Mixup reduces overfitting, improves calibration, and promotes smoother decision boundaries across supervised and semi-supervised learning tasks.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:data-augmentation-strategies
enables:
  - urn:ngm:class:robustness
  - urn:ngm:class:calibration
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:supervised-learning
contrastsWith:
  - urn:ngm:class:label-smoothing
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:deep-learning
---

# Mixup

A data augmentation technique that creates virtual training samples by computing convex linear combinations of input pairs and their corresponding labels, parameterised by a mixing coefficient drawn from a Beta distribution. Mixup reduces overfitting, improves calibration, and promotes smoother decision boundaries across supervised and semi-supervised learning tasks.
