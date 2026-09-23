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
  - urn:ngm:class:machine-learning-operations
dependsOn:
  - urn:ngm:class:ai-monitoring
  - urn:ngm:class:drift-detection
uses:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-versioning
relatedTo:
  - urn:ngm:class:continuous-training
---

# Model Retraining

The post-deployment lifecycle activity of training a machine learning model again on refreshed or expanded data after production monitoring detects data drift, concept drift, or performance degradation, restoring predictive accuracy without redesigning the model. Retraining closes the MLOps feedback loop between monitoring and deployment, and may be scheduled periodically or triggered automatically by drift-detection thresholds.
