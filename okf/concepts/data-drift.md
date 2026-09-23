---
okf_version: "0.2"
type: Class
title: Data Drift
resource: urn:ngm:class:data-drift
domain: artificial-intelligence
description: Data drift is the change over time in the statistical distribution of the input data fed to a deployed machine learning model relative to the distribution it was trained on. Unlike concept drift, which alters the relationship between inputs and targets, data drift (also called covariate or feature drift) shifts the marginal distribution of the features themselves and can silently degrade model acc
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
requires:
  - urn:ngm:class:retraining
dependsOn:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:feature-distribution
contrastsWith:
  - urn:ngm:class:concept-drift
bridgesTo:
  - urn:ngm:class:mlops
uses:
  - urn:ngm:class:statistics
  - urn:ngm:class:density-estimation
partOf:
  - urn:ngm:class:model-monitoring
relatedTo:
  - urn:ngm:class:covariate-shift
  - urn:ngm:class:distribution-shift
  - urn:ngm:class:anomaly-detection
---

# Data Drift

Data drift is the change over time in the statistical distribution of the input data fed to a deployed machine learning model relative to the distribution it was trained on. Unlike concept drift, which alters the relationship between inputs and targets, data drift (also called covariate or feature drift) shifts the marginal distribution of the features themselves and can silently degrade model accuracy even when the learned mapping remains valid. Detecting and responding to data drift is a central concern of model monitoring and MLOps, typically driving alerts, scheduled retraining, or fallback policies.
