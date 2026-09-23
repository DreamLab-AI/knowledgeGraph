---
okf_version: "0.2"
type: Class
title: Directed Acyclic Graph
resource: urn:ngm:class:directed-acyclic-graph
domain: distributed-collaboration
description: A directed acyclic graph (DAG) is a graph whose edges have direction and which contains no directed cycles, so no path returns to its starting vertex. This structure naturally encodes ordered dependencies, enabling a topological ordering of vertices and making DAGs foundational for scheduling, dependency resolution, version histories, and certain distributed-ledger designs. The absence of cycles g
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graph-theory
enables:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:workflow-orchestration
dependsOn:
  - urn:ngm:class:graph-theory
implements:
  - urn:ngm:class:workflow-orchestration
  - urn:ngm:class:version-control
contrastsWith:
  - urn:ngm:class:merkle-dag
uses:
  - urn:ngm:class:graph-theory
supports:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:git
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:merkle-dag
---

# Directed Acyclic Graph

A directed acyclic graph (DAG) is a graph whose edges have direction and which contains no directed cycles, so no path returns to its starting vertex. This structure naturally encodes ordered dependencies, enabling a topological ordering of vertices and making DAGs foundational for scheduling, dependency resolution, version histories, and certain distributed-ledger designs. The absence of cycles guarantees that dependency chains terminate, which underpins many algorithms built on top of the structure.
