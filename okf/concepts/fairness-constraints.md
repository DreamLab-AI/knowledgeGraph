---
okf_version: "0.2"
type: Class
title: Fairness Constraints
resource: urn:ngm:class:fairness-constraints
domain: artificial-intelligence
description: "Fairness Constraints are mathematical formalizations of equitable treatment requirements in AI systems, expressed as conditions that model predictions must satisfy with respect to protected attributes such as race, gender, or age. The three canonical constraint families are Independence (demographic parity: predictions are statistically independent of protected attributes), Separation (equalized o"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
hasPart:
  - urn:ngm:class:fairness-metrics
  - urn:ngm:class:fairness-accuracy-tradeoffs
requires:
  - urn:ngm:class:model-training
  - urn:ngm:class:bias
enables:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:ai-ethics-checklist
contrastsWith:
  - urn:ngm:class:model-performance
uses:
  - urn:ngm:class:fairness-oecd
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:accountability
  - urn:ngm:class:transparency
relatedTo:
  - urn:ngm:class:fairness
  - urn:ngm:class:bias-detection-methods
  - urn:ngm:class:bias-mitigation-techniques
  - urn:ngm:class:fairness-auditing-tools
  - urn:ngm:class:explainability
---

# Fairness Constraints

Fairness Constraints are mathematical formalizations of equitable treatment requirements in AI systems, expressed as conditions that model predictions must satisfy with respect to protected attributes such as race, gender, or age. The three canonical constraint families are Independence (demographic parity: predictions are statistically independent of protected attributes), Separation (equalized odds: predictions are independent of protected attributes conditional on the true label), and Sufficiency (calibration: true labels are independent of protected attributes conditional on predictions). These constraints are incorporated into model training as regularisation penalties or constrained optimisation objectives, and are subject to fundamental incompatibility theorems when base rates differ across protected groups.
