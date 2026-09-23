---
okf_version: "0.2"
type: Class
title: Error Analysis
resource: urn:ngm:class:error-analysis
domain: machine-learning
description: "Error analysis is the systematic examination of a model's mistakes to identify patterns, root causes and subgroups where performance is weakest. It typically involves inspecting misclassified examples, confusion matrices and numerical error metrics to distinguish data issues from modelling issues. The findings guide targeted fixes such as additional training data, feature changes or architectural "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:model-evaluation
enables:
  - urn:ngm:class:model-debugging
uses:
  - urn:ngm:class:confusion-matrix
partOf:
  - urn:ngm:class:model-evaluation
---

# Error Analysis

Error analysis is the systematic examination of a model's mistakes to identify patterns, root causes and subgroups where performance is weakest. It typically involves inspecting misclassified examples, confusion matrices and numerical error metrics to distinguish data issues from modelling issues. The findings guide targeted fixes such as additional training data, feature changes or architectural adjustments.
