---
okf_version: "0.2"
type: Class
title: Model Complexity
resource: urn:ngm:class:model-complexity
domain: machine-learning
description: "Model complexity is a measure of the capacity of a machine-learning model to fit varied patterns in data, governed by factors such as the number of parameters, the richness of the hypothesis space, and the flexibility of the functional form. Higher complexity lets a model capture intricate structure but raises the risk of overfitting, while lower complexity risks underfitting. Managing complexity "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:number-of-parameters
  - urn:ngm:class:vc-dimension
  - urn:ngm:class:model-capacity
requires:
  - urn:ngm:class:regularisation
enables:
  - urn:ngm:class:model-capacity
dependsOn:
  - urn:ngm:class:number-of-parameters
  - urn:ngm:class:hyperparameter
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
uses:
  - urn:ngm:class:cross-validation
supports:
  - urn:ngm:class:generalisation
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:occams-razor
  - urn:ngm:class:occam-s-razor
---

# Model Complexity

Model complexity is a measure of the capacity of a machine-learning model to fit varied patterns in data, governed by factors such as the number of parameters, the richness of the hypothesis space, and the flexibility of the functional form. Higher complexity lets a model capture intricate structure but raises the risk of overfitting, while lower complexity risks underfitting. Managing complexity is central to achieving good generalisation on unseen data.
