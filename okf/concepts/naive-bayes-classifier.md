---
okf_version: "0.2"
type: Class
title: Naive Bayes Classifier
resource: urn:ngm:class:naive-bayes-classifier
domain: machine-learning
description: A naive Bayes classifier is a probabilistic classification algorithm that applies Bayes' theorem under the simplifying (naive) assumption that features are conditionally independent given the class label. Despite this assumption rarely holding exactly in practice, the classifier is computationally efficient, requires little training data, and performs competitively on tasks such as text classifica
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:bayesian-decision-theory
uses:
  - urn:ngm:class:bayes-theorem
---

# Naive Bayes Classifier

A naive Bayes classifier is a probabilistic classification algorithm that applies Bayes' theorem under the simplifying (naive) assumption that features are conditionally independent given the class label. Despite this assumption rarely holding exactly in practice, the classifier is computationally efficient, requires little training data, and performs competitively on tasks such as text classification and spam filtering. It estimates class-conditional feature distributions from training data and selects the class maximising posterior probability for a new observation.
