---
okf_version: "0.2"
type: Class
title: Threat Modelling
resource: urn:ngm:class:threat-modelling
domain: security
description: Threat modelling is a structured security engineering process that identifies, enumerates, and prioritises potential threats to a system by reasoning systematically about adversaries, attack vectors, and mitigations before or during design. It produces an explicit model of what can go wrong, enabling security controls to be allocated proportionally to risk, and is applied across software, hardware
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:risk-assessment
hasPart:
  - urn:ngm:class:trust-boundary
requires:
  - urn:ngm:class:system-architecture
  - urn:ngm:class:adversary-model
enables:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:security-by-design
  - urn:ngm:class:risk-mitigation
contrastsWith:
  - urn:ngm:class:vulnerability-analysis
bridgesTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:supply-chain-risk-management
uses:
  - urn:ngm:class:attack-vector
  - urn:ngm:class:threat-model
  - urn:ngm:class:data-flow-diagram
  - urn:ngm:class:cvss
standardizedBy:
  - urn:ngm:class:nist-sp-800-30
  - urn:ngm:class:iso-27001
relatedTo:
  - urn:ngm:class:vulnerability-assessment
  - urn:ngm:class:penetration-testing
---

# Threat Modelling

Threat modelling is a structured security engineering process that identifies, enumerates, and prioritises potential threats to a system by reasoning systematically about adversaries, attack vectors, and mitigations before or during design. It produces an explicit model of what can go wrong, enabling security controls to be allocated proportionally to risk, and is applied across software, hardware, and AI systems throughout the development lifecycle.
