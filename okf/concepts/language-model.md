---
okf_version: "0.2"
type: Class
title: Language Model
resource: urn:ngm:class:language-model
domain: ai
description: A language model is a probabilistic model of natural language that assigns a probability distribution over sequences of tokens — words, subwords, or characters — enabling both likelihood estimation of observed text and generation of new text via sampling from learned conditional distributions. Modern large language models are deep neural networks based on the transformer architecture, trained on v
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:positional-encoding
requires:
  - urn:ngm:class:pretraining
  - urn:ngm:class:training-data
  - urn:ngm:class:compute-infrastructure
enables:
  - urn:ngm:class:text-generation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:code-generation
  - urn:ngm:class:machine-translation
  - urn:ngm:class:question-answering
  - urn:ngm:class:retrieval-augmented-generation
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:n-gram-model
bridgesTo:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:knowledge-graph
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:embeddings
  - urn:ngm:class:context-window
  - urn:ngm:class:tokenization
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:neural-network-text-tokenisation
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:inference
  - urn:ngm:class:language-modeling
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:quantisation
  - urn:ngm:class:mixture-of-experts
---

# Language Model

A language model is a probabilistic model of natural language that assigns a probability distribution over sequences of tokens — words, subwords, or characters — enabling both likelihood estimation of observed text and generation of new text via sampling from learned conditional distributions. Modern large language models are deep neural networks based on the transformer architecture, trained on vast corpora through a self-supervised next-token prediction objective. They acquire implicit representations of syntax, semantics, world knowledge, and reasoning patterns entirely from this training signal, and can be adapted to downstream tasks through fine-tuning, instruction tuning, or prompt engineering. The paradigm has displaced earlier n-gram and recurrent neural network approaches, becoming the dominant framework for natural language processing across virtually all applied domains.
