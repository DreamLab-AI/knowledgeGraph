---
okf_version: "0.2"
type: Class
title: Adversarial Testing
resource: urn:ngm:class:adversarial-testing
domain: artificial-intelligence
description: A testing methodology that deliberately attempts to cause AI system failures through adversarial inputs, edge cases, and challenging scenarios in order to identify robustness issues, safety vulnerabilities, and alignment failures before deployment. It encompasses both explicitly adversarial prompts and implicitly problematic queries, drawing on red-teaming practices and formalised by NIST AI 100-2
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-safety
requires:
  - urn:ngm:class:machine-learning-discipline-model
  - urn:ngm:class:threat-model
enables:
  - urn:ngm:class:bias-detection-methods
dependsOn:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:benchmark-dataset
implements:
  - urn:ngm:class:nist-ai-risk-management-framework
  - urn:ngm:class:security-testing
contrastsWith:
  - urn:ngm:class:unit-testing
bridgesTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:red-teaming
  - urn:ngm:class:adversarial-examples
  - urn:ngm:class:prompt-injection
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:robustness
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:ai-alignment
relatedTo:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:safety-evaluation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Adversarial Testing

A testing methodology that deliberately attempts to cause AI system failures through adversarial inputs, edge cases, and challenging scenarios in order to identify robustness issues, safety vulnerabilities, and alignment failures before deployment. It encompasses both explicitly adversarial prompts and implicitly problematic queries, drawing on red-teaming practices and formalised by NIST AI 100-2.
