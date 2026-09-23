---
okf_version: "0.2"
type: Class
title: AI System Component
resource: urn:ngm:class:ai-system-component
domain: artificial-intelligence
description: "Modular functional units constituting a complete artificial intelligence system, including data ingestion pipelines, feature engineering modules, model training infrastructure, inference engines, monitoring dashboards, and user interfaces. Modern AI systems adopt microservices architectures enabling independent scaling, version control, and A/B testing per component, with observability integrated "
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:machine-learning-discipline-pipeline
uses:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:machine-learning-model
supports:
  - urn:ngm:class:ai-lifecycle
  - urn:ngm:class:ai-infrastructure
---

# AI System Component

Modular functional units constituting a complete artificial intelligence system, including data ingestion pipelines, feature engineering modules, model training infrastructure, inference engines, monitoring dashboards, and user interfaces. Modern AI systems adopt microservices architectures enabling independent scaling, version control, and A/B testing per component, with observability integrated at each layer for production reliability.
