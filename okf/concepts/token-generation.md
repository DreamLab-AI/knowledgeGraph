---
okf_version: "0.2"
type: Class
title: Token Generation
resource: urn:ngm:class:token-generation
domain: artificial-intelligence
description: Token generation is the autoregressive process by which a language model produces output tokens one at a time, sampling from a probability distribution over the vocabulary conditioned on the input context and all previously generated tokens. Each forward pass through the model produces logits over the vocabulary; a sampling strategy — greedy decoding, temperature sampling, top-k, or nucleus sampli
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:logit-computation
  - urn:ngm:class:decoding-algorithm
enables:
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:ai-agent
dependsOn:
  - urn:ngm:class:transformer
  - urn:ngm:class:tokenization
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:neural-network-text-tokenisation
contrastsWith:
  - urn:ngm:class:encoder-model
uses:
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:sampling-strategy
  - urn:ngm:class:kv-cache
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:text-generation
  - urn:ngm:class:code-generation
relatedTo:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:dynamic-batching
  - urn:ngm:class:speculative-decoding
---

# Token Generation

Token generation is the autoregressive process by which a language model produces output tokens one at a time, sampling from a probability distribution over the vocabulary conditioned on the input context and all previously generated tokens. Each forward pass through the model produces logits over the vocabulary; a sampling strategy — greedy decoding, temperature sampling, top-k, or nucleus sampling — selects the next token, which is appended to the context for the subsequent step. Token generation is the primary inference workload of large language models and determines output quality, latency, and throughput.
