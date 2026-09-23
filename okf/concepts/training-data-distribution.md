---
okf_version: "0.2"
type: Class
title: Training Data Distribution
resource: urn:ngm:class:training-data-distribution
domain: ai
description: "Training data distribution refers to the statistical properties and compositional characteristics of the dataset used to train a machine learning model, including the relative frequencies of classes, the coverage of input feature space, the presence of rare or tail events, and the demographic or domain balance of examples. The training data distribution determines what patterns a model can learn, "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:training-dataset
uses:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:data-augmentation-strategies
  - urn:ngm:class:data-collection
relatedTo:
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:bias
  - urn:ngm:class:algorithmic-bias
  - urn:ngm:class:fairness
---

# Training Data Distribution

Training data distribution refers to the statistical properties and compositional characteristics of the dataset used to train a machine learning model, including the relative frequencies of classes, the coverage of input feature space, the presence of rare or tail events, and the demographic or domain balance of examples. The training data distribution determines what patterns a model can learn, what it will generalise from, and where it will fail: a model trained on a distribution that differs from the deployment distribution will exhibit degraded performance due to covariate shift or prior probability shift. Deliberate control of training data distribution — through curation, resampling, augmentation, and synthetic data generation — is a primary lever for improving model robustness, fairness, and safety.
