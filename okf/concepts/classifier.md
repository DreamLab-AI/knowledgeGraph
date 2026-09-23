---
okf_version: "0.2"
type: Class
title: Classifier
resource: urn:ngm:class:classifier
domain: machine-learning
description: A model or algorithm that assigns input instances to one of a finite set of discrete categories, typically by learning a decision function from labelled training data. Classifiers range from linear models (logistic regression, linear SVMs) through tree ensembles to deep neural networks, and most output class probabilities or scores that a decision threshold converts into hard labels. Their perform
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:ai-model
dependsOn:
  - urn:ngm:class:supervised-learning
implements:
  - urn:ngm:class:classification
contrastsWith:
  - urn:ngm:class:deep-generative-model
uses:
  - urn:ngm:class:classification-threshold
---

# Classifier

A model or algorithm that assigns input instances to one of a finite set of discrete categories, typically by learning a decision function from labelled training data. Classifiers range from linear models (logistic regression, linear SVMs) through tree ensembles to deep neural networks, and most output class probabilities or scores that a decision threshold converts into hard labels. Their performance is characterised through confusion-matrix quantities such as true and false positives, precision, recall, and ROC analysis.
