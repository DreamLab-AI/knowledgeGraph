---
okf_version: "0.2"
type: Class
title: Autoregressive Model
resource: urn:ngm:class:autoregressive-model
domain: machine-learning
description: An autoregressive model generates sequences by predicting each element conditioned on all previously generated elements, thereby factorising the joint probability distribution of a sequence into an ordered product of conditional distributions via the chain rule of probability. This approach yields exact log-likelihoods and a straightforward maximum-likelihood training objective, making it the domi
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:probabilistic-model
hasPart:
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:decoder-stack
  - urn:ngm:class:language-model-head
  - urn:ngm:class:key-value-cache
requires:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:tokenization
  - urn:ngm:class:chain-rule-of-probability
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:language-model
  - urn:ngm:class:text-generation
  - urn:ngm:class:image-generation
  - urn:ngm:class:neural-audio-synthesis
  - urn:ngm:class:large-language-model
  - urn:ngm:class:code-generation
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:protein-structure-prediction
dependsOn:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:training-data
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:softmax-function
  - urn:ngm:class:byte-pair-encoding
implements:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:teacher-forcing
  - urn:ngm:class:next-token-prediction
contrastsWith:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:vae
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:flow-based-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:masked-language-modelling
bridgesTo:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:constitutional-ai-training-methodology
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:softmax-function
  - urn:ngm:class:key-value-cache
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:beam-search
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:flash-attention
supports:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:retrieval-augmented-generation
standardizedBy:
  - urn:ngm:class:neur-ips
  - urn:ngm:class:icml
  - urn:ngm:class:iclr
  - urn:ngm:class:acl
relatedTo:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:next-token-prediction
  - urn:ngm:class:beam-search
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:hallucination
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:wave-net
  - urn:ngm:class:pixelcnn
---

# Autoregressive Model

An autoregressive model generates sequences by predicting each element conditioned on all previously generated elements, thereby factorising the joint probability distribution of a sequence into an ordered product of conditional distributions via the chain rule of probability. This approach yields exact log-likelihoods and a straightforward maximum-likelihood training objective, making it the dominant paradigm for large language models, neural audio synthesis, and image generation. Inference is inherently sequential — each token must be sampled before the next can be computed — creating a fundamental latency trade-off relative to parallel decoding strategies. Modern architectures such as the Transformer exploit masked self-attention to parallelise training while preserving the strictly left-to-right conditional structure at inference time.
