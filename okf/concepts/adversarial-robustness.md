---
okf_version: "0.2"
type: Class
title: Adversarial Robustness
resource: urn:ngm:class:adversarial-robustness
domain: machine-learning
description: The capability of an AI system to maintain correct and consistent behaviour when subjected to adversarial examples—inputs intentionally crafted with small, often imperceptible perturbations designed to cause misclassification or incorrect outputs. Defensive strategies include adversarial training, randomised smoothing, and ensemble methods, each offering different trade-offs between certified guar
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-safety
hasPart:
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:certified-defense
requires:
  - urn:ngm:class:security
  - urn:ngm:class:threat-model
enables:
  - urn:ngm:class:safe-ai-deployment
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-evaluation
implements:
  - urn:ngm:class:ensemble-methods
contrastsWith:
  - urn:ngm:class:attack-vector
  - urn:ngm:class:vulnerability
  - urn:ngm:class:adversarial-attack
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:autonomous-system
uses:
  - urn:ngm:class:formal-verification
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:risk-management
standardizedBy:
  - urn:ngm:class:nist-ai-risk-management-framework
  - urn:ngm:class:iso-iec-tr-24029-1-2021
partOf:
  - urn:ngm:class:trustworthy-ai
  - urn:ngm:class:model-robustness
relatedTo:
  - urn:ngm:class:resilience
  - urn:ngm:class:risk
  - urn:ngm:class:explainability
  - urn:ngm:class:fairness
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Adversarial Robustness

The capability of an AI system to maintain correct and consistent behaviour when subjected to adversarial examples—inputs intentionally crafted with small, often imperceptible perturbations designed to cause misclassification or incorrect outputs. Defensive strategies include adversarial training, randomised smoothing, and ensemble methods, each offering different trade-offs between certified guarantees and computational cost.
