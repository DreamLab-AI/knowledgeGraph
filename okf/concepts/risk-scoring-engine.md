---
okf_version: "0.2"
type: Class
title: Risk Scoring Engine
resource: urn:ngm:class:risk-scoring-engine
domain: security
description: "A risk scoring engine is a software component that computes a numerical risk score for an entity, transaction, or session by combining multiple weighted signals through rules or models. In compliance and identity systems it quantifies how likely an action is fraudulent or non-compliant, feeding thresholds that trigger review, blocking, or escalation. The score provides a consistent, tunable basis "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
relatedTo:
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:identity-verification
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Risk Scoring Engine

A risk scoring engine is a software component that computes a numerical risk score for an entity, transaction, or session by combining multiple weighted signals through rules or models. In compliance and identity systems it quantifies how likely an action is fraudulent or non-compliant, feeding thresholds that trigger review, blocking, or escalation. The score provides a consistent, tunable basis for automated decisions.
