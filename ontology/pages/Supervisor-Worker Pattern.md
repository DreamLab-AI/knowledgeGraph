public:: true

# Supervisor-Worker Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:320ac29095bce71c45b447e3520a55f0ddadbe9ae44464b6bc818e8767d6d8fa",
  "@type": "Page",
  "vc:slug": "supervisor-worker-pattern",
  "title": "Supervisor-Worker Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:ai-agent-coordination", "vc:label": "AIAgentCoordination" },
    { "@id": "urn:visionflow:linked:task-delegation", "vc:label": "TaskDelegation" },
    { "@id": "urn:visionflow:linked:orchestration", "vc:label": "Orchestration" },
    { "@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "MultiAgentSystem" },
    { "@id": "urn:visionflow:linked:subagent", "vc:label": "Subagent" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-07T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:supervisor-worker-pattern",
  "@type": "Class",
  "label": "Supervisor-Worker Pattern",
  "definition": "The supervisor-worker pattern is a multi-agent coordination architecture in which a single supervisor agent decomposes a goal, delegates the resulting subtasks to a set of worker agents, and integrates their returned results into a coherent whole, without the workers communicating directly with one another. The supervisor owns planning, routing, verification, and error handling; the workers own execution of their assigned subtask. Centralising control this way makes the system's behaviour easy to reason about and to recover, at the cost of the supervisor becoming a throughput bottleneck and single point of failure.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": { "@id": "urn:ngm:class:ai-agent-coordination", "label": "AI Agent Coordination" },
  "relations": {
    "uses": [ { "@id": "urn:ngm:class:task-delegation", "label": "Task Delegation" } ],
    "requires": [ { "@id": "urn:ngm:class:orchestration", "label": "Orchestration" } ],
    "partOf": [ { "@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System" } ],
    "relatedTo": [ { "@id": "urn:ngm:class:subagent", "label": "Subagent" } ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "The supervisor-worker pattern is a multi-agent coordination architecture in which a single supervisor agent decomposes a goal, delegates the resulting subtasks to a set of worker agents, and integrates their returned results into a coherent whole, without the workers communicating directly with one another. The supervisor owns planning, routing, verification, and error handling; the workers own execution of their assigned subtask. Centralising control this way makes the system's behaviour easy to reason about and to recover, at the cost of the supervisor becoming a throughput bottleneck and single point of failure."

- ### In Plain Terms
  - One lead agent breaks the job into pieces, hands each piece to a worker agent, checks their answers, and stitches everything together — the workers never talk to each other, they only report to the boss.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SupervisorWorkerPattern
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[AIAgentCoordination]]
  - uses:: [[TaskDelegation]]
  - requires:: [[Orchestration]]
  - part-of:: [[MultiAgentSystem]]
  - related-to:: [[Subagent]]

- ### Content

  ## Definition

  The **Supervisor-Worker Pattern** (also called orchestrator-worker or hub-and-spoke) is one of the canonical ways to structure a multi-agent system. A single supervisor agent sits at the centre and holds responsibility for the overall objective: it plans, splits the objective into subtasks, decides which worker should handle each, evaluates what comes back, and assembles the final result. The workers are peripheral and independent — each receives a self-contained assignment, executes it, and returns a result to the supervisor. Workers do not coordinate with one another directly; all coordination flows through the hub.

  This centralisation is the pattern's defining trade-off. Because one agent holds the plan and sees every result, the system's behaviour is comparatively easy to understand, to debug, and to recover: if a worker fails, the supervisor can retry it, reassign it, or roll back and re-plan. The price is that the supervisor is both a throughput bottleneck — everything is serialised through its integration step — and a single point of failure, since its loss orphans the whole task.

  ## How It Works

  1. **Decompose.** The supervisor turns a goal into a set of subtasks, drawing on planning and [[TaskDelegation]].
  2. **Dispatch.** Each subtask is routed to a worker — often a [[Subagent]] running in its own isolated context, sometimes chosen by role or by model tier.
  3. **Execute.** Workers run independently and in parallel where the subtasks are not interdependent.
  4. **Integrate and verify.** The supervisor collects results, checks them, resolves conflicts, and either finishes or issues follow-up subtasks.

  ## When to Use It

  The pattern fits problems that decompose cleanly into loosely coupled pieces with a clear integration step — research fan-outs, parallel code changes across modules, multi-source synthesis. It is the natural home for the [[Subagent]] mechanism and depends on a competent [[Orchestration]] layer to manage dispatch and result handling. It contrasts with decentralised, peer-to-peer coordination where agents negotiate directly: those scale past the supervisor bottleneck but sacrifice the central legibility and straightforward recovery that make the supervisor-worker pattern the default starting point for most [[MultiAgentSystem]] designs.
