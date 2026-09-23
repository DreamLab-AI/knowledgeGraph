---
okf_version: "0.2"
type: Class
title: Greedy Decoding
resource: urn:ngm:class:greedy-decoding
domain: artificial-intelligence
description: "Greedy Decoding is a sequence generation strategy that, at each step of an autoregressive model, selects the single token with the highest predicted probability. It is the simplest decoding method, fully deterministic and computationally cheap, but it can be myopic and miss globally higher-probability sequences. It serves as the baseline against which beam search and sampling-based strategies are "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:text-generation
enables:
  - urn:ngm:class:text-generation
dependsOn:
  - urn:ngm:class:transformer
contrastsWith:
  - urn:ngm:class:beam-search
  - urn:ngm:class:sampling
  - urn:ngm:class:speculative-decoding
bridgesTo:
  - urn:ngm:class:text-generation
uses:
  - urn:ngm:class:language-model
supports:
  - urn:ngm:class:foundation-model
partOf:
  - urn:ngm:class:text-generation
relatedTo:
  - urn:ngm:class:kv-cache
  - urn:ngm:class:language-model
---

# Greedy Decoding

Greedy Decoding is a sequence generation strategy that, at each step of an autoregressive model, selects the single token with the highest predicted probability. It is the simplest decoding method, fully deterministic and computationally cheap, but it can be myopic and miss globally higher-probability sequences. It serves as the baseline against which beam search and sampling-based strategies are compared.
