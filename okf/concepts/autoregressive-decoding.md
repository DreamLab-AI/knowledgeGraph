---
okf_version: "0.2"
type: Class
title: Autoregressive Decoding
resource: urn:ngm:class:autoregressive-decoding
domain: artificial-intelligence
description: Autoregressive decoding is the process by which a sequence model, such as a transformer language model, generates output one token at a time, conditioning each new token on all previously generated tokens. At every step the model produces a probability distribution over the vocabulary, a token is selected by a chosen strategy, and the token is appended and fed back as input for the next step. It i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:sampling
requires:
  - urn:ngm:class:transformer
enables:
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:sampling
contrastsWith:
  - urn:ngm:class:beam-search
bridgesTo:
  - urn:ngm:class:model-serving
uses:
  - urn:ngm:class:kv-cache
supports:
  - urn:ngm:class:model-serving
standardizedBy:
  - urn:ngm:class:transformer
partOf:
  - urn:ngm:class:large-language-model
relatedTo:
  - urn:ngm:class:beam-search
  - urn:ngm:class:speculative-decoding
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Autoregressive Decoding

Autoregressive decoding is the process by which a sequence model, such as a transformer language model, generates output one token at a time, conditioning each new token on all previously generated tokens. At every step the model produces a probability distribution over the vocabulary, a token is selected by a chosen strategy, and the token is appended and fed back as input for the next step. It is the dominant generation paradigm for large language models and is the primary target of inference optimisations such as caching and speculative methods.
