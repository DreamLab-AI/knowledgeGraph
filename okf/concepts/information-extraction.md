---
okf_version: "0.2"
type: Class
title: Information Extraction
resource: urn:ngm:class:information-extraction
domain: ai
description: "Information Extraction (IE) is the automated process of identifying and structuring specific pieces of information from unstructured or semi-structured natural language text, producing machine-readable records such as typed entities, relational tuples, and event frames. Core subtasks include Named Entity Recognition, relation extraction, event extraction, coreference resolution, and slot filling. "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:relation-extraction
  - urn:ngm:class:event-extraction
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:slot-filling
requires:
  - urn:ngm:class:tokenization
  - urn:ngm:class:part-of-speech-tagging
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:dependency-parsing
enables:
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:question-answering
  - urn:ngm:class:document-summarisation
contrastsWith:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:text-classification
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:data-integration
  - urn:ngm:class:semantic-web-linked-data-standard
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:sequence-labelling
  - urn:ngm:class:conditional-random-field
  - urn:ngm:class:transformer
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:text-mining
  - urn:ngm:class:entity-linking
  - urn:ngm:class:open-information-extraction
---

# Information Extraction

Information Extraction (IE) is the automated process of identifying and structuring specific pieces of information from unstructured or semi-structured natural language text, producing machine-readable records such as typed entities, relational tuples, and event frames. Core subtasks include Named Entity Recognition, relation extraction, event extraction, coreference resolution, and slot filling. IE pipelines underpin knowledge graph population, question answering, and downstream analytics by converting free-form prose into structured representations consumable by databases and reasoning systems. Modern IE systems leverage pretrained transformer language models fine-tuned with supervised or few-shot learning, substantially improving generalisation across domains compared to earlier rule-based and feature-engineered approaches.
