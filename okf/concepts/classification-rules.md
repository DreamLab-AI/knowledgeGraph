---
okf_version: "0.2"
type: Class
title: Classification Rules
resource: urn:ngm:class:classification-rules
domain: ai
description: Classification Rules are explicit logical statements, typically in an if-then form, that assign instances or entities to predefined categories based on the values of their attributes or the satisfaction of specified conditions. Derived from rule-learning algorithms, expert elicitation, or ontology reasoning, classification rules provide interpretable, auditable decision logic for categorising data
maturity: mature
quality: 0.92
is-a:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:formal-logic
hasPart:
  - urn:ngm:class:production-rules
  - urn:ngm:class:forward-chaining
  - urn:ngm:class:backward-chaining
  - urn:ngm:class:inference-engine
requires:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:formal-logic
  - urn:ngm:class:knowledge-base
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:expert-systems
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:explainability
  - urn:ngm:class:interpretability
  - urn:ngm:class:business-rules-engine
dependsOn:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:ontology
  - urn:ngm:class:knowledge-representation
implements:
  - urn:ngm:class:forward-chaining
  - urn:ngm:class:backward-chaining
  - urn:ngm:class:logic-programming
contrastsWith:
  - urn:ngm:class:neural-network
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:large-language-models
  - urn:ngm:class:decision-tree
uses:
  - urn:ngm:class:ontology
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:logic-programming
  - urn:ngm:class:description-logic
  - urn:ngm:class:formal-logic
  - urn:ngm:class:rdf
  - urn:ngm:class:owl
supports:
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:business-rules-engine
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:knowledge-graph
standardizedBy:
  - urn:ngm:class:owl
  - urn:ngm:class:rdf
relatedTo:
  - urn:ngm:class:owl
  - urn:ngm:class:rdf
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:decision-tree
  - urn:ngm:class:large-language-models
  - urn:ngm:class:artificial-intelligence
---

# Classification Rules

Classification Rules are explicit logical statements, typically in an if-then form, that assign instances or entities to predefined categories based on the values of their attributes or the satisfaction of specified conditions. Derived from rule-learning algorithms, expert elicitation, or ontology reasoning, classification rules provide interpretable, auditable decision logic for categorising data points in machine learning, knowledge engineering, and regulatory compliance contexts. They contrast with black-box classifiers by exposing their decision rationale directly as symbolic propositions.
