---
okf_version: "0.2"
type: Class
title: Nucleus Sampling
resource: urn:ngm:class:nucleus-sampling
domain: machine-learning
description: A stochastic decoding strategy for autoregressive language models, also called top-p sampling, that at each step truncates the next-token distribution to the smallest set of tokens whose cumulative probability exceeds a threshold p, renormalises, and samples from that nucleus — adapting the candidate pool to the model's confidence and avoiding both the degenerate repetition of greedy search and th
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:sampling
contrastsWith:
  - urn:ngm:class:beam-search
  - urn:ngm:class:greedy-decoding
partOf:
  - urn:ngm:class:text-generation
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:language-model
---

# Nucleus Sampling

A stochastic decoding strategy for autoregressive language models, also called top-p sampling, that at each step truncates the next-token distribution to the smallest set of tokens whose cumulative probability exceeds a threshold p, renormalises, and samples from that nucleus — adapting the candidate pool to the model's confidence and avoiding both the degenerate repetition of greedy search and the incoherent tail noise of unrestricted sampling.
