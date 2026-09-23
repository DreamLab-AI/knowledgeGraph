---
okf_version: "0.2"
type: Class
title: BEIR Benchmark
resource: urn:ngm:class:beir-benchmark
domain: ai
description: "BEIR (Benchmarking IR) is a heterogeneous benchmark suite for evaluating the zero-shot generalisation of information retrieval models across eighteen diverse datasets spanning domains including biomedical, legal, financial, and Wikipedia text. It measures how well retrieval systems transfer across topic domains and retrieval task types without domain-specific fine-tuning, providing a standardised "
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:ms-marco
  - urn:ngm:class:trec-covid
  - urn:ngm:class:nfcorpus
  - urn:ngm:class:fiqa
  - urn:ngm:class:arguana
  - urn:ngm:class:scifact
  - urn:ngm:class:hotpotqa
  - urn:ngm:class:fiqa-2018
  - urn:ngm:class:natural-questions
  - urn:ngm:class:quora-question-pairs
  - urn:ngm:class:dbpedia-entity
  - urn:ngm:class:fever
  - urn:ngm:class:climate-fever
  - urn:ngm:class:biomedical-trec
requires:
  - urn:ngm:class:ndcg-10
  - urn:ngm:class:recall-100
  - urn:ngm:class:relevance-judgement
  - urn:ngm:class:document-corpus
  - urn:ngm:class:query-set
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:dense-passage-retrieval
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:zero-shot-generalisation
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:hybrid-search
dependsOn:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:bm25
  - urn:ngm:class:transformer
  - urn:ngm:class:faiss
  - urn:ngm:class:inverted-index
implements:
  - urn:ngm:class:zero-shot-evaluation-protocol
  - urn:ngm:class:normalised-discounted-cumulative-gain
  - urn:ngm:class:heterogeneous-domain-testing
contrastsWith:
  - urn:ngm:class:ms-marco-benchmark
  - urn:ngm:class:glue-benchmark
  - urn:ngm:class:squad
  - urn:ngm:class:triviaqa
uses:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:bm25
  - urn:ngm:class:transformer
  - urn:ngm:class:ndcg-metric
  - urn:ngm:class:recall-metric
  - urn:ngm:class:faiss
  - urn:ngm:class:colbert
  - urn:ngm:class:splade
  - urn:ngm:class:e5
  - urn:ngm:class:bge
supports:
  - urn:ngm:class:rag-pipeline-development
  - urn:ngm:class:neural-retrieval-research
  - urn:ngm:class:model-comparison
  - urn:ngm:class:benchmark-driven-development
standardizedBy:
  - urn:ngm:class:neurips-2021
  - urn:ngm:class:acl-anthology
  - urn:ngm:class:sigir
relatedTo:
  - urn:ngm:class:hybrid-search
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:mteb-benchmark
  - urn:ngm:class:colbert
  - urn:ngm:class:splade
  - urn:ngm:class:question-answering
  - urn:ngm:class:dense-passage-retrieval
---

# BEIR Benchmark

BEIR (Benchmarking IR) is a heterogeneous benchmark suite for evaluating the zero-shot generalisation of information retrieval models across eighteen diverse datasets spanning domains including biomedical, legal, financial, and Wikipedia text. It measures how well retrieval systems transfer across topic domains and retrieval task types without domain-specific fine-tuning, providing a standardised framework for comparing dense, sparse, and hybrid retrieval approaches.
