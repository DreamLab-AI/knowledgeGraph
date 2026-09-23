---
okf_version: "0.2"
type: Class
title: Chain-of-Thought Reasoning
resource: urn:ngm:class:chain-of-thought-reasoning
domain: artificial-intelligence
description: Chain-of-Thought Reasoning is the capacity of large language models to generate coherent sequences of intermediate logical, mathematical, or factual steps as part of producing a final answer, treating each intermediate token as an active computational resource that reshapes residual stream activations for subsequent Transformer layers. Unlike the surface prompting technique that elicits it, CoT Re
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:inference-protocol
hasPart:
  - urn:ngm:class:scratchpad-reasoning
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:self-refinement
  - urn:ngm:class:self-consistency
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:step-level-verifier
  - urn:ngm:class:few-shot-exemplar
  - urn:ngm:class:reasoning-token
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:model-scaling
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:self-consistency
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:inference-compute
  - urn:ngm:class:formal-verification
  - urn:ngm:class:code-generation
  - urn:ngm:class:scientific-reasoning
  - urn:ngm:class:educational-tutoring
dependsOn:
  - urn:ngm:class:model-scaling
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:residual-stream
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:backpropagation
implements:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:inference-time-scaling
  - urn:ngm:class:reinforcement-learning
contrastsWith:
  - urn:ngm:class:direct-answer-prompting
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:standard-prompting
  - urn:ngm:class:system-1-thinking
  - urn:ngm:class:retrieval-augmented-generation
bridgesTo:
  - urn:ngm:class:automated-theorem-proving
  - urn:ngm:class:formal-verification
uses:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:process-reward-model
supports:
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:code-generation
  - urn:ngm:class:automated-theorem-proving
  - urn:ngm:class:legal-reasoning
  - urn:ngm:class:medical-reasoning
standardizedBy:
  - urn:ngm:class:neurips-2022-proceedings
  - urn:ngm:class:openai-technical-reports
  - urn:ngm:class:anthropic-research
  - urn:ngm:class:deepseek-research
relatedTo:
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:reasoning
  - urn:ngm:class:inference-compute
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:inference-compute
  - urn:ngm:class:automated-theorem-proving
  - urn:ngm:class:formal-verification
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-turing-machine
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:openai-o1
  - urn:ngm:class:openai-o3
  - urn:ngm:class:deepseek-r1
  - urn:ngm:class:anthropic-extended-thinking
  - urn:ngm:class:google-gemini-thinking
  - urn:ngm:class:gsm8k
  - urn:ngm:class:math-dataset
  - urn:ngm:class:big-bench-hard
  - urn:ngm:class:humaneval
  - urn:ngm:class:aime
---

# Chain-of-Thought Reasoning

Chain-of-Thought Reasoning is the capacity of large language models to generate coherent sequences of intermediate logical, mathematical, or factual steps as part of producing a final answer, treating each intermediate token as an active computational resource that reshapes residual stream activations for subsequent Transformer layers. Unlike the surface prompting technique that elicits it, CoT Reasoning denotes an emergent model capability — present above certain parameter-scale thresholds — whereby the model decomposes complex problems into verifiable sub-steps rather than collapsing directly to a final token. This capability underpins inference-time compute scaling strategies including self-consistency sampling, process reward models, step-level verifiers, and tree-of-thought search, and connects neural language modelling to classical AI paradigms of deductive planning and symbolic reasoning.
