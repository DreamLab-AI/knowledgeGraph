---
okf_version: "0.2"
type: Class
title: Fairness Accuracy Tradeoffs
resource: urn:ngm:class:fairness-accuracy-tradeoffs
domain: artificial-intelligence
description: "The fundamental tension in supervised machine learning between maximising predictive accuracy and satisfying fairness constraints, characterised by the Pareto frontier of achievable (accuracy, fairness) pairs. Imposing fairness constraints restricts the hypothesis space, excluding models that achieve accuracy through reliance on protected-attribute correlations. The magnitude of the accuracy cost "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
hasPart:
  - urn:ngm:class:demographic-parity
  - urn:ngm:class:calibration
requires:
  - urn:ngm:class:algorithmic-bias
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:multi-objective-optimisation
enables:
  - urn:ngm:class:algorithmic-accountability
dependsOn:
  - urn:ngm:class:bias-mitigation-techniques
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:protected-attributes
contrastsWith:
  - urn:ngm:class:algorithmic-bias-and-variance
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:data
supports:
  - urn:ngm:class:responsible-ai-principles
  - urn:ngm:class:ai-governance-and-ethics
relatedTo:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:ai-ethics
  - urn:ngm:class:accountability
  - urn:ngm:class:regularisation
  - urn:ngm:class:risk-assessment
---

# Fairness Accuracy Tradeoffs

The fundamental tension in supervised machine learning between maximising predictive accuracy and satisfying fairness constraints, characterised by the Pareto frontier of achievable (accuracy, fairness) pairs. Imposing fairness constraints restricts the hypothesis space, excluding models that achieve accuracy through reliance on protected-attribute correlations. The magnitude of the accuracy cost depends on the chosen fairness criterion (demographic parity, equalised odds, calibration), the base rate differences between groups, and the flexibility of the model class.
