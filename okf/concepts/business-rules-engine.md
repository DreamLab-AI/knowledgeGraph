---
okf_version: "0.2"
type: Class
title: Business Rules Engine
resource: urn:ngm:class:business-rules-engine
domain: governance
description: A Business Rules Engine (BRE) is a software component that externalises and executes business logic as declarative rules separate from application code. Rules are authored by domain experts in natural-language-like syntax and evaluated against facts at runtime using algorithms such as the Rete network. BREs enable non-technical stakeholders to modify organisational policies without redeploying sof
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:governance
hasPart:
  - urn:ngm:class:rule-repository
  - urn:ngm:class:inference-engine
  - urn:ngm:class:fact-model
enables:
  - urn:ngm:class:compliance-automation
  - urn:ngm:class:policy-enforcement
  - urn:ngm:class:decision-management
dependsOn:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:reasoning-engine
contrastsWith:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:hardcoded-logic
bridgesTo:
  - urn:ngm:class:ai-decision-system
uses:
  - urn:ngm:class:rete-algorithm
  - urn:ngm:class:decision-table
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:risk-management
standardizedBy:
  - urn:ngm:class:dmn
  - urn:ngm:class:drools
relatedTo:
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:ai-governance
  - urn:ngm:class:smart-contract
---

# Business Rules Engine

A Business Rules Engine (BRE) is a software component that externalises and executes business logic as declarative rules separate from application code. Rules are authored by domain experts in natural-language-like syntax and evaluated against facts at runtime using algorithms such as the Rete network. BREs enable non-technical stakeholders to modify organisational policies without redeploying software, making them a key enabler of agile governance and compliance automation.
