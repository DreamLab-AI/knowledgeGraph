---
okf_version: "0.2"
type: Class
title: Database Query
resource: urn:ngm:class:database-query
domain: data
description: A structured request submitted to a database management system to retrieve, insert, update, or delete data according to defined criteria. Queries are expressed in formal query languages such as SQL for relational databases or SPARQL for RDF triple stores, and underpin knowledge graph retrieval, analytics pipelines, and real-time application data access.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:database-schema
  - urn:ngm:class:query-parser
  - urn:ngm:class:query-optimiser
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:linked-data
  - urn:ngm:class:data-analytics
  - urn:ngm:class:real-time-data-access
dependsOn:
  - urn:ngm:class:relational-database
implements:
  - urn:ngm:class:sql
  - urn:ngm:class:sparql
  - urn:ngm:class:graph-ql
contrastsWith:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:stream-processing
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:sparql
  - urn:ngm:class:rest-api
  - urn:ngm:class:query-processor
supports:
  - urn:ngm:class:full-text-search
  - urn:ngm:class:semantic-search
standardizedBy:
  - urn:ngm:class:iso-iec-9075
  - urn:ngm:class:sparql
partOf:
  - urn:ngm:class:data-management
  - urn:ngm:class:database-management-system
relatedTo:
  - urn:ngm:class:rdf
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:transaction-processing
---

# Database Query

A structured request submitted to a database management system to retrieve, insert, update, or delete data according to defined criteria. Queries are expressed in formal query languages such as SQL for relational databases or SPARQL for RDF triple stores, and underpin knowledge graph retrieval, analytics pipelines, and real-time application data access.
