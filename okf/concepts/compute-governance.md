---
okf_version: "0.2"
type: Class
title: Compute Governance
resource: urn:ngm:class:compute-governance
domain: governance
description: Compute governance is the set of policies, controls, and oversight mechanisms applied to the large-scale computing hardware used to train and deploy advanced AI systems. Because frontier AI capability is tightly coupled to access to specialised accelerators, governing compute offers a measurable, supply-chain-anchored lever for AI policy. Mechanisms include export controls, usage reporting thresho
maturity: emerging
quality: 0.73
is-a:
  - urn:ngm:class:ai-governance
hasPart:
  - urn:ngm:class:export-controls
requires:
  - urn:ngm:class:semiconductor-supply-chain
  - urn:ngm:class:kyc
  - urn:ngm:class:international-cooperation
enables:
  - urn:ngm:class:ai-safety
dependsOn:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:cloud-computing
implements:
  - urn:ngm:class:ai-policy
  - urn:ngm:class:export-controls
contrastsWith:
  - urn:ngm:class:algorithmic-governance
  - urn:ngm:class:data-governance
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:supply-chain
  - urn:ngm:class:security
uses:
  - urn:ngm:class:tee
  - urn:ngm:class:cryptographic-verification
supports:
  - urn:ngm:class:ai-risk-management
  - urn:ngm:class:responsible-ai
relatedTo:
  - urn:ngm:class:competition-in-ai
  - urn:ngm:class:ai-risks
  - urn:ngm:class:large-language-model
---

# Compute Governance

Compute governance is the set of policies, controls, and oversight mechanisms applied to the large-scale computing hardware used to train and deploy advanced AI systems. Because frontier AI capability is tightly coupled to access to specialised accelerators, governing compute offers a measurable, supply-chain-anchored lever for AI policy. Mechanisms include export controls, usage reporting thresholds, and on-chip verification of training runs.
