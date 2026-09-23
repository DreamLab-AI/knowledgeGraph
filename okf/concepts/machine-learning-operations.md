---
okf_version: "0.2"
type: Class
title: Machine Learning Operations
resource: urn:ngm:class:machine-learning-operations
domain: infrastructure
description: Machine learning operations is the discipline of applying DevOps principles, tooling, and automation to the end-to-end machine learning lifecycle so that models can be reliably built, deployed, monitored, and retrained in production. It coordinates data pipelines, experiment tracking, model registries, continuous integration and delivery, serving infrastructure, and observability to bridge the gap
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:model-registry
requires:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-versioning
enables:
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-versioning
dependsOn:
  - urn:ngm:class:data-pipeline
implements:
  - urn:ngm:class:devops
bridgesTo:
  - urn:ngm:class:devops
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:kubernetes
  - urn:ngm:class:feature-store
supports:
  - urn:ngm:class:model-governance
relatedTo:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-deployment
---

# Machine Learning Operations

Machine learning operations is the discipline of applying DevOps principles, tooling, and automation to the end-to-end machine learning lifecycle so that models can be reliably built, deployed, monitored, and retrained in production. It coordinates data pipelines, experiment tracking, model registries, continuous integration and delivery, serving infrastructure, and observability to bridge the gap between data-science experimentation and dependable operational systems. By treating data, code, and models as versioned, testable artifacts, it makes ML systems reproducible, auditable, and continuously improvable rather than fragile one-off deployments.
