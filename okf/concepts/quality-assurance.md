---
okf_version: "0.2"
type: Class
title: Quality Assurance
resource: urn:ngm:class:quality-assurance
domain: infrastructure
description: Quality Assurance (QA) is the systematic discipline of establishing and maintaining defined standards of correctness, reliability, safety, and fitness-for-purpose across the full lifecycle of software systems, AI models, and digital infrastructure. It encompasses planned and systematic activities — including requirements analysis, process audits, test design, validation, verification, and continuo
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:software-testing
  - urn:ngm:class:code-review
  - urn:ngm:class:test-automation
  - urn:ngm:class:continuous-integration
requires:
  - urn:ngm:class:requirements-engineering
  - urn:ngm:class:version-control
  - urn:ngm:class:data-validation
enables:
  - urn:ngm:class:risk-management
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:model-governance
contrastsWith:
  - urn:ngm:class:quality-control
bridgesTo:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:explainability
uses:
  - urn:ngm:class:adversarial-testing
  - urn:ngm:class:regression-testing
  - urn:ngm:class:static-analysis
  - urn:ngm:class:formal-verification
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:devops
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:ai-fairness
standardizedBy:
  - urn:ngm:class:iso-iec-25010
  - urn:ngm:class:iso-iec-42001
  - urn:ngm:class:ieee-829
relatedTo:
  - urn:ngm:class:technical-debt
  - urn:ngm:class:observability
---

# Quality Assurance

Quality Assurance (QA) is the systematic discipline of establishing and maintaining defined standards of correctness, reliability, safety, and fitness-for-purpose across the full lifecycle of software systems, AI models, and digital infrastructure. It encompasses planned and systematic activities — including requirements analysis, process audits, test design, validation, verification, and continuous monitoring — that prevent defects from reaching production rather than merely detecting them after the fact. In AI contexts, QA extends beyond functional correctness to encompass model fairness, adversarial robustness, data quality, and distributional-shift monitoring, increasingly mandated by governance frameworks such as the EU AI Act and ISO/IEC 42001. Effective QA integrates with DevOps and MLOps pipelines through automated gates that enforce quality thresholds before any artefact is promoted to the next deployment stage.
