---
okf_version: "0.2"
type: Class
title: Enterprise Search
resource: urn:ngm:class:enterprise-search
domain: artificial-intelligence
description: "Enterprise Search is the organisational capability to retrieve relevant information from heterogeneous internal data sources—documents, databases, emails, intranets, wikis, and code repositories—through a single unified query interface with access-control enforcement. Modern systems combine full-text inverted-index retrieval with dense vector embeddings and semantic search to surface contextually "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:knowledge-management-system
hasPart:
  - urn:ngm:class:inverted-index
  - urn:ngm:class:relevance-ranking
  - urn:ngm:class:query-understanding
  - urn:ngm:class:content-connector
  - urn:ngm:class:access-control
  - urn:ngm:class:document-processing
  - urn:ngm:class:answer-synthesis
  - urn:ngm:class:knowledge-graph-enrichment
requires:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-provider
  - urn:ngm:class:data-ingestion
  - urn:ngm:class:document-processing
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:knowledge-discovery
  - urn:ngm:class:decision-support
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:knowledge-grounding
  - urn:ngm:class:employee-productivity
  - urn:ngm:class:agentic-workflow
dependsOn:
  - urn:ngm:class:document-processing
  - urn:ngm:class:data-ingestion
  - urn:ngm:class:text-embeddings
  - urn:ngm:class:vector-database
  - urn:ngm:class:apache-lucene
  - urn:ngm:class:data-ingestion
  - urn:ngm:class:natural-language-processing
implements:
  - urn:ngm:class:unified-search
  - urn:ngm:class:federated-search
  - urn:ngm:class:semantic-search
  - urn:ngm:class:hybrid-retrieval
contrastsWith:
  - urn:ngm:class:web-search
  - urn:ngm:class:database-query
  - urn:ngm:class:file-system-search
  - urn:ngm:class:manual-knowledge-management
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:conversational-ai
uses:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:vector-database
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-embeddings
  - urn:ngm:class:bm25
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:nearest-neighbor-search
supports:
  - urn:ngm:class:knowledge-management
  - urn:ngm:class:enterprise-automation
  - urn:ngm:class:compliance-management
  - urn:ngm:class:customer-relationship-management
  - urn:ngm:class:software-engineering
standardizedBy:
  - urn:ngm:class:oasis-cmis
  - urn:ngm:class:saml-2-0
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
relatedTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:knowledge-management
  - urn:ngm:class:document-management-system
  - urn:ngm:class:process-mining
  - urn:ngm:class:enterprise-automation
  - urn:ngm:class:retrieval-augmented-generation
---

# Enterprise Search

Enterprise Search is the organisational capability to retrieve relevant information from heterogeneous internal data sources—documents, databases, emails, intranets, wikis, and code repositories—through a single unified query interface with access-control enforcement. Modern systems combine full-text inverted-index retrieval with dense vector embeddings and semantic search to surface contextually relevant results beyond simple keyword matching. The discipline integrates information retrieval, knowledge management, and applied AI, requiring content connectors, identity-aware access control, relevance tuning, and low-latency indexing pipelines at organisational scale. Retrieval-Augmented Generation (RAG) architectures have become a dominant deployment pattern, passing retrieved document chunks to large language models to synthesise grounded, cited answers.
