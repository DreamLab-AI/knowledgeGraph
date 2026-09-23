---
okf_version: "0.2"
type: Class
title: Equalized Odds
resource: urn:ngm:class:equalized-odds
domain: ai
description: "A group fairness criterion, introduced by Hardt, Price, and Srebro (2016), requiring that a classifier's true positive rate and false positive rate be equal across protected groups — the prediction must be conditionally independent of group membership given the true outcome; unlike demographic parity it permits base rates to differ between groups, but it conflicts with calibration when base rates "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:fairness-metrics
dependsOn:
  - urn:ngm:class:classification
partOf:
  - urn:ngm:class:algorithmic-fairness
relatedTo:
  - urn:ngm:class:fairness
  - urn:ngm:class:bias-mitigation-techniques
---

# Equalized Odds

A group fairness criterion, introduced by Hardt, Price, and Srebro (2016), requiring that a classifier's true positive rate and false positive rate be equal across protected groups — the prediction must be conditionally independent of group membership given the true outcome; unlike demographic parity it permits base rates to differ between groups, but it conflicts with calibration when base rates differ, and is typically approached by threshold adjustment or constrained training rather than achieved exactly.
