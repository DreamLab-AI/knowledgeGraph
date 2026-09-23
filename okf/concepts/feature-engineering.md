---
okf_version: "0.2"
type: Class
title: Feature Engineering
resource: urn:ngm:class:feature-engineering
domain: machine-learning
description: The process of using domain knowledge and statistical transformations to construct, select, and encode input variables from raw data so that they better represent the underlying predictive signal for machine learning models. Techniques include polynomial expansion, normalisation, temporal feature extraction, embedding of categorical variables, and dimensionality reduction via PCA or autoencoders.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:data-preprocessing
hasPart:
  - urn:ngm:class:feature-selection
  - urn:ngm:class:dimensionality-reduction
requires:
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:exploratory-data-analysis
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-training
  - urn:ngm:class:predictive-modelling
dependsOn:
  - urn:ngm:class:data-pipeline
contrastsWith:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:end-to-end-learning
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:autoencoder
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transfer-learning
partOf:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:auto-ml
relatedTo:
  - urn:ngm:class:feature-store
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:shap
---

# Feature Engineering

The process of using domain knowledge and statistical transformations to construct, select, and encode input variables from raw data so that they better represent the underlying predictive signal for machine learning models. Techniques include polynomial expansion, normalisation, temporal feature extraction, embedding of categorical variables, and dimensionality reduction via PCA or autoencoders.
