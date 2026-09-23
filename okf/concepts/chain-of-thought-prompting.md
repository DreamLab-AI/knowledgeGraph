---
okf_version: "0.2"
type: Class
title: Chain-of-Thought Prompting
resource: urn:ngm:class:chain-of-thought-prompting
domain: artificial-intelligence
description: Chain-of-thought (CoT) prompting is a prompt engineering technique that elicits intermediate reasoning steps from a large language model before it produces a final answer, substantially improving performance on multi-step arithmetic, commonsense reasoning, and symbolic manipulation tasks. By including exemplars that demonstrate step-by-step reasoning or by appending the instruction 'Let's think st
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-prompting
hasPart:
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:self-consistency
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:zero-shot-chain-of-thought
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:least-to-most-prompting
  - urn:ngm:class:react-prompting
  - urn:ngm:class:programme-of-thought
  - urn:ngm:class:graph-of-thought
  - urn:ngm:class:automatic-chain-of-thought
requires:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:large-language-models
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:common-sense-reasoning
  - urn:ngm:class:symbolic-reasoning
  - urn:ngm:class:ai-agent
  - urn:ngm:class:commonsense-reasoning
  - urn:ngm:class:multi-hop-reasoning
  - urn:ngm:class:inference-time-compute-scaling
  - urn:ngm:class:planning
dependsOn:
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:model-scale
  - urn:ngm:class:large-language-models
  - urn:ngm:class:in-context-learning
implements:
  - urn:ngm:class:reasoning
  - urn:ngm:class:inference-time-compute-scaling
  - urn:ngm:class:step-by-step-decomposition
contrastsWith:
  - urn:ngm:class:standard-prompting
  - urn:ngm:class:direct-answer-prompting
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:zero-shot-learning
bridgesTo:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:automated-reasoning
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:token-generation
  - urn:ngm:class:transformer
supports:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:language-model-alignment
  - urn:ngm:class:ai-safety
  - urn:ngm:class:reinforcement-learning-from-human-feedback
standardizedBy:
  - urn:ngm:class:neur-ips
  - urn:ngm:class:iclr
  - urn:ngm:class:acl-anthology
relatedTo:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:reasoning-engine
  - urn:ngm:class:react-prompting
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:automatic-prompt-optimisation
  - urn:ngm:class:scratchpad-reasoning
  - urn:ngm:class:llm-agents
---

# Chain-of-Thought Prompting

Chain-of-thought (CoT) prompting is a prompt engineering technique that elicits intermediate reasoning steps from a large language model before it produces a final answer, substantially improving performance on multi-step arithmetic, commonsense reasoning, and symbolic manipulation tasks. By including exemplars that demonstrate step-by-step reasoning or by appending the instruction 'Let's think step by step' (zero-shot CoT), the technique leverages the model's autoregressive generation to decompose complex problems into tractable substeps. CoT prompting was formally characterised by Wei et al. (2022) and has become a foundational capability-elicitation method for frontier language models.
