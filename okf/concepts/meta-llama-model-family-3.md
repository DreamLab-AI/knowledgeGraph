---
okf_version: "0.2"
type: Class
title: Llama 3
resource: urn:ngm:class:meta-llama-model-family-3
domain: machine-learning
description: Llama 3 is a family of open-weight large language models developed and released by Meta AI in April 2024, spanning 8 billion and 70 billion parameter base and instruction-tuned variants, with a 405 billion parameter model subsequently released in July 2024. Llama 3 models are trained on approximately 15 trillion tokens from a curated multilingual corpus, use a 128,000-token vocabulary with a custo
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:large-language-models
requires:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:distributed-training
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:inference-engine
  - urn:ngm:class:open-source-ai
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:retrieval-augmented-generation
implements:
  - urn:ngm:class:supervised-fine-tuning
contrastsWith:
  - urn:ngm:class:gpt-4
  - urn:ngm:class:claude
  - urn:ngm:class:mistral
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:enterprise-ai
uses:
  - urn:ngm:class:rlhf
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:grouped-query-attention
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:positional-encoding
relatedTo:
  - urn:ngm:class:meta-ai
  - urn:ngm:class:model-weights
  - urn:ngm:class:benchmarks
  - urn:ngm:class:safety-and-alignment
  - urn:ngm:class:multimodal-ai-architecture-models
  - urn:ngm:class:hugging-face
---

# Llama 3

Llama 3 is a family of open-weight large language models developed and released by Meta AI in April 2024, spanning 8 billion and 70 billion parameter base and instruction-tuned variants, with a 405 billion parameter model subsequently released in July 2024. Llama 3 models are trained on approximately 15 trillion tokens from a curated multilingual corpus, use a 128,000-token vocabulary with a custom BPE tokeniser, incorporate grouped-query attention for inference efficiency, and are post-trained with supervised fine-tuning and reinforcement learning from human feedback. The models are released under a custom Meta Llama 3 Community License that permits commercial use for most organisations while imposing restrictions on deployments exceeding 700 million monthly active users.
