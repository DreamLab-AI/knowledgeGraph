---
okf_version: "0.2"
type: Class
title: Meta Llama Model Family
resource: urn:ngm:class:meta-llama-model-family
domain: ai
description: Llama is a family of large language models developed by Meta and released, in large part, with open weights for research and commercial use. First introduced in 2023 with LLaMA, followed by Llama 2, Llama 3 and later versions, the models are transformer-based and trained on large text corpora. By releasing model weights under permissive terms, Meta enabled a wide range of independent fine-tuning a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:machine-learning-domain
hasPart:
  - urn:ngm:class:meta-llama-model-family-3
requires:
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-model
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:reinforcement-learning-from-human-feedback
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:on-device-inference
implements:
  - urn:ngm:class:rotary-position-embedding
  - urn:ngm:class:grouped-query-attention
contrastsWith:
  - urn:ngm:class:gpt-4
  - urn:ngm:class:google-ai-technology-corporation-gemini
  - urn:ngm:class:mistral-ai-open-weight-model-family
bridgesTo:
  - urn:ngm:class:microsoft-copilot
uses:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:byte-pair-encoding
relatedTo:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:quantisation
---

# Meta Llama Model Family

Llama is a family of large language models developed by Meta and released, in large part, with open weights for research and commercial use. First introduced in 2023 with LLaMA, followed by Llama 2, Llama 3 and later versions, the models are transformer-based and trained on large text corpora. By releasing model weights under permissive terms, Meta enabled a wide range of independent fine-tuning and deployment, making Llama a common base for open models. The family spans several parameter sizes to suit different compute and latency requirements.
