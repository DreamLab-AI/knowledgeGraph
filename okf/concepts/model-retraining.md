---
okf_version: "0.2"
type: Class
title: Model Retraining
resource: urn:ngm:class:model-retraining
domain: machine-learning
description: The post-deployment lifecycle activity of training a machine learning model again on refreshed or expanded data after production monitoring detects data drift, concept drift, or performance degradation, restoring predictive accuracy without redesigning the model. Retraining closes the MLOps feedback loop between monitoring and deployment, and may be scheduled periodically or triggered automaticall
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:mlops
dependsOn:
  - urn:ngm:class:ai-monitoring
  - urn:ngm:class:drift-detection
uses:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-versioning
relatedTo:
  - urn:ngm:class:continuous-training
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Retraining

The post-deployment lifecycle activity of training a machine learning model again on refreshed or expanded data after production monitoring detects data drift, concept drift, or performance degradation, restoring predictive accuracy without redesigning the model. Retraining closes the MLOps feedback loop between monitoring and deployment, and may be scheduled periodically or triggered automatically by drift-detection thresholds.
