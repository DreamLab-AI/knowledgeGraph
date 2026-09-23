---
okf_version: "0.2"
type: Class
title: Red Teaming
resource: urn:ngm:class:red-teaming
domain: security
description: The practice of deliberately attempting to elicit harmful, biased, or undesired outputs from AI systems to identify vulnerabilities and weaknesses. Red teaming involves structured adversarial testing where human evaluators or automated systems probe for failure modes across security, ethics, and alignment dimensions, informing safety improvements and deployment decisions.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:adversarial-testing
hasPart:
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:threat-modelling
  - urn:ngm:class:vulnerability-assessment
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:adversarial-testing
enables:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:safety-fine-tuning
  - urn:ngm:class:responsible-ai-deployment
dependsOn:
  - urn:ngm:class:human-evaluation
contrastsWith:
  - urn:ngm:class:penetration-testing
bridgesTo:
  - urn:ngm:class:machine-learning-security
  - urn:ngm:class:ai-ethics
uses:
  - urn:ngm:class:mitre-attck
  - urn:ngm:class:nist-cybersecurity-framework
supports:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:ai-governance
  - urn:ngm:class:trustworthy-ai
partOf:
  - urn:ngm:class:safety-evaluation
relatedTo:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:bias-detection-methods
  - urn:ngm:class:model-evaluation
---

# Red Teaming

The practice of deliberately attempting to elicit harmful, biased, or undesired outputs from AI systems to identify vulnerabilities and weaknesses. Red teaming involves structured adversarial testing where human evaluators or automated systems probe for failure modes across security, ethics, and alignment dimensions, informing safety improvements and deployment decisions.
