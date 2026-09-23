---
okf_version: "0.2"
type: Class
title: Dialogue Management
resource: urn:ngm:class:dialogue-management
domain: ai
description: Dialogue management is the component of a conversational system that tracks the evolving state of an interaction and decides the system's next action at each turn. It maintains context across utterances, integrates recognised user intents and slots, and selects responses or operations that move the conversation toward the user's goal. It is the control layer that connects language understanding to
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:conversational-ai
hasPart:
  - urn:ngm:class:state-tracking
  - urn:ngm:class:context-management
requires:
  - urn:ngm:class:intent-recognition
  - urn:ngm:class:slot-filling
enables:
  - urn:ngm:class:chatbot
dependsOn:
  - urn:ngm:class:natural-language-understanding
implements:
  - urn:ngm:class:conversational-ai
bridgesTo:
  - urn:ngm:class:natural-language-understanding
uses:
  - urn:ngm:class:reinforcement-learning
supports:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:context-management
  - urn:ngm:class:chatbot
---

# Dialogue Management

Dialogue management is the component of a conversational system that tracks the evolving state of an interaction and decides the system's next action at each turn. It maintains context across utterances, integrates recognised user intents and slots, and selects responses or operations that move the conversation toward the user's goal. It is the control layer that connects language understanding to language generation in a dialogue agent.
