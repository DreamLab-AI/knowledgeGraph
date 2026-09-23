---
okf_version: "0.2"
type: Class
title: Working Memory
resource: urn:ngm:class:working-memory
domain: artificial-intelligence
description: Working memory is the short-lived, actively maintained store an agent uses to hold and manipulate the information relevant to its current task. In large-language-model agents it is realised through the context window, intermediate reasoning traces, and scratchpads, augmented by external stores when the active context is insufficient. It is distinguished from long-term memory by its limited capacit
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:ai-research-area
hasPart:
  - urn:ngm:class:context-window
  - urn:ngm:class:attention-mechanism
requires:
  - urn:ngm:class:context-window
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:reasoning
  - urn:ngm:class:planning
  - urn:ngm:class:tool-use
dependsOn:
  - urn:ngm:class:context-window
uses:
  - urn:ngm:class:context-window
  - urn:ngm:class:vector-database
  - urn:ngm:class:retrieval-augmented-generation
supports:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:autonomous-agent
partOf:
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:ai-agent
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:large-language-model
---

# Working Memory

Working memory is the short-lived, actively maintained store an agent uses to hold and manipulate the information relevant to its current task. In large-language-model agents it is realised through the context window, intermediate reasoning traces, and scratchpads, augmented by external stores when the active context is insufficient. It is distinguished from long-term memory by its limited capacity, volatility, and tight coupling to ongoing reasoning.
