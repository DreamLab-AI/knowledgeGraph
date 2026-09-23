---
okf_version: "0.2"
type: Class
title: DSPy
resource: urn:ngm:class:dspy
domain: ai
description: DSPy is an open-source framework for programming language models in which developers declare the structure of a task using typed signatures and composable modules, and an optimiser automatically generates and tunes the prompts and few-shot examples needed to maximise a defined metric. By treating prompts as learnable parameters rather than hand-written strings, DSPy shifts language-model applicati
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:llm-application-framework
  - urn:ngm:class:automatic-prompt-optimisation
  - urn:ngm:class:ai-framework
hasPart:
  - urn:ngm:class:dspy-signature
  - urn:ngm:class:dspy-module
  - urn:ngm:class:dspy-teleprompter
  - urn:ngm:class:miprov2
  - urn:ngm:class:bootstrapfewshot
  - urn:ngm:class:bettertogether
  - urn:ngm:class:copro
  - urn:ngm:class:dspy-metric-function
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:training-and-fine-tuning
  - urn:ngm:class:in-context-learning
enables:
  - urn:ngm:class:llm-orchestration
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:ai-agents
  - urn:ngm:class:structured-output
  - urn:ngm:class:code-generation
  - urn:ngm:class:instruction-following
dependsOn:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:automatic-prompt-optimisation
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-prompting
contrastsWith:
  - urn:ngm:class:lang-chain
  - urn:ngm:class:manual-prompt-engineering
  - urn:ngm:class:context-window
uses:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:meta-learning
supports:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:hallucination
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:self-consistency
  - urn:ngm:class:re-act
standardizedBy:
  - urn:ngm:class:stanford-nlp-group
relatedTo:
  - urn:ngm:class:llm-agents
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:lang-chain
  - urn:ngm:class:hallucination
  - urn:ngm:class:foundation-model
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:tool-use
  - urn:ngm:class:reasoning
---

# DSPy

DSPy is an open-source framework for programming language models in which developers declare the structure of a task using typed signatures and composable modules, and an optimiser automatically generates and tunes the prompts and few-shot examples needed to maximise a defined metric. By treating prompts as learnable parameters rather than hand-written strings, DSPy shifts language-model application development from manual prompt engineering toward systematic, metric-driven compilation of pipelines. It targets reliable, portable multi-stage LLM programs such as retrieval-augmented and agentic systems.
