---
okf_version: "0.2"
type: Class
title: Membership Inference
resource: urn:ngm:class:membership-inference
domain: artificial-intelligence
description: A privacy attack that determines wher a specific data point was included in a model's training dataset by analyzing the model's behavior on that input, potentially revealing sensitive information about individuals' participation in datasets.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:training-data
contrastsWith:
  - urn:ngm:class:differential-privacy
relatedTo:
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:model-inversion
  - urn:ngm:class:privacy
  - urn:ngm:class:data-protection
---

# Membership Inference

A privacy attack that determines wher a specific data point was included in a model's training dataset by analyzing the model's behavior on that input, potentially revealing sensitive information about individuals' participation in datasets.
