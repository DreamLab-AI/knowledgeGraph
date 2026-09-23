---
okf_version: "0.2"
type: Class
title: Transformers
resource: urn:ngm:class:transformers
domain: artificial-intelligence
description: The transformer is a neural network architecture introduced by Vaswani et al. in 'Attention Is All You Need' (2017). It replaces recurrence and convolution with multi-head self-attention and position-wise feed-forward layers, enabling fully parallel sequence processing, and underpins large language models and modern vision, speech, and protein-structure systems.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:deep-learning
  - urn:ngm:class:sequence-modelling
  - urn:ngm:class:large-scale-pretrained-foundation-model
hasPart:
  - urn:ngm:class:kv-cache
  - urn:ngm:class:layer-normalization
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:residual-connection
  - urn:ngm:class:self-attention
requires:
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:tokenization
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:code-generation
  - urn:ngm:class:machine-translation
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:text-generation
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:information-theory
  - urn:ngm:class:softmax-function
  - urn:ngm:class:backpropagation
  - urn:ngm:class:cuda
  - urn:ngm:class:transformer-training-infrastructure
implements:
  - urn:ngm:class:flash-attention
  - urn:ngm:class:grouped-query-attention
  - urn:ngm:class:rmsnorm
  - urn:ngm:class:swi-glu
  - urn:ngm:class:scaled-dot-product-attention
  - urn:ngm:class:sparse-mixture-of-experts
  - urn:ngm:class:rope
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:lstm
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:mamba
  - urn:ngm:class:state-space-models
  - urn:ngm:class:rwkv
uses:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:layer-normalization
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:dropout
  - urn:ngm:class:mixed-precision-training
supports:
  - urn:ngm:class:audio-processing
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:time-series-forecasting
standardizedBy:
  - urn:ngm:class:jax
  - urn:ngm:class:onnx
  - urn:ngm:class:py-torch
  - urn:ngm:class:transformers
relatedTo:
  - urn:ngm:class:whisper
  - urn:ngm:class:bert
  - urn:ngm:class:claude
  - urn:ngm:class:gemini-multimodal-language-model
  - urn:ngm:class:gpt
  - urn:ngm:class:meta-llama-model-family
  - urn:ngm:class:mistral
  - urn:ngm:class:t5
  - urn:ngm:class:meta-llama-model-family
  - urn:ngm:class:vit
  - urn:ngm:class:alphafold
---

# Transformers

The transformer is a neural network architecture introduced by Vaswani et al. in 'Attention Is All You Need' (2017). It replaces recurrence and convolution with multi-head self-attention and position-wise feed-forward layers, enabling fully parallel sequence processing, and underpins large language models and modern vision, speech, and protein-structure systems.
