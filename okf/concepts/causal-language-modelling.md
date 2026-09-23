---
okf_version: "0.2"
type: Class
title: Causal Language Modelling
resource: urn:ngm:class:causal-language-modelling
domain: ai
description: Causal language modelling is a self-supervised pre-training objective in which a neural network learns to predict the next token in a sequence given all preceding tokens, modelling the joint probability of text as an autoregressive product of conditional distributions. The term 'causal' refers to the unidirectional (left-to-right) attention mask that enforces the temporal ordering of tokens, preve
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:language-modelling
  - urn:ngm:class:pre-training
hasPart:
  - urn:ngm:class:causal-attention
  - urn:ngm:class:autoregressive-decoding
  - urn:ngm:class:teacher-forcing
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:perplexity-ai-search-platform
requires:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:tokenization
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:gpt
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:meta-llama-model-family
  - urn:ngm:class:foundation-model
  - urn:ngm:class:code-generation
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:text-generation
  - urn:ngm:class:reasoning
dependsOn:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:self-attention
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:embedding
implements:
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:autoregressive-factorisation
contrastsWith:
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:bert
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:diffusion-language-model
  - urn:ngm:class:state-space-model
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:causal-attention
  - urn:ngm:class:softmax-function
  - urn:ngm:class:byte-pair-encoding
supports:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:few-shot-learning
standardizedBy:
  - urn:ngm:class:vaswani-et-al-2017
  - urn:ngm:class:radford-et-al-2018
relatedTo:
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:fill-in-the-middle
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:retrieval-augmented-generation
---

# Causal Language Modelling

Causal language modelling is a self-supervised pre-training objective in which a neural network learns to predict the next token in a sequence given all preceding tokens, modelling the joint probability of text as an autoregressive product of conditional distributions. The term 'causal' refers to the unidirectional (left-to-right) attention mask that enforces the temporal ordering of tokens, preventing the model from attending to future context. This objective is the foundation of decoder-only transformer architectures such as GPT, LLaMA, and Claude, which power the majority of state-of-the-art large language models.
