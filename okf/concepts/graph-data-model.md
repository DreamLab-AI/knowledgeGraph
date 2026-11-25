---
okf_version: "0.2"
type: Class
title: Graph Data Model
resource: urn:ngm:class:graph-data-model
domain: data
description: "A graph data model represents information as nodes connected by edges, where edges carry the semantics of relationships between entities. It makes connections first-class, so traversing and querying relationships is direct rather than reconstructed through joins as in tabular models. The two dominant variants are the labelled property graph, which attaches key-value properties to nodes and edges, "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-model
hasPart:
  - urn:ngm:class:node
requires:
  - urn:ngm:class:graph-database
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-web
implements:
  - urn:ngm:class:property-graph
  - urn:ngm:class:rdf
uses:
  - urn:ngm:class:sparql
  - urn:ngm:class:knowledge-representation
supports:
  - urn:ngm:class:structured-data
  - urn:ngm:class:knowledge-graph-embedding
relatedTo:
  - urn:ngm:class:ontology
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Graph Data Model

A graph data model represents information as nodes connected by edges, where edges carry the semantics of relationships between entities. It makes connections first-class, so traversing and querying relationships is direct rather than reconstructed through joins as in tabular models. The two dominant variants are the labelled property graph, which attaches key-value properties to nodes and edges, and the RDF triple model, which expresses facts as subject-predicate-object statements.
