---
okf_version: "0.2"
type: Class
title: Graph Databases
resource: urn:ngm:class:graph-databases
domain: data
description: Graph databases are database management systems that represent and store data as a network of nodes (entities) and edges (relationships), with both capable of carrying named property sets. Unlike relational models that encode relationships through foreign-key joins, graph databases make adjacency a first-class storage primitive, enabling traversal-based queries that navigate multi-hop paths in nea
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:database-systems
hasPart:
  - urn:ngm:class:property-graph-model
  - urn:ngm:class:rdf-triple-store
  - urn:ngm:class:graph-query-language
  - urn:ngm:class:index-free-adjacency
requires:
  - urn:ngm:class:graph-data-model
  - urn:ngm:class:graph-algorithms
enables:
  - urn:ngm:class:knowledge-graphs
  - urn:ngm:class:semantic-search
  - urn:ngm:class:recommendation-systems
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:network-analysis
contrastsWith:
  - urn:ngm:class:relational-database
  - urn:ngm:class:relational-database
  - urn:ngm:class:document-stores
  - urn:ngm:class:columnar-databases
bridgesTo:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:graph-neural-networks
  - urn:ngm:class:ontology-engineering
uses:
  - urn:ngm:class:cypher-query-language
  - urn:ngm:class:sparql
  - urn:ngm:class:gremlin-traversal-language
relatedTo:
  - urn:ngm:class:nosql-database
  - urn:ngm:class:linked-data
  - urn:ngm:class:social-network-analysis
  - urn:ngm:class:nosql-database
---

# Graph Databases

Graph databases are database management systems that represent and store data as a network of nodes (entities) and edges (relationships), with both capable of carrying named property sets. Unlike relational models that encode relationships through foreign-key joins, graph databases make adjacency a first-class storage primitive, enabling traversal-based queries that navigate multi-hop paths in near-constant time per hop. They implement the property-graph or RDF triple-store data models, and are queried via languages such as Cypher, Gremlin, or SPARQL. Their native graph storage and index-free adjacency make them especially suited to domains where relationships are as semantically rich as the entities themselves.
