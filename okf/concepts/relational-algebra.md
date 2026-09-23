---
okf_version: "0.2"
type: Class
title: Relational Algebra
resource: urn:ngm:class:relational-algebra
domain: data
description: Relational algebra is a formal, procedural query language consisting of operators that take relations as input and produce relations as output. Its core operators — selection, projection, union, set difference, Cartesian product, rename, and derived operators such as join — provide a closed algebra that gives precise semantics to relational queries. It is the theoretical foundation for SQL and for
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:relational-database
hasPart:
  - urn:ngm:class:join
requires:
  - urn:ngm:class:set-theory
enables:
  - urn:ngm:class:sql
  - urn:ngm:class:query-processing
dependsOn:
  - urn:ngm:class:relational-database
implements:
  - urn:ngm:class:relational-model
contrastsWith:
  - urn:ngm:class:relational-calculus
bridgesTo:
  - urn:ngm:class:relational-calculus
uses:
  - urn:ngm:class:set-theory
supports:
  - urn:ngm:class:sql
  - urn:ngm:class:query-optimization
  - urn:ngm:class:optimisation
partOf:
  - urn:ngm:class:relational-model
relatedTo:
  - urn:ngm:class:relational-database
  - urn:ngm:class:database-management-system
  - urn:ngm:class:data-model
  - urn:ngm:class:query-optimization
  - urn:ngm:class:optimisation
---

# Relational Algebra

Relational algebra is a formal, procedural query language consisting of operators that take relations as input and produce relations as output. Its core operators — selection, projection, union, set difference, Cartesian product, rename, and derived operators such as join — provide a closed algebra that gives precise semantics to relational queries. It is the theoretical foundation for SQL and for the query optimisation performed by relational database systems.
