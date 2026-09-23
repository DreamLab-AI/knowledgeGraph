---
okf_version: "0.2"
type: Class
title: True Positive
resource: urn:ngm:class:true-positive
domain: machine-learning
description: A True Positive is an outcome in binary classification where the model correctly predicts the positive class for an instance that genuinely belongs to that class. It is one of the four cells of the confusion matrix, alongside false positives, true negatives and false negatives. Counts of true positives are central to evaluation metrics such as precision, recall and the F1 score.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:model-performance
requires:
  - urn:ngm:class:classification
enables:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:f1-score
contrastsWith:
  - urn:ngm:class:false-positive
  - urn:ngm:class:true-negative
  - urn:ngm:class:false-negative
bridgesTo:
  - urn:ngm:class:model-evaluation
uses:
  - urn:ngm:class:classifier
supports:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:sensitivity
partOf:
  - urn:ngm:class:confusion-matrix
relatedTo:
  - urn:ngm:class:accuracy
  - urn:ngm:class:roc-curve
  - urn:ngm:class:specificity
---

# True Positive

A True Positive is an outcome in binary classification where the model correctly predicts the positive class for an instance that genuinely belongs to that class. It is one of the four cells of the confusion matrix, alongside false positives, true negatives and false negatives. Counts of true positives are central to evaluation metrics such as precision, recall and the F1 score.
