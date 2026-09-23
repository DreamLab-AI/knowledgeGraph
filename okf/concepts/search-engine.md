---
okf_version: "0.2"
type: Class
title: Search Engine
resource: urn:ngm:class:search-engine
domain: infrastructure
description: A search engine is a software system that systematically crawls, indexes, and ranks digital content to retrieve relevant results in response to user queries. It combines web crawling, inverted-index construction, relevance ranking (including PageRank-style link analysis and learning-to-rank models), and query understanding (tokenisation, stemming, NLP) into an end-to-end pipeline. Modern search en
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:information-retrieval
hasPart:
  - urn:ngm:class:web-crawler
  - urn:ngm:class:inverted-index
  - urn:ngm:class:query-processing
  - urn:ngm:class:relevance-ranking
  - urn:ngm:class:search-results-page
requires:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:data-storage
enables:
  - urn:ngm:class:content-discovery
  - urn:ngm:class:knowledge-discovery
  - urn:ngm:class:question-answering
contrastsWith:
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:knowledge-graph
bridgesTo:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:spatial-search
  - urn:ngm:class:metaverse
uses:
  - urn:ngm:class:vector-search
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:large-language-model
  - urn:ngm:class:pagerank
partOf:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:search-engine-optimisation
---

# Search Engine

A search engine is a software system that systematically crawls, indexes, and ranks digital content to retrieve relevant results in response to user queries. It combines web crawling, inverted-index construction, relevance ranking (including PageRank-style link analysis and learning-to-rank models), and query understanding (tokenisation, stemming, NLP) into an end-to-end pipeline. Modern search engines increasingly integrate semantic embeddings, dense retrieval, and large language model components to handle natural-language and multimodal queries. They constitute foundational information infrastructure for the open web, enterprise knowledge bases, e-commerce catalogues, and emerging spatial and metaverse content layers.
