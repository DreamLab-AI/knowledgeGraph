---
okf_version: "0.2"
type: Class
title: Rule-Based Systems
resource: urn:ngm:class:rule-based-systems
domain: artificial-intelligence
description: "Rule-based systems are a class of knowledge-based AI systems that encode domain expertise as a collection of condition-action rules (IF <conditions> THEN <actions>) stored in a knowledge base, and employ an inference engine to match those rules against a working memory of current facts to derive new facts, trigger actions, or reach conclusions. The inference engine operates through either forward "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:working-memory
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:conflict-resolution
requires:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:forward-chaining
enables:
  - urn:ngm:class:expert-systems
  - urn:ngm:class:business-rules-engine
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:decision-automation
implements:
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:production-system-model
contrastsWith:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-network
  - urn:ngm:class:neural-network
  - urn:ngm:class:case-based-reasoning
bridgesTo:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:ontology
uses:
  - urn:ngm:class:backward-chaining
  - urn:ngm:class:pattern-matching
  - urn:ngm:class:rete-algorithm
supports:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:decision-support
  - urn:ngm:class:decision-support
relatedTo:
  - urn:ngm:class:logic-programming
  - urn:ngm:class:fuzzy-logic
  - urn:ngm:class:constraint-satisfaction
---

# Rule-Based Systems

Rule-based systems are a class of knowledge-based AI systems that encode domain expertise as a collection of condition-action rules (IF <conditions> THEN <actions>) stored in a knowledge base, and employ an inference engine to match those rules against a working memory of current facts to derive new facts, trigger actions, or reach conclusions. The inference engine operates through either forward chaining (data-driven, propagating from known facts to goals) or backward chaining (goal-driven, working from desired conclusions back to supporting facts), enabling transparent, explainable reasoning where every inference can be traced to the specific rules that fired. Rule-based systems are the foundational architecture underlying classical expert systems, modern business rules engines, production systems, and many decision-automation pipelines across medicine, finance, manufacturing, and legal compliance. Their central tension lies between the interpretability of explicit symbolic rules and the scalability challenges that arise as rule sets grow large and rule interactions become complex.
