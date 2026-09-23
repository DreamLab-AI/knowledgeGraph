---
okf_version: "0.2"
type: Class
title: Natural Language Understanding
resource: urn:ngm:class:natural-language-understanding
domain: ai
description: Natural Language Understanding (NLU) is the subfield of Natural Language Processing dedicated to enabling machines to comprehend the meaning, intent, and pragmatic context of human language input beyond surface-level syntax. Core NLU tasks include semantic role labelling, named entity recognition, coreference resolution, intent classification, relation extraction, and natural language inference, a
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:intent-classification
  - urn:ngm:class:relation-extraction
  - urn:ngm:class:semantic-role-labelling
requires:
  - urn:ngm:class:semantic-parsing
  - urn:ngm:class:syntactic-parsing
enables:
  - urn:ngm:class:question-answering
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:dialogue-management
  - urn:ngm:class:information-extraction
  - urn:ngm:class:machine-translation
contrastsWith:
  - urn:ngm:class:natural-language-generation
bridgesTo:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:multimodal-ai-architecture-ai
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:word-embedding
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:knowledge-graph
partOf:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computational-linguistics
relatedTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:transfer-learning
---

# Natural Language Understanding

Natural Language Understanding (NLU) is the subfield of Natural Language Processing dedicated to enabling machines to comprehend the meaning, intent, and pragmatic context of human language input beyond surface-level syntax. Core NLU tasks include semantic role labelling, named entity recognition, coreference resolution, intent classification, relation extraction, and natural language inference, all requiring models to construct structured semantic representations of utterance meaning. Modern NLU systems are predominantly built on large pre-trained Transformer architectures such as BERT and its derivatives, which learn contextualised word representations from massive corpora via self-supervised objectives. NLU serves as the comprehension layer in conversational AI, information extraction pipelines, question answering systems, and dialogue management frameworks.
