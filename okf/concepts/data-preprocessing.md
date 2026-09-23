---
okf_version: "0.2"
type: Class
title: Data Preprocessing
resource: urn:ngm:class:data-preprocessing
domain: ai
description: Data preprocessing is the stage of a machine learning workflow that transforms raw data into a clean, consistent form suitable for modelling. It encompasses cleaning, normalisation, encoding, imputation and feature engineering to remove noise and align scales and types. The quality of preprocessing strongly determines downstream model accuracy and is a prerequisite for reliable training.
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-science-workflow
hasPart:
  - urn:ngm:class:data-cleaning
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:normalisation
  - urn:ngm:class:missing-value-imputation
  - urn:ngm:class:outlier-detection
  - urn:ngm:class:categorical-encoding
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:feature-selection
  - urn:ngm:class:standardisation
  - urn:ngm:class:data-augmentation
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:train-test-split
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-accuracy
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:reinforcement-learning
dependsOn:
  - urn:ngm:class:data-distribution
  - urn:ngm:class:tabular-data
  - urn:ngm:class:multimodal-ai-architecture-learning
implements:
  - urn:ngm:class:feature-store
  - urn:ngm:class:mlops
  - urn:ngm:class:data-versioning
contrastsWith:
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:data-augmentation
uses:
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:auto-ml
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:autoencoder
  - urn:ngm:class:smote
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:embedding
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:time-series-analysis
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transfer-learning
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:tfx
relatedTo:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:data-cleaning
  - urn:ngm:class:auto-ml
  - urn:ngm:class:mlops
  - urn:ngm:class:overfitting
  - urn:ngm:class:regularisation
  - urn:ngm:class:data-leakage
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:bias-mitigation-techniques
  - urn:ngm:class:fairness
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:federated-learning
  - urn:ngm:class:uk-gdpr
---

# Data Preprocessing

Data preprocessing is the stage of a machine learning workflow that transforms raw data into a clean, consistent form suitable for modelling. It encompasses cleaning, normalisation, encoding, imputation and feature engineering to remove noise and align scales and types. The quality of preprocessing strongly determines downstream model accuracy and is a prerequisite for reliable training.
