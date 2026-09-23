---
okf_version: "0.2"
type: Class
title: Mistral AI Open-Weight Model Family
resource: urn:ngm:class:mistral-ai-open-weight-model-family
domain: ai
description: Mistral AI is a French AI company that developed a family of open-weight large language models, including the dense Mistral 7B and the sparse Mixture-of-Experts Mixtral 8x7B and 8x22B architectures. These models are distinguished by their efficient use of grouped-query attention, sliding window attention, and sparse expert routing, achieving performance competitive with much larger models at a fra
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:large-language-models
contrastsWith:
  - urn:ngm:class:constitutional-ai-training-methodology-language-model-family
  - urn:ngm:class:gpt
uses:
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:context-window
relatedTo:
  - urn:ngm:class:open-source-ai
  - urn:ngm:class:inference-engine
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:instruction-tuning
---

# Mistral AI Open-Weight Model Family

Mistral AI is a French AI company that developed a family of open-weight large language models, including the dense Mistral 7B and the sparse Mixture-of-Experts Mixtral 8x7B and 8x22B architectures. These models are distinguished by their efficient use of grouped-query attention, sliding window attention, and sparse expert routing, achieving performance competitive with much larger models at a fraction of the inference cost. Released under permissive licences, they have become foundational reference models for the open-source AI community.
