---
okf_version: "0.2"
type: Class
title: Acid Transactions
resource: urn:ngm:class:acid-transactions
domain: data
description: "ACID transactions are units of database work that uphold four guarantees: atomicity, consistency, isolation and durability. Atomicity ensures a transaction either fully completes or has no effect; consistency keeps the database in a valid state; isolation prevents concurrent transactions from interfering; and durability guarantees committed changes survive failures. Together these properties allow"
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:database-management-system
hasPart:
  - urn:ngm:class:two-phase-commit
requires:
  - urn:ngm:class:database
enables:
  - urn:ngm:class:relational-database
dependsOn:
  - urn:ngm:class:database-management-system
  - urn:ngm:class:write-ahead-logging
implements:
  - urn:ngm:class:data-integrity
uses:
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:write-ahead-logging
supports:
  - urn:ngm:class:sql
relatedTo:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:data
---

# Acid Transactions

ACID transactions are units of database work that uphold four guarantees: atomicity, consistency, isolation and durability. Atomicity ensures a transaction either fully completes or has no effect; consistency keeps the database in a valid state; isolation prevents concurrent transactions from interfering; and durability guarantees committed changes survive failures. Together these properties allow reliable, predictable updates to shared data and form the bedrock of relational database systems.
