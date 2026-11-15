---
okf_version: "0.2"
type: Class
title: Dependency Graph
resource: urn:ngm:class:dependency-graph
domain: data
description: "A dependency graph is a directed graph in which nodes represent build artefacts, assets or tasks and edges represent a requires-before relationship between them. Traversing the graph in topological order determines a valid build or execution sequence and reveals cycles that would otherwise deadlock a pipeline. Asset and content pipelines rely on dependency graphs to determine what must be rebuilt "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:graph-theory
enables:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:content-pipeline
partOf:
  - urn:ngm:class:graph-theory
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Dependency Graph

A dependency graph is a directed graph in which nodes represent build artefacts, assets or tasks and edges represent a requires-before relationship between them. Traversing the graph in topological order determines a valid build or execution sequence and reveals cycles that would otherwise deadlock a pipeline. Asset and content pipelines rely on dependency graphs to determine what must be rebuilt when a source file changes.
