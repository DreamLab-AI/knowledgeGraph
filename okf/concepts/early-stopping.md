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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Early Stopping

A regularisation technique that terminates model training when validation performance ceases to improve for a configurable number of epochs (the patience parameter), preventing overfitting by restoring the best checkpoint before performance degraded. Early stopping balances training progress against generalisation to unseen data and is most effective when combined with other regularisation techniques such as dropout and weight decay.
