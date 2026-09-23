---
okf_version: "0.2"
type: Class
title: Query Interface
resource: urn:ngm:class:query-interface
domain: ai
description: A query interface is a defined boundary — programmatic, visual, or linguistic — through which users or systems express requests for data retrieval, graph traversal, or knowledge discovery against a data store or knowledge base, receiving structured results in return. Query interfaces range from formal declarative languages such as SQL and SPARQL to REST endpoints, vector similarity APIs, and natur
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-access-interface
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:enterprise-search
uses:
  - urn:ngm:class:database-query
  - urn:ngm:class:sparql
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:vector-database
  - urn:ngm:class:nearest-neighbor-search
---

# Query Interface

A query interface is a defined boundary — programmatic, visual, or linguistic — through which users or systems express requests for data retrieval, graph traversal, or knowledge discovery against a data store or knowledge base, receiving structured results in return. Query interfaces range from formal declarative languages such as SQL and SPARQL to REST endpoints, vector similarity APIs, and natural-language question-answering systems built on large language models. They abstract the internal organisation of a data source behind a stable contract, enabling diverse clients to access data without knowledge of storage implementation details. Well-designed query interfaces balance expressiveness, performance, and ease of use.
