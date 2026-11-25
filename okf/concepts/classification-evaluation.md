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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Classification Evaluation

Classification evaluation is the set of methods used to quantify how well a classifier's predicted labels match ground-truth labels, typically summarised through metrics derived from a confusion matrix such as precision, recall, and F1 score. It distinguishes between overall accuracy, which can be misleading under class imbalance, and per-class metrics that expose asymmetric error costs. Classification evaluation guides model selection, threshold tuning, and reporting of deployed classifier performance.
