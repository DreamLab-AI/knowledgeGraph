---
okf_version: "0.2"
type: Class
title: Slot Filling
resource: urn:ngm:class:slot-filling
domain: artificial-intelligence
description: Slot filling is a natural language processing task in which a system extracts and populates predefined semantic fields (slots) from user utterances within a task-oriented dialogue context, enabling the system to gather the structured information required to fulfil a user request. It operates alongside intent classification to transform free-form text into actionable structured representations.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:information-extraction
requires:
  - urn:ngm:class:intent-classification
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:tokenization
  - urn:ngm:class:sequence-labelling
enables:
  - urn:ngm:class:dialogue-system
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:task-oriented-dialogue
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:workflow-automation
dependsOn:
  - urn:ngm:class:pretrained-model
contrastsWith:
  - urn:ngm:class:relation-extraction
bridgesTo:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:bert
  - urn:ngm:class:transfer-learning
supports:
  - urn:ngm:class:question-answering
relatedTo:
  - urn:ngm:class:dialogue-state-tracking
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:semantic-parsing
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:few-shot-learning
---

# Slot Filling

Slot filling is a natural language processing task in which a system extracts and populates predefined semantic fields (slots) from user utterances within a task-oriented dialogue context, enabling the system to gather the structured information required to fulfil a user request. It operates alongside intent classification to transform free-form text into actionable structured representations.
