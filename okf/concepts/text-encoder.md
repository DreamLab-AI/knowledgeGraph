---
okf_version: "0.2"
type: Class
title: Text Encoder
resource: urn:ngm:class:text-encoder
domain: artificial-intelligence
description: A text encoder is a neural network component that maps raw text—after tokenisation—into dense, contextualised vector representations that capture semantic, syntactic, and relational information for use in downstream tasks. Transformer-based encoders such as BERT, RoBERTa, and ALBERT produce bidirectional contextual embeddings via masked language model pre-training, whilst CLIP's text tower produce
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
requires:
  - urn:ngm:class:tokeniser
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:video-generation
relatedTo:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:clip
  - urn:ngm:class:token-embedding
---

# Text Encoder

A text encoder is a neural network component that maps raw text—after tokenisation—into dense, contextualised vector representations that capture semantic, syntactic, and relational information for use in downstream tasks. Transformer-based encoders such as BERT, RoBERTa, and ALBERT produce bidirectional contextual embeddings via masked language model pre-training, whilst CLIP's text tower produces contrastively aligned embeddings shared with a visual encoder. In generative image and video pipelines, the text encoder translates natural language prompts into conditioning vectors that guide the diffusion denoising process via cross-attention.
