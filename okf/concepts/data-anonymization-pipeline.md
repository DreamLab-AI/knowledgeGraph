---
okf_version: "0.2"
type: Class
title: Data Anonymization Pipeline
resource: urn:ngm:class:data-anonymization-pipeline
domain: spatial-computing
description: An automated, multi-stage process that systematically removes, masks, or generalizes personally identifiable information (PII) from datasets to protect individual privacy while preserving data utility for analysis.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-governance-and-safety
  - urn:ngm:class:data-protection
hasPart:
  - urn:ngm:class:de-identification-module
  - urn:ngm:class:generalization-engine
  - urn:ngm:class:suppression-filter
  - urn:ngm:class:perturbation-function
  - urn:ngm:class:pii-detector
  - urn:ngm:class:risk-assessor
requires:
  - urn:ngm:class:data-classification
  - urn:ngm:class:privacy-policy
  - urn:ngm:class:risk-assessment
enables:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:privacy-preserving-analytics
  - urn:ngm:class:secure-data-sharing
dependsOn:
  - urn:ngm:class:pii-detection
  - urn:ngm:class:identity-management
  - urn:ngm:class:access-control
  - urn:ngm:class:data-protection
bridgesTo:
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:privacy-engineering
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:data-governance
---

# Data Anonymization Pipeline

An automated, multi-stage process that systematically removes, masks, or generalizes personally identifiable information (PII) from datasets to protect individual privacy while preserving data utility for analysis.
