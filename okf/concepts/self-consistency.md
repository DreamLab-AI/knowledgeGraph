---
okf_version: "0.2"
type: Class
title: Self-Consistency
resource: urn:ngm:class:self-consistency
domain: artificial-intelligence
description: Self-consistency is a decoding and prompting strategy for large language models in which multiple independent reasoning chains are sampled stochastically for a given problem and the final answer is selected by majority vote across those chains. The technique exploits the observation that correct reasoning paths, although varied in surface form, converge on the same answer whilst incorrect paths re
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:prompt-engineering
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:stochastic-sampling
enables:
  - urn:ngm:class:reasoning
  - urn:ngm:class:reliability
  - urn:ngm:class:robustness
  - urn:ngm:class:error-correction
dependsOn:
  - urn:ngm:class:inference-compute
  - urn:ngm:class:token-generation
implements:
  - urn:ngm:class:test-time-compute
  - urn:ngm:class:ensemble-decoding
contrastsWith:
  - urn:ngm:class:greedy-decoding
  - urn:ngm:class:beam-search
bridgesTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:collective-intelligence
uses:
  - urn:ngm:class:majority-voting
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:temperature-sampling
supports:
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:commonsense-reasoning
  - urn:ngm:class:code-generation
relatedTo:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:mixture-of-agents
---

# Self-Consistency

Self-consistency is a decoding and prompting strategy for large language models in which multiple independent reasoning chains are sampled stochastically for a given problem and the final answer is selected by majority vote across those chains. The technique exploits the observation that correct reasoning paths, although varied in surface form, converge on the same answer whilst incorrect paths remain scattered across the answer space. Originally introduced alongside chain-of-thought prompting, self-consistency substantially improves accuracy on arithmetic, commonsense, and multi-step logical reasoning tasks without requiring additional model training or fine-tuning.
