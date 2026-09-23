---
okf_version: "0.2"
type: Class
title: NoSQL Database
resource: urn:ngm:class:nosql-database
domain: infrastructure
description: "A NoSQL database is a class of data store that departs from the rigid tabular schema and relational model of traditional SQL systems to favour flexible schemas, horizontal scalability, and high write throughput. NoSQL systems are typically organised by data model — document, key-value, wide-column, or graph — and often relax strong consistency in exchange for availability and partition tolerance. "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:database-management-system
hasPart:
  - urn:ngm:class:document-database
  - urn:ngm:class:key-value-store
  - urn:ngm:class:time-series-database
requires:
  - urn:ngm:class:replication
enables:
  - urn:ngm:class:microservices
dependsOn:
  - urn:ngm:class:cap-theorem
contrastsWith:
  - urn:ngm:class:relational-database
uses:
  - urn:ngm:class:sharding
  - urn:ngm:class:eventual-consistency
supports:
  - urn:ngm:class:scalability
  - urn:ngm:class:high-availability
partOf:
  - urn:ngm:class:database-management-system
relatedTo:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:cap-theorem
---

# NoSQL Database

A NoSQL database is a class of data store that departs from the rigid tabular schema and relational model of traditional SQL systems to favour flexible schemas, horizontal scalability, and high write throughput. NoSQL systems are typically organised by data model — document, key-value, wide-column, or graph — and often relax strong consistency in exchange for availability and partition tolerance. They are designed for large-scale, distributed workloads where the relational model is a poor fit.
