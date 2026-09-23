---
okf_version: "0.2"
type: Class
title: Model Governance
resource: urn:ngm:class:model-governance
domain: machine-learning
description: Model governance is the framework of policies, roles, controls, and documentation that an organisation applies across the lifecycle of its machine learning and statistical models to manage their risk, ensure their fitness for purpose, and satisfy regulatory and ethical obligations. It establishes accountability for model development, validation, approval, deployment, and ongoing monitoring, suppor
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ai-governance
hasPart:
  - urn:ngm:class:model-validation
  - urn:ngm:class:model-documentation
  - urn:ngm:class:model-cards
requires:
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:audit-trail
  - urn:ngm:class:explainability
enables:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:regulatory-compliance
bridgesTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-registry
supports:
  - urn:ngm:class:fairness
  - urn:ngm:class:regulatory-compliance
partOf:
  - urn:ngm:class:ai-governance
relatedTo:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:responsible-ai
---

# Model Governance

Model governance is the framework of policies, roles, controls, and documentation that an organisation applies across the lifecycle of its machine learning and statistical models to manage their risk, ensure their fitness for purpose, and satisfy regulatory and ethical obligations. It establishes accountability for model development, validation, approval, deployment, and ongoing monitoring, supported by artefacts such as model cards, audit trails, and validation reports. By imposing oversight, documentation, and review gates, it ensures models remain accurate, fair, explainable, and compliant rather than opaque or unaccountable.
