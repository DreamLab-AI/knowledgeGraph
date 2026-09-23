---
okf_version: "0.2"
type: Class
title: False Negative
resource: urn:ngm:class:false-negative
domain: machine-learning
description: "A false negative is a classification error in which a model incorrectly predicts the negative class for an instance that actually belongs to the positive class. It is a fundamental cell of the confusion matrix, often denoted FN, and directly reduces recall (sensitivity). In high-stakes domains such as medical screening or fraud detection, false negatives represent missed true cases and frequently "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-evaluation-results
enables:
  - urn:ngm:class:specificity
contrastsWith:
  - urn:ngm:class:false-positive
  - urn:ngm:class:true-positive
  - urn:ngm:class:true-negative
uses:
  - urn:ngm:class:loss-function
supports:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:fraud-detection
partOf:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:recall
  - urn:ngm:class:sensitivity
  - urn:ngm:class:precision
  - urn:ngm:class:classification
  - urn:ngm:class:f1-score
---

# False Negative

A false negative is a classification error in which a model incorrectly predicts the negative class for an instance that actually belongs to the positive class. It is a fundamental cell of the confusion matrix, often denoted FN, and directly reduces recall (sensitivity). In high-stakes domains such as medical screening or fraud detection, false negatives represent missed true cases and frequently carry asymmetric cost relative to false positives.
