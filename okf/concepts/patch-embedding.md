---
okf_version: "0.2"
type: Class
title: Patch Embedding
resource: urn:ngm:class:patch-embedding
domain: machine-learning
description: Patch embedding is the mechanism by which a Vision Transformer (ViT) converts a 2D image into a sequence of fixed-size vector representations suitable for processing by a self-attention mechanism. The image is divided into non-overlapping rectangular patches; each patch is flattened and projected to a latent dimension via a learnable linear transformation, yielding a sequence of token embeddings a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:embedding
hasPart:
  - urn:ngm:class:image-patch
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:classification-token
requires:
  - urn:ngm:class:self-attention
  - urn:ngm:class:transformer
enables:
  - urn:ngm:class:image-classification
  - urn:ngm:class:object-detection
  - urn:ngm:class:visual-question-answering
contrastsWith:
  - urn:ngm:class:convolutional-feature-extraction
uses:
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:linear-projection
  - urn:ngm:class:positional-encoding
supports:
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:transfer-learning
partOf:
  - urn:ngm:class:vision-transformer
relatedTo:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:token-generation
  - urn:ngm:class:image-tokenisation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Patch Embedding

Patch embedding is the mechanism by which a Vision Transformer (ViT) converts a 2D image into a sequence of fixed-size vector representations suitable for processing by a self-attention mechanism. The image is divided into non-overlapping rectangular patches; each patch is flattened and projected to a latent dimension via a learnable linear transformation, yielding a sequence of token embeddings analogous to word embeddings in language models. Positional embeddings are added to encode spatial location, and a classification token is prepended to aggregate global information.
