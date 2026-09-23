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
---

# Dependency Graph

A dependency graph is a directed graph in which nodes represent build artefacts, assets or tasks and edges represent a requires-before relationship between them. Traversing the graph in topological order determines a valid build or execution sequence and reveals cycles that would otherwise deadlock a pipeline. Asset and content pipelines rely on dependency graphs to determine what must be rebuilt when a source file changes.
