---
okf_version: "0.2"
type: Class
title: Context Window
resource: urn:ngm:class:context-window
domain: artificial-intelligence
description: The maximum sequence length that a language model can process in a single forward pass, measured in tokens; it determines how much prior context the model can attend to during generation or understanding tasks and directly bounds memory, coherence, and long-range reasoning capabilities.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:token
  - urn:ngm:class:positional-encoding
requires:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:key-value-cache
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:long-document-summarisation
  - urn:ngm:class:agentic-ai
dependsOn:
  - urn:ngm:class:gpu-memory
  - urn:ngm:class:floating-point-arithmetic
contrastsWith:
  - urn:ngm:class:external-memory
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:virtual-environment
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-models
relatedTo:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:language-modeling
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:context-engineering
  - urn:ngm:class:lost-in-the-middle-effect
  - urn:ngm:class:model-context-protocol
---

# Context Window

The maximum sequence length that a language model can process in a single forward pass, measured in tokens; it determines how much prior context the model can attend to during generation or understanding tasks and directly bounds memory, coherence, and long-range reasoning capabilities.
