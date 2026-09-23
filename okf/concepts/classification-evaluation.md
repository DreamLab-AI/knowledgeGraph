---
okf_version: "0.2"
type: Class
title: Classification Evaluation
resource: urn:ngm:class:classification-evaluation
domain: machine-learning
description: Classification evaluation is the set of methods used to quantify how well a classifier's predicted labels match ground-truth labels, typically summarised through metrics derived from a confusion matrix such as precision, recall, and F1 score. It distinguishes between overall accuracy, which can be misleading under class imbalance, and per-class metrics that expose asymmetric error costs. Classific
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:evaluation-metric
partOf:
  - urn:ngm:class:evaluation-metric
---

# Classification Evaluation

Classification evaluation is the set of methods used to quantify how well a classifier's predicted labels match ground-truth labels, typically summarised through metrics derived from a confusion matrix such as precision, recall, and F1 score. It distinguishes between overall accuracy, which can be misleading under class imbalance, and per-class metrics that expose asymmetric error costs. Classification evaluation guides model selection, threshold tuning, and reporting of deployed classifier performance.
