public:: true

# Checkpointing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ca2117d6a066abea61e41b3683d7cccb5e4731dc8d66945c0a1b976c21347ab",
  "@type": "Page",
  "vc:slug": "checkpointing",
  "title": "Checkpointing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fault-tolerance",
      "vc:label": "Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:linked:state-management",
      "vc:label": "State Management"
    },
    {
      "@id": "urn:visionflow:linked:agent-runtime",
      "vc:label": "Agent Runtime"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:checkpointing",
  "@type": "Class",
  "label": "Checkpointing",
  "definition": "A fault-tolerance technique in which a system periodically captures a consistent snapshot of its execution state — memory, variables, message queues, or conversation context — and persists it to durable storage, so that after a crash, pre-emption, or migration the computation can resume from the most recent checkpoint rather than restarting from the beginning; foundational to long-running distributed workloads, ML training, and agent runtimes.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:fault-tolerance",
    "label": "Fault Tolerance"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:snapshot",
        "label": "Snapshot"
      },
      {
        "@id": "urn:ngm:class:state-management",
        "label": "State Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
      },
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent-runtime",
        "label": "Agent Runtime"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A fault-tolerance technique in which a system periodically captures a consistent snapshot of its execution state — memory, variables, message queues, or conversation context — and persists it to durable storage, so that after a crash, pre-emption, or migration the computation can resume from the most recent checkpoint rather than restarting from the beginning; foundational to long-running distributed workloads, ML training, and agent runtimes."

- ### Semantic Classification
  - owl-class:: distributed-systems:Checkpointing
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Fault Tolerance]]
  - uses:: [[State Management]]
  - enables:: [[Reliability]]
  - related-to:: [[Agent Runtime]]

- ### Content

  ## Definition

  **Checkpointing** is the practice of periodically saving a consistent snapshot of a running computation's state so that execution can be resumed from that point after failure. It converts the cost of a crash from "lose everything" to "lose only the work since the last checkpoint", making it one of the oldest and most widely deployed fault-tolerance mechanisms in computing. Classical results such as the Chandy–Lamport algorithm (1985) established how to take globally consistent snapshots of a distributed system without pausing it, and checkpoint/restart remains the standard recovery strategy in high-performance computing, stream processing, and database systems.

  What gets checkpointed varies by layer: an operating system may capture full process images (CRIU), a training framework captures model weights and optimiser state every N steps, a stream processor such as Apache Flink persists operator state and input offsets, and a database records a durable point from which its write-ahead log can be replayed. The engineering trade-off is always the same — checkpoint frequency balances runtime overhead against the amount of recomputation lost on failure, a relationship formalised in Young's and Daly's optimal-interval formulas.

  In this graph, checkpointing appears chiefly as a capability that agent infrastructure implements: an [[Agent Runtime]] or agent harness checkpoints conversation history, tool-call state, and scratch memory so that long-horizon autonomous tasks survive process restarts, model time-outs, and host migration, while [[Multi-Agent Orchestration Frameworks]] include checkpointing as a first-class component for resuming interrupted workflows.

  ## Technical Details

  - **Coordinated checkpointing** — all processes synchronise to record a globally consistent cut (Chandy–Lamport marker-based snapshots); simple recovery, but requires coordination.
  - **Uncoordinated checkpointing** — processes checkpoint independently; cheap at runtime but risks the *domino effect*, where recovery cascades backwards through inconsistent checkpoints.
  - **Incremental and copy-on-write checkpoints** — only pages or state deltas modified since the last checkpoint are written, cutting I/O cost for large states.
  - **Application-level vs transparent** — frameworks like PyTorch and Flink expose explicit checkpoint APIs, whereas CRIU or VM snapshots capture state without application cooperation.
  - **Agentic systems** — LLM agent harnesses persist the message transcript, tool results, and plan state; because the transcript is the state, checkpointing is comparatively cheap and enables replay, branching, and human-in-the-loop resumption.
  - **Interval tuning** — Daly's approximation `τ ≈ √(2δM)` (checkpoint cost δ, mean time between failures M) gives the near-optimal checkpoint interval for long-running jobs.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
