---
okf_version: "0.2"
type: Class
title: Meta-Learning
resource: urn:ngm:class:meta-learning
domain: machine-learning
description: Meta-Learning, colloquially described as 'learning to learn', is the study and design of machine learning systems that improve their own learning algorithms or initialisation through experience across multiple tasks, enabling rapid adaptation to new tasks with minimal data. Rather than learning a task directly, a meta-learning algorithm learns a prior or inductive bias that facilitates fast genera
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
hasPart:
  - urn:ngm:class:model-agnostic-meta-learning
  - urn:ngm:class:prototypical-networks
requires:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:training-dataset
enables:
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:auto-ml
contrastsWith:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:reinforcement-learning
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:drug-discovery
uses:
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:curriculum-learning
  - urn:ngm:class:in-context-learning
---

# Meta-Learning

Meta-Learning, colloquially described as 'learning to learn', is the study and design of machine learning systems that improve their own learning algorithms or initialisation through experience across multiple tasks, enabling rapid adaptation to new tasks with minimal data. Rather than learning a task directly, a meta-learning algorithm learns a prior or inductive bias that facilitates fast generalisation. Key paradigms include model-agnostic meta-learning (MAML), which optimises for a parameter initialisation that is close to good solutions for many tasks, and metric-based approaches such as prototypical networks that learn a task-agnostic embedding space. Meta-learning is central to few-shot learning, continual learning, and automated machine learning research.
