---
okf_version: "0.2"
type: Class
title: Model Monitoring
resource: urn:ngm:class:model-monitoring
domain: machine-learning
description: Model monitoring is the continuous observation of a deployed machine learning model's inputs, outputs, and performance in production to detect degradation, data drift, concept drift, and operational issues. It tracks predictive quality, latency, and input distributions against baselines and triggers alerts or retraining when thresholds are breached. As a core MLOps practice, it closes the loop bet
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:mlops
  - urn:ngm:class:data-drift
hasPart:
  - urn:ngm:class:anomaly-detection
requires:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-inference
enables:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:feedback-loop
dependsOn:
  - urn:ngm:class:data-quality
contrastsWith:
  - urn:ngm:class:model-evaluation
uses:
  - urn:ngm:class:observability
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-registry
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:observability
  - urn:ngm:class:model-serving
  - urn:ngm:class:machine-learning-discipline
---

# Model Monitoring

Model monitoring is the continuous observation of a deployed machine learning model's inputs, outputs, and performance in production to detect degradation, data drift, concept drift, and operational issues. It tracks predictive quality, latency, and input distributions against baselines and triggers alerts or retraining when thresholds are breached. As a core MLOps practice, it closes the loop between deployment and maintenance, sustaining model reliability over time.
