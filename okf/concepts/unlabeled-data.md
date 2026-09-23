---
okf_version: "0.2"
type: Class
title: Unlabeled Data
resource: urn:ngm:class:unlabeled-data
domain: machine-learning
description: Unlabeled data is a collection of raw observations, such as images, text, or sensor readings, that lacks the target annotations or ground-truth labels needed for supervised learning. It is typically abundant and inexpensive to collect relative to labelled data, since it requires no manual annotation effort. Unlabeled data is the input substrate for unsupervised learning, self-supervised pretrainin
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:training-data
partOf:
  - urn:ngm:class:training-data
---

# Unlabeled Data

Unlabeled data is a collection of raw observations, such as images, text, or sensor readings, that lacks the target annotations or ground-truth labels needed for supervised learning. It is typically abundant and inexpensive to collect relative to labelled data, since it requires no manual annotation effort. Unlabeled data is the input substrate for unsupervised learning, self-supervised pretraining, and active learning, which selectively queries labels for the most informative examples.
