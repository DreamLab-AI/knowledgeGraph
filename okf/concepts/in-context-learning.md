---
okf_version: "0.2"
type: Class
title: In-Context Learning
resource: urn:ngm:class:in-context-learning
domain: ai
description: In-Context Learning (ICL) is the capability of large language models to adapt their output distribution to a novel task at inference time by conditioning on a small number of labelled input-output demonstrations embedded directly within the prompt, without any gradient-based parameter updates. The model implicitly extracts task structure and decision boundaries from the provided examples and appli
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:meta-learning
requires:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:task-adaptation
contrastsWith:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:parameter-efficient-fine-tuning
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:agent-reasoning
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:demonstration-selection
partOf:
  - urn:ngm:class:foundation-model
relatedTo:
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:context-window
---

# In-Context Learning

In-Context Learning (ICL) is the capability of large language models to adapt their output distribution to a novel task at inference time by conditioning on a small number of labelled input-output demonstrations embedded directly within the prompt, without any gradient-based parameter updates. The model implicitly extracts task structure and decision boundaries from the provided examples and applies that inferred structure to unseen queries, enabling rapid generalisation across domains. ICL is an emergent phenomenon that scales with model size and training-data diversity, and is theoretically framed as implicit Bayesian inference over a latent space of task hypotheses. It underpins the practical utility of modern large language models by eliminating the need for task-specific fine-tuning pipelines.
