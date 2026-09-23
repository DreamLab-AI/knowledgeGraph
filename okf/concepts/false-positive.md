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
---

# False Positive

A false positive is an outcome in which a classifier or detection system reports the positive class for an instance that actually belongs to the negative class. It is one of the four cells of a confusion matrix and corresponds to a Type I error in statistical terms. The rate of false positives directly shapes precision and specificity and is traded off against false negatives when a decision threshold is tuned.
