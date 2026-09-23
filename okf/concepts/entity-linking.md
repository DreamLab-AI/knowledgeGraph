---
okf_version: "0.2"
type: Class
title: Entity Linking
resource: urn:ngm:class:entity-linking
domain: artificial-intelligence
description: Entity linking is the natural language processing task of mapping mentions of entities in unstructured text to their corresponding unique identifiers in a target knowledge base such as Wikidata or a domain ontology. It combines candidate generation, which retrieves plausible referents for a surface form, with entity disambiguation, which selects the correct referent using contextual, semantic, and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:information-extraction
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:mention-detection
  - urn:ngm:class:candidate-generation
  - urn:ngm:class:entity-disambiguation
  - urn:ngm:class:nil-detection
  - urn:ngm:class:alias-expansion
  - urn:ngm:class:global-coherence-model
requires:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:alias-dictionary
  - urn:ngm:class:entity-description
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:entity-resolution
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:question-answering
  - urn:ngm:class:semantic-search
  - urn:ngm:class:relation-extraction
  - urn:ngm:class:knowledge-base-population
  - urn:ngm:class:event-extraction
dependsOn:
  - urn:ngm:class:embedding
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:nearest-neighbor-search
implements:
  - urn:ngm:class:named-entity-disambiguation
  - urn:ngm:class:wikification
  - urn:ngm:class:dense-retrieval
contrastsWith:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:record-linkage
  - urn:ngm:class:word-sense-disambiguation
bridgesTo:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:linked-data
  - urn:ngm:class:knowledge-discovery
uses:
  - urn:ngm:class:coreference-resolution
  - urn:ngm:class:embedding
  - urn:ngm:class:wikidata
  - urn:ngm:class:wikipedia
  - urn:ngm:class:bert
  - urn:ngm:class:bi-encoder
  - urn:ngm:class:cross-encoder
  - urn:ngm:class:trie-decoding
  - urn:ngm:class:faiss
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-mining
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:biomedical-nlp
  - urn:ngm:class:dialogue-systems
  - urn:ngm:class:content-recommendation
standardizedBy:
  - urn:ngm:class:w3c-rdf
  - urn:ngm:class:linked-data
partOf:
  - urn:ngm:class:information-extraction
relatedTo:
  - urn:ngm:class:record-linkage
  - urn:ngm:class:ontology
  - urn:ngm:class:entity-resolution
  - urn:ngm:class:relation-extraction
  - urn:ngm:class:event-extraction
  - urn:ngm:class:slot-filling
---

# Entity Linking

Entity linking is the natural language processing task of mapping mentions of entities in unstructured text to their corresponding unique identifiers in a target knowledge base such as Wikidata or a domain ontology. It combines candidate generation, which retrieves plausible referents for a surface form, with entity disambiguation, which selects the correct referent using contextual, semantic, and popularity signals. The task resolves ambiguity where one surface form may denote many entities and one entity may be expressed by many surface forms. Entity linking is a foundational step in transforming free text into structured, machine-readable knowledge.
