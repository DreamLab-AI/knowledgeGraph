---
okf_version: "0.2"
type: Class
title: Document Summarisation
resource: urn:ngm:class:document-summarisation
domain: ai
description: Document summarisation is the natural language processing task of producing a concise, faithful representation of the salient information in one or more source documents. It encompasses extractive approaches, which select and concatenate important spans, and abstractive approaches, which generate new text that paraphrases the content. Modern systems are built predominantly on transformer-based lar
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-generation
  - urn:ngm:class:content-generation
hasPart:
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:extractive-summarisation
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:multi-document-summarisation
  - urn:ngm:class:query-focused-summarisation
  - urn:ngm:class:faithfulness-evaluation
requires:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:training-data
  - urn:ngm:class:language-model
enables:
  - urn:ngm:class:knowledge-management
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:semantic-search
dependsOn:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:transformer
  - urn:ngm:class:sequence-to-sequence-learning
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:fine-tuning
contrastsWith:
  - urn:ngm:class:information-extraction
  - urn:ngm:class:keyword-extraction
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:text-classification
bridgesTo:
  - urn:ngm:class:knowledge-management
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:embedding
  - urn:ngm:class:rouge
  - urn:ngm:class:bertscore
supports:
  - urn:ngm:class:question-answering
  - urn:ngm:class:semantic-search
  - urn:ngm:class:knowledge-discovery
  - urn:ngm:class:document-processing
  - urn:ngm:class:enterprise-search
standardizedBy:
  - urn:ngm:class:cnn-dailymail-dataset
  - urn:ngm:class:xsum-benchmark
  - urn:ngm:class:samsum-dataset
  - urn:ngm:class:rouge-metric
  - urn:ngm:class:bertscore
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:content-generation
  - urn:ngm:class:document-processing
  - urn:ngm:class:generative-ai
  - urn:ngm:class:machine-translation
  - urn:ngm:class:named-entity-recognition
---

# Document Summarisation

Document summarisation is the natural language processing task of producing a concise, faithful representation of the salient information in one or more source documents. It encompasses extractive approaches, which select and concatenate important spans, and abstractive approaches, which generate new text that paraphrases the content. Modern systems are built predominantly on transformer-based large language models and are evaluated for informativeness, coherence, and factual consistency.
