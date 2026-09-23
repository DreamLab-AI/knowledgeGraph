---
okf_version: "0.2"
type: Class
title: Risk Scoring
resource: urn:ngm:class:risk-scoring
domain: finance
description: Risk scoring is the quantitative practice of assigning a numerical value to an entity, transaction or event to express the likelihood and potential severity of an adverse outcome such as credit default, fraud or money laundering. Scores are derived from statistical and machine-learning models trained on historical data and behavioural features, producing a calibrated probability or rank that infor
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:risk-management
hasPart:
  - urn:ngm:class:decision-tree
requires:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:anomaly-detection
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:kyc
dependsOn:
  - urn:ngm:class:data
implements:
  - urn:ngm:class:risk-management
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:predictive-analytics
  - urn:ngm:class:feature-engineering
supports:
  - urn:ngm:class:aml
relatedTo:
  - urn:ngm:class:compliance
  - urn:ngm:class:regulatory-compliance
---

# Risk Scoring

Risk scoring is the quantitative practice of assigning a numerical value to an entity, transaction or event to express the likelihood and potential severity of an adverse outcome such as credit default, fraud or money laundering. Scores are derived from statistical and machine-learning models trained on historical data and behavioural features, producing a calibrated probability or rank that informs automated and human decisions. In finance it underpins lending, underwriting, transaction monitoring and regulatory compliance workflows.
