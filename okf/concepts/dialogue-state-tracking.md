---
okf_version: "0.2"
type: Class
title: Dialogue State Tracking
resource: urn:ngm:class:dialogue-state-tracking
domain: ai
description: A component of conversational systems that maintains a structured representation of the user's goals and the context of a conversation across turns. It updates the dialogue state as new utterances are processed.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:dialogue-system
  - urn:ngm:class:dialogue-systems
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:task-oriented-dialogue-systems
  - urn:ngm:class:conversational-ai
hasPart:
  - urn:ngm:class:belief-state
  - urn:ngm:class:slot-filling
  - urn:ngm:class:intent-recognition
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:domain-classification
  - urn:ngm:class:dialogue-history
  - urn:ngm:class:utterance-encoding
requires:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:utterance-encoding
  - urn:ngm:class:dialogue-history
  - urn:ngm:class:ontology
  - urn:ngm:class:training-data
  - urn:ngm:class:data-annotation
enables:
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:dialogue-policy
  - urn:ngm:class:database-query
  - urn:ngm:class:task-completion
  - urn:ngm:class:natural-language-generation
  - urn:ngm:class:virtual-assistant
  - urn:ngm:class:customer-support-automation
  - urn:ngm:class:spoken-dialogue-systems
  - urn:ngm:class:healthcare-triage
  - urn:ngm:class:intelligent-tutoring-system
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-models
  - urn:ngm:class:pre-trained-language-model
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:intent-classification
  - urn:ngm:class:deep-learning
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:slot-filling
  - urn:ngm:class:belief-state-update
  - urn:ngm:class:context-accumulation
  - urn:ngm:class:domain-classification
  - urn:ngm:class:intent-classification
  - urn:ngm:class:carry-over-mechanism
contrastsWith:
  - urn:ngm:class:open-domain-dialogue
  - urn:ngm:class:retrieval-based-dialogue
  - urn:ngm:class:chit-chat-systems
  - urn:ngm:class:eliza
  - urn:ngm:class:information-retrieval
uses:
  - urn:ngm:class:multiwoz
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:sequence-to-sequence-model
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:function-calling
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:schema-guided-dialogue
  - urn:ngm:class:bert
supports:
  - urn:ngm:class:task-oriented-dialogue-systems
  - urn:ngm:class:spoken-dialogue-systems
  - urn:ngm:class:customer-support-automation
  - urn:ngm:class:intelligent-tutoring-system
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:voice-assistant
standardizedBy:
  - urn:ngm:class:schema-guided-dialogue
  - urn:ngm:class:multiwoz-benchmark
  - urn:ngm:class:dstc-challenge-series
relatedTo:
  - urn:ngm:class:dialogue-systems
  - urn:ngm:class:dialogue-policy
  - urn:ngm:class:natural-language-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:information-extraction
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:tool-augmented-reasoning
---

# Dialogue State Tracking

A component of conversational systems that maintains a structured representation of the user's goals and the context of a conversation across turns. It updates the dialogue state as new utterances are processed.
