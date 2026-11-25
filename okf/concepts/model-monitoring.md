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
  - urn:ngm:class:machine-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Monitoring

Model monitoring is the continuous observation of a deployed machine learning model's inputs, outputs, and performance in production to detect degradation, data drift, concept drift, and operational issues. It tracks predictive quality, latency, and input distributions against baselines and triggers alerts or retraining when thresholds are breached. As a core MLOps practice, it closes the loop between deployment and maintenance, sustaining model reliability over time.
