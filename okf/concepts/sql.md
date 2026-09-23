---
okf_version: "0.2"
type: Class
title: SQL
resource: urn:ngm:class:sql
domain: data
description: "SQL (Structured Query Language) is a declarative, domain-specific language for defining, manipulating, and querying data held in relational database management systems. A user expresses the desired result set through clauses such as SELECT, FROM, WHERE, JOIN, and GROUP BY, while the database query optimiser determines the physical execution plan. Standardised by ANSI and ISO since 1986, SQL spans "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:database-system
hasPart:
  - urn:ngm:class:data-definition-language
  - urn:ngm:class:data-manipulation-language
  - urn:ngm:class:query-optimiser
requires:
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:data-analytics
  - urn:ngm:class:transaction-processing
implements:
  - urn:ngm:class:relational-algebra
  - urn:ngm:class:declarative-query
contrastsWith:
  - urn:ngm:class:nosql
  - urn:ngm:class:graph-query-language
bridgesTo:
  - urn:ngm:class:object-relational-mapping
uses:
  - urn:ngm:class:indexing
  - urn:ngm:class:acid-transactions
supports:
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:data-warehouse
standardizedBy:
  - urn:ngm:class:iso-iec-9075
  - urn:ngm:class:ansi
  - urn:ngm:class:iso-iec-9075
partOf:
  - urn:ngm:class:relational-database
relatedTo:
  - urn:ngm:class:data-management
  - urn:ngm:class:stored-procedure
---

# SQL

SQL (Structured Query Language) is a declarative, domain-specific language for defining, manipulating, and querying data held in relational database management systems. A user expresses the desired result set through clauses such as SELECT, FROM, WHERE, JOIN, and GROUP BY, while the database query optimiser determines the physical execution plan. Standardised by ANSI and ISO since 1986, SQL spans data definition (DDL), data manipulation (DML), and transaction control, and remains the predominant interface for structured data despite the rise of NoSQL alternatives.
