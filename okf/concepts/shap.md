---
okf_version: "0.2"
type: Class
title: SHAP
resource: urn:ngm:class:shap
domain: ai
description: SHAP, short for SHapley Additive exPlanations, is a method for explaining the output of machine-learning models by attributing each prediction to its input features. It is grounded in Shapley values from cooperative game theory, which fairly distribute a payoff among contributors, treating each feature as a player and the prediction as the payoff. SHAP provides locally accurate, consistent feature
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:machine-learning-domain
requires:
  - urn:ngm:class:shapley-value
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:cooperative-game-theory
enables:
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:feature-attribution
  - urn:ngm:class:algorithmic-auditing
  - urn:ngm:class:model-debugging
  - urn:ngm:class:feature-importance
implements:
  - urn:ngm:class:feature-attribution
contrastsWith:
  - urn:ngm:class:lime
  - urn:ngm:class:integrated-gradients
  - urn:ngm:class:feature-importance
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:fairness-in-machine-learning
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:lime
uses:
  - urn:ngm:class:deep-neural-network
supports:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:human-in-the-loop
relatedTo:
  - urn:ngm:class:gradient-boosted-trees
  - urn:ngm:class:feature-importance
---

# SHAP

SHAP, short for SHapley Additive exPlanations, is a method for explaining the output of machine-learning models by attributing each prediction to its input features. It is grounded in Shapley values from cooperative game theory, which fairly distribute a payoff among contributors, treating each feature as a player and the prediction as the payoff. SHAP provides locally accurate, consistent feature attributions and unifies several earlier explanation techniques under a common framework.
