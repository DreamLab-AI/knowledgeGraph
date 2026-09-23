---
okf_version: "0.2"
type: Class
title: Safety Measure
resource: urn:ngm:class:safety-measure
domain: artificial-intelligence
description: A Safety Measure is a technical, procedural, or organisational control applied to an AI system to prevent, detect, or mitigate harm arising from system failures, misuse, or unintended behaviour. Safety measures span the full AI lifecycle—from architecture choices that constrain dangerous capabilities, to testing regimes that surface failure modes, to runtime guardrails and human oversight mechanis
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:ai-governance
requires:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:formal-verification
enables:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:functional-safety
  - urn:ngm:class:fault-tolerance
bridgesTo:
  - urn:ngm:class:ai-governance
uses:
  - urn:ngm:class:red-teaming
  - urn:ngm:class:adversarial-testing
supports:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:compliance-framework
relatedTo:
  - urn:ngm:class:risk-management
  - urn:ngm:class:ai-governance-principle
  - urn:ngm:class:transparency
---

# Safety Measure

A Safety Measure is a technical, procedural, or organisational control applied to an AI system to prevent, detect, or mitigate harm arising from system failures, misuse, or unintended behaviour. Safety measures span the full AI lifecycle—from architecture choices that constrain dangerous capabilities, to testing regimes that surface failure modes, to runtime guardrails and human oversight mechanisms that limit impact when systems operate outside intended boundaries. Effective safety measures are proportionate to the risk profile of the system and are validated against adversarial conditions.
