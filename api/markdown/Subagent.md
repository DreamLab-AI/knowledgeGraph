public:: true

# Subagent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94a168d2da574b00ec6c787377278465271cf2b97e68af076fc3eee87eba8664",
  "@type": "Page",
  "vc:slug": "subagent",
  "title": "Subagent",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:ai-agent", "vc:label": "AIAgent" },
    { "@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "MultiAgentSystem" },
    { "@id": "urn:visionflow:linked:task-delegation", "vc:label": "TaskDelegation" },
    { "@id": "urn:visionflow:linked:agent-loop", "vc:label": "AgentLoop" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-07T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:subagent",
  "@type": "Class",
  "label": "Subagent",
  "definition": "A subagent is a subordinate autonomous agent spawned by a parent or orchestrating agent to carry out a delegated subtask within its own isolated context window, returning only a distilled result to the parent. By running in a fresh context, a subagent keeps the noise of its intermediate exploration — long file reads, search output, failed attempts — out of the parent's limited context, while allowing many subtasks to proceed in parallel. Subagents may be specialised by role, tools, or model tier, and are the unit of work distribution in hierarchical multi-agent architectures.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": { "@id": "urn:ngm:class:ai-agent", "label": "AI Agent" },
  "relations": {
    "partOf": [ { "@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System" } ],
    "relatedTo": [ { "@id": "urn:ngm:class:task-delegation", "label": "Task Delegation" } ],
    "enables": [ { "@id": "urn:ngm:class:task-decomposition", "label": "Task Decomposition" } ],
    "uses": [ { "@id": "urn:ngm:class:agent-loop", "label": "Agent Loop" } ]
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
  - "A subagent is a subordinate autonomous agent spawned by a parent or orchestrating agent to carry out a delegated subtask within its own isolated context window, returning only a distilled result to the parent. By running in a fresh context, a subagent keeps the noise of its intermediate exploration — long file reads, search output, failed attempts — out of the parent's limited context, while allowing many subtasks to proceed in parallel. Subagents may be specialised by role, tools, or model tier, and are the unit of work distribution in hierarchical multi-agent architectures."

- ### In Plain Terms
  - A subagent is a helper agent that a main agent hands a specific job to; it works in its own separate context and reports back just the answer, so the main agent stays uncluttered and several helpers can run at once.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Subagent
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[AIAgent]]
  - part-of:: [[MultiAgentSystem]]
  - related-to:: [[TaskDelegation]]
  - enables:: [[TaskDecomposition]]
  - uses:: [[AgentLoop]]

- ### Content

  ## Definition

  A **Subagent** is an agent instantiated by another agent to handle a bounded portion of a larger task. The parent — often a supervisor or orchestrator — decomposes an objective, hands each piece to a subagent, and integrates the results the subagents return. Crucially, each subagent runs its own [[AgentLoop]] in its own context window: it can read files, run searches, and iterate freely, and none of that intermediate churn is visible to the parent, which receives only a compact final answer.

  This context isolation is the primary reason subagents exist. A single agent's context window is a scarce resource; filling it with the raw output of exploratory work quickly degrades performance. Delegating that exploration to a subagent means the expensive, noisy part happens elsewhere and the parent's context is spent only on the distilled conclusion. As a bonus, because subagents are independent, many can be launched at once, turning a serial investigation into a parallel fan-out.

  ## Characteristics

  - **Isolated context.** The defining property: a subagent starts fresh and returns a summary, protecting the parent's context budget.
  - **Specialisation.** Subagents are frequently role-typed (researcher, reviewer, coder) with tailored instructions, restricted tools, or a specific [[Model Tier]], so each is fit for its job and no more capable than it needs to be.
  - **Bounded authority.** A subagent typically cannot itself approve permissions or alter the parent's configuration; it does the work it was given and reports back, which keeps trust boundaries clear.
  - **Ephemerality.** Subagents are usually short-lived, existing for the duration of one delegated task and then terminating.

  ## Role in Multi-Agent Systems

  Subagents are the workers in a hierarchical [[MultiAgentSystem]]. They are the concrete mechanism by which [[TaskDelegation]] and [[TaskDecomposition]] are realised: an orchestrator breaks a problem down and each fragment becomes a subagent invocation. The pattern scales from a single parent spawning a handful of helpers to deep trees where subagents spawn their own subagents, though most practical systems keep the hierarchy shallow to bound cost and keep results easy to integrate.
