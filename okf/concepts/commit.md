---
okf_version: "0.2"
type: Class
title: Commit
resource: urn:ngm:class:commit
domain: infrastructure
description: "The atomic unit of change in a version control system: an immutable, uniquely identified snapshot of a project's tracked content together with metadata — author, timestamp, descriptive message, and references to one or more parent commits — so that the full set of commits forms a directed acyclic graph recording the project's history; in Git each commit is content-addressed by a cryptographic hash"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:data-structure
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:directed-acyclic-graph
partOf:
  - urn:ngm:class:version-control
  - urn:ngm:class:git
relatedTo:
  - urn:ngm:class:merkle-tree
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Commit

The atomic unit of change in a version control system: an immutable, uniquely identified snapshot of a project's tracked content together with metadata — author, timestamp, descriptive message, and references to one or more parent commits — so that the full set of commits forms a directed acyclic graph recording the project's history; in Git each commit is content-addressed by a cryptographic hash of its tree and parents, making history tamper-evident and enabling branching, merging, reverting, and precise attribution of every line of a codebase.
