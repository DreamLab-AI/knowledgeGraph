---
okf_version: "0.2"
type: Class
title: Attention Weight
resource: urn:ngm:class:attention-weight
domain: artificial-intelligence
description: A scalar coefficient produced by an attention mechanism that quantifies the relevance of one position (key/value) to another (query) in a sequence or across modalities. Attention weights are computed via a softmax over scaled dot-products of query and key vectors, and govern how much each value contributes to the output representation. They are the core computational primitive of Transformer-based
maturity: established
quality: 0.88
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:softmax-function
  - urn:ngm:class:query-key-value
  - urn:ngm:class:layer-normalisation
requires:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:embedding
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:machine-translation
  - urn:ngm:class:image-captioning
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:sequence-to-sequence-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-ai
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:automatic-differentiation
implements:
  - urn:ngm:class:sequence-to-sequence-learning
  - urn:ngm:class:scaled-dot-product-attention
  - urn:ngm:class:token-alignment
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:long-short-term-memory
  - urn:ngm:class:state-space-model
  - urn:ngm:class:convolutional-neural-network
bridgesTo:
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:ai-agent
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:sparse-autoencoders
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:gpu-computing
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:speech-recognition
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-attention
  - urn:ngm:class:encoder-decoder-architecture
relatedTo:
  - urn:ngm:class:self-attention
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:cross-attention
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:bert
  - urn:ngm:class:gpt
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:dropout
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:causal-language-modelling
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:alphafold
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:chain-of-thought-reasoning
---

# Attention Weight

A scalar coefficient produced by an attention mechanism that quantifies the relevance of one position (key/value) to another (query) in a sequence or across modalities. Attention weights are computed via a softmax over scaled dot-products of query and key vectors, and govern how much each value contributes to the output representation. They are the core computational primitive of Transformer-based models.
