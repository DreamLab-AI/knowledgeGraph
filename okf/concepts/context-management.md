---
okf_version: "0.2"
type: Class
title: Context Management
resource: urn:ngm:class:context-management
domain: ai
description: Context management is the set of techniques for assembling, prioritising, compressing, and maintaining the information supplied to a language model within its bounded context window across a task or conversation. It governs what prompts, retrieved documents, prior turns, tool outputs, and state are placed in context, in what order, and at what fidelity, so that the model has the most relevant evid
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:prompt-engineering
hasPart:
  - urn:ngm:class:context-window
  - urn:ngm:class:memory-management
requires:
  - urn:ngm:class:token
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:conversational-ai
dependsOn:
  - urn:ngm:class:context-window
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:retrieval-augmented-generation
uses:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:knowledge-retrieval
supports:
  - urn:ngm:class:dialogue-system
  - urn:ngm:class:session-management
relatedTo:
  - urn:ngm:class:state-management
  - urn:ngm:class:memory-management
  - urn:ngm:class:prompt-engineering
---

# Context Management

Context management is the set of techniques for assembling, prioritising, compressing, and maintaining the information supplied to a language model within its bounded context window across a task or conversation. It governs what prompts, retrieved documents, prior turns, tool outputs, and state are placed in context, in what order, and at what fidelity, so that the model has the most relevant evidence without exceeding token limits. Effective context management is central to retrieval-augmented generation, long-running agents, and conversational systems, where it directly shapes coherence, accuracy, and cost.
