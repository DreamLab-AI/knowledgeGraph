---
okf_version: "0.2"
type: Class
title: Feature Importance
resource: urn:ngm:class:feature-importance
domain: artificial-intelligence
description: Quantitative measures indicating the relative contribution or influence of individual input features on a machine learning model's predictions, enabling identification of the most critical variables driving model outputs. Methods include permutation importance, SHAP (SHapley Additive exPlanations) values, and tree-based Gini impurity scores, each providing global or local views of feature influenc
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:explainability
hasPart:
  - urn:ngm:class:feature-attribution
requires:
  - urn:ngm:class:trained-model
  - urn:ngm:class:validation-dataset
enables:
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:global-explanation
  - urn:ngm:class:feature-selection
  - urn:ngm:class:model-debugging
  - urn:ngm:class:bias-detection-methods
contrastsWith:
  - urn:ngm:class:causal-inference
  - urn:ngm:class:local-explanation
bridgesTo:
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:random-forest
  - urn:ngm:class:boosting
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:transparency
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:responsible-ai
relatedTo:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:overfitting
---

# Feature Importance

Quantitative measures indicating the relative contribution or influence of individual input features on a machine learning model's predictions, enabling identification of the most critical variables driving model outputs. Methods include permutation importance, SHAP (SHapley Additive exPlanations) values, and tree-based Gini impurity scores, each providing global or local views of feature influence that support model debugging, data selection, and regulatory explainability requirements.
