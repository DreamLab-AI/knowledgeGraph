---
okf_version: "0.2"
type: Class
title: Database Schema
resource: urn:ngm:class:database-schema
domain: artificial-intelligence
description: A database schema is the formal, declarative description of the logical structure of a database, specifying its tables, columns, data types, primary and foreign keys, integrity constraints, views, indexes, and relationships. It constitutes the logical layer of a three-level ANSI/SPARC architecture that separates the conceptual organisation of data from physical storage details and from application
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:data-model
  - urn:ngm:class:relational-database
hasPart:
  - urn:ngm:class:normalisation
  - urn:ngm:class:referential-integrity
  - urn:ngm:class:index
  - urn:ngm:class:view
  - urn:ngm:class:database-view
  - urn:ngm:class:primary-key
  - urn:ngm:class:foreign-key
requires:
  - urn:ngm:class:database-management-system
  - urn:ngm:class:sql
  - urn:ngm:class:data-model
enables:
  - urn:ngm:class:data-interoperability
  - urn:ngm:class:database-query
  - urn:ngm:class:acid-transactions
  - urn:ngm:class:schema-evolution
  - urn:ngm:class:data-integration
dependsOn:
  - urn:ngm:class:sql
  - urn:ngm:class:database-management-system
  - urn:ngm:class:relational-algebra
implements:
  - urn:ngm:class:data-model
  - urn:ngm:class:relational-algebra
  - urn:ngm:class:referential-integrity
contrastsWith:
  - urn:ngm:class:ontology
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:nosql-database
bridgesTo:
  - urn:ngm:class:owl-class-hierarchy
  - urn:ngm:class:object-relational-mapping
  - urn:ngm:class:knowledge-representation
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:data-model
  - urn:ngm:class:relational-algebra
  - urn:ngm:class:normalisation
supports:
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-quality
  - urn:ngm:class:metadata
standardizedBy:
  - urn:ngm:class:iso-iec-9075
partOf:
  - urn:ngm:class:relational-database
  - urn:ngm:class:database
relatedTo:
  - urn:ngm:class:metadata
  - urn:ngm:class:data-migration
  - urn:ngm:class:object-relational-mapping
  - urn:ngm:class:owl-class-hierarchy
  - urn:ngm:class:postgre-sql
  - urn:ngm:class:data-versioning
  - urn:ngm:class:data-management
---

# Database Schema

A database schema is the formal, declarative description of the logical structure of a database, specifying its tables, columns, data types, primary and foreign keys, integrity constraints, views, indexes, and relationships. It constitutes the logical layer of a three-level ANSI/SPARC architecture that separates the conceptual organisation of data from physical storage details and from application-level views, and is enforced at runtime by the Database Management System. Schemas evolve through controlled migration scripts — governed by tools such as Flyway and Liquibase — and contrast with ontologies in being prescriptive, closed-world storage structures rather than open, inference-supporting conceptual models for reasoning.
