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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Mixup

A data augmentation technique that creates virtual training samples by computing convex linear combinations of input pairs and their corresponding labels, parameterised by a mixing coefficient drawn from a Beta distribution. Mixup reduces overfitting, improves calibration, and promotes smoother decision boundaries across supervised and semi-supervised learning tasks.
