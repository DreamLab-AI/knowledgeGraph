---
okf_version: "0.2"
type: Class
title: Property Graph
resource: urn:ngm:class:property-graph
domain: data
description: A property graph is a graph data structure in which both nodes and edges carry labels and an arbitrary set of key-value properties. Edges are directed and uniquely identifiable, allowing multiple parallel relationships of different types between the same pair of nodes. It is the data model behind many native graph databases and is queried with traversal languages such as Cypher and Gremlin.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graph-data-model
hasPart:
  - urn:ngm:class:node
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:structured-data
implements:
  - urn:ngm:class:data-model
contrastsWith:
  - urn:ngm:class:rdf
uses:
  - urn:ngm:class:graph-database
  - urn:ngm:class:knowledge-representation
supports:
  - urn:ngm:class:knowledge-graph-embedding
relatedTo:
  - urn:ngm:class:sparql
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:ontology
---

# Property Graph

A property graph is a graph data structure in which both nodes and edges carry labels and an arbitrary set of key-value properties. Edges are directed and uniquely identifiable, allowing multiple parallel relationships of different types between the same pair of nodes. It is the data model behind many native graph databases and is queried with traversal languages such as Cypher and Gremlin.
