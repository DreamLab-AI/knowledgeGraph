---
okf_version: "0.2"
type: Class
title: Model Deployment
resource: urn:ngm:class:model-deployment
domain: machine-learning
description: Model Deployment is the engineering discipline of transitioning a trained machine learning model from a development or research environment into a production system where it can serve real-time or batch predictions to users and downstream applications. It encompasses model packaging, serving infrastructure, API exposure, versioning, scaling, and monitoring, ensuring that the model behaves reliably
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:model-serialisation
  - urn:ngm:class:containerisation
  - urn:ngm:class:api-gateway
enables:
  - urn:ngm:class:edge-inference
  - urn:ngm:class:real-time-prediction
  - urn:ngm:class:batch-inference
  - urn:ngm:class:model-monitoring
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-registry
  - urn:ngm:class:feature-store
contrastsWith:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-evaluation
bridgesTo:
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:edge-computing
  - urn:ngm:class:serverless-architecture
uses:
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:kubernetes
  - urn:ngm:class:rest-api
  - urn:ngm:class:g-rpc
  - urn:ngm:class:docker-containerisation-platform
supports:
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:canary-deployment
  - urn:ngm:class:shadow-mode-deployment
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:data-drift
  - urn:ngm:class:model-versioning
---

# Model Deployment

Model Deployment is the engineering discipline of transitioning a trained machine learning model from a development or research environment into a production system where it can serve real-time or batch predictions to users and downstream applications. It encompasses model packaging, serving infrastructure, API exposure, versioning, scaling, and monitoring, ensuring that the model behaves reliably and efficiently under operational conditions. Deployment strategies range from synchronous online endpoints for low-latency inference to batch scoring pipelines, edge device embedding, and serverless function invocations. The discipline is tightly coupled with MLOps practices that treat models as first-class software artefacts subject to continuous integration, delivery, observation, and rollback.
