---
okf_version: "0.2"
type: Class
title: ReAct
resource: urn:ngm:class:re-act
domain: artificial-intelligence
description: ReAct (Reasoning and Acting) is a prompting paradigm for large language models that interleaves free-form reasoning traces (Thought steps) with structured external action calls in a single output sequence, enabling models to dynamically plan multi-step tasks, observe the results of tool invocations, and revise their reasoning accordingly. The framework produces an alternating Thought–Action–Observ
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:tool-use
  - urn:ngm:class:large-language-model
  - urn:ngm:class:prompt-engineering
enables:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:tool-augmented-language-model
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:interpretable-ai
dependsOn:
  - urn:ngm:class:external-knowledge-retrieval
  - urn:ngm:class:function-calling
implements:
  - urn:ngm:class:agent-loop
  - urn:ngm:class:grounded-reasoning
contrastsWith:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:act-only-agent
  - urn:ngm:class:reflexion
  - urn:ngm:class:tree-of-thoughts
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:robotic-process-automation
uses:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:scratchpad-reasoning
relatedTo:
  - urn:ngm:class:reasoning
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:prompting-technique
---

# ReAct

ReAct (Reasoning and Acting) is a prompting paradigm for large language models that interleaves free-form reasoning traces (Thought steps) with structured external action calls in a single output sequence, enabling models to dynamically plan multi-step tasks, observe the results of tool invocations, and revise their reasoning accordingly. The framework produces an alternating Thought–Action–Observation loop that grounds model inference in real-world feedback, contrasting with pure chain-of-thought prompting (reasoning without action) and pure action-only agents (action without transparent reasoning). Originally demonstrated by Yao et al. (2022) on knowledge-intensive QA and interactive decision benchmarks, ReAct has become the foundational interaction primitive underpinning modern agentic AI systems, tool-augmented LLMs, and multi-agent orchestration frameworks.
