---
okf_version: "0.2"
type: Class
title: Pyodide RAG Corpus Builder Script
resource: urn:ngm:class:pyodide-rag-corpus-builder-script
domain: artificial-intelligence
description: "Python to build RAG data page is a Logseq Pyodide script that enumerates all pages with the `public:: true` property, loads their block content, applies text-cleaning routines (URL removal, bracket stripping, special-character normalisation), and appends the cleaned content to a dedicated FULLRAG page. This page then serves as the consolidated corpus for local Retrieval-Augmented Generation pipeli"
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-application
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
dependsOn:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-database
uses:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:tokenization
relatedTo:
  - urn:ngm:class:knowledge-management
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Pyodide RAG Corpus Builder Script

Python to build RAG data page is a Logseq Pyodide script that enumerates all pages with the `public:: true` property, loads their block content, applies text-cleaning routines (URL removal, bracket stripping, special-character normalisation), and appends the cleaned content to a dedicated FULLRAG page. This page then serves as the consolidated corpus for local Retrieval-Augmented Generation pipelines, enabling semantic search over the entire public knowledge graph without external data transfer.
