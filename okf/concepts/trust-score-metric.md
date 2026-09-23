---
okf_version: "0.2"
type: Class
title: Trust Score Metric
resource: urn:ngm:class:trust-score-metric
domain: spatial-computing
description: A quantitative measurement representing an entity's trustworthiness, credibility, or risk level, expressed as a numerical value with associated confidence intervals and time validity, used to inform authorization decisions, transaction approvals, and access control policies.
maturity: draft
quality: 0.35
is-a:
  - urn:ngm:class:sc-governance-and-safety
hasPart:
  - urn:ngm:class:score-value
  - urn:ngm:class:confidence-interval
  - urn:ngm:class:calculation-timestamp
  - urn:ngm:class:validity-period
  - urn:ngm:class:scoring-methodology-reference
requires:
  - urn:ngm:class:calculation-parameters
  - urn:ngm:class:reputation-scoring-model
  - urn:ngm:class:behavioral-data
enables:
  - urn:ngm:class:access-control-decisions
  - urn:ngm:class:identity-verification
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:transaction-approval
dependsOn:
  - urn:ngm:class:data-quality-metrics
  - urn:ngm:class:statistical-models
  - urn:ngm:class:validation-rules
partOf:
  - urn:ngm:class:trust-infrastructure
---

# Trust Score Metric

A quantitative measurement representing an entity's trustworthiness, credibility, or risk level, expressed as a numerical value with associated confidence intervals and time validity, used to inform authorization decisions, transaction approvals, and access control policies.
