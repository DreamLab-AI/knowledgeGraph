---
okf_version: "0.2"
type: Class
title: Beam Search
resource: urn:ngm:class:beam-search
domain: ai
description: Beam search is a heuristic search algorithm that explores a graph by expanding the most promising nodes within a fixed-width frontier, called the beam, at each step. In sequence generation tasks it retains the top-k candidate sequences at each decoding step rather than pursuing a single greedy choice, balancing exploration against computational cost.
maturity: mature
quality: 0.95
is-a:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:sequence-to-sequence-learning
hasPart:
  - urn:ngm:class:length-normalisation
  - urn:ngm:class:diverse-beam-search
  - urn:ngm:class:constrained-decoding
  - urn:ngm:class:log-probability
  - urn:ngm:class:coverage-penalty
  - urn:ngm:class:kv-cache
requires:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:sequence-model
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:language-model
  - urn:ngm:class:vocabulary
enables:
  - urn:ngm:class:text-generation
  - urn:ngm:class:machine-translation
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:sequence-to-sequence-learning
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:code-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:image-captioning
  - urn:ngm:class:natural-language-generation
  - urn:ngm:class:open-ended-generation
  - urn:ngm:class:natural-language-processing
dependsOn:
  - urn:ngm:class:log-probability
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:encoder-decoder-architecture
implements:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:autoregressive-model
contrastsWith:
  - urn:ngm:class:greedy-decoding
  - urn:ngm:class:nucleus-sampling
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:viterbi-algorithm
  - urn:ngm:class:sampling
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:natural-language-processing
uses:
  - urn:ngm:class:language-model
  - urn:ngm:class:heuristic-methods
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:log-probability
  - urn:ngm:class:length-normalisation
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:vocabulary
  - urn:ngm:class:kv-cache
supports:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:robotics
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:inference-compute
  - urn:ngm:class:process-reward-model
standardizedBy:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:sequence-to-sequence-learning
relatedTo:
  - urn:ngm:class:beam-search-decoding
  - urn:ngm:class:constrained-decoding
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:viterbi-algorithm
  - urn:ngm:class:exposure-bias
  - urn:ngm:class:inference-time-compute
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:diverse-beam-search
  - urn:ngm:class:coverage-penalty
  - urn:ngm:class:large-language-model-training
---

# Beam Search

Beam search is a heuristic search algorithm that explores a graph by expanding the most promising nodes within a fixed-width frontier, called the beam, at each step. In sequence generation tasks it retains the top-k candidate sequences at each decoding step rather than pursuing a single greedy choice, balancing exploration against computational cost.
