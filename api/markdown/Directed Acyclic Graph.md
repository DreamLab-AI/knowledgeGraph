public:: true

# Directed Acyclic Graph

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:directed-acyclic-graph",
  "@type": "Page",
  "title": "Directed Acyclic Graph",
  "vc:slug": "directed-acyclic-graph",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:directed-acyclic-graph",
  "@type": "Class",
  "label": "Directed Acyclic Graph",
  "definition": "A directed acyclic graph (DAG) is a graph whose edges have direction and which contains no directed cycles, so no path returns to its starting vertex. This structure naturally encodes ordered dependencies, enabling a topological ordering of vertices and making DAGs foundational for scheduling, dependency resolution, version histories, and certain distributed-ledger designs. The absence of cycles guarantees that dependency chains terminate, which underpins many algorithms built on top of the structure.",
  "domain": "distributed-collaboration",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graph-theory",
      "label": "Graph Theory"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:merkle-dag",
        "label": "Merkle DAG"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:workflow-orchestration",
        "label": "Workflow Orchestration"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:workflow-orchestration",
        "label": "Workflow Orchestration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:merkle-dag",
        "label": "Merkle DAG"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A directed acyclic graph (DAG) is a graph whose edges have direction and which contains no directed cycles, so no path returns to its starting vertex. This structure naturally encodes ordered dependencies, enabling a topological ordering of vertices and making DAGs foundational for scheduling, dependency resolution, version histories, and certain distributed-ledger designs. The absence of cycles guarantees that dependency chains terminate, which underpins many algorithms built on top of the structure.
  - Related concepts: [[Graph Theory]] [[Workflow Orchestration]] [[Version Control]] [[Distributed Ledger]]
- ### Overview
  - A DAG combines directed edges with the acyclicity constraint, so dependencies always point forward and never loop back.
  - Topological sorting produces a linear ordering consistent with all edge directions, which is the basis for scheduling dependent tasks.
  - Build systems, data pipelines, and version-control histories model their dependency relationships as DAGs.
  - Some distributed ledgers replace the linear chain of blocks with a DAG of transactions to allow concurrent appends.
- ### Key aspects
  - Acyclicity guarantees that dependency traversal terminates and a topological order exists.
  - Vertices commonly represent tasks, commits, transactions, or data nodes.
  - Edges encode precedence, parentage, or reference relationships.
  - [[Git]] models commit history as a DAG of parent references.
  - DAG-based ledgers contrast with linear blockchains and with the [[Merkle DAG]] content-addressing structure.
- ### Applications
  - Scheduling dependent jobs in [[Workflow Orchestration]] engines.
  - Representing commit ancestry in distributed [[Version Control]] systems.
  - Modelling data lineage and transformation pipelines.
  - Structuring concurrent transactions in DAG-based distributed-ledger designs.
- ### Relationships
  - subClassOf:: [[Graph Theory]]
  - contrastsWith:: [[Merkle DAG]]
  - dependsOn:: [[Graph Theory]]
  - implements:: [[Workflow Orchestration]]
  - implements:: [[Version Control]]
  - uses:: [[Graph Theory]]
  - enables:: [[Distributed Ledger]]
  - enables:: [[Workflow Orchestration]]
  - relatedTo:: [[Git]]
  - relatedTo:: [[Consensus Mechanism]]
  - relatedTo:: [[Merkle DAG]]
  - supports:: [[Distributed Systems]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
