---
okf_version: "0.2"
type: Class
title: Decision Engine
resource: urn:ngm:class:decision-engine
domain: ai
description: A decision engine is a software component that encapsulates decision logic—rules, models, policies, or heuristics—and evaluates inputs against that logic to produce actionable outputs such as approvals, classifications, recommendations, or routing choices. Decision engines decouple business logic from application code, enabling non-developers to modify decision policies without code deployments, a
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:expert-systems
  - urn:ngm:class:decision-intelligence
hasPart:
  - urn:ngm:class:rule-evaluator
  - urn:ngm:class:model-scorer
  - urn:ngm:class:explanation-module
  - urn:ngm:class:audit-trail
  - urn:ngm:class:decision-model-notation
  - urn:ngm:class:feature-engineering-pipeline
  - urn:ngm:class:policy-engine
  - urn:ngm:class:business-rules
  - urn:ngm:class:feature-engineering
requires:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:probabilistic-reasoning
  - urn:ngm:class:data-governance
  - urn:ngm:class:access-control
  - urn:ngm:class:model-risk-management
enables:
  - urn:ngm:class:decision-support
  - urn:ngm:class:automated-planning
  - urn:ngm:class:informed-decision-making
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:automated-decision-making
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:credit-scoring
  - urn:ngm:class:risk-scoring
dependsOn:
  - urn:ngm:class:policy-engine
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:model-serving-runtime
  - urn:ngm:class:mlops
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:feature-store
  - urn:ngm:class:event-streaming
implements:
  - urn:ngm:class:decision-intelligence
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:decision-transparency
  - urn:ngm:class:regulation
  - urn:ngm:class:fairness
  - urn:ngm:class:model-governance
contrastsWith:
  - urn:ngm:class:policy-engine
  - urn:ngm:class:recommendation-engine
  - urn:ngm:class:inference-engine
  - urn:ngm:class:automated-reasoning
uses:
  - urn:ngm:class:policy-engine
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:probabilistic-reasoning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:large-language-models
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:api-gateway
  - urn:ngm:class:first-order-logic
  - urn:ngm:class:formal-methods
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:orchestration
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:recommendation-engine
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:causal-reasoning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:robustness
  - urn:ngm:class:model-calibration
standardizedBy:
  - urn:ngm:class:decision-model-notation
  - urn:ngm:class:regulation
  - urn:ngm:class:data-governance
  - urn:ngm:class:formal-methods
  - urn:ngm:class:first-order-logic
relatedTo:
  - urn:ngm:class:decision-transparency
  - urn:ngm:class:orchestration
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:regulation
  - urn:ngm:class:fairness
  - urn:ngm:class:model-risk-management
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:adaptive-systems
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:causal-reasoning
  - urn:ngm:class:privacy
  - urn:ngm:class:deep-learning
  - urn:ngm:class:risk-scoring
  - urn:ngm:class:automated-decision-making
---

# Decision Engine

A decision engine is a software component that encapsulates decision logic—rules, models, policies, or heuristics—and evaluates inputs against that logic to produce actionable outputs such as approvals, classifications, recommendations, or routing choices. Decision engines decouple business logic from application code, enabling non-developers to modify decision policies without code deployments, and support auditability by providing traceable reasoning paths for each decision. They range from rule-based expert systems to ML model inference services to hybrid architectures combining both. The emergence of large language model reasoning cores has extended the decision engine concept to unstructured input spaces, enabling complex multi-step decisioning with natural language explanation traces.
