---
okf_version: "0.2"
type: Class
title: Label Smoothing
resource: urn:ngm:class:label-smoothing
domain: spatial-computing
description: A regularisation technique that replaces hard one-hot labels with soft targets by allocating small probability mass to incorrect classes. Label smoothing prevents overconfident predictions and improves model calibration and generalisation.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-content-and-assets
enables:
  - urn:ngm:class:regularisation
contrastsWith:
  - urn:ngm:class:overfitting
uses:
  - urn:ngm:class:loss-function
  - urn:ngm:class:training
relatedTo:
  - urn:ngm:class:deep-learning
---

# Label Smoothing

A regularisation technique that replaces hard one-hot labels with soft targets by allocating small probability mass to incorrect classes. Label smoothing prevents overconfident predictions and improves model calibration and generalisation.
