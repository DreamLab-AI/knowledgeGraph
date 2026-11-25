---
okf_version: "0.2"
type: Class
title: False Positive
resource: urn:ngm:class:false-positive
domain: machine-learning
description: A false positive is an outcome in which a classifier or detection system reports the positive class for an instance that actually belongs to the negative class. It is one of the four cells of a confusion matrix and corresponds to a Type I error in statistical terms. The rate of false positives directly shapes precision and specificity and is traded off against false negatives when a decision thres
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:classification
dependsOn:
  - urn:ngm:class:classification
contrastsWith:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:specificity
uses:
  - urn:ngm:class:classification
  - urn:ngm:class:confusion-matrix
supports:
  - urn:ngm:class:model-evaluation
partOf:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:specificity
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:intrusion-detection-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# False Positive

A false positive is an outcome in which a classifier or detection system reports the positive class for an instance that actually belongs to the negative class. It is one of the four cells of a confusion matrix and corresponds to a Type I error in statistical terms. The rate of false positives directly shapes precision and specificity and is traded off against false negatives when a decision threshold is tuned.
