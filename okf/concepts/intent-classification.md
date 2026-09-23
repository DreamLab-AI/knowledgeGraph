---
okf_version: "0.2"
type: Class
title: Intent Classification
resource: urn:ngm:class:intent-classification
domain: artificial-intelligence
description: Intent classification is a natural language processing task that assigns a user utterance to one or more predefined intent categories, enabling a system to determine the semantic goal behind an input. It forms the core routing component of conversational AI systems, mapping raw text to structured action labels such as 'book_flight', 'check_balance', or 'cancel_order'.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:nlptask
requires:
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:annotated-training-data
enables:
  - urn:ngm:class:dialogue-system
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:slot-filling
  - urn:ngm:class:task-oriented-dialogue
  - urn:ngm:class:process-automation
dependsOn:
  - urn:ngm:class:intent-ontology
contrastsWith:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:out-of-domain-detection
bridgesTo:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:voice-user-interface
uses:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:transformer
  - urn:ngm:class:text-classification
  - urn:ngm:class:word-embedding
relatedTo:
  - urn:ngm:class:intent-recognition
  - urn:ngm:class:question-answering
  - urn:ngm:class:zero-shot-learning
---

# Intent Classification

Intent classification is a natural language processing task that assigns a user utterance to one or more predefined intent categories, enabling a system to determine the semantic goal behind an input. It forms the core routing component of conversational AI systems, mapping raw text to structured action labels such as 'book_flight', 'check_balance', or 'cancel_order'.
