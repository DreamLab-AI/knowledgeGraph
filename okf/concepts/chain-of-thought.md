---
okf_version: "0.2"
type: Class
title: Chain of Thought
resource: urn:ngm:class:chain-of-thought
domain: artificial-intelligence
description: "Chain-of-Thought (CoT) prompting is a technique for eliciting explicit intermediate reasoning steps from autoregressive large language models before producing a final answer, substantially improving accuracy on arithmetic, symbolic, commonsense, and multi-hop reasoning tasks. The mechanism exploits the sequential token-generation process of transformer-based models: each generated reasoning token "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:reasoning
  - urn:ngm:class:in-context-learning
hasPart:
  - urn:ngm:class:self-consistency
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:zero-shot-chain-of-thought
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:scratchpad-reasoning
  - urn:ngm:class:least-to-most-prompting
  - urn:ngm:class:react-prompting
  - urn:ngm:class:programme-of-thought
  - urn:ngm:class:graph-of-thought
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:model-scale
  - urn:ngm:class:transformer
enables:
  - urn:ngm:class:reasoning
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:commonsense-reasoning
  - urn:ngm:class:multi-hop-reasoning
  - urn:ngm:class:inference-time-compute-scaling
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:ai-agent
  - urn:ngm:class:planning
dependsOn:
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:model-scale
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:token-generation
implements:
  - urn:ngm:class:inference-time-compute-scaling
  - urn:ngm:class:reasoning
contrastsWith:
  - urn:ngm:class:standard-prompting
  - urn:ngm:class:direct-answer-prompting
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:fine-tuning
bridgesTo:
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:search-algorithms
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:neuro-symbolic-ai
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:token-generation
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:foundation-model
supports:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:language-model-alignment
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:ai-safety
standardizedBy:
  - urn:ngm:class:neur-ips
  - urn:ngm:class:iclr
  - urn:ngm:class:acl
relatedTo:
  - urn:ngm:class:scratchpad-reasoning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:planning
  - urn:ngm:class:ai-agent
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:automatic-prompt-optimisation
---

# Chain of Thought

Chain-of-Thought (CoT) prompting is a technique for eliciting explicit intermediate reasoning steps from autoregressive large language models before producing a final answer, substantially improving accuracy on arithmetic, symbolic, commonsense, and multi-hop reasoning tasks. The mechanism exploits the sequential token-generation process of transformer-based models: each generated reasoning token conditions all subsequent tokens, enabling multi-step deductions that single-pass prompting cannot reliably perform. CoT encompasses a family of variants — few-shot exemplar CoT, zero-shot CoT, self-consistency decoding, tree-of-thought search, and process reward modelling — collectively forming a foundational paradigm for inference-time compute scaling and complex reasoning in large language models.
