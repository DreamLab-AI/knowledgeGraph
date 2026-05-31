public:: true

# Directed Acyclic Graph Execution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:directed-acyclic-graph-execution",
  "@type": "Page",
  "vc:slug": "directed-acyclic-graph-execution",
  "title": "Directed Acyclic Graph Execution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:directed-acyclic-graph-execution",
  "@type": "Class",
  "label": "Directed Acyclic Graph Execution",
  "definition": "Directed acyclic graph (DAG) execution is a computation model in which tasks are nodes connected by directed dependency edges that contain no cycles, so the graph defines a partial order of operations. An execution engine performs a topological sort and runs nodes as soon as their inputs are ready, enabling parallelism, caching of unchanged subgraphs, and deterministic recomputation. It is the scheduling backbone of workflow engines and node-based authoring tools.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:comfy-ui-workflows", "label": "ComfyUI Workflows"},
      {"@id": "urn:ngm:class:comfy-ui-client", "label": "ComfyUI Client"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - DAG execution schedules dependent tasks expressed as an acyclic graph, running each node once its inputs are available. It is the mechanism that [[ComfyUI Workflows]] and the [[ComfyUI Client]] implement to evaluate node-based pipelines.
- ### Content
  - The engine topologically sorts nodes, executes independent branches in parallel, and can cache node outputs so only changed subgraphs re-run. This model underpins build systems, data pipelines (Airflow, Dagster), and generative-AI node editors, trading the expressiveness of arbitrary control flow for predictability and parallelism.
