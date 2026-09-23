---
okf_version: "0.2"
type: Class
title: AI Lifecycle Management
resource: urn:ngm:class:ai-lifecycle-management
domain: governance
description: "AI lifecycle management is the governed oversight of an AI system across its whole existence — design, data acquisition, training, validation, deployment, operation, monitoring, retraining, and retirement — so that risk controls, documentation, and accountability travel with the system rather than stopping at release. It extends generic asset lifecycle management with AI-specific concerns: dataset"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:lifecycle-management
requires:
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:model-governance
enables:
  - urn:ngm:class:responsible-ai
uses:
  - urn:ngm:class:mlops
partOf:
  - urn:ngm:class:ai-governance
relatedTo:
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:data-lifecycle
---

# AI Lifecycle Management

AI lifecycle management is the governed oversight of an AI system across its whole existence — design, data acquisition, training, validation, deployment, operation, monitoring, retraining, and retirement — so that risk controls, documentation, and accountability travel with the system rather than stopping at release. It extends generic asset lifecycle management with AI-specific concerns: dataset provenance and drift, model versioning, performance and bias monitoring in production, incident response for model failures, and the stage-mapped risk activities that frameworks such as the NIST AI Risk Management Framework require.
