---
okf_version: "0.2"
type: Class
title: AI Deployment
resource: urn:ngm:class:ai-deployment
domain: artificial-intelligence
description: "The phase of the AI lifecycle in which a developed and validated artificial intelligence system is integrated into operational environments, made available to end users, and transitioned from development to production use, encompassing activities such as system integration, infrastructure provisioning, release management, user training, documentation delivery, and the establishment of operational "
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:ai-lifecycle
hasPart:
  - urn:ngm:class:release-management
  - urn:ngm:class:infrastructure-provisioning
  - urn:ngm:class:canary-deployment
requires:
  - urn:ngm:class:operational-procedures
  - urn:ngm:class:model-performance
  - urn:ngm:class:risk-management
  - urn:ngm:class:deployment-infrastructure
enables:
  - urn:ngm:class:ai-monitoring
  - urn:ngm:class:ai-system-use-by-ai-users-and-ai-operators
dependsOn:
  - urn:ngm:class:ai-development
  - urn:ngm:class:human-oversight
implements:
  - urn:ngm:class:mlops
contrastsWith:
  - urn:ngm:class:ai-development
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:security
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:ai-provider
  - urn:ngm:class:ai-operator
  - urn:ngm:class:ai-user
standardizedBy:
  - urn:ngm:class:iso-iec-42001-2023
  - urn:ngm:class:iso-iec-5338-2023
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:ai-lifecycle
relatedTo:
  - urn:ngm:class:fda-software-as-medical-device
  - urn:ngm:class:iso-iec-25010
---

# AI Deployment

The phase of the AI lifecycle in which a developed and validated artificial intelligence system is integrated into operational environments, made available to end users, and transitioned from development to production use, encompassing activities such as system integration, infrastructure provisioning, release management, user training, documentation delivery, and the establishment of operational support structures to ensure reliable, safe, and effective system functioning in real-world conditions.
