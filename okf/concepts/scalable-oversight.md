---
okf_version: "0.2"
type: Class
title: Scalable Oversight
resource: urn:ngm:class:scalable-oversight
domain: artificial-intelligence
description: "Scalable oversight is the AI-safety research problem of reliably supervising, evaluating, and steering AI systems whose capabilities approach or exceed human ability on the tasks being judged. It seeks mechanisms that let limited human supervisors provide accurate training signal and verification even when they cannot directly check a model's outputs. Approaches decompose hard judgements, amplify "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:ai-alignment
hasPart:
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:human-in-the-loop
requires:
  - urn:ngm:class:interpretability
enables:
  - urn:ngm:class:value-alignment
  - urn:ngm:class:quality-assurance
uses:
  - urn:ngm:class:human-feedback
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:red-teaming
  - urn:ngm:class:rlhf
supports:
  - urn:ngm:class:ai-safety
partOf:
  - urn:ngm:class:ai-alignment
relatedTo:
  - urn:ngm:class:superintelligence
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-governance
---

# Scalable Oversight

Scalable oversight is the AI-safety research problem of reliably supervising, evaluating, and steering AI systems whose capabilities approach or exceed human ability on the tasks being judged. It seeks mechanisms that let limited human supervisors provide accurate training signal and verification even when they cannot directly check a model's outputs. Approaches decompose hard judgements, amplify human judgement with AI assistance, and use adversarial or recursive structures to surface errors.
