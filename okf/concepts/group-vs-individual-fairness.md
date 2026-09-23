---
okf_version: "0.2"
type: Class
title: Group vs Individual Fairness
resource: urn:ngm:class:group-vs-individual-fairness
domain: artificial-intelligence
description: "Group vs Individual Fairness denotes two competing paradigms for defining and enforcing algorithmic fairness: group fairness requires statistical parity of outcomes or error rates across protected demographic cohorts, while individual fairness requires that similar individuals receive similar predictions regardless of group membership. The two paradigms are formally incompatible in general — satis"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:ai-ethics
hasPart:
  - urn:ngm:class:fairness-metrics
  - urn:ngm:class:fairness-constraints
requires:
  - urn:ngm:class:fairness-auditing-tools
  - urn:ngm:class:bias-detection-methods
enables:
  - urn:ngm:class:bias-mitigation-techniques
  - urn:ngm:class:algorithmic-accountability
contrastsWith:
  - urn:ngm:class:fairness-accuracy-tradeoffs
uses:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:explainability
relatedTo:
  - urn:ngm:class:fairness
  - urn:ngm:class:fairness-oecd
  - urn:ngm:class:disparate-impact
  - urn:ngm:class:algorithmic-bias
  - urn:ngm:class:digital-technology-access-equity
---

# Group vs Individual Fairness

Group vs Individual Fairness denotes two competing paradigms for defining and enforcing algorithmic fairness: group fairness requires statistical parity of outcomes or error rates across protected demographic cohorts, while individual fairness requires that similar individuals receive similar predictions regardless of group membership. The two paradigms are formally incompatible in general — satisfying demographic parity does not guarantee individual fairness and vice versa — representing a fundamental tension in fair machine learning that practitioners must resolve through context-specific policy choices. This distinction shapes the selection of fairness metrics, audit methodologies, and bias mitigation interventions in AI system design.
