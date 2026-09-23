---
okf_version: "0.2"
type: Class
title: Sequence Labelling
resource: urn:ngm:class:sequence-labelling
domain: artificial-intelligence
description: Sequence labelling is a class of natural-language-processing tasks in which each element of an input sequence is assigned a categorical label from a fixed tag set. It encompasses tasks such as named-entity recognition, part-of-speech tagging and slot filling, where contextual dependencies between adjacent tokens matter. Classical approaches use hidden Markov models and conditional random fields, w
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:natural-language-processing
requires:
  - urn:ngm:class:labelled-data
  - urn:ngm:class:supervised-learning
enables:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:slot-filling
  - urn:ngm:class:information-extraction
contrastsWith:
  - urn:ngm:class:text-classification
uses:
  - urn:ngm:class:conditional-random-field
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:recurrent-neural-network
supports:
  - urn:ngm:class:natural-language-understanding
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:part-of-speech-tagging
  - urn:ngm:class:semantic-role-labelling
---

# Sequence Labelling

Sequence labelling is a class of natural-language-processing tasks in which each element of an input sequence is assigned a categorical label from a fixed tag set. It encompasses tasks such as named-entity recognition, part-of-speech tagging and slot filling, where contextual dependencies between adjacent tokens matter. Classical approaches use hidden Markov models and conditional random fields, while modern systems use neural encoders.
