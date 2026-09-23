---
okf_version: "0.2"
type: Class
title: SPARQL Endpoint
resource: urn:ngm:class:sparql-endpoint
domain: spatial-computing
description: A SPARQL Endpoint is a network-accessible service that accepts SPARQL Protocol and RDF Query Language queries and returns structured results over HTTP, enabling federated access to RDF knowledge graphs and linked data stores. It acts as the primary interface between client applications and triple stores, supporting SELECT, CONSTRUCT, ASK, and UPDATE operations. SPARQL Endpoints are foundational to
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:sc-standards-and-interop
  - urn:ngm:class:data-access-interface
hasPart:
  - urn:ngm:class:sparql-query-engine
  - urn:ngm:class:query-processor
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:linked-data
  - urn:ngm:class:provenance-ontology-prov-o
bridgesTo:
  - urn:ngm:class:data-access-interface
uses:
  - urn:ngm:class:sparql
  - urn:ngm:class:rdf
  - urn:ngm:class:json-ld
relatedTo:
  - urn:ngm:class:graph-database
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:database-query
  - urn:ngm:class:sparql-examples
---

# SPARQL Endpoint

A SPARQL Endpoint is a network-accessible service that accepts SPARQL Protocol and RDF Query Language queries and returns structured results over HTTP, enabling federated access to RDF knowledge graphs and linked data stores. It acts as the primary interface between client applications and triple stores, supporting SELECT, CONSTRUCT, ASK, and UPDATE operations. SPARQL Endpoints are foundational to the Semantic Web stack and to provenance-aware knowledge graph systems.
