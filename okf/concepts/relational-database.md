---
okf_version: "0.2"
type: Class
title: Relational Database
resource: urn:ngm:class:relational-database
domain: data
description: A relational database organises data into tables of rows and columns, where relationships between tables are expressed through shared key values rather than physical pointers, following the relational model. Data is queried and manipulated declaratively, conventionally through SQL, and integrity is enforced via constraints, keys and typed schemas. Relational systems typically provide ACID transact
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:database-management-system
hasPart:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:data-model
  - urn:ngm:class:sql
enables:
  - urn:ngm:class:data-integration
dependsOn:
  - urn:ngm:class:data-model
contrastsWith:
  - urn:ngm:class:centralised-database
uses:
  - urn:ngm:class:sql
supports:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-management
partOf:
  - urn:ngm:class:data-storage
relatedTo:
  - urn:ngm:class:database-management-system
  - urn:ngm:class:metadata
---

# Relational Database

A relational database organises data into tables of rows and columns, where relationships between tables are expressed through shared key values rather than physical pointers, following the relational model. Data is queried and manipulated declaratively, conventionally through SQL, and integrity is enforced via constraints, keys and typed schemas. Relational systems typically provide ACID transactions, making them the default choice for consistent, structured operational data.
