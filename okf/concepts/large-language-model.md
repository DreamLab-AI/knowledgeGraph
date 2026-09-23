---
okf_version: "0.2"
type: Class
title: Large Language Model
resource: urn:ngm:class:large-language-model
domain: ai
description: "A large language model (LLM) is a deep neural network — almost universally based on the [[Transformer Architecture]] — trained via self-supervised next-token prediction on web-scale corpora of text (and often code, mathematics, and structured data), resulting in a system that assigns a probability distribution over token sequences and can generate coherent, contextually appropriate continuations. "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:foundation-model-layer
hasPart:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:context-window
  - urn:ngm:class:embeddings
requires:
  - urn:ngm:class:pretraining
  - urn:ngm:class:training-data
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:text-generation
  - urn:ngm:class:code-generation
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:ai-agent
  - urn:ngm:class:natural-language-processing
dependsOn:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:scaling-laws
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:small-language-model
bridgesTo:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:eu-ai-act-regulatory-instrument
uses:
  - urn:ngm:class:tokenization
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:neural-network-text-tokenisation
relatedTo:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:quantisation
  - urn:ngm:class:ai-safety
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:hallucination
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:constitutional-ai-training-methodology
---

# Large Language Model

A large language model (LLM) is a deep neural network — almost universally based on the [[Transformer Architecture]] — trained via self-supervised next-token prediction on web-scale corpora of text (and often code, mathematics, and structured data), resulting in a system that assigns a probability distribution over token sequences and can generate coherent, contextually appropriate continuations. Scale — both in parameter count (billions to hundreds of billions) and training tokens (trillions) — is the defining characteristic that distinguishes LLMs from earlier, smaller language models, and is the proximate cause of qualitative capability jumps such as in-context learning, instruction following, chain-of-thought reasoning, and emergent generalisation across domains. LLMs are typically released as base pretrained models that are subsequently aligned to human preferences through supervised fine-tuning and reinforcement learning from human feedback, producing the instruction-following assistants widely deployed in consumer and enterprise applications. The paradigm has become the de facto foundation for natural language processing, code synthesis, autonomous agent planning, and multimodal AI systems.
