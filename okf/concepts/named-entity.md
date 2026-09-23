---
okf_version: "0.2"
type: Class
title: Named Entity
resource: urn:ngm:class:named-entity
domain: artificial-intelligence
description: A Named Entity is a real-world object or concept denoted by a proper noun—typically a person, organisation, location, geopolitical entity, date, time expression, monetary value, or product—that can be identified and classified within text by a named-entity recognition system. Named entities form the primary subjects, objects, and contextual anchors of factual statements, making their accurate iden
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:named-entity-recognition
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:ontology
uses:
  - urn:ngm:class:tokenization
  - urn:ngm:class:conditional-random-field
relatedTo:
  - urn:ngm:class:vocabulary
  - urn:ngm:class:token
  - urn:ngm:class:transformer
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:pattern-recognition
---

# Named Entity

A Named Entity is a real-world object or concept denoted by a proper noun—typically a person, organisation, location, geopolitical entity, date, time expression, monetary value, or product—that can be identified and classified within text by a named-entity recognition system. Named entities form the primary subjects, objects, and contextual anchors of factual statements, making their accurate identification a prerequisite for downstream information-extraction, relation-extraction, question-answering, and knowledge-graph construction tasks. The boundary and category of a named entity are determined by an annotation schema and domain ontology, so the same text span may be categorised differently across biomedical, legal, and news domains.
