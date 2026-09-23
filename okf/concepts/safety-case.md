---
okf_version: "0.2"
type: Class
title: Safety Case
resource: urn:ngm:class:safety-case
domain: robotics
description: A safety case is a structured, evidence-backed argument that a system is acceptably safe to operate in a defined context and operational environment. It comprises explicit safety claims, the reasoning that connects them, and the supporting evidence drawn from hazard analysis, design measures, verification, and operational data. Commonly documented using notations such as the Goal Structuring Notat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:functional-safety
hasPart:
  - urn:ngm:class:hazard-analysis
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:fault-tree-analysis
requires:
  - urn:ngm:class:hazard-analysis
  - urn:ngm:class:risk-assessment
enables:
  - urn:ngm:class:certification
  - urn:ngm:class:regulatory-approval
supports:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:autonomous-system
standardizedBy:
  - urn:ngm:class:iso-26262
  - urn:ngm:class:iso-13482
partOf:
  - urn:ngm:class:functional-safety
relatedTo:
  - urn:ngm:class:safety
  - urn:ngm:class:risk-mitigation
---

# Safety Case

A safety case is a structured, evidence-backed argument that a system is acceptably safe to operate in a defined context and operational environment. It comprises explicit safety claims, the reasoning that connects them, and the supporting evidence drawn from hazard analysis, design measures, verification, and operational data. Commonly documented using notations such as the Goal Structuring Notation or Claims-Arguments-Evidence, the safety case is reviewed by stakeholders and regulators and maintained throughout the system lifecycle. It is the central assurance artefact in safety-critical and autonomous-systems engineering.
