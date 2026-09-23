---
okf_version: "0.2"
type: Class
title: Early Stopping
resource: urn:ngm:class:early-stopping
domain: spatial-computing
description: A regularisation technique that terminates model training when validation performance ceases to improve for a configurable number of epochs (the patience parameter), preventing overfitting by restoring the best checkpoint before performance degraded. Early stopping balances training progress against generalisation to unseen data and is most effective when combined with other regularisation techniq
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:regularisation
  - urn:ngm:class:epoch
contrastsWith:
  - urn:ngm:class:overfitting
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:batch-size
---

# Early Stopping

A regularisation technique that terminates model training when validation performance ceases to improve for a configurable number of epochs (the patience parameter), preventing overfitting by restoring the best checkpoint before performance degraded. Early stopping balances training progress against generalisation to unseen data and is most effective when combined with other regularisation techniques such as dropout and weight decay.
