---
okf_version: "0.2"
type: Class
title: Transaction Manager
resource: urn:ngm:class:transaction-manager
domain: data
description: A transaction manager is a software component that coordinates the atomic execution of operations against a database or distributed system, enforcing the ACID properties of atomicity, consistency, isolation, and durability. It governs commit and rollback, manages concurrency control and locking, and in distributed settings orchestrates multi-resource protocols such as two-phase commit.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:graph-database
  - urn:ngm:class:data-layer
---

# Transaction Manager

A transaction manager is a software component that coordinates the atomic execution of operations against a database or distributed system, enforcing the ACID properties of atomicity, consistency, isolation, and durability. It governs commit and rollback, manages concurrency control and locking, and in distributed settings orchestrates multi-resource protocols such as two-phase commit.
