---
okf_version: "0.2"
type: Class
title: Constitutional AI
resource: urn:ngm:class:constitutional-ai
domain: artificial-intelligence
description: "An alignment training method, introduced by Anthropic in 2022, in which a language model is steered by an explicit written set of principles (a constitution) rather than solely by human preference labels: the model critiques and revises its own outputs against the principles during supervised learning, then a preference model trained on AI-generated comparisons (RLAIF) provides the reinforcement s"
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:ai-alignment
contrastsWith:
  - urn:ngm:class:rlhf
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
partOf:
  - urn:ngm:class:ai-safety-research
relatedTo:
  - urn:ngm:class:red-teaming
  - urn:ngm:class:corrigibility
  - urn:ngm:class:instruction-following
---

# Constitutional AI

An alignment training method, introduced by Anthropic in 2022, in which a language model is steered by an explicit written set of principles (a constitution) rather than solely by human preference labels: the model critiques and revises its own outputs against the principles during supervised learning, then a preference model trained on AI-generated comparisons (RLAIF) provides the reinforcement signal, yielding harmlessness that is transparent, auditable, and scalable with far less human labelling.
