---
okf_version: "0.2"
type: Class
title: Coreference Resolution
resource: urn:ngm:class:coreference-resolution
domain: artificial-intelligence
description: Coreference resolution is the natural language processing task of identifying all expressions in a text that refer to the same real-world entity, grouping noun phrases, pronouns, definite descriptions, and other referring expressions into coreference clusters so that downstream systems can maintain coherent entity representations across sentences and documents. It is a foundational subtask of info
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:natural-language-understanding
hasPart:
  - urn:ngm:class:mention-detection
  - urn:ngm:class:antecedent-scoring
  - urn:ngm:class:mention-clustering
  - urn:ngm:class:anaphora-resolution
  - urn:ngm:class:span-representation
requires:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:semantic-parsing
  - urn:ngm:class:dependency-parsing
  - urn:ngm:class:span-representation
  - urn:ngm:class:word-embeddings
enables:
  - urn:ngm:class:information-extraction
  - urn:ngm:class:question-answering
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:document-summarisation
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:knowledge-graph
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:bert
  - urn:ngm:class:named-entity-recognition
implements:
  - urn:ngm:class:entity-tracking
  - urn:ngm:class:discourse-coherence
  - urn:ngm:class:anaphora-resolution
contrastsWith:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:text-mining
  - urn:ngm:class:entity-linking
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-model
  - urn:ngm:class:bert
  - urn:ngm:class:word-embeddings
  - urn:ngm:class:part-of-speech-tagging
supports:
  - urn:ngm:class:entity-resolution
  - urn:ngm:class:machine-translation
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:slot-filling
  - urn:ngm:class:relation-extraction
standardizedBy:
  - urn:ngm:class:conll-2012-shared-task
partOf:
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:information-extraction
relatedTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:relation-extraction
  - urn:ngm:class:part-of-speech-tagging
  - urn:ngm:class:dependency-parsing
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:entity-linking
---

# Coreference Resolution

Coreference resolution is the natural language processing task of identifying all expressions in a text that refer to the same real-world entity, grouping noun phrases, pronouns, definite descriptions, and other referring expressions into coreference clusters so that downstream systems can maintain coherent entity representations across sentences and documents. It is a foundational subtask of information extraction, question answering, summarisation, and knowledge graph population, enabling models to track entities without re-identifying them from scratch at each mention.
