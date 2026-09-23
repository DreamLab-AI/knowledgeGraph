---
okf_version: "0.2"
type: Class
title: Automatic Prompt Optimisation
resource: urn:ngm:class:automatic-prompt-optimisation
domain: ai
description: Automatic Prompt Optimisation (APO) is the family of algorithmic techniques that search for, refine, or generate the most effective natural-language or soft-token instructions for a large language model, replacing manual prompt crafting with automated search processes guided by an objective function. Methods span gradient-free discrete search (APE, OPRO, ProTeGi), evolutionary self-improvement loo
maturity: emerging
quality: 0.87
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:ape
  - urn:ngm:class:dspy
  - urn:ngm:class:opro
  - urn:ngm:class:protegi
  - urn:ngm:class:textgrad
  - urn:ngm:class:prompt-breeder
  - urn:ngm:class:soft-prompt-tuning
  - urn:ngm:class:prefix-tuning
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:self-consistency
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:re-act
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:instruction-following
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:agents
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:code-generation
  - urn:ngm:class:reasoning
  - urn:ngm:class:structured-output
  - urn:ngm:class:tool-use
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:context-window
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:large-language-models
implements:
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:meta-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:active-learning
contrastsWith:
  - urn:ngm:class:training-and-fine-tuning
  - urn:ngm:class:soft-prompt-tuning
  - urn:ngm:class:prefix-tuning
uses:
  - urn:ngm:class:dspy
  - urn:ngm:class:lang-chain
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:reinforcement-learning
supports:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
standardizedBy:
  - urn:ngm:class:dspy
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
relatedTo:
  - urn:ngm:class:training-and-fine-tuning
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:hallucination
  - urn:ngm:class:bias-in-large-language-models
  - urn:ngm:class:structured-output
  - urn:ngm:class:in-context-learning
---

# Automatic Prompt Optimisation

Automatic Prompt Optimisation (APO) is the family of algorithmic techniques that search for, refine, or generate the most effective natural-language or soft-token instructions for a large language model, replacing manual prompt crafting with automated search processes guided by an objective function. Methods span gradient-free discrete search (APE, OPRO, ProTeGi), evolutionary self-improvement loops (PromptBreeder, GEPA), LLM-as-optimiser meta-prompting, textual back-propagation (TextGrad), and compiler-based programmatic optimisation (DSPy), each scoring candidate prompts against a held-out evaluation metric and iteratively retaining the highest-performing variants. APO addresses the brittleness and labour cost of hand-tuned prompting and has become a core component of production LLM pipelines, enabling measurable, reproducible performance gains without requiring access to model weights.
