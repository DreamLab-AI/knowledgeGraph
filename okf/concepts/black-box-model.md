---
okf_version: "0.2"
type: Class
title: Black-Box Model
resource: urn:ngm:class:black-box-model
domain: artificial-intelligence
description: A black-box model is a predictive system whose internal decision logic is opaque or too complex for a human to inspect directly, so it can only be understood through its inputs and outputs. Many high-performing machine-learning systems, such as deep neural networks and large ensembles, are black-box in nature, trading interpretability for accuracy. This opacity motivates post-hoc explanation techn
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:predictive-model
hasPart:
  - urn:ngm:class:prediction-interface
  - urn:ngm:class:opaque-internal-logic
  - urn:ngm:class:input-output-mapping
  - urn:ngm:class:model-parameters
  - urn:ngm:class:feature-representation
  - urn:ngm:class:loss-function
  - urn:ngm:class:training-procedure
requires:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:post-hoc-explanation
  - urn:ngm:class:feature-importance
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:training-data
  - urn:ngm:class:validation-protocol
  - urn:ngm:class:audit-mechanism
  - urn:ngm:class:accountability
enables:
  - urn:ngm:class:high-accuracy-prediction
  - urn:ngm:class:complex-pattern-recognition
  - urn:ngm:class:large-scale-automation
  - urn:ngm:class:non-linear-function-approximation
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:scalable-inference
dependsOn:
  - urn:ngm:class:trust
  - urn:ngm:class:accountability
  - urn:ngm:class:training-data
  - urn:ngm:class:objective-function
  - urn:ngm:class:loss-function
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:hyperparameter-tuning
implements:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:boosting
  - urn:ngm:class:random-forest
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer-architecture
contrastsWith:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:interpretability
  - urn:ngm:class:model-transparency
  - urn:ngm:class:white-box-model
  - urn:ngm:class:interpretable-ai
  - urn:ngm:class:decision-tree
  - urn:ngm:class:regression
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:intrinsic-interpretability
  - urn:ngm:class:explainable-boosting-machine
bridgesTo:
  - urn:ngm:class:shap
  - urn:ngm:class:lime
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:convolutional-neural-network
supports:
  - urn:ngm:class:predictive-accuracy
  - urn:ngm:class:scalability
  - urn:ngm:class:transfer-learning
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:gdpr-article-22
  - urn:ngm:class:iso-iec-22989
  - urn:ngm:class:ieee-p7001
  - urn:ngm:class:iso-iec-42001
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:feature-importance
  - urn:ngm:class:explainability
  - urn:ngm:class:bias
  - urn:ngm:class:fairness
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:model-transparency
  - urn:ngm:class:accountability
  - urn:ngm:class:trust
  - urn:ngm:class:shap
  - urn:ngm:class:lime
  - urn:ngm:class:feature-attribution
  - urn:ngm:class:counterfactual-explanation
  - urn:ngm:class:saliency-map
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:robustness
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:ai-governance
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:gdpr
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:uncertainty-quantification
---

# Black-Box Model

A black-box model is a predictive system whose internal decision logic is opaque or too complex for a human to inspect directly, so it can only be understood through its inputs and outputs. Many high-performing machine-learning systems, such as deep neural networks and large ensembles, are black-box in nature, trading interpretability for accuracy. This opacity motivates post-hoc explanation techniques and contrasts with inherently interpretable white-box models where the reasoning is transparent.
