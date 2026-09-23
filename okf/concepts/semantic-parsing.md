---
okf_version: "0.2"
type: Class
title: Semantic Parsing
resource: urn:ngm:class:semantic-parsing
domain: artificial-intelligence
description: Semantic parsing is the task of mapping natural-language utterances onto structured, machine-interpretable meaning representations such as logical forms, executable queries or programs. It converts ambiguous human language into precise formalisms that can be reasoned over or executed against a database or knowledge graph. Applications include question answering, text-to-SQL and instruction-to-code
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:natural-language-processing
requires:
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:labelled-data
enables:
  - urn:ngm:class:question-answering
  - urn:ngm:class:code-generation
dependsOn:
  - urn:ngm:class:knowledge-graph
contrastsWith:
  - urn:ngm:class:sequence-labelling
uses:
  - urn:ngm:class:sequence-to-sequence
  - urn:ngm:class:transformer-model
supports:
  - urn:ngm:class:intent-recognition
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:logical-form
  - urn:ngm:class:information-extraction
---

# Semantic Parsing

Semantic parsing is the task of mapping natural-language utterances onto structured, machine-interpretable meaning representations such as logical forms, executable queries or programs. It converts ambiguous human language into precise formalisms that can be reasoned over or executed against a database or knowledge graph. Applications include question answering, text-to-SQL and instruction-to-code translation.
