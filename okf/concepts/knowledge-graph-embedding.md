---
okf_version: "0.2"
type: Class
title: Knowledge Graph Embedding
resource: urn:ngm:class:knowledge-graph-embedding
domain: machine-learning
description: Knowledge graph embedding is the technique of representing the entities and relations of a knowledge graph as continuous low-dimensional vectors that preserve the graph's structural and semantic regularities. Scoring functions over these vectors model the plausibility of triples, enabling tasks such as link prediction, entity resolution and similarity-based retrieval through algebraic operations r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:representation-learning
requires:
  - urn:ngm:class:knowledge-graph
enables:
  - urn:ngm:class:link-prediction
  - urn:ngm:class:entity-resolution
  - urn:ngm:class:semantic-search
dependsOn:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:representation-learning
implements:
  - urn:ngm:class:graph-embedding
bridgesTo:
  - urn:ngm:class:knowledge-graph
uses:
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:embedding
supports:
  - urn:ngm:class:reasoning
  - urn:ngm:class:relation-extraction
relatedTo:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:semantic-search
---

# Knowledge Graph Embedding

Knowledge graph embedding is the technique of representing the entities and relations of a knowledge graph as continuous low-dimensional vectors that preserve the graph's structural and semantic regularities. Scoring functions over these vectors model the plausibility of triples, enabling tasks such as link prediction, entity resolution and similarity-based retrieval through algebraic operations rather than symbolic traversal. It bridges symbolic knowledge representation with vector-based machine learning.
