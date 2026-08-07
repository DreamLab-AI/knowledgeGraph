public:: true

# Single-Agent System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a93e14ccb4c8655b5fa801e78c150efc80d5ca0e466fbd9983a484ffa89f067",
  "@type": "Page",
  "vc:slug": "single-agent-system",
  "title": "Single-Agent System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:architecture",
      "vc:label": "Architecture"
    },
    {
      "@id": "urn:visionflow:linked:agent",
      "vc:label": "Agent"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-system",
      "vc:label": "Multi-Agent System"
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
  "@id": "urn:ngm:class:single-agent-system",
  "@type": "Class",
  "label": "Single-Agent System",
  "definition": "An architectural pattern in which one autonomous agent, equipped with its own model, memory, and tool access, carries an entire task from goal to completion within a single reasoning loop — with no delegation, inter-agent messaging, or coordination overhead; simpler to build, debug, and evaluate than multi-agent designs, and often the stronger baseline when a capable model with good tools can hold the whole problem in context.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:architecture",
    "label": "Architecture"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      },
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:llm-agents",
        "label": "LLM Agents"
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
  - "An architectural pattern in which one autonomous agent, equipped with its own model, memory, and tool access, carries an entire task from goal to completion within a single reasoning loop — with no delegation, inter-agent messaging, or coordination overhead; simpler to build, debug, and evaluate than multi-agent designs, and often the stronger baseline when a capable model with good tools can hold the whole problem in context."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SingleAgentSystem
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Architecture]]
  - has-part:: [[Agent]]
  - contrasts-with:: [[Multi-Agent System]], [[Multi-Agent Coordination]]
  - related-to:: [[LLM Agents]]

- ### Content

  ## Definition

  A **single-agent system** solves a task with exactly one autonomous [[Agent]]: one reasoning loop, one context, one set of tools, one locus of decision-making. The agent perceives its environment, plans, acts, and iterates until the goal is met, without delegating subtasks to peers or negotiating with other agents. In classical AI the term distinguishes environments where an agent optimises alone (a planner, a game-playing agent against a fixed environment) from multi-agent settings involving cooperation or competition; in the LLM era it describes the dominant deployment pattern — a single model instance driving a tool-call loop, as in most coding assistants and task agents.

  The contrast with a [[Multi-Agent System]] is architectural, not one of capability. Single-agent designs avoid the costs that [[Multi-Agent Coordination]] introduces: message-passing protocols, shared-state consistency, role assignment, conflicting sub-agent conclusions, and the difficulty of attributing failures across agents. Everything the agent knows sits in one context window, so its behaviour is easier to trace, checkpoint, and evaluate. The corresponding limits are equally clear — context capacity bounds how much evidence one agent can hold, there is no parallelism across subtasks, and a single flawed line of reasoning has no adversarial peer to challenge it.

  Practitioner guidance has converged on treating the single-agent system as the default and escalating only when the task demonstrably benefits from decomposition: very wide research fan-outs, role specialisation with different tool permissions, or workloads exceeding one context window. Many apparent multi-agent gains disappear when the single-agent baseline is given better tools, retrieval, and prompting, which is why rigorous comparisons keep both patterns in scope.

  ## Current Landscape

  - **Dominant in production**: most deployed LLM agents (IDE coding agents, customer-support agents, browsing agents) are single-agent tool loops, because reliability and debuggability outweigh theoretical parallelism.
  - **When multi-agent wins**: breadth-heavy tasks (parallel research, map-reduce over many documents), separation of privilege (a planner without write access delegating to constrained executors), and adversarial review patterns.
  - **When single-agent wins**: depth-heavy tasks with strong sequential dependencies, tight token budgets (multi-agent systems multiply token spend), and settings where coordination errors dominate — studies of multi-agent failures repeatedly trace them to inter-agent misalignment rather than model weakness.
  - **Hybrid drift**: a single agent that spawns ephemeral subagents for isolated subtasks blurs the boundary; the defining property remains a single locus of control and accountability.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
