---
okf_version: "0.2"
type: Class
title: Directed Acyclic Graph Execution
resource: urn:ngm:class:directed-acyclic-graph-execution
domain: infrastructure
description: Directed acyclic graph (DAG) execution is a computation model in which tasks are nodes connected by directed dependency edges that contain no cycles, so the graph defines a partial order of operations. An execution engine performs a topological sort and runs nodes as soon as their inputs are ready, enabling parallelism, caching of unchanged subgraphs, and deterministic recomputation. It is the sch
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:node-based-diffusion-pipeline-interface-client
---

# Directed Acyclic Graph Execution

Directed acyclic graph (DAG) execution is a computation model in which tasks are nodes connected by directed dependency edges that contain no cycles, so the graph defines a partial order of operations. An execution engine performs a topological sort and runs nodes as soon as their inputs are ready, enabling parallelism, caching of unchanged subgraphs, and deterministic recomputation. It is the scheduling backbone of workflow engines and node-based authoring tools.
