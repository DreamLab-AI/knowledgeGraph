---
okf_version: "0.2"
type: Class
title: System Prompt
resource: urn:ngm:class:system-prompt
domain: artificial-intelligence
description: A system prompt is a structured instruction block injected into the context window of a large language model at the start of an inference session, establishing operational context, persona, tool descriptions, safety constraints, and behavioural guidelines before any user turn is processed. Unlike user messages, system prompts are authored by operators rather than end users and govern the model's a
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:prompt-engineering
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:context-window
  - urn:ngm:class:inference
enables:
  - urn:ngm:class:reasoning
  - urn:ngm:class:tool-use
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:function-calling
  - urn:ngm:class:role-specialisation
dependsOn:
  - urn:ngm:class:tokenization
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:neural-network-text-tokenisation
contrastsWith:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:user-message
bridgesTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:software-architecture
uses:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:few-shot-learning
relatedTo:
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:self-consistency
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:ai-safety
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:constitutional-ai-training-methodology
---

# System Prompt

A system prompt is a structured instruction block injected into the context window of a large language model at the start of an inference session, establishing operational context, persona, tool descriptions, safety constraints, and behavioural guidelines before any user turn is processed. Unlike user messages, system prompts are authored by operators rather than end users and govern the model's allowed behaviours, response style, and tool-use policy throughout the session. In agentic and multi-agent architectures, system prompts serve as the primary mechanism for role specialisation, capability scoping, safety guardrail enforcement, and task decomposition. The security boundary between the system prompt and user-controlled input is a central concern in prompt injection defence.
