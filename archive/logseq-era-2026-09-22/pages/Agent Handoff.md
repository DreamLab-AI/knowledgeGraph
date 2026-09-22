public:: true

# Agent Handoff
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ae5df45df053849c4ccaa722042ab468877db67d9a8700930efd459742c5efe",
  "@type": "Page",
  "vc:slug": "agent-handoff",
  "title": "Agent Handoff",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:multi-agent-orchestration", "vc:label": "MultiAgentOrchestration" },
    { "@id": "urn:visionflow:linked:task-delegation", "vc:label": "TaskDelegation" },
    { "@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "MultiAgentSystem" },
    { "@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "AgenticWorkflow" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-07T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-handoff",
  "@type": "Class",
  "label": "Agent Handoff",
  "definition": "The orchestration primitive by which one agent transfers control of a conversation or task to another agent, passing along the accumulated context, goal, and constraints so the receiving agent can continue the work with its own specialised tools and instructions. A handoff reassigns responsibility rather than merely requesting a result: control does not automatically return to the sender, and the receiver becomes the active locus of decision-making, which is what distinguishes handoff-based routing from a simple tool call or a blocking sub-task.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": { "@id": "urn:ngm:class:multi-agent-orchestration", "label": "Multi-Agent Orchestration" },
  "relations": {
    "requires": [
      { "@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:task-delegation", "label": "Task Delegation" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:llm-orchestration", "label": "LLM Orchestration" }
    ]
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
  - "The orchestration primitive by which one agent transfers control of a conversation or task to another agent, passing along the accumulated context, goal, and constraints so the receiving agent can continue the work with its own specialised tools and instructions. A handoff reassigns responsibility rather than merely requesting a result: control does not automatically return to the sender, and the receiver becomes the active locus of decision-making, which is what distinguishes handoff-based routing from a simple tool call or a blocking sub-task."

- ### In Plain Terms
  - An agent handoff is when one AI agent passes the whole job — along with everything it has learned so far — over to a better-suited agent, which then takes the wheel.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentHandoff
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[MultiAgentOrchestration]]
  - requires:: [[MultiAgentSystem]]
  - uses:: [[TaskDelegation]]
  - enables:: [[AgenticWorkflow]]
  - related-to:: [[LLMOrchestration]]

- ### Content

  ## Definition

  An **agent handoff** is the act of transferring an in-flight task from the agent currently working on it to a different agent judged better suited to continue. It is a first-class control-flow construct in multi-agent frameworks: rather than the coordinator collecting a return value from a helper and resuming, a handoff moves the point of control itself. The receiving agent inherits the goal and the relevant context, then proceeds under its own system prompt, tool set, and policies. This makes handoff the mechanism behind triage-and-route architectures, where a generalist front-line agent classifies a request and passes it to a specialist.

  Handoff is distinct from the neighbouring patterns it is often confused with. A tool call returns a value and control stays with the caller. A blocking sub-task, a form of [[TaskDelegation]], farms out work but expects a result back. A handoff, by contrast, is a transfer of ownership: the sender steps back, and unless an explicit hand-back is arranged, the conversation now belongs to the receiver. This distinction matters for reasoning about responsibility, context lifetime, and where the next user turn will be routed.

  ## Context Transfer

  The quality of a handoff is determined by what crosses the boundary. Too little context and the receiving agent must re-derive facts the sender already knew, wasting turns and risking inconsistency; too much and the receiver is swamped with irrelevant history that dilutes its instructions and inflates cost. Well-designed handoffs therefore pass a curated payload: the original goal, a summary of progress, the constraints and decisions made so far, and any artefacts the next step needs. Some frameworks pass the full transcript; more disciplined ones pass a compressed briefing produced specifically for the handoff.

  ## Role in Orchestration

  Because it requires more than one agent, a handoff presupposes a [[MultiAgentSystem]] and is a specialisation of [[MultiAgentOrchestration]]. Chained together, handoffs compose the branching, specialist-routing structure of an [[AgenticWorkflow]], and they sit alongside supervisor-worker and shared-scratchpad patterns in the broader space of [[LLMOrchestration]]. Robust handoff design also guards against failure modes unique to the pattern: routing loops where two agents bounce a task back and forth, orphaned tasks where no agent accepts ownership, and context loss at each hop. Guardrails such as hop limits, explicit acceptance, and a default fall-through owner keep handoff chains terminating and accountable.
