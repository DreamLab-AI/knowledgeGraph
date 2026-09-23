---
okf_version: "0.2"
type: Class
title: Relation Extraction
resource: urn:ngm:class:relation-extraction
domain: artificial-intelligence
description: Relation extraction is the natural-language-processing task of identifying semantic relationships between entities mentioned in text and classifying them into predefined or open relation types. It typically operates on the output of named-entity recognition, determining whether and how two entities are connected, for example employer-of, located-in or part-of. Relation extraction is foundational t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:information-extraction
hasPart:
  - urn:ngm:class:text-classification
requires:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:natural-language-processing
enables:
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:knowledge-graph
dependsOn:
  - urn:ngm:class:feature-extraction
contrastsWith:
  - urn:ngm:class:slot-filling
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:large-language-model
  - urn:ngm:class:supervised-learning
supports:
  - urn:ngm:class:ontology
partOf:
  - urn:ngm:class:information-extraction
relatedTo:
  - urn:ngm:class:pattern-recognition
---

# Relation Extraction

Relation extraction is the natural-language-processing task of identifying semantic relationships between entities mentioned in text and classifying them into predefined or open relation types. It typically operates on the output of named-entity recognition, determining whether and how two entities are connected, for example employer-of, located-in or part-of. Relation extraction is foundational to knowledge-graph construction, supplying the typed edges that link extracted entities into structured assertions.
