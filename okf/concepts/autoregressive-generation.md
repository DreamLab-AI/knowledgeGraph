---
okf_version: "0.2"
type: Class
title: Autoregressive Generation
resource: urn:ngm:class:autoregressive-generation
domain: artificial-intelligence
description: Autoregressive generation is a sequence-modelling approach in which each output element is produced conditioned on all previously generated elements, factorising the joint probability of a sequence into a product of conditional next-element distributions. In language models it manifests as repeated next-token prediction, where the model samples or selects a token, appends it to the context, and re
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:token
  - urn:ngm:class:decoder
requires:
  - urn:ngm:class:inference
enables:
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:language-model
implements:
  - urn:ngm:class:generative-ai
bridgesTo:
  - urn:ngm:class:attention-mechanism
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:sampling
  - urn:ngm:class:beam-search
supports:
  - urn:ngm:class:text-generation
  - urn:ngm:class:natural-language-generation
relatedTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:inference
---

# Autoregressive Generation

Autoregressive generation is a sequence-modelling approach in which each output element is produced conditioned on all previously generated elements, factorising the joint probability of a sequence into a product of conditional next-element distributions. In language models it manifests as repeated next-token prediction, where the model samples or selects a token, appends it to the context, and repeats. This left-to-right dependency is the dominant decoding paradigm for large language models and underlies generative text, code, and other ordered outputs.
