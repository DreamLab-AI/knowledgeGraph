---
okf_version: "0.2"
type: Class
title: Knowledge Base
resource: urn:ngm:class:knowledge-base
domain: artificial-intelligence
description: A knowledge base is a structured, machine-readable repository of domain-specific information, factual assertions, and inference rules that software systems—including expert systems, question-answering engines, and AI agents—can query, reason over, and update. Knowledge bases range from relational tables and document stores to formal ontologies expressed in OWL/RDF and property graphs, each offerin
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:knowledge-representation
hasPart:
  - urn:ngm:class:ontology
  - urn:ngm:class:inference-engine
  - urn:ngm:class:triple-store
  - urn:ngm:class:production-rules
requires:
  - urn:ngm:class:data-schema
  - urn:ngm:class:knowledge-acquisition
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:semantic-search
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:expert-systems
dependsOn:
  - urn:ngm:class:ontology
  - urn:ngm:class:data-model
contrastsWith:
  - urn:ngm:class:database
  - urn:ngm:class:vector-database
  - urn:ngm:class:large-language-model
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:decentralised-knowledge-graph
uses:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:description-logic
  - urn:ngm:class:sparql
  - urn:ngm:class:rdf
relatedTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:semantic-web-linked-data-standard
---

# Knowledge Base

A knowledge base is a structured, machine-readable repository of domain-specific information, factual assertions, and inference rules that software systems—including expert systems, question-answering engines, and AI agents—can query, reason over, and update. Knowledge bases range from relational tables and document stores to formal ontologies expressed in OWL/RDF and property graphs, each offering different trade-offs between expressiveness, scalability, and reasoning complexity. They function as the long-term declarative memory layer in AI architectures, enabling systems to retrieve, validate, and integrate facts without embedding all knowledge in model parameters. In contemporary retrieval-augmented generation pipelines a knowledge base serves as the authoritative external store from which a retriever selects grounding context for a large language model.
