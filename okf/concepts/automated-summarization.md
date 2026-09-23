---
okf_version: "0.2"
type: Class
title: Automated Summarization
resource: urn:ngm:class:automated-summarization
domain: artificial-intelligence
description: Automated Summarization is an NLP task in which a system produces a condensed representation of one or more source documents that preserves salient information and is significantly shorter than the original. Extractive approaches select and concatenate verbatim sentences or passages from the source; abstractive approaches generate novel text that may paraphrase, fuse, or infer content not explicit
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:text-generation
  - urn:ngm:class:language-modeling
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:natural-language-understanding
enables:
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:documentation-generation
  - urn:ngm:class:meeting-ai-assistant
bridgesTo:
  - urn:ngm:class:meeting-recording
uses:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:retrieval-augmented-generation
relatedTo:
  - urn:ngm:class:question-answering
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:meeting-transcription
  - urn:ngm:class:sentiment-analysis
---

# Automated Summarization

Automated Summarization is an NLP task in which a system produces a condensed representation of one or more source documents that preserves salient information and is significantly shorter than the original. Extractive approaches select and concatenate verbatim sentences or passages from the source; abstractive approaches generate novel text that may paraphrase, fuse, or infer content not explicitly stated in the source. Modern large language model-based summarizers are predominantly abstractive, achieving strong performance on long-form documents, meeting transcripts, scientific papers, and news articles, but remain susceptible to hallucination, factual inconsistency, and salience mismatch relative to the reader's intent.
