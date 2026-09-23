---
okf_version: "0.2"
type: Class
title: Named Entity Recognition
resource: urn:ngm:class:named-entity-recognition
domain: artificial-intelligence
description: Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:natural-language-processing
requires:
  - urn:ngm:class:sequence-labelling
  - urn:ngm:class:word-embedding
enables:
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:question-answering
  - urn:ngm:class:relation-extraction
  - urn:ngm:class:event-extraction
  - urn:ngm:class:semantic-search
dependsOn:
  - urn:ngm:class:tokenization
  - urn:ngm:class:part-of-speech-tagging
contrastsWith:
  - urn:ngm:class:text-classification
  - urn:ngm:class:coreference-resolution
bridgesTo:
  - urn:ngm:class:knowledge-graph
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:encoder
  - urn:ngm:class:bert
  - urn:ngm:class:ro-berta
  - urn:ngm:class:conditional-random-field
partOf:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:information-extraction
relatedTo:
  - urn:ngm:class:entity-linking
  - urn:ngm:class:knowledge-base
---

# Named Entity Recognition

Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents.
